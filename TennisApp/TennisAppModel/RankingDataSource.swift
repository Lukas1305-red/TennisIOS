//
//  RankingDataSource.swift
//  TennisApp
//
//  Created by Lukas Jochim on 10.10.24.
//

import Foundation

public struct RankingDataSource {
    private let endpointURLString = "http://127.0.0.1:8080/ranking"
    public init() {}
    public func fetchRanking() async throws -> [Player] {
        do {
            guard let endpointURL = URL(string: endpointURLString) else {
                return []
            }
            var request = URLRequest(url: endpointURL)
            request.httpMethod = "GET"
            let (data, _) = try await URLSession.shared.data(for: request)
            // print(data)
            let players = try JSONDecoder().decode([Player].self, from: data)
            return players
        } catch {
            print("\(error)")
            return []
        }
    }
}
