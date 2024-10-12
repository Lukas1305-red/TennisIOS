//
//  Player.swift
//  TennisApp
//
//  Created by Lukas Jochim on 09.10.24.
//

import Foundation
import SwiftUI

public struct Player {
    public let name: String
    public let nationality: String
    public var rankingPoints: UInt32
    public var previousPoints: UInt32
    public var rankingPosition: UInt32
    public var previousPosition: UInt32
    public var starred: Bool
    public var id: Int
    public var tournamentsPlayed: UInt32
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
                nationality: String,
                nameCode: String,
                rankingPoints: UInt32,
                rankingPosition: UInt32,
                id: Int,
                previousRanking: UInt32,
                tournamentsPlayed: UInt32,
                previousPoints: UInt32) {
        self.name = name
        self.nationality = nationality
        self.rankingPoints = rankingPoints
        self.rankingPosition = rankingPosition
        self.starred = false
        self.id = id
        self.previousPosition = previousRanking
        self.tournamentsPlayed = tournamentsPlayed
        self.previousPoints = previousPoints
    }
    
    public func hasImprovedRanking () -> (String, Color) {
        if previousPosition > rankingPosition {
            return ("chevron.up.2", .green)
        } else if previousPosition == rankingPosition {
            return ("chevron.right.2", .blue)
        }
        return ("chevron.down.2", .red)
    }
    
    public func hasImprovedPoints () -> (String, Color) {
        if previousPoints < rankingPoints {
            return ("chevron.up.2", .green)
        } else if previousPoints == rankingPoints {
            return ("chevron.right.2", .blue)
        }
        return ("chevron.down.2", .red)
    }
}

extension Player: Hashable { }

extension Player: Codable {
    enum CodingKeys: String, CodingKey {
        case name = "rowName"
        case nationality
        case rankingPoints = "points"
        case rankingPosition = "ranking"
        case starred
        case id
        case previousPosition = "previousRanking"
        case tournamentsPlayed = "tournamentsPlayed"
        case previousPoints = "previousPoints"
    }
}
