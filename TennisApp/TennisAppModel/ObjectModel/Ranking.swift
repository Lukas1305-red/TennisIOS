//
//  Ranking.swift
//  TennisApp
//
//  Created by Lukas Jochim on 09.10.24.
//

import Foundation

public struct Ranking {
    /// the current year of the ranking
    var year: Int
    /// the list of players in the ranking
    var players: [Player]
    public init() {
        self.year = Calendar.current.component(.year, from: Date())
        players = []
    }
}
