//
//  PlayerOverview.swift
//  TennisApp
//
//  Created by Lukas Jochim on 10.10.24.
//

import SwiftUI

struct PlayerOverview: View {
    @Environment(RankingModel.self) private var model: RankingModel
    var body: some View {
        NavigationStack {
            RankingView()
                .navigationTitle("Ranking")
        }
    }
}

#Preview {
    PlayerOverview().environment(RankingModel())
}
