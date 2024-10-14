//
//  MatchModel.swift
//  TennisApp
//
//  Created by Lukas Jochim on 14.10.24.
//

import Foundation

@Observable class MatchModel {
    var matches: [Match]
    init(matches: [Match] = []) {
        self.matches = matches
    }
}
