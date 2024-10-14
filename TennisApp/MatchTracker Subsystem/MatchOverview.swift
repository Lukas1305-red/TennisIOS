//
//  MatchOverview.swift
//  TennisApp
//
//  Created by Lukas Jochim on 13.10.24.
//

import SwiftUI

struct MatchOverview: View {
    @State var addSheetOpen = false
    @Environment(MatchModel.self) var matchModel: MatchModel
    var body: some View {
        NavigationStack {
            MatchListView()
                .navigationTitle("Matches")
                .toolbar {
                    ToolbarItem(placement: .primaryAction) {
                        Button(action: {
                            addSheetOpen.toggle()
                        }, label: {
                            Image(systemName: "plus")
                        })
                    }
                }
                .sheet(isPresented: $addSheetOpen) {
                    EditMatchView(editMatchViewModel: EditMatchViewModel(matchModel, id: nil))
                }
        }
    }
    var listView: some View {
        List {
            ForEach(matchModel.matches, id: \.id) { match in
                HStack {
                    Text(match.opponent)
                        .foregroundColor(match.win ? .green : .red)
                    Spacer()
                    Text(match.score).font(Font.system(size: 20, weight: .bold))
                }
            }
        }
    }
}

#Preview {
    MatchOverview()
        .environment(MatchModel())
}
