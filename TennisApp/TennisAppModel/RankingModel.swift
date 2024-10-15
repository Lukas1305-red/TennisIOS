//
//  Model.swift
//  TennisApp
//
//  Created by Lukas Jochim on 10.10.24.
//

import Foundation
import SwiftUI

@Observable public class RankingModel {
    public var ranking: Ranking
    public init(ranking: Ranking = Ranking()) {
        self.ranking = ranking
        Task {
            _ = try? await fetchRankingPlayers()
        }
    }
    private func fetchRankingPlayers() async throws {
        ranking.players.append(contentsOf: try await RankingDataSource().fetchRanking())
    }
    public func getPlayerByID(playerID: Int) -> Player? {
        ranking.players.first(where: { $0.id == playerID })
    }
}
