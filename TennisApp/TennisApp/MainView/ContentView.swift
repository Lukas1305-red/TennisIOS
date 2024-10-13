//  ContentView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 09.10.24.
//

import SwiftUI

struct ContentView: View {
    @Environment(RankingModel.self) private var model: RankingModel
    var body: some View {
        TabView {
            PlayerOverview()
                .tabItem {
                    Image(systemName: "trophy")
                    Text("Ranking")
                }
            CalendarView()
                .tabItem {
                    Image(systemName: "calendar")
                    Text("Tournaments")
                }
        }
    }
}

#Preview {
    ContentView()
        .environment(RankingModel())
}
