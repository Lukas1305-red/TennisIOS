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
        self.win = match.win
        self.opponent = match.opponent
        self.score = match.score
        (self.firstSetOwnGames, self.firstSetOtherGames) = getScoreFromSet(score: self.score, setOne: true)
        (self.secondSetOwnGames, self.secondSetOtherGames) = getScoreFromSet(score: self.score, setOne: false)
    }
    func save() async {
        let win = win
        let opponent = opponent
        let score = String(firstSetOwnGames) + " : " + String(firstSetOtherGames)
                    + " / " + String(secondSetOwnGames) + " : " + String(secondSetOtherGames)
        let match = Match(win: win, opponent: opponent, score: score)
        matchModel?.matches.append(match)
        print("Added match \(match.id)")
    }
    func update(id: UUID) async {
        var match = matchModel?.matches.first(where: { $0.id == id })
        if var match {
            match.win = win
            match.opponent = opponent
            match.score = String(firstSetOwnGames) + " : " + String(firstSetOtherGames)
            + " / " + String(secondSetOwnGames) + " : " + String(secondSetOtherGames)
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
