//
//  EditMatchViewModel.swift
//  TennisApp
//
//  Created by Lukas Jochim on 14.10.24.
//

import Foundation


@Observable class EditMatchViewModel {
    var win: Bool = false
    var opponent: String = ""
    var score: String = ""
    var firstSetOwnGames: Int = 0
    var firstSetOtherGames: Int = 0
    var secondSetOwnGames: Int = 0
    var secondSetOtherGames: Int = 0
    
    private weak var matchModel: MatchModel?
    var id: UUID?
    init(_ model: MatchModel, id: UUID?) {
        self.matchModel = model
        self.id = id
    }
    init(_ model: MatchModel, id: UUID?, match: Match) {
        self.matchModel = model
        self.win = match.win
        self.opponent = match.opponent
        self.score = match.score
        self.id = id
        (self.firstSetOwnGames, self.firstSetOtherGames) = getScoreFromSet(score: self.score, setOne: true)
        (self.secondSetOwnGames, self.secondSetOtherGames) = getScoreFromSet(score: self.score, setOne: false)
    }
    func save() async {
        let win = win
        let opponent = opponent
        let score = String(firstSetOwnGames) + ":" + String(firstSetOtherGames)
                    + "/" + String(secondSetOwnGames) + ":" + String(secondSetOtherGames)
        if let currentID = id {
            let match = Match(win: win, opponent: opponent, score: score, id: currentID)
            matchModel?.matches.removeAll(where: { $0.id == currentID })
            matchModel?.matches.append(match)
            matchModel?.matches.sort {
                $0.id?.uuidString ?? "0" < $1.id?.uuidString ?? "0"
            }
            //print("Updated match \(match.id)")
        } else {
            // new match has to be appended to the list
            let match = Match(win: win, opponent: opponent, score: score, id: UUID())
            matchModel?.matches.append(match)
            //print("Added match \(match.id) with opponent \(opponent)")
        }
    }
    func update(id: UUID) {
        if let matchIndex = matchModel?.matches.firstIndex(where: { $0.id == id }) {
            matchModel?.matches[matchIndex].win = win
            matchModel?.matches[matchIndex].opponent = opponent
            matchModel?.matches[matchIndex].score = String(firstSetOwnGames) + " : " + String(firstSetOtherGames)
            + " / " + String(secondSetOwnGames) + " : " + String(secondSetOtherGames)
        } else {
            let newMatch = Match(win: win, opponent: opponent, score: score)
            matchModel?.matches.append(newMatch)
        }
    }
    
    func getScoreFromSet(score: String, setOne: Bool) -> (Int, Int) {
        let firstSet = score.split(separator: "/")[setOne ? 0 : 1]
        if let firstSetOwn = Int(firstSet.split(separator: " : ")[0]),
           let firstSetOther = Int(firstSet.split(separator: " : ")[1]) {
            return (firstSetOwn, firstSetOther)
        } else {
            return (0, 0)
        }
    }
}
