//
//  PlayerRankingInfo.swift
//  TennisApp
//
//  Created by Lukas Jochim on 12.10.24.
//

import SwiftUI

struct PlayerRankingInfo: View {
    @Environment(RankingModel.self) private var model: RankingModel
    var id: Int
    var body: some View {
        model.getPlayerByID(playerID: id).map { player in
            HStack(alignment: .center) {
                Text("Previous")
                    .font(Font.system(size: 20, weight: .bold))
                    .foregroundColor(.secondary)
                Spacer()
                Text(String(player.previousPosition))
                    .font(Font.custom("VarelaRound-Regular", size: 25))
                    .foregroundColor(.secondary)
                Spacer()
                Image(systemName: player.hasImprovedRanking().0)
                    .foregroundColor((player.hasImprovedRanking().1))
                    .imageScale(.large)
                Spacer()
                Text(String(player.rankingPosition))
                    .font(Font.custom("VarelaRound-Regular", size: 30))
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
    PlayerRankingInfo(id:720)
        .environment(model)
}
