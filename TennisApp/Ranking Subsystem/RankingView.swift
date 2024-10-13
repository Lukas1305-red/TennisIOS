//
//  RankingView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 09.10.24.
//

import SwiftUI

struct RankingView: View {
    @Environment(RankingModel.self) private var model: RankingModel
    @State private var filterFavoritePlayer: Bool = false
    private var players: [Player] {
        model.ranking.players
    }
    private var favoritePlayers: [Player] {
        model.favoritePlayers
    }
    var body: some View {
        VStack {
            Button(action: {
                filterFavoritePlayer.toggle()
            }) {
                Image(systemName: filterFavoritePlayer ? "star.fill" : "star")
                    .foregroundColor(.orange)
                    .imageScale(.large)
            }
            List {
                if players.isEmpty {
                    Text("You have to start your server")
                } else {
                    let listToShow = filterFavoritePlayer ? favoritePlayers.sorted(by: {
                        $0.rankingPosition < $1.rankingPosition }) : players
                    ForEach(listToShow, id: \.id) { player in
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
}

#Preview {
    RankingView()
        .environment(RankingModel())
}
