//
//  PlayerCellView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 10.10.24.
//

import SwiftUI
import SwiftFlags
struct PlayerCellView: View {
    @Environment(Model.self) private var model: Model
    var id: Int
    var body: some View {
        model.getPlayerByID(playerID: id).map { player in
            HStack(alignment: .center, spacing: 10) {
                if let countryFlag = SwiftFlags.flag(for: player.nationality) {
                    Text(String(player.rankingPosition))
                        .font(Font.system(size: 20, weight: .bold))
                        .frame(width: 35, alignment: .center)
                    Text(player.name)
                        .foregroundColor(.primary)
                        .font(Font.system(size: 20))
                        .frame(width: 100, alignment: .leading)
                    Text(countryFlag)
                        .font(Font.system(size: 40))
                        .frame(width: 70, alignment: .center)
                    Text(String(player.rankingPoints))
                        .frame(width: 50)
                }
            }.padding()
        }
    }
}

#Preview {
    let model = Model()
    PlayerCellView(id: 720)
        .environment(model)
}
