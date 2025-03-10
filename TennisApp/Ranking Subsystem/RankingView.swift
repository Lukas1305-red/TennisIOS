//
//  RankingView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 09.10.24.
//

import SwiftUI

struct RankingView: View {
    @Environment(RankingModel.self) private var model: RankingModel
    @Binding var filterFavoritePlayer: Bool
    private var players: [Player] {
        model.ranking.players
    }
    private var favoritePlayers: [Player] {
        model.favoritePlayers
    }
    var body: some View {
                if players.isEmpty {
                    HStack {
                        Text("Try again")
                            .font(Font.system(size: 40))
                        if !model.isFetching {
                            ReloadButton()
                        }
                    }
                } else {
                    List {
                        let listToShow = filterFavoritePlayer ? favoritePlayers.sorted(by: {
                            $0.rankingPosition < $1.rankingPosition }) : players
                        if  listToShow.isEmpty {
                            Text("You have not saved any favorite players yet")
                                .foregroundColor(.primary)
                        }
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

#Preview {
    RankingView(filterFavoritePlayer: .constant(false))
        .environment(RankingModel())
}
