//
//  PlayerRankingPointsInfo.swift
//  TennisApp
//
//  Created by Lukas Jochim on 12.10.24.
//

import SwiftUI

struct PlayerRankingPointsInfo: View {
    @Environment(Model.self) private var model: Model
    var id: Int
    var body: some View {
        model.getPlayerByID(playerID: id).map { player in
            HStack(alignment: .center) {
                Text("Previous")
                    .font(Font.system(size: 20, weight: .bold))
                    .foregroundColor(.gray)
                Spacer()
                Text(String(player.previousPoints))
                    .font(Font.system(size: 25, weight: .bold))
                    .foregroundColor(.gray)
                Spacer()
                Image(systemName: player.hasImprovedPoints().0)
                    .foregroundColor((player.hasImprovedPoints().1))
                    .imageScale(.large)
                Spacer()
                Text(String(player.rankingPoints))
                    .font(Font.system(size: 30, weight: .bold))
                Spacer()
                Text("Current")
                    .font(Font.system(size: 20, weight: .bold))
                    .foregroundColor(.black)
            }
        }
    }
}

#Preview {
    let model = Model()
    PlayerRankingPointsInfo(id: 720)
        .environment(model)
}
