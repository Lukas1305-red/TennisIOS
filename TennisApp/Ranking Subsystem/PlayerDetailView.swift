//
//  PlayerDetailView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 10.10.24.
//

import SwiftUI

struct PlayerDetailView: View {
    @Environment(Model.self) private var model: Model
    var id: Int
    var image: Image {
        model.fetchImage(playerID: id)
    }
    var body: some View {
        model.getPlayerByID(playerID: id).map { player in
            VStack {
                HStack {
                    image
                    FavoritePlayerButton(id: player.id)
                }
                VStack {
                    Text(player.name)
                    Text(player.nationality)
                }
                PlayerInfoView(id: player.id)
                Spacer()
            }
        }
    }
}

#Preview {
    let model = Model()
    PlayerDetailView(id: 720)
        .environment(model)
}
