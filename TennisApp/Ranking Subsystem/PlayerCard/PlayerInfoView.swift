//
//  PlayerInfoView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 12.10.24.
//

import SwiftUI

struct PlayerInfoView: View {
    @Environment(Model.self) private var model: Model
    var id: Int
    var body: some View {
        model.getPlayerByID(playerID: id).map { player in
            VStack {
                HStack {
                    Text("Tournaments played this season:")
                        .font(Font.system(size: 20, weight: .bold))
                        Spacer()
                    Text(String(player.tournamentsPlayed))
                        .font(Font.custom("VarelaRound-Regular", size: 30))
                }
                .padding()
                PlayerRankingInfo(id: id)
                    .padding()
                PlayerRankingPointsInfo(id: id)
                    .padding()
            }
        }
    }
}

#Preview {
    let model = Model()
    PlayerInfoView(id: 720)
        .environment(model)
}
