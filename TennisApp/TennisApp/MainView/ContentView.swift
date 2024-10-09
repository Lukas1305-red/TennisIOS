//  ContentView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 09.10.24.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            RankingView()
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
}
