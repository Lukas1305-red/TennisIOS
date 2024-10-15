//
//  ReloadButton.swift
//  TennisApp
//
//  Created by Lukas Jochim on 15.10.24.
//

import SwiftUI

struct ReloadButton: View {
    @Environment(RankingModel.self) var rankingModel: RankingModel
    var body: some View {
        Button(action: {
            Task {
                try await rankingModel.fetchRankingPlayers()
            }
        }) {
            Image(systemName: "arrow.trianglehead.clockwise.rotate.90").font(Font.system(size: 50, weight: .bold))
        }
    }
}

#Preview {
    ReloadButton()
        .environment(RankingModel())
}
