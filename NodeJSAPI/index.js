const express = require('express');

const app = express();

const PORT = '8080';

app.use(express.json())


app.listen(
  PORT, 
  () => console.log(`it is alive on http://localhost:${PORT}`)
);
app.get('/rankingAlt', (req, res) => {
  res.status(200).send (
    {
      "rankings": [
        {
          "team": {
            "name": "Sinner J.",
            "slug": "sinner-jannik",
            "shortName": "Sinner J.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 129845,
            "nameCode": "SIN",
            "ranking": 1,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 206570,
            "country": {
              "alpha2": "IT",
              "alpha3": "ITA",
              "name": "Italy",
              "slug": "italy"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0421\u0438\u043d\u043d\u0435\u0440, \u042f\u043d\u043d\u0438\u043a"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 19,
          "type": 5,
          "rowName": "Jannik Sinner",
          "ranking": 1,
          "points": 11010,
          "previousRanking": 1,
          "previousPoints": 11180,
          "bestRanking": 1,
          "id": 720,
          "country": {
            "alpha2": "IT",
            "alpha3": "ITA",
            "name": "Italy",
            "slug": "italy"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Alcaraz C.",
            "slug": "alcaraz-carlos",
            "shortName": "Alcaraz C.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 179058,
            "nameCode": "ALC",
            "ranking": 2,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 275923,
            "country": {
              "alpha2": "ES",
              "alpha3": "ESP",
              "name": "Spain",
              "slug": "spain"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0410\u043b\u044c\u043a\u0430\u0440\u0430\u0441 \u0413\u0430\u0440\u0444\u0438\u044f, \u041a\u0430\u0440\u043b\u043e\u0441"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 17,
          "type": 5,
          "rowName": "Carlos Alcaraz",
          "ranking": 2,
          "points": 7010,
          "previousRanking": 3,
          "previousPoints": 6690,
          "bestRanking": 1,
          "id": 701,
          "country": {
            "alpha2": "ES",
            "alpha3": "ESP",
            "name": "Spain",
            "slug": "spain"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Zverev A.",
            "slug": "zverev-alexander",
            "shortName": "Zverev A.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 74457,
            "nameCode": "ZVE",
            "ranking": 3,
            "national": false,
            "type": 1,
            "id": 57163,
            "country": {
              "alpha2": "DE",
              "alpha3": "DEU",
              "name": "Germany",
              "slug": "germany"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0417\u0432\u0435\u0440\u0435\u0432, \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0435\u0440"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Alexander Zverev",
          "ranking": 3,
          "points": 6705,
          "previousRanking": 2,
          "previousPoints": 6875,
          "bestRanking": 2,
          "id": 699,
          "country": {
            "alpha2": "DE",
            "alpha3": "DEU",
            "name": "Germany",
            "slug": "germany"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Djokovic N.",
            "slug": "djokovic-novak",
            "shortName": "Djokovic N.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 268660,
            "nameCode": "DJO",
            "ranking": 4,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 14882,
            "country": {
              "alpha2": "RS",
              "alpha3": "SRB",
              "name": "Serbia",
              "slug": "serbia"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0414\u0436\u043e\u043a\u043e\u0432\u0438\u0447, \u041d\u043e\u0432\u0430\u043a"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 18,
          "type": 5,
          "rowName": "Novak Djokovic",
          "ranking": 4,
          "points": 5560,
          "previousRanking": 4,
          "previousPoints": 5560,
          "bestRanking": 1,
          "id": 700,
          "country": {
            "alpha2": "RS",
            "alpha3": "SRB",
            "name": "Serbia",
            "slug": "serbia"
          },
          "rankingClass": "team",
          "bestRankingDateTimestamp": 1309737600
        },
        {
          "team": {
            "name": "Medvedev D.",
            "slug": "medvedev-daniil",
            "shortName": "Medvedev D.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 81813,
            "nameCode": "MED",
            "ranking": 5,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 163504,
            "country": {
              "alpha2": "RU",
              "alpha3": "RUS",
              "name": "Russia",
              "slug": "russia"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041c\u0435\u0434\u0432\u0435\u0434\u0435\u0432, \u0414\u0430\u043d\u0438\u0438\u043b"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 19,
          "type": 5,
          "rowName": "Daniil Medvedev",
          "ranking": 5,
          "points": 5375,
          "previousRanking": 5,
          "previousPoints": 5475,
          "bestRanking": 1,
          "id": 704,
          "country": {
            "alpha2": "RU",
            "alpha3": "RUS",
            "name": "Russia",
            "slug": "russia"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Rublev A.",
            "slug": "rublev-andrey",
            "shortName": "Rublev A.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 42115,
            "nameCode": "RUB",
            "ranking": 6,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 106755,
            "country": {
              "alpha2": "RU",
              "alpha3": "RUS",
              "name": "Russia",
              "slug": "russia"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0420\u0443\u0431\u043b\u0451\u0432, \u0410\u043d\u0434\u0440\u0435\u0439"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 24,
          "type": 5,
          "rowName": "Andrey Rublev",
          "ranking": 6,
          "points": 4700,
          "previousRanking": 6,
          "previousPoints": 4645,
          "bestRanking": 5,
          "id": 705,
          "country": {
            "alpha2": "RU",
            "alpha3": "RUS",
            "name": "Russia",
            "slug": "russia"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Fritz T.",
            "slug": "fritz-taylor",
            "shortName": "Fritz T.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 27024,
            "nameCode": "FRI",
            "ranking": 7,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 136042,
            "country": {
              "alpha2": "US",
              "alpha3": "USA",
              "name": "USA",
              "slug": "usa"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0424\u0440\u0438\u0442\u0446, \u0422\u044d\u0439\u043b\u043e\u0440 \u0413\u044d\u0440\u0440\u0438"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Taylor Fritz",
          "ranking": 7,
          "points": 4060,
          "previousRanking": 7,
          "previousPoints": 4060,
          "bestRanking": 5,
          "id": 703,
          "country": {
            "alpha2": "US",
            "alpha3": "USA",
            "name": "USA",
            "slug": "usa"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Hurkacz H.",
            "slug": "hurkacz-hubert",
            "shortName": "Hurkacz H.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 39069,
            "nameCode": "HUR",
            "ranking": 8,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 158896,
            "country": {
              "alpha2": "PL",
              "alpha3": "POL",
              "name": "Poland",
              "slug": "poland"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0413\u0443\u0440\u043a\u0430\u0447, \u0425\u0443\u0431\u0435\u0440\u0442"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 24,
          "type": 5,
          "rowName": "Hubert Hurkacz",
          "ranking": 8,
          "points": 4060,
          "previousRanking": 8,
          "previousPoints": 4060,
          "bestRanking": 6,
          "id": 718,
          "country": {
            "alpha2": "PL",
            "alpha3": "POL",
            "name": "Poland",
            "slug": "poland"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Ruud C.",
            "slug": "ruud-casper",
            "shortName": "Ruud C.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 39969,
            "nameCode": "RUU",
            "ranking": 9,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 119248,
            "country": {
              "alpha2": "NO",
              "alpha3": "NOR",
              "name": "Norway",
              "slug": "norway"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0420\u0443\u0443\u0434, \u041a\u0430\u0441\u043f\u0435\u0440"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 24,
          "type": 5,
          "rowName": "Casper Ruud",
          "ranking": 9,
          "points": 3965,
          "previousRanking": 9,
          "previousPoints": 4010,
          "bestRanking": 2,
          "id": 713,
          "country": {
            "alpha2": "NO",
            "alpha3": "NOR",
            "name": "Norway",
            "slug": "norway"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Dimitrov G.",
            "slug": "dimitrov-grigor",
            "shortName": "Dimitrov G.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 35456,
            "nameCode": "DIM",
            "ranking": 10,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 23581,
            "country": {
              "alpha2": "BG",
              "alpha3": "BGR",
              "name": "Bulgaria",
              "slug": "bulgaria"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0414\u0438\u043c\u0438\u0442\u0440\u043e\u0432, \u0413\u0440\u0438\u0433\u043e\u0440"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 21,
          "type": 5,
          "rowName": "Grigor Dimitrov",
          "ranking": 10,
          "points": 3840,
          "previousRanking": 10,
          "previousPoints": 3920,
          "bestRanking": 3,
          "id": 730,
          "country": {
            "alpha2": "BG",
            "alpha3": "BGR",
            "name": "Bulgaria",
            "slug": "bulgaria"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "de Minaur A.",
            "slug": "de-minaur-alex",
            "shortName": "de Minaur A.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 21539,
            "nameCode": "DE",
            "ranking": 11,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 201239,
            "country": {
              "alpha2": "AU",
              "alpha3": "AUS",
              "name": "Australia",
              "slug": "australia"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0414\u0435 \u041c\u0438\u043d\u0430\u0443\u0440, \u0410\u043b\u0435\u043a\u0441"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Alex de Minaur",
          "ranking": 11,
          "points": 3620,
          "previousRanking": 11,
          "previousPoints": 3655,
          "bestRanking": 6,
          "id": 723,
          "country": {
            "alpha2": "AU",
            "alpha3": "AUS",
            "name": "Australia",
            "slug": "australia"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Tsitsipas S.",
            "slug": "tsitsipas-stefanos",
            "shortName": "Tsitsipas S.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 70865,
            "nameCode": "TSI",
            "ranking": 12,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 122366,
            "country": {
              "alpha2": "GR",
              "alpha3": "GRC",
              "name": "Greece",
              "slug": "greece"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0426\u0438\u0446\u0438\u043f\u0430\u0441, \u0421\u0442\u0435\u0444\u0430\u043d\u043e\u0441"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Stefanos Tsitsipas",
          "ranking": 12,
          "points": 3390,
          "previousRanking": 12,
          "previousPoints": 3390,
          "bestRanking": 3,
          "id": 702,
          "country": {
            "alpha2": "GR",
            "alpha3": "GRC",
            "name": "Greece",
            "slug": "greece"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Paul T.",
            "slug": "paul-tommy",
            "shortName": "Paul T.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 14449,
            "nameCode": "PAU",
            "ranking": 13,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 138546,
            "country": {
              "alpha2": "US",
              "alpha3": "USA",
              "name": "USA",
              "slug": "usa"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041f\u043e\u043b, \u0422\u043e\u043c\u043c\u0438"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 24,
          "type": 5,
          "rowName": "Tommy Paul",
          "ranking": 13,
          "points": 3045,
          "previousRanking": 13,
          "previousPoints": 3005,
          "bestRanking": 12,
          "id": 724,
          "country": {
            "alpha2": "US",
            "alpha3": "USA",
            "name": "USA",
            "slug": "usa"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Rune H.",
            "slug": "rune-holger",
            "shortName": "Rune H.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 42000,
            "nameCode": "RUN",
            "ranking": 14,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 283070,
            "country": {
              "alpha2": "DK",
              "alpha3": "DNK",
              "name": "Denmark",
              "slug": "denmark"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0420\u0443\u043d\u0435, \u0425\u043e\u043b\u044c\u0433\u0435\u0440 \u0412\u0438\u0442\u0443\u0441 \u041d\u0451\u0434\u0441\u043a\u043e\u0432"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 23,
          "type": 5,
          "rowName": "Holger Rune",
          "ranking": 14,
          "points": 2935,
          "previousRanking": 14,
          "previousPoints": 2780,
          "bestRanking": 4,
          "id": 717,
          "country": {
            "alpha2": "DK",
            "alpha3": "DNK",
            "name": "Denmark",
            "slug": "denmark"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Humbert U.",
            "slug": "humbert-ugo",
            "shortName": "Humbert U.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 11631,
            "nameCode": "HUM",
            "ranking": 15,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 185388,
            "country": {
              "alpha2": "FR",
              "alpha3": "FRA",
              "name": "France",
              "slug": "france"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0423\u043c\u0431\u0435\u0440, \u0423\u0433\u043e"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 28,
          "type": 5,
          "rowName": "Ugo Humbert",
          "ranking": 15,
          "points": 2645,
          "previousRanking": 19,
          "previousPoints": 2370,
          "bestRanking": 13,
          "id": 857,
          "country": {
            "alpha2": "FR",
            "alpha3": "FRA",
            "name": "France",
            "slug": "france"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Shelton B.",
            "slug": "shelton-ben",
            "shortName": "Shelton B.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 20216,
            "nameCode": "SHE",
            "ranking": 16,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 385485,
            "country": {
              "alpha2": "US",
              "alpha3": "USA",
              "name": "USA",
              "slug": "usa"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ar": "\u0628\u0646 \u0634\u064a\u0644\u062a\u0648\u0646"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 24,
          "type": 5,
          "rowName": "Ben Shelton",
          "ranking": 16,
          "points": 2580,
          "previousRanking": 17,
          "previousPoints": 2490,
          "bestRanking": 13,
          "id": 752,
          "country": {
            "alpha2": "US",
            "alpha3": "USA",
            "name": "USA",
            "slug": "usa"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Tiafoe F. ",
            "slug": "tiafoe-frances",
            "shortName": "Tiafoe F. ",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 21335,
            "nameCode": "TIA",
            "ranking": 17,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 101101,
            "country": {
              "alpha2": "US",
              "alpha3": "USA",
              "name": "USA",
              "slug": "usa"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0422\u0438\u0430\u0444\u043e, \u0424\u0440\u044d\u043d\u0441\u0438\u0441"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 24,
          "type": 5,
          "rowName": "Frances Tiafoe",
          "ranking": 17,
          "points": 2560,
          "previousRanking": 15,
          "previousPoints": 2560,
          "bestRanking": 10,
          "id": 706,
          "country": {
            "alpha2": "US",
            "alpha3": "USA",
            "name": "USA",
            "slug": "usa"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Musetti L.",
            "slug": "musetti-lorenzo",
            "shortName": "Musetti L.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 34774,
            "nameCode": "MUS",
            "ranking": 18,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 261015,
            "country": {
              "alpha2": "IT",
              "alpha3": "ITA",
              "name": "Italy",
              "slug": "italy"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041c\u0443\u0441\u0435\u0442\u0442\u0438, \u041b\u043e\u0440\u0435\u043d\u0446\u043e"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 31,
          "type": 5,
          "rowName": "Lorenzo Musetti",
          "ranking": 18,
          "points": 2425,
          "previousRanking": 18,
          "previousPoints": 2420,
          "bestRanking": 15,
          "id": 726,
          "country": {
            "alpha2": "IT",
            "alpha3": "ITA",
            "name": "Italy",
            "slug": "italy"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Korda S.",
            "slug": "korda-sebastian",
            "shortName": "Korda S.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 10225,
            "nameCode": "KOR",
            "ranking": 19,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 195840,
            "country": {
              "alpha2": "US",
              "alpha3": "USA",
              "name": "USA",
              "slug": "usa"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041a\u043e\u0440\u0434\u0430, \u0421\u0435\u0431\u0430\u0441\u0442\u044c\u044f\u043d"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Sebastian Korda",
          "ranking": 19,
          "points": 2380,
          "previousRanking": 16,
          "previousPoints": 2520,
          "bestRanking": 15,
          "id": 715,
          "country": {
            "alpha2": "US",
            "alpha3": "USA",
            "name": "USA",
            "slug": "usa"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Draper J.",
            "slug": "draper-jack",
            "shortName": "Draper J.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 11670,
            "nameCode": "DRA",
            "ranking": 20,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 258749,
            "country": {
              "alpha2": "GB",
              "alpha3": "GBR",
              "name": "United Kingdom",
              "slug": "united-kingdom"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            }
          },
          "tournamentsPlayed": 21,
          "type": 5,
          "rowName": "Jack Draper",
          "ranking": 20,
          "points": 2340,
          "previousRanking": 20,
          "previousPoints": 2315,
          "bestRanking": 20,
          "id": 836,
          "country": {
            "alpha2": "GB",
            "alpha3": "GBR",
            "name": "United Kingdom",
            "slug": "united-kingdom"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Fils A.",
            "slug": "fils-arthur",
            "shortName": "Fils A.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 11405,
            "nameCode": "FIL",
            "ranking": 21,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 338500,
            "country": {
              "alpha2": "FR",
              "alpha3": "FRA",
              "name": "France",
              "slug": "france"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            }
          },
          "tournamentsPlayed": 27,
          "type": 5,
          "rowName": "Arthur Fils",
          "ranking": 21,
          "points": 2250,
          "previousRanking": 24,
          "previousPoints": 1775,
          "bestRanking": 20,
          "id": 886,
          "country": {
            "alpha2": "FR",
            "alpha3": "FRA",
            "name": "France",
            "slug": "france"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Auger-Aliassime F.",
            "slug": "auger-aliassime-felix",
            "shortName": "Auger-Aliassime F.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 27114,
            "nameCode": "AUG",
            "ranking": 22,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 192013,
            "country": {
              "alpha2": "CA",
              "alpha3": "CAN",
              "name": "Canada",
              "slug": "canada"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041e\u0436\u0435-\u0410\u043b\u044c\u044f\u0441\u0441\u0438\u043c, \u0424\u0435\u043b\u0438\u043a\u0441"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 23,
          "type": 5,
          "rowName": "Felix Auger-Aliassime",
          "ranking": 22,
          "points": 2170,
          "previousRanking": 21,
          "previousPoints": 2170,
          "bestRanking": 6,
          "id": 716,
          "country": {
            "alpha2": "CA",
            "alpha3": "CAN",
            "name": "Canada",
            "slug": "canada"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Tabilo A.",
            "slug": "tabilo-alejandro",
            "shortName": "Tabilo A.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 10300,
            "nameCode": "TAB",
            "ranking": 23,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 102151,
            "country": {
              "alpha2": "CL",
              "alpha3": "CHL",
              "name": "Chile",
              "slug": "chile"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0422\u0430\u0431\u0438\u043b\u043e, \u0410\u043b\u0435\u0445\u0430\u043d\u0434\u0440\u043e"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Alejandro Tabilo",
          "ranking": 23,
          "points": 1963,
          "previousRanking": 22,
          "previousPoints": 1963,
          "bestRanking": 19,
          "id": 963,
          "country": {
            "alpha2": "CL",
            "alpha3": "CHL",
            "name": "Chile",
            "slug": "chile"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Popyrin A.",
            "slug": "popyrin-alexei",
            "shortName": "Popyrin A.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 7468,
            "nameCode": "POP",
            "ranking": 24,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 128552,
            "country": {
              "alpha2": "AU",
              "alpha3": "AUS",
              "name": "Australia",
              "slug": "australia"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041f\u043e\u043f\u044b\u0440\u0438\u043d, \u0410\u043b\u0435\u043a\u0441\u0435\u0439"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 22,
          "type": 5,
          "rowName": "Alexei Popyrin",
          "ranking": 24,
          "points": 1825,
          "previousRanking": 23,
          "previousPoints": 1825,
          "bestRanking": 23,
          "id": 878,
          "country": {
            "alpha2": "AU",
            "alpha3": "AUS",
            "name": "Australia",
            "slug": "australia"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Khachanov K.",
            "slug": "khachanov-karen",
            "shortName": "Khachanov K.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 15183,
            "nameCode": "KHA",
            "ranking": 25,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 90080,
            "country": {
              "alpha2": "RU",
              "alpha3": "RUS",
              "name": "Russia",
              "slug": "russia"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0425\u0430\u0447\u0430\u043d\u043e\u0432, \u041a\u0430\u0440\u0435\u043d"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 22,
          "type": 5,
          "rowName": "Karen Khachanov",
          "ranking": 25,
          "points": 1780,
          "previousRanking": 27,
          "previousPoints": 1680,
          "bestRanking": 8,
          "id": 721,
          "country": {
            "alpha2": "RU",
            "alpha3": "RUS",
            "name": "Russia",
            "slug": "russia"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Baez S.",
            "slug": "baez-sebastian",
            "shortName": "Baez S.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 9989,
            "nameCode": "BAE",
            "ranking": 26,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 221806,
            "country": {
              "alpha2": "AR",
              "alpha3": "ARG",
              "name": "Argentina",
              "slug": "argentina"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0411\u0430\u044d\u0441, \u0421\u0435\u0431\u0430\u0441\u0442\u044c\u044f\u043d"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 28,
          "type": 5,
          "rowName": "Sebastian Baez",
          "ranking": 26,
          "points": 1760,
          "previousRanking": 25,
          "previousPoints": 1760,
          "bestRanking": 18,
          "id": 737,
          "country": {
            "alpha2": "AR",
            "alpha3": "ARG",
            "name": "Argentina",
            "slug": "argentina"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Bublik A.",
            "slug": "bublik-alexander",
            "shortName": "Bublik A.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 10603,
            "nameCode": "BUB",
            "ranking": 27,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 163480,
            "country": {
              "alpha2": "KZ",
              "alpha3": "KAZ",
              "name": "Kazakhstan",
              "slug": "kazakhstan"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0411\u0443\u0431\u043b\u0438\u043a, \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 27,
          "type": 5,
          "rowName": "Alexander Bublik",
          "ranking": 27,
          "points": 1690,
          "previousRanking": 26,
          "previousPoints": 1690,
          "bestRanking": 17,
          "id": 826,
          "country": {
            "alpha2": "KZ",
            "alpha3": "KAZ",
            "name": "Kazakhstan",
            "slug": "kazakhstan"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Thompson J.",
            "slug": "thompson-jordan",
            "shortName": "Thompson J.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 6020,
            "nameCode": "THO",
            "ranking": 28,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 87690,
            "country": {
              "alpha2": "AU",
              "alpha3": "AUS",
              "name": "Australia",
              "slug": "australia"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0422\u043e\u043c\u043f\u0441\u043e\u043d, \u0414\u0436\u043e\u0440\u0434\u0430\u043d"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 28,
          "type": 5,
          "rowName": "Jordan Thompson",
          "ranking": 28,
          "points": 1571,
          "previousRanking": 29,
          "previousPoints": 1566,
          "bestRanking": 29,
          "id": 865,
          "country": {
            "alpha2": "AU",
            "alpha3": "AUS",
            "name": "Australia",
            "slug": "australia"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Jarry N.",
            "slug": "jarry-nicolas",
            "shortName": "Jarry N.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 13591,
            "nameCode": "JAR",
            "ranking": 29,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 89632,
            "country": {
              "alpha2": "CL",
              "alpha3": "CHL",
              "name": "Chile",
              "slug": "chile"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041d\u0438\u043a\u043e\u043b\u0430\u0441 \u0414\u0436\u0430\u0440\u0440\u0438"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 24,
          "type": 5,
          "rowName": "Nicolas Jarry",
          "ranking": 29,
          "points": 1555,
          "previousRanking": 28,
          "previousPoints": 1635,
          "bestRanking": 16,
          "id": 832,
          "country": {
            "alpha2": "CL",
            "alpha3": "CHL",
            "name": "Chile",
            "slug": "chile"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Cobolli F.",
            "slug": "flavio-cobolli",
            "shortName": "Cobolli F.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 12671,
            "nameCode": "COB",
            "ranking": 30,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 273680,
            "country": {
              "alpha2": "IT",
              "alpha3": "ITA",
              "name": "Italy",
              "slug": "italy"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041a\u043e\u0431\u043e\u043b\u043b\u0438, \u0424\u043b\u0430\u0432\u0438\u043e"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 30,
          "type": 5,
          "rowName": "Flavio Cobolli",
          "ranking": 30,
          "points": 1552,
          "previousRanking": 32,
          "previousPoints": 1482,
          "bestRanking": 31,
          "id": 942,
          "country": {
            "alpha2": "IT",
            "alpha3": "ITA",
            "name": "Italy",
            "slug": "italy"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Cerundolo F.",
            "slug": "cerundolo-francisco",
            "shortName": "Cerundolo F.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 13233,
            "nameCode": "CER",
            "ranking": 31,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 221012,
            "country": {
              "alpha2": "AR",
              "alpha3": "ARG",
              "name": "Argentina",
              "slug": "argentina"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0421\u0435\u0440\u0443\u043d\u0434\u043e\u043b\u043e, \u0424\u0440\u0430\u043d\u0441\u0438\u0441\u043a\u043e"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 27,
          "type": 5,
          "rowName": "Francisco Cerundolo",
          "ranking": 31,
          "points": 1550,
          "previousRanking": 31,
          "previousPoints": 1500,
          "bestRanking": 19,
          "id": 734,
          "country": {
            "alpha2": "AR",
            "alpha3": "ARG",
            "name": "Argentina",
            "slug": "argentina"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Borges N.",
            "slug": "borges-nuno",
            "shortName": "Borges N.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 8820,
            "nameCode": "BOR",
            "ranking": 32,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 125006,
            "country": {
              "alpha2": "PT",
              "alpha3": "PRT",
              "name": "Portugal",
              "slug": "portugal"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            }
          },
          "tournamentsPlayed": 29,
          "type": 5,
          "rowName": "Nuno Borges",
          "ranking": 32,
          "points": 1515,
          "previousRanking": 30,
          "previousPoints": 1515,
          "bestRanking": 30,
          "id": 888,
          "country": {
            "alpha2": "PT",
            "alpha3": "PRT",
            "name": "Portugal",
            "slug": "portugal"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Macha\u010d T.",
            "slug": "machac-tomas",
            "shortName": "Macha\u010d T.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 5549,
            "nameCode": "MAC",
            "ranking": 33,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 238300,
            "country": {
              "alpha2": "CZ",
              "alpha3": "CZE",
              "name": "Czechia",
              "slug": "czechia"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041c\u0430\u0445\u0430\u0447, \u0422\u043e\u043c\u0430\u0441"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 24,
          "type": 5,
          "rowName": "Tomas Machac",
          "ranking": 33,
          "points": 1449,
          "previousRanking": 34,
          "previousPoints": 1374,
          "bestRanking": 33,
          "id": 905,
          "country": {
            "alpha2": "CZ",
            "alpha3": "CZE",
            "name": "Czechia",
            "slug": "czechia"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Lehe\u010dka J.",
            "slug": "lehecka-jiri",
            "shortName": "Lehe\u010dka J.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 7530,
            "nameCode": "LEH",
            "ranking": 34,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 254742,
            "country": {
              "alpha2": "CZ",
              "alpha3": "CZE",
              "name": "Czechia",
              "slug": "czechia"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041b\u0435\u0433\u0435\u0446\u043a\u0430\u044f, \u0418\u0440\u0436\u0438"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Jiri Lehecka",
          "ranking": 34,
          "points": 1400,
          "previousRanking": 37,
          "previousPoints": 1345,
          "bestRanking": 23,
          "id": 827,
          "country": {
            "alpha2": "CZ",
            "alpha3": "CZE",
            "name": "Czechia",
            "slug": "czechia"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Nakashima B.",
            "slug": "nakashima-brandon",
            "shortName": "Nakashima B.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 5345,
            "nameCode": "NAK",
            "ranking": 35,
            "national": false,
            "type": 1,
            "id": 235576,
            "country": {
              "alpha2": "US",
              "alpha3": "USA",
              "name": "USA",
              "slug": "usa"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041d\u0430\u043a\u0430\u0441\u0438\u043c\u0430, \u0411\u0440\u044d\u043d\u0434\u043e\u043d"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 30,
          "type": 5,
          "rowName": "Brandon Nakashima",
          "ranking": 35,
          "points": 1375,
          "previousRanking": 36,
          "previousPoints": 1360,
          "bestRanking": 36,
          "id": 828,
          "country": {
            "alpha2": "US",
            "alpha3": "USA",
            "name": "USA",
            "slug": "usa"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Arnaldi M.",
            "slug": "arnaldi-matteo",
            "shortName": "Arnaldi M.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 15527,
            "nameCode": "ARN",
            "ranking": 36,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 299538,
            "country": {
              "alpha2": "IT",
              "alpha3": "ITA",
              "name": "Italy",
              "slug": "italy"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0410\u0440\u043d\u0430\u043b\u044c\u0434\u0438, \u041c\u0430\u0442\u0442\u0435\u043e"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Matteo Arnaldi",
          "ranking": 36,
          "points": 1350,
          "previousRanking": 33,
          "previousPoints": 1390,
          "bestRanking": 30,
          "id": 893,
          "country": {
            "alpha2": "IT",
            "alpha3": "ITA",
            "name": "Italy",
            "slug": "italy"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Etcheverry T.",
            "slug": "etcheverry-tomas-martin",
            "shortName": "Etcheverry T.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 8952,
            "nameCode": "ETC",
            "ranking": 37,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 169496,
            "country": {
              "alpha2": "AR",
              "alpha3": "ARG",
              "name": "Argentina",
              "slug": "argentina"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u042d\u0442\u0447\u0435\u0432\u0435\u0440\u0440\u0438, \u0422\u043e\u043c\u0430\u0441 \u041c\u0430\u0440\u0442\u0438\u043d"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 29,
          "type": 5,
          "rowName": "Tomas Martin Etcheverry",
          "ranking": 37,
          "points": 1335,
          "previousRanking": 35,
          "previousPoints": 1370,
          "bestRanking": 27,
          "id": 840,
          "country": {
            "alpha2": "AR",
            "alpha3": "ARG",
            "name": "Argentina",
            "slug": "argentina"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Navone M.",
            "slug": "navone-mariano",
            "shortName": "Navone M.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 4707,
            "nameCode": "NAV",
            "ranking": 38,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 271389,
            "country": {
              "alpha2": "AR",
              "alpha3": "ARG",
              "name": "Argentina",
              "slug": "argentina"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            }
          },
          "tournamentsPlayed": 24,
          "type": 5,
          "rowName": "Mariano Navone",
          "ranking": 38,
          "points": 1328,
          "previousRanking": 40,
          "previousPoints": 1278,
          "bestRanking": 29,
          "id": 1015,
          "country": {
            "alpha2": "AR",
            "alpha3": "ARG",
            "name": "Argentina",
            "slug": "argentina"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Struff J.",
            "slug": "struff-jan-lennard",
            "shortName": "Struff J.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 9818,
            "nameCode": "STR",
            "ranking": 39,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 46391,
            "country": {
              "alpha2": "DE",
              "alpha3": "DEU",
              "name": "Germany",
              "slug": "germany"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0421\u0442\u0440\u0443\u0444\u0444, \u0416\u0430\u043d-\u041b\u0435\u043d\u043d\u0430\u0440\u0434"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Jan-Lennard Struff",
          "ranking": 39,
          "points": 1310,
          "previousRanking": 38,
          "previousPoints": 1310,
          "bestRanking": 21,
          "id": 911,
          "country": {
            "alpha2": "DE",
            "alpha3": "DEU",
            "name": "Germany",
            "slug": "germany"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Griekspoor T.",
            "slug": "griekspoor-tallon",
            "shortName": "Griekspoor T.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 10055,
            "nameCode": "GRI",
            "ranking": 40,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 122368,
            "country": {
              "alpha2": "NL",
              "alpha3": "NLD",
              "name": "Netherlands",
              "slug": "netherlands"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0413\u0440\u0438\u043a\u0441\u043f\u043e\u0440, \u0422\u0430\u043b\u043b\u043e\u043d"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Tallon Griekspoor",
          "ranking": 40,
          "points": 1305,
          "previousRanking": 39,
          "previousPoints": 1300,
          "bestRanking": 21,
          "id": 750,
          "country": {
            "alpha2": "NL",
            "alpha3": "NLD",
            "name": "Netherlands",
            "slug": "netherlands"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Zhang Z.",
            "slug": "zhang-zhizhen",
            "shortName": "Zhang Z.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 6431,
            "nameCode": "ZHA",
            "ranking": 41,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 75813,
            "country": {
              "alpha2": "CN",
              "alpha3": "CHN",
              "name": "China",
              "slug": "china"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0416\u0430\u043d\u0433, \u0416\u0438\u0436\u0435\u043d"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Zhizhen Zhang",
          "ranking": 41,
          "points": 1270,
          "previousRanking": 41,
          "previousPoints": 1270,
          "bestRanking": 31,
          "id": 871,
          "country": {
            "alpha2": "CN",
            "alpha3": "CHN",
            "name": "China",
            "slug": "china"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Darderi L.",
            "slug": "darderi-luciano",
            "shortName": "Darderi L.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 8116,
            "nameCode": "DAR",
            "ranking": 42,
            "national": false,
            "type": 1,
            "id": 308084,
            "country": {
              "alpha2": "IT",
              "alpha3": "ITA",
              "name": "Italy",
              "slug": "italy"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            }
          },
          "tournamentsPlayed": 32,
          "type": 5,
          "rowName": "Luciano Darderi",
          "ranking": 42,
          "points": 1265,
          "previousRanking": 42,
          "previousPoints": 1265,
          "bestRanking": 32,
          "id": 957,
          "country": {
            "alpha2": "IT",
            "alpha3": "ITA",
            "name": "Italy",
            "slug": "italy"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Michelsen A.",
            "slug": "michelsen-alex",
            "shortName": "Michelsen A.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 3934,
            "nameCode": "MIC",
            "ranking": 43,
            "national": false,
            "type": 1,
            "id": 406728,
            "country": {
              "alpha2": "US",
              "alpha3": "USA",
              "name": "USA",
              "slug": "usa"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            }
          },
          "tournamentsPlayed": 31,
          "type": 5,
          "rowName": "Alex Michelsen",
          "ranking": 43,
          "points": 1215,
          "previousRanking": 49,
          "previousPoints": 1115,
          "bestRanking": 47,
          "id": 773,
          "country": {
            "alpha2": "US",
            "alpha3": "USA",
            "name": "USA",
            "slug": "usa"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Berrettini M.",
            "slug": "berrettini-matteo",
            "shortName": "Berrettini M.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 42017,
            "nameCode": "BER",
            "ranking": 44,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 112783,
            "country": {
              "alpha2": "IT",
              "alpha3": "ITA",
              "name": "Italy",
              "slug": "italy"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0411\u0435\u0440\u0440\u0435\u0442\u0442\u0438\u043d\u0438, \u041c\u0430\u0442\u0442\u0435\u043e"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 16,
          "type": 5,
          "rowName": "Matteo Berrettini",
          "ranking": 44,
          "points": 1215,
          "previousRanking": 45,
          "previousPoints": 1165,
          "bestRanking": 6,
          "id": 728,
          "country": {
            "alpha2": "IT",
            "alpha3": "ITA",
            "name": "Italy",
            "slug": "italy"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Mart\u00ednez P.",
            "slug": "martinez-pedro",
            "shortName": "Mart\u00ednez P.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 4039,
            "nameCode": "MAR",
            "ranking": 45,
            "national": false,
            "type": 1,
            "id": 77223,
            "country": {
              "alpha2": "ES",
              "alpha3": "ESP",
              "name": "Spain",
              "slug": "spain"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041c\u0430\u0440\u0442\u0438\u043d\u0435\u0441 \u041f\u043e\u0440\u0442\u0435\u0440\u043e, \u041f\u0435\u0434\u0440\u043e"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 30,
          "type": 5,
          "rowName": "Pedro Martinez",
          "ranking": 45,
          "points": 1207,
          "previousRanking": 43,
          "previousPoints": 1207,
          "bestRanking": 40,
          "id": 898,
          "country": {
            "alpha2": "ES",
            "alpha3": "ESP",
            "name": "Spain",
            "slug": "spain"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Monfils G.",
            "slug": "monfils-gael",
            "shortName": "Monfils G.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 20797,
            "nameCode": "MON",
            "ranking": 46,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 14844,
            "country": {
              "alpha2": "FR",
              "alpha3": "FRA",
              "name": "France",
              "slug": "france"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041c\u043e\u043d\u0444\u0438\u0441, \u0413\u0430\u044d\u043b\u044c"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 22,
          "type": 5,
          "rowName": "Gael Monfils",
          "ranking": 46,
          "points": 1160,
          "previousRanking": 46,
          "previousPoints": 1160,
          "bestRanking": 6,
          "id": 985,
          "country": {
            "alpha2": "FR",
            "alpha3": "FRA",
            "name": "France",
            "slug": "france"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Giron M.",
            "slug": "giron-marcos",
            "shortName": "Giron M.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 4252,
            "nameCode": "GIR",
            "ranking": 47,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 42379,
            "country": {
              "alpha2": "US",
              "alpha3": "USA",
              "name": "USA",
              "slug": "usa"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041c\u0430\u0440\u043a\u043e\u0441 \u0416\u0438\u0440\u043e\u043d"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 29,
          "type": 5,
          "rowName": "Marcos Giron",
          "ranking": 47,
          "points": 1140,
          "previousRanking": 47,
          "previousPoints": 1150,
          "bestRanking": 37,
          "id": 854,
          "country": {
            "alpha2": "US",
            "alpha3": "USA",
            "name": "USA",
            "slug": "usa"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Marozsan F.",
            "slug": "marozsan-fabian",
            "shortName": "Marozsan F.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 6696,
            "nameCode": "MAR",
            "ranking": 48,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 218259,
            "country": {
              "alpha2": "HU",
              "alpha3": "HUN",
              "name": "Hungary",
              "slug": "hungary"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041c\u0430\u0440\u043e\u0436\u0430\u043d, \u0424\u0430\u0431\u0438\u0430\u043d"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 25,
          "type": 5,
          "rowName": "Fabian Marozsan",
          "ranking": 48,
          "points": 1120,
          "previousRanking": 48,
          "previousPoints": 1120,
          "bestRanking": 36,
          "id": 940,
          "country": {
            "alpha2": "HU",
            "alpha3": "HUN",
            "name": "Hungary",
            "slug": "hungary"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Sonego L.",
            "slug": "sonego-lorenzo",
            "shortName": "Sonego L.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 19509,
            "nameCode": "SON",
            "ranking": 49,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 104847,
            "country": {
              "alpha2": "IT",
              "alpha3": "ITA",
              "name": "Italy",
              "slug": "italy"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u0421\u043e\u043d\u0435\u0433\u043e, \u041b\u043e\u0440\u0435\u043d\u0446\u043e"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 31,
          "type": 5,
          "rowName": "Lorenzo Sonego",
          "ranking": 49,
          "points": 1081,
          "previousRanking": 50,
          "previousPoints": 1081,
          "bestRanking": 21,
          "id": 841,
          "country": {
            "alpha2": "IT",
            "alpha3": "ITA",
            "name": "Italy",
            "slug": "italy"
          },
          "rankingClass": "team"
        },
        {
          "team": {
            "name": "Mpetshi Perricard G.",
            "slug": "mpetshi-perricard-giovanni",
            "shortName": "Mpetshi Perricard G.",
            "gender": "M",
            "sport": {
              "name": "Tennis",
              "slug": "tennis",
              "id": 5
            },
            "userCount": 4924,
            "nameCode": "MPE",
            "ranking": 50,
            "disabled": false,
            "national": false,
            "type": 1,
            "id": 289146,
            "country": {
              "alpha2": "FR",
              "alpha3": "FRA",
              "name": "France",
              "slug": "france"
            },
            "teamColors": {
              "primary": "#374df5",
              "secondary": "#374df5",
              "text": "#ffffff"
            },
            "fieldTranslations": {
              "nameTranslation": {
                "ru": "\u041c\u043f\u0435\u0448\u0438 \u041f\u0435\u0440\u0440\u0438\u043a\u0430\u0440, \u0414\u0436\u043e\u0432\u0430\u043d\u043d\u0438"
              },
              "shortNameTranslation": {
    
              }
            }
          },
          "tournamentsPlayed": 29,
          "type": 5,
          "rowName": "Giovanni Mpetshi Perricard",
          "ranking": 50,
          "points": 1073,
          "previousRanking": 51,
          "previousPoints": 1073,
          "bestRanking": 44,
          "id": 1109,
          "country": {
            "alpha2": "FR",
            "alpha3": "FRA",
            "name": "France",
            "slug": "france"
          },
          "rankingClass": "team"
        }
          ]}
    
  )

})
