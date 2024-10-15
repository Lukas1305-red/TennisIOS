//
//  PlayerOverview.swift
//  TennisApp
//
//  Created by Lukas Jochim on 10.10.24.
//

import SwiftUI

struct PlayerOverview: View {
    @Environment(RankingModel.self) private var model: RankingModel
    @State var filterFavoritePlayer: Bool = false
    var body: some View {
        NavigationStack {
            RankingView(filterFavoritePlayer: $filterFavoritePlayer)
                .navigationTitle("Ranking")
                .toolbar {
                    ToolbarItem(placement: .primaryAction) {
                        Button(action: {
                            if !model.ranking.players.isEmpty {
                                filterFavoritePlayer.toggle()
                            }
                        }) {
                            Image(systemName: filterFavoritePlayer ? "star.fill" : "star")
                                .foregroundColor(.orange)
                                .imageScale(.large)
                        }
                    }
                }
        }
        .background(Color(UIColor.systemGroupedBackground))
    }
}

#Preview {
    PlayerOverview().environment(RankingModel())
}
