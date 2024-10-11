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
    var body: some View {
        Text("Hello " + String(id))
    }
}

#Preview {
    let model: Model = Model()
    PlayerDetailView(id: 720)
        .environment(model)
}
