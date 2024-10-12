//
//  RankingView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 09.10.24.
//

import SwiftUI

struct RankingView: View {
    @Environment(Model.self) private var model: Model
    private var players: [Player] {
        model.ranking.players
    }
    var body: some View {
        List {
            if players.isEmpty {
                Text("You have to start your server")
            } else {
                ForEach(players, id: \.id) { player in
                    NavigationLink {
                        PlayerDetailView(id: player.id)
                    } label: {
                        PlayerCellView(id: player.id)
                    }
                }
            }
        }
    }
}

#Preview {
    RankingView()
        .environment(Model())
}
