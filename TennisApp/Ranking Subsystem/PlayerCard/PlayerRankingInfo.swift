//
//  PlayerRankingInfo.swift
//  TennisApp
//
//  Created by Lukas Jochim on 12.10.24.
//

import SwiftUI

struct PlayerRankingInfo: View {
    @Environment(Model.self) private var model: Model
    var id: Int
    var body: some View {
        model.getPlayerByID(playerID: id).map { player in
            HStack(alignment: .center) {
                Text("Previous")
                    .font(Font.system(size: 20, weight: .bold))
                    .foregroundColor(.gray)
                Spacer()
                Text(String(player.previousPosition))
                    .font(Font.custom("VarelaRound-Regular", size: 25))
                    .foregroundColor(.gray)
                Spacer()
                Image(systemName: player.hasImprovedRanking().0)
                    .foregroundColor((player.hasImprovedRanking().1))
                    .imageScale(.large)
                Spacer()
                Text(String(player.rankingPosition))
                    .font(Font.custom("VarelaRound-Regular", size: 30))
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
    PlayerRankingInfo(id:720)
        .environment(model)
}
