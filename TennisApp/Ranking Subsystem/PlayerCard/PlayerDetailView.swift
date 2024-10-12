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
            VStack(alignment: .leading) {
                HStack(alignment: .center) {
                    image
                        .border(.black)
                    FavoritePlayerButton(id: id)
                }
                VStack(alignment: .leading) {
                    Text(player.name)
                        .font(Font.system(size: 40, weight: .bold))
                    Text(player.nationality)
                        .font(Font.system(size: 30, weight: .bold))
                        .foregroundColor(.gray)
                }
                .padding()
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
