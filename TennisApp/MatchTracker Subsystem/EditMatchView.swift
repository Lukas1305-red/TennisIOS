//
//  EditMatchView.swift
//  TennisApp
//
//  Created by Lukas Jochim on 14.10.24.
//

import SwiftUI

struct EditMatchView: View {
    @Environment(\.dismiss) private var dismiss
    @State var editMatchViewModel: EditMatchViewModel
    @Environment(MatchModel.self) var matchModel: MatchModel
    
    let gameCounts = (0...7)
    
    var navigationTitle: String = "New Match"
    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("Match Details")) {
                    Toggle(isOn: $editMatchViewModel.win) {
                        Text($editMatchViewModel.wrappedValue.win ? "Win" : "Loss")
                    }
                    
                    TextField("Opponent", text: $editMatchViewModel.opponent)
                        .autocapitalization(.words)
                }
                self.firstSet
                self.secondSet
            }
            .toolbar {
                ToolbarItem(placement: .primaryAction) {
                    Button {
                        Task {
                            await editMatchViewModel
                                    .save()
                            dismiss()
                        }
                    } label: {
                        Text("Save")
                            .bold()
                    }
                }
            }
        }
    }
    private var firstSet: some View {
        Section(header: Text("First Set")) {
            HStack {
                Picker("", selection: $editMatchViewModel.firstSetOwnGames) {
                    ForEach(gameCounts, id: \.self) { gameCount in
                        Text("\(gameCount)")
                    }
                }
                .pickerStyle(MenuPickerStyle())
                Text(":")
                Picker("", selection: $editMatchViewModel.firstSetOtherGames) {
                    ForEach(gameCounts, id: \.self) { gameCount in
                        Text("\(gameCount)")
                    }
                }
            }
        }
    }
    private var secondSet: some View {
        Section(header: Text("Second Set")) {
            HStack {
                Picker("", selection: $editMatchViewModel.secondSetOwnGames) {
                    ForEach(gameCounts, id: \.self) { gameCount in
                        Text("\(gameCount)")
                    }
                }
                .pickerStyle(MenuPickerStyle())
                Text(":")
                Picker("", selection: $editMatchViewModel.secondSetOtherGames) {
                    ForEach(gameCounts, id: \.self) { gameCount in
                        Text("\(gameCount)")
                    }
                }
            }
        }
    }
}

#Preview {
    let model = MatchModel()
    let editMatchViewModel = EditMatchViewModel(model, id: UUID())
    EditMatchView(editMatchViewModel: editMatchViewModel)
        .environment(model)
        .environment(RankingModel())
}
