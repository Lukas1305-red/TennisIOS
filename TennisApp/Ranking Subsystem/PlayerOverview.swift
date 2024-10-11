//
//  PlayerOverview.swift
//  TennisApp
//
//  Created by Lukas Jochim on 10.10.24.
//

import SwiftUI

struct PlayerOverview: View {
    @Environment(Model.self) private var model: Model
    var body: some View {
        NavigationStack {
            RankingView()
                .navigationTitle("Ranking")
        }
    }
}

#Preview {
    PlayerOverview().environment(Model() as Model)
}
