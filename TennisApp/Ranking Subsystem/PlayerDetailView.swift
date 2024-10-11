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
    var image: Image {
        if UIImage(named: String(id)) != nil {
            Image(String(id))
        } else {
            Image(systemName: "person")
        }
    }
    var body: some View {
        image
    }
}

#Preview {
    let model = Model()
    PlayerDetailView(id: 720)
        .environment(model)
}
