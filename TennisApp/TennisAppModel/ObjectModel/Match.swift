//
//  Match.swift
//  TennisApp
//
//  Created by Lukas Jochim on 14.10.24.
//

import Foundation

struct Match {
    var win: Bool
    var opponent: String
    var score: String
    var id: UUID? = UUID()
    
    init (win: Bool, opponent: String, score: String) {
        self.win = win
        self.opponent = opponent
        self.score = score
    }
}
