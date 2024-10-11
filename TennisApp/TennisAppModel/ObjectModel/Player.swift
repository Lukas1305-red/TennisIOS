//
//  Player.swift
//  TennisApp
//
//  Created by Lukas Jochim on 09.10.24.
//

import Foundation

public struct Player {
    public let name: String
    public let nationality: [String]?
    public let notTeam: [String]?
    public var rankingPoints: UInt32
    public var rankingPosition: UInt32
    public var starred: Bool?
    public var id: Int
    // let wonTournaments: Int
    /// - Parameters:
    ///     - firstName:  the player's first name
    ///     - lastName: the player's last name
    ///     - nationality: the player's nationality
    ///     - nameCode: the abbreviation of the player's last name (usually 3 letters)
    ///     - rankingPoints: the points the player has gathered during the ongoing season
    ///     - rankingPosition: player's current position on the ranking list
    ///     - age: the player's age

    public init(name: String,
                nationality: [String],
                notTeam: [String],
                nameCode: String,
                rankingPoints: UInt32,
                rankingPosition: UInt32,
                id: Int) {
        self.name = name
        self.nationality = nationality
        self.notTeam = notTeam
        self.rankingPoints = rankingPoints
        self.rankingPosition = rankingPosition
        self.starred = false
        self.id = id
    }
}

extension Player: Hashable { }

extension Player: Codable {
    enum CodingKeys: String, CodingKey {
        case name = "rowName"
        case nationality
        case notTeam
        case rankingPoints = "points"
        case rankingPosition = "ranking"
        case starred
        case id
    }
}
