//
//  TennisAppApp.swift
//  TennisApp
//
//  Created by Lukas Jochim on 09.10.24.
//

import SwiftUI

@main
struct TennisAppApp: App {
    @State var globalViewModel = Model()
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .environment(globalViewModel)
    }
}
