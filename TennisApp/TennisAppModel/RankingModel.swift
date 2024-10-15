//
//  Model.swift
//  TennisApp
//
//  Created by Lukas Jochim on 10.10.24.
//

import Foundation
import SwiftUI
import os

@Observable public class RankingModel {
    public var ranking: Ranking
    public var favoritePlayers: [Player]
    public init(ranking: Ranking = Ranking(), favoritePlayers: [Player] = []) {
        self.ranking = ranking
        self.favoritePlayers = favoritePlayers
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
    
    public func playerIsFavorite(playerID: Int) -> Bool {
        if let player = getPlayerByID(playerID: playerID) {
            return favoritePlayers.contains(player)
        } else {
            return false
        }
    }
    
    public func toggleFavoritePlayer(playerID: Int) {
        if let player = getPlayerByID(playerID: playerID) {
            if playerIsFavorite(playerID: playerID) {
                favoritePlayers.removeAll(where: { $0.id == playerID })
                Logger().log("Removed Player \(player.name) from Favorite Players")
            } else {
                favoritePlayers.append(player)
                Logger().log("Added Player \(player.name) from Favorite Players")
            }
        }
    }
    
    public func fetchImage(playerID: Int) -> Image {
        let idString = String(playerID)
        if UIImage(named: idString) != nil {
            return Image(idString)
        } else {
            return Image("dummy")
        }
    }
}
