//
//  RankingDataSource.swift
//  TennisApp
//
//  Created by Lukas Jochim on 10.10.24.
//

import Foundation
import SwiftyJSON
import os

public struct RankingDataSource {
    private let endpointURLString = "http://127.0.0.1:8080/rankings"
    public init() {}
    public func fetchRanking() async throws -> [Player] {
        do {
            guard let endpointURL = URL(string: endpointURLString) else {
                return []
            }
            var request = URLRequest(url: endpointURL)
            request.httpMethod = "GET"
            Logger().info("Start fetching ranking")
            let (json, _) = try await URLSession.shared.data(for: request)
            // print(data)
            var players: [Player] = []
            // let players = try JSONDecoder().decode([Player].self, from: data)
            if let json = try? JSON(data: json) {
                for player in json["rankings"].arrayValue {
                    // init Player
                    let name = player["rowName"].stringValue
                    let rankingPosition = player["ranking"].uInt32Value
                    let rankingPoints = player["points"].uInt32Value
                    let previousPoints = player["previousPoints"].uInt32Value
                    let previousRanking = player["previousRanking"].uInt32Value
                    let id = player["id"].intValue
                    let nationalityArray = player["country"]
                    let nationality = nationalityArray["name"].stringValue
                    let team = player["team"]
                    let nameCode = team["nameCode"].stringValue
                    let tournamentsPlayed = player["tournamentsPlayed"].uInt32Value
                    players.append(Player(name: name,
                                          nationality: nationality,
                                          nameCode: nameCode,
                                          rankingPoints: rankingPoints,
                                          rankingPosition: rankingPosition,
                                          id: id,
                                          previousRanking: previousRanking,
                                          tournamentsPlayed: tournamentsPlayed,
                                          previousPoints: previousPoints))
                }
            }
            return players
        } catch {
            Logger().error("Something went wrong: \(error)")
            return []
        }
    }
}
