# Intro Course Project App of Lukas Jochim for the iPraktikum

To pass the intro course, you need to create your own unique iOS app (based on SwiftUI).

There are no requirements regarding the functions of your app, so you can get creative.
However, we provide you with Non-Functional Requirements (NFR) that your app needs to fulfill.

After each day of learning new Swift and SwiftUI concepts, these NFRs may change, or new NFRs get added.

## Submission procedure

You get a **personal repository** on Gitlab to work on your app.

Once you implemented a new feature into your app, you need to create a Merge Request (MR - Sometimes we will also reference these as "Pull Requests"(PR)) to merge your changes from the feature branch into your main branch.

Your tutor will review your changes and either request changes or approves the MR.

If your MR got approved, you also need to merge it!

### Deadline: **15.10.2024 23:59**

Until the deadline all of your PRs **need to be merged** and your final app **needs to fulfill** all of the requested NFRs!

---

## Problem Statement (max. 500 words)

In my free time, I love playing and watching tennis. However, it is quite difficult to keep track of everything going on at the moment (e.g. live matches, rankings, tournaments, facts, etc.). Therefore I want to provide an App which gives an overview of not only live events but also historic data. 
It should provide the current ranking and also the live race ranking of the respective year. Starting from that, the app is suppossed to be able to navigate to different players, adding a little profile (prize money, nationality, age, etc.). Users can favorize certain players in order to receive notifications of their scores for instance.
Furthermore, there should be a feed for live scores ordered by their respective tournament. It should also be able to provide live match statistics. 
I also want to do an overview of all tennis tournaments being organized during the year (maybe on a map). Key information should also be displayed about the tournaments (last winner, prize money, history data, etc.)
Last but not least, it should provide a little history page with various records the user can choose from. 

To sum up, the app should be a fusion of a tennis wiki page and a live statistics/live score page, to have everything on one space.

## Requirements


- FR1: Provide current player rankings from the current year and last seasons 
- FR2: Favorize certain players to follow them and their matches
- FR3: Search and Filter for players (after name, nationality, etc.)
- FR4: give information about torunaments and players 
- FR5: inspect all tournaments around the world 
- FR6: see records as a ranking in a little history feed
- FR7: provide live scores 

-------------------------------------------------------------------------
- NFR1: 3-7 SwiftUI views 
- NFR2: Use Apple's SF-Symbols 
- NFR3: Follow Apple's Human Interface Guidelines 
- NFR4: Source code follows best practices

## Analysis

TODO: Include an analysis object model. You can use [draw.io](https://draw.io) or [apollon](https://apollon.ase.cit.tum.de) to create it. Please add all models as an Image - not as a link!

## System Design

TODO: Include a system design overview describing your application.

## Product Backlog

- RANKING-1: Implement structure of the ranking overview
- RANKING-2: Add players to the Ranking structure 
- RANKING-3: Access player's info from the ranking overview 
- RANKING-4: Search for player 
- RANKING-5: Filter rankings by favorite players
- PLAYER-1: Add player infos 
- PLAYER-2: Add as favorite player (add "star")
- PLAYER-3: Remove favour status (remove "star") 
- CALENDAR-1: Add calendar overview 
- CALENDAR-2: Add tournaments to the overview 
- CALENDAR-3: Navigate through months 
- TOURNAMENT-1: Add title defender about the respective tournament
- TOURNAMENT-2: Add facts to the respective tournament
