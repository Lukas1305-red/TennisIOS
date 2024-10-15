//
//  PlayerDetailView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 10.10.24.
//

import SwiftUI

struct PlayerDetailView: View {
    @Environment(RankingModel.self) private var model: RankingModel
    var id: Int
    var body: some View {
        Text("Hello " + String(id))
    }
}

#Preview {
    let model = RankingModel()
    PlayerDetailView(id: 720)
        .environment(model)
}
