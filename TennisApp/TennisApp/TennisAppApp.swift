//
//  TennisAppApp.swift
//  TennisApp
//
//  Created by Lukas Jochim on 09.10.24.
//

import SwiftUI

@main
struct TennisAppApp: App {
    @State var globalModel = RankingModel()
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .environment(globalModel)
    }
}
