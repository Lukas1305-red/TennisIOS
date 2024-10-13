//
//  PlayerRankingPointsInfo.swift
//  TennisApp
//
//  Created by Lukas Jochim on 12.10.24.
//

import SwiftUI

struct PlayerRankingPointsInfo: View {
    @Environment(RankingModel.self) private var model: RankingModel
    var id: Int
    var body: some View {
        model.getPlayerByID(playerID: id).map { player in
            HStack(alignment: .center) {
                Text("Previous")
                    .font(Font.system(size: 20, weight: .bold))
                    .foregroundColor(.secondary)
                Spacer()
                Text(String(player.previousPoints))
                    .font(Font.custom("VarelaRound-Regular", size: 20))
                    .foregroundColor(.secondary)
                Spacer()
                Image(systemName: player.hasImprovedPoints().0)
                    .foregroundColor((player.hasImprovedPoints().1))
                    .imageScale(.large)
                Spacer()
                Text(String(player.rankingPoints))
                    .font(Font.custom("VarelaRound-Regular", size: 25))
                    .foregroundColor(.primary)
                Spacer()
                Text("Current")
                    .font(Font.system(size: 20, weight: .bold))
                    .foregroundColor(.primary)
            }
        }
    }
}

#Preview {
    let model = RankingModel()
    PlayerRankingPointsInfo(id: 720)
        .environment(model)
}
