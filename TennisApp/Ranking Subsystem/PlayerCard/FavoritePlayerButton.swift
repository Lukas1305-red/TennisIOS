//
//  FavoritePlayerButton.swift
//  TennisApp
//
//  Created by Lukas Jochim on 12.10.24.
//

import SwiftUI

struct FavoritePlayerButton: View {
    @Environment(RankingModel.self) private var model: RankingModel
    var id: Int
    var body: some View {
        Button(action: {
            model.toggleFavoritePlayer(playerID: id)
        }) {
            Image(systemName: model.playerIsFavorite(playerID: id) ? "star.fill" : "star")
                .foregroundColor(.orange)
                .imageScale(.large)
        }
    }
}

#Preview {
    let model = RankingModel()
    FavoritePlayerButton(id: 720)
        .environment(model)
}
