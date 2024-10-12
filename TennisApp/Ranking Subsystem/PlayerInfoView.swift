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
                    Text(String(player.tournamentsPlayed))
                    Text("tournaments played this season")
                }
                HStack {
                    Text("Previous Ranking")
                    Text(String(player.previousPosition))
                    Image(systemName: player.hasImprovedRanking().0)
                        .foregroundColor((player.hasImprovedRanking().1))
                    Text(String(player.rankingPosition))
                    Text("Current Ranking")
                }
                HStack {
                    Text("Previous Points")
                    Text(String(player.previousPoints))
                    Image(systemName: player.hasImprovedPoints().0)
                        .foregroundColor(player.hasImprovedPoints().1)
                    Text(String(player.rankingPoints))
                    Text("Current Points")
                }
            }
        }
    }
}

#Preview {
    let model = Model()
    PlayerInfoView(id: 720)
        .environment(model)
}
