//
//  MatchListView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 14.10.24.
//

import SwiftUI

struct MatchListView: View {
    @Environment(MatchModel.self) var matchModel
    var body: some View {
        List {
            ForEach(matchModel.matches, id: \.id) { match in
                NavigationLink {
                    EditMatchView(editMatchViewModel: EditMatchViewModel(matchModel, id: match.id, match: match))
                } label: {
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
}

#Preview {
    MatchListView()
        .environment(MatchModel())
}
