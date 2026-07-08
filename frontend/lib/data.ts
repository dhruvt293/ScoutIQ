export type Sport = "football"

export type Player = {
  id: string
  name: string
  club: string
  league: string
  nation: string
  position: string
  sport: Sport
  age: number
  rating: number
  potential: number
  value: string
  form: number
  initials: string
  accent: string
  photoUrl: string
  attributes: { label: string; value: number }[]
  strengths: string[]
  weaknesses: string[]
  summary: string
  style: string
  timeline: { season: string; rating: number; goals: number }[]
}

export const players: Player[] = [
  {
    id: "s-chhetri",
    name: "Sunil Chhetri",
    club: "Bengaluru FC",
    league: "ISL",
    nation: "India",
    position: "Forward",
    sport: "football",
    age: 39,
    rating: 89,
    potential: 89,
    value: "₹2.5 Cr",
    form: 8.7,
    initials: "SC",
    accent: "oklch(0.87 0.19 128)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_President%2C_Shri_Ram_Nath_Kovind_presenting_the_Major_Dhyan_Chand_Khel_Ratna_Award%2C_2021_to_Shri_Sunil_Chhetri_for_Football%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_13_November_2021_%28cropped%29.jpg/500px-thumbnail.jpg",
    attributes: [
      {
        label: "Finishing",
        value: 91
      },
      {
        label: "Pace",
        value: 75
      },
      {
        label: "Dribbling",
        value: 85
      },
      {
        label: "Passing",
        value: 79
      },
      {
        label: "Physical",
        value: 76
      },
      {
        label: "Vision",
        value: 82
      }
    ],
    strengths: [
      "Clinical finishing",
      "Leadership",
      "Movement off the ball",
      "Composure"
    ],
    weaknesses: [
      "Aerial duels",
      "Defensive contribution",
      "Pace"
    ],
    summary: "An elite forward and captain. Ranks in the top 3% for expected goals per 90 across ISL.",
    style: "Poacher / Inside Forward",
    timeline: [
      {
        season: "20/21",
        rating: 85,
        goals: 8
      },
      {
        season: "21/22",
        rating: 86,
        goals: 14
      },
      {
        season: "22/23",
        rating: 88,
        goals: 21
      },
      {
        season: "23/24",
        rating: 89,
        goals: 26
      },
      {
        season: "24/25",
        rating: 89,
        goals: 31
      }
    ]
  },
  {
    id: "l-chhangte",
    name: "Lallianzuala Chhangte",
    club: "Mumbai City FC",
    league: "ISL",
    nation: "India",
    position: "Winger",
    sport: "football",
    age: 26,
    rating: 86,
    potential: 90,
    value: "₹4.2 Cr",
    form: 8.2,
    initials: "LC",
    accent: "oklch(0.7 0.14 195)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Lallianzuala-Chhangte-1-scaled.jpg/500px-Lallianzuala-Chhangte-1-scaled.jpg",
    attributes: [
      {
        label: "Passing",
        value: 82
      },
      {
        label: "Vision",
        value: 80
      },
      {
        label: "Dribbling",
        value: 88
      },
      {
        label: "Physical",
        value: 75
      },
      {
        label: "Finishing",
        value: 85
      },
      {
        label: "Pace",
        value: 92
      }
    ],
    strengths: [
      "Explosive pace",
      "1v1 dribbling",
      "Chance creation",
      "Cut-backs"
    ],
    weaknesses: [
      "Aerial defending",
      "Physical strength"
    ],
    summary: "A high-ceiling wide creator with rare ball-carrying volume. Generates elite chance creation numbers.",
    style: "Ball-Carrying Winger",
    timeline: [
      {
        season: "20/21",
        rating: 76,
        goals: 3
      },
      {
        season: "21/22",
        rating: 80,
        goals: 5
      },
      {
        season: "22/23",
        rating: 83,
        goals: 6
      },
      {
        season: "23/24",
        rating: 85,
        goals: 7
      },
      {
        season: "24/25",
        rating: 86,
        goals: 10
      }
    ]
  },
  {
    id: "s-jhingan",
    name: "Sandesh Jhingan",
    club: "FC Goa",
    league: "ISL",
    nation: "India",
    position: "Defender",
    sport: "football",
    age: 30,
    rating: 84,
    potential: 85,
    value: "₹3.5 Cr",
    form: 8.9,
    initials: "SJ",
    accent: "oklch(0.72 0.14 55)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/Sandesh_Jjhingan_2019_AFC_AsianCup.jpg",
    attributes: [
      {
        label: "Tackling",
        value: 92
      },
      {
        label: "Pace",
        value: 70
      },
      {
        label: "Aerial",
        value: 88
      },
      {
        label: "Passing",
        value: 72
      },
      {
        label: "Positioning",
        value: 86
      },
      {
        label: "Physical",
        value: 90
      }
    ],
    strengths: [
      "Aerial dominance",
      "Aggression",
      "Tackling",
      "Leadership"
    ],
    weaknesses: [
      "Pace",
      "Ball-playing ability under high press"
    ],
    summary: "A dominant, physical centre-back who commands the penalty area. Provides a strong aerial presence.",
    style: "Stopper Defender",
    timeline: [
      {
        season: "21/22",
        rating: 82,
        goals: 1
      },
      {
        season: "22/23",
        rating: 83,
        goals: 0
      },
      {
        season: "23/24",
        rating: 84,
        goals: 2
      },
      {
        season: "24/25",
        rating: 84,
        goals: 1
      },
      {
        season: "25/26",
        rating: 84,
        goals: 1
      }
    ]
  },
  {
    id: "a-samad",
    name: "Sahal Abdul Samad",
    club: "Mohun Bagan SG",
    league: "ISL",
    nation: "India",
    position: "Midfielder",
    sport: "football",
    age: 27,
    rating: 83,
    potential: 88,
    value: "₹3.8 Cr",
    form: 8.5,
    initials: "SAS",
    accent: "oklch(0.87 0.19 128)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sahal_Abdul_Samad.jpg/500px-Sahal_Abdul_Samad.jpg",
    attributes: [
      {
        label: "Passing",
        value: 89
      },
      {
        label: "Dribbling",
        value: 90
      },
      {
        label: "Vision",
        value: 85
      },
      {
        label: "Pace",
        value: 80
      },
      {
        label: "Physical",
        value: 72
      },
      {
        label: "Finishing",
        value: 78
      }
    ],
    strengths: [
      "Dribbling in tight spaces",
      "Through balls",
      "Flair",
      "Creativity"
    ],
    weaknesses: [
      "Physicality",
      "Defensive tracking"
    ],
    summary: "A creative midfielder with magical dribbling skills. Can break lines with a single pass.",
    style: "Advanced Playmaker",
    timeline: [
      {
        season: "20/21",
        rating: 78,
        goals: 2
      },
      {
        season: "21/22",
        rating: 80,
        goals: 4
      },
      {
        season: "22/23",
        rating: 82,
        goals: 6
      },
      {
        season: "23/24",
        rating: 83,
        goals: 5
      },
      {
        season: "24/25",
        rating: 83,
        goals: 7
      }
    ]
  },
  {
    id: "a-thapa",
    name: "Anirudh Thapa",
    club: "Mohun Bagan SG",
    league: "ISL",
    nation: "India",
    position: "Midfielder",
    sport: "football",
    age: 26,
    rating: 82,
    potential: 87,
    value: "₹3.2 Cr",
    form: 7.9,
    initials: "AT",
    accent: "oklch(0.7 0.14 195)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Anirudh_Thapa_2019_%28cropped%29.jpg",
    attributes: [
      {
        label: "Tackling",
        value: 80
      },
      {
        label: "Positioning",
        value: 85
      },
      {
        label: "Passing",
        value: 86
      },
      {
        label: "Physical",
        value: 78
      },
      {
        label: "Stamina",
        value: 92
      },
      {
        label: "Vision",
        value: 82
      }
    ],
    strengths: [
      "Work rate",
      "Box-to-box movement",
      "Passing range",
      "Press resistance"
    ],
    weaknesses: [
      "Aerial duels",
      "Goal contribution"
    ],
    summary: "An energetic box-to-box engine who links defense and attack seamlessly.",
    style: "Box-to-Box Midfielder",
    timeline: [
      {
        season: "20/21",
        rating: 77,
        goals: 1
      },
      {
        season: "21/22",
        rating: 79,
        goals: 2
      },
      {
        season: "22/23",
        rating: 81,
        goals: 1
      },
      {
        season: "23/24",
        rating: 82,
        goals: 2
      },
      {
        season: "24/25",
        rating: 82,
        goals: 3
      }
    ]
  },
  {
    id: "j-lalpekhlua",
    name: "Jeje Lalpekhlua",
    club: "Mohun Bagan SG",
    league: "ISL",
    nation: "India",
    position: "Forward",
    sport: "football",
    age: 28,
    rating: 81,
    potential: 82,
    value: "₹2.9 Cr",
    form: 8.4,
    initials: "JL",
    accent: "oklch(0.72 0.14 55)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jeje_Lalpekhlua_MLA.jpg/500px-Jeje_Lalpekhlua_MLA.jpg",
    attributes: [
      {
        label: "Pace",
        value: 85
      },
      {
        label: "Finishing",
        value: 80
      },
      {
        label: "Aerial",
        value: 83
      },
      {
        label: "Physical",
        value: 86
      },
      {
        label: "Passing",
        value: 75
      },
      {
        label: "Dribbling",
        value: 78
      }
    ],
    strengths: [
      "Physicality",
      "Aerial ability",
      "Pace",
      "Versatility"
    ],
    weaknesses: [
      "1v1 in tight spaces",
      "Consistency"
    ],
    summary: "A physically robust forward who offers pace down the wing or a focal point centrally.",
    style: "Wide Target Man",
    timeline: [
      {
        season: "22/23",
        rating: 78,
        goals: 6
      },
      {
        season: "23/24",
        rating: 79,
        goals: 8
      },
      {
        season: "24/25",
        rating: 81,
        goals: 10
      },
      {
        season: "25/26",
        rating: 81,
        goals: 9
      },
      {
        season: "proj",
        rating: 82,
        goals: 0
      }
    ]
  },
  {
    id: "h-boumous",
    name: "Hugo Boumous",
    club: "Odisha FC",
    league: "ISL",
    nation: "France",
    position: "Midfielder",
    sport: "football",
    age: 28,
    rating: 88,
    potential: 88,
    value: "₹6.5 Cr",
    form: 9.1,
    initials: "HB",
    accent: "oklch(0.7 0.14 195)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Valenciennes_-_UNFP_FC_%2802-07-2016%29_64_%28cropped%29.jpg/500px-Valenciennes_-_UNFP_FC_%2802-07-2016%29_64_%28cropped%29.jpg",
    attributes: [
      {
        label: "Passing",
        value: 92
      },
      {
        label: "Dribbling",
        value: 88
      },
      {
        label: "Vision",
        value: 94
      },
      {
        label: "Pace",
        value: 78
      },
      {
        label: "Physical",
        value: 70
      },
      {
        label: "Finishing",
        value: 81
      }
    ],
    strengths: [
      "Final ball",
      "Vision",
      "Set pieces",
      "Ball retention"
    ],
    weaknesses: [
      "Defensive work rate",
      "Physical strength"
    ],
    summary: "One of the most creative players in ISL history. Consistently tops the charts for key passes and assists.",
    style: "Advanced Playmaker",
    timeline: [
      {
        season: "20/21",
        rating: 85,
        goals: 4
      },
      {
        season: "21/22",
        rating: 87,
        goals: 5
      },
      {
        season: "22/23",
        rating: 88,
        goals: 5
      },
      {
        season: "23/24",
        rating: 88,
        goals: 4
      },
      {
        season: "24/25",
        rating: 88,
        goals: 6
      }
    ]
  },
  {
    id: "r-krishna",
    name: "Roy Krishna",
    club: "Odisha FC",
    league: "ISL",
    nation: "Fiji",
    position: "Forward",
    sport: "football",
    age: 36,
    rating: 85,
    potential: 85,
    value: "₹2.0 Cr",
    form: 8,
    initials: "RK",
    accent: "oklch(0.87 0.19 128)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Roy_Krishna_2016.jpg",
    attributes: [
      {
        label: "Finishing",
        value: 89
      },
      {
        label: "Pace",
        value: 76
      },
      {
        label: "Dribbling",
        value: 80
      },
      {
        label: "Passing",
        value: 72
      },
      {
        label: "Physical",
        value: 85
      },
      {
        label: "Positioning",
        value: 90
      }
    ],
    strengths: [
      "Finishing",
      "Strength",
      "Hold-up play",
      "Experience"
    ],
    weaknesses: [
      "Pace dropping",
      "Stamina"
    ],
    summary: "A lethal finisher with incredible strength. Even at his age, remains a terrifying prospect for defenders.",
    style: "Target Man",
    timeline: [
      {
        season: "20/21",
        rating: 88,
        goals: 14
      },
      {
        season: "21/22",
        rating: 87,
        goals: 7
      },
      {
        season: "22/23",
        rating: 86,
        goals: 6
      },
      {
        season: "23/24",
        rating: 85,
        goals: 13
      },
      {
        season: "24/25",
        rating: 85,
        goals: 9
      }
    ]
  },
  {
    id: "g-stewart",
    name: "Greg Stewart",
    club: "Mumbai City FC",
    league: "ISL",
    nation: "Scotland",
    position: "Forward",
    sport: "football",
    age: 34,
    rating: 87,
    potential: 87,
    value: "₹4.0 Cr",
    form: 8.8,
    initials: "GS",
    accent: "oklch(0.72 0.14 55)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Greg_Stewart_2016.jpg/500px-Greg_Stewart_2016.jpg",
    attributes: [
      {
        label: "Finishing",
        value: 86
      },
      {
        label: "Pace",
        value: 75
      },
      {
        label: "Dribbling",
        value: 90
      },
      {
        label: "Passing",
        value: 89
      },
      {
        label: "Physical",
        value: 78
      },
      {
        label: "Vision",
        value: 88
      }
    ],
    strengths: [
      "Dribbling",
      "Playmaking",
      "Free kicks",
      "Long shots"
    ],
    weaknesses: [
      "Aerial ability",
      "Defensive tracking"
    ],
    summary: "A versatile attacker capable of playing anywhere across the front line. Magical left foot.",
    style: "Deep-Lying Forward",
    timeline: [
      {
        season: "21/22",
        rating: 88,
        goals: 10
      },
      {
        season: "22/23",
        rating: 88,
        goals: 8
      },
      {
        season: "23/24",
        rating: 87,
        goals: 6
      },
      {
        season: "24/25",
        rating: 87,
        goals: 5
      },
      {
        season: "proj",
        rating: 87,
        goals: 5
      }
    ]
  },
  {
    id: "a-mishra",
    name: "Akash Mishra",
    club: "Mumbai City FC",
    league: "ISL",
    nation: "India",
    position: "Defender",
    sport: "football",
    age: 22,
    rating: 82,
    potential: 89,
    value: "₹3.5 Cr",
    form: 8.1,
    initials: "AM",
    accent: "oklch(0.7 0.14 195)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Akash_Mishra_in_2022.jpg/500px-Akash_Mishra_in_2022.jpg",
    attributes: [
      {
        label: "Tackling",
        value: 81
      },
      {
        label: "Pace",
        value: 88
      },
      {
        label: "Stamina",
        value: 91
      },
      {
        label: "Crossing",
        value: 76
      },
      {
        label: "Positioning",
        value: 79
      },
      {
        label: "Physical",
        value: 75
      }
    ],
    strengths: [
      "Pace",
      "Overlapping runs",
      "Stamina",
      "1v1 Defending"
    ],
    weaknesses: [
      "Aerial duels",
      "Final third decision making"
    ],
    summary: "A modern attacking full-back with an engine that allows him to bomb up and down the flank all game.",
    style: "Attacking Full-Back",
    timeline: [
      {
        season: "20/21",
        rating: 72,
        goals: 0
      },
      {
        season: "21/22",
        rating: 76,
        goals: 2
      },
      {
        season: "22/23",
        rating: 80,
        goals: 0
      },
      {
        season: "23/24",
        rating: 81,
        goals: 1
      },
      {
        season: "24/25",
        rating: 82,
        goals: 1
      }
    ]
  },
  {
    id: "l-colaco",
    name: "Liston Colaco",
    club: "Mohun Bagan SG",
    league: "ISL",
    nation: "India",
    position: "Winger",
    sport: "football",
    age: 25,
    rating: 81,
    potential: 85,
    value: "₹3.0 Cr",
    form: 7.5,
    initials: "LC",
    accent: "oklch(0.87 0.19 128)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Liston_Colaco.jpg/500px-Liston_Colaco.jpg",
    attributes: [
      {
        label: "Pace",
        value: 91
      },
      {
        label: "Dribbling",
        value: 84
      },
      {
        label: "Finishing",
        value: 77
      },
      {
        label: "Passing",
        value: 71
      },
      {
        label: "Physical",
        value: 70
      },
      {
        label: "Long Shots",
        value: 83
      }
    ],
    strengths: [
      "Pace",
      "Long shots",
      "Direct running",
      "Flair"
    ],
    weaknesses: [
      "Decision making",
      "Consistency",
      "Defensive contribution"
    ],
    summary: "An electrifying winger known for spectacular long-range goals and rapid counter-attacks.",
    style: "Inside Forward",
    timeline: [
      {
        season: "20/21",
        rating: 73,
        goals: 2
      },
      {
        season: "21/22",
        rating: 81,
        goals: 8
      },
      {
        season: "22/23",
        rating: 82,
        goals: 1
      },
      {
        season: "23/24",
        rating: 81,
        goals: 4
      },
      {
        season: "24/25",
        rating: 81,
        goals: 3
      }
    ]
  },
  {
    id: "g-sandhu",
    name: "Gurpreet Singh Sandhu",
    club: "Bengaluru FC",
    league: "ISL",
    nation: "India",
    position: "Goalkeeper",
    sport: "football",
    age: 32,
    rating: 85,
    potential: 85,
    value: "₹2.8 Cr",
    form: 8.3,
    initials: "GS",
    accent: "oklch(0.7 0.14 195)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Gurpreet_Singh_Sandhu_2019_AFC_Asian_Cup.jpg/500px-Gurpreet_Singh_Sandhu_2019_AFC_Asian_Cup.jpg",
    attributes: [
      {
        label: "Handling",
        value: 86
      },
      {
        label: "Reflexes",
        value: 84
      },
      {
        label: "Positioning",
        value: 85
      },
      {
        label: "Distribution",
        value: 75
      },
      {
        label: "Aerial",
        value: 90
      },
      {
        label: "Command",
        value: 88
      }
    ],
    strengths: [
      "Shot stopping",
      "Command of area",
      "Penalty saves",
      "Aerial dominance"
    ],
    weaknesses: [
      "Sweeper keeping",
      "Distribution under pressure"
    ],
    summary: "India's undisputed number one. A towering presence in goal who excels at shot-stopping and claiming crosses.",
    style: "Traditional Goalkeeper",
    timeline: [
      {
        season: "20/21",
        rating: 84,
        goals: 0
      },
      {
        season: "21/22",
        rating: 83,
        goals: 0
      },
      {
        season: "22/23",
        rating: 85,
        goals: 0
      },
      {
        season: "23/24",
        rating: 85,
        goals: 0
      },
      {
        season: "24/25",
        rating: 85,
        goals: 0
      }
    ]
  },
  {
    id: "b-fernandes",
    name: "Brandon Fernandes",
    club: "FC Goa",
    league: "ISL",
    nation: "India",
    position: "Midfielder",
    sport: "football",
    age: 29,
    rating: 83,
    potential: 83,
    value: "₹2.2 Cr",
    form: 7.8,
    initials: "BF",
    accent: "oklch(0.72 0.14 55)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Brandon_3.jpg/500px-Brandon_3.jpg",
    attributes: [
      {
        label: "Passing",
        value: 88
      },
      {
        label: "Vision",
        value: 87
      },
      {
        label: "Crossing",
        value: 85
      },
      {
        label: "Free Kicks",
        value: 89
      },
      {
        label: "Pace",
        value: 68
      },
      {
        label: "Physical",
        value: 65
      }
    ],
    strengths: [
      "Set pieces",
      "Vision",
      "Long passing",
      "Crossing"
    ],
    weaknesses: [
      "Pace",
      "Physicality",
      "Injury prone"
    ],
    summary: "The finest Indian set-piece specialist. Dictates play from deep or advanced areas with exceptional vision.",
    style: "Deep-Lying Playmaker",
    timeline: [
      {
        season: "20/21",
        rating: 81,
        goals: 0
      },
      {
        season: "21/22",
        rating: 82,
        goals: 0
      },
      {
        season: "22/23",
        rating: 83,
        goals: 3
      },
      {
        season: "23/24",
        rating: 83,
        goals: 1
      },
      {
        season: "24/25",
        rating: 83,
        goals: 2
      }
    ]
  },
  {
    id: "d-petratos",
    name: "Dimitri Petratos",
    club: "Mohun Bagan SG",
    league: "ISL",
    nation: "Australia",
    position: "Forward",
    sport: "football",
    age: 31,
    rating: 88,
    potential: 88,
    value: "₹5.5 Cr",
    form: 9,
    initials: "DP",
    accent: "oklch(0.87 0.19 128)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dimitri_Petratos.jpg/500px-Dimitri_Petratos.jpg",
    attributes: [
      {
        label: "Finishing",
        value: 87
      },
      {
        label: "Passing",
        value: 85
      },
      {
        label: "Dribbling",
        value: 83
      },
      {
        label: "Long Shots",
        value: 92
      },
      {
        label: "Physical",
        value: 80
      },
      {
        label: "Pace",
        value: 76
      }
    ],
    strengths: [
      "Long shots",
      "Link-up play",
      "Set pieces",
      "Big game player"
    ],
    weaknesses: [
      "Aerial duels"
    ],
    summary: "A complete forward who can score from anywhere and create for others. Instrumental in title-winning runs.",
    style: "Complete Forward",
    timeline: [
      {
        season: "22/23",
        rating: 86,
        goals: 12
      },
      {
        season: "23/24",
        rating: 88,
        goals: 10
      },
      {
        season: "24/25",
        rating: 88,
        goals: 8
      },
      {
        season: "25/26",
        rating: 88,
        goals: 11
      },
      {
        season: "proj",
        rating: 88,
        goals: 0
      }
    ]
  },
  {
    id: "a-ali",
    name: "Anwar Ali",
    club: "Mohun Bagan SG",
    league: "ISL",
    nation: "India",
    position: "Defender",
    sport: "football",
    age: 23,
    rating: 81,
    potential: 88,
    value: "₹3.8 Cr",
    form: 8.2,
    initials: "AA",
    accent: "oklch(0.7 0.14 195)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Anwar_Ali_India_U17_World_Cup.jpg",
    attributes: [
      {
        label: "Tackling",
        value: 82
      },
      {
        label: "Passing",
        value: 84
      },
      {
        label: "Positioning",
        value: 80
      },
      {
        label: "Aerial",
        value: 83
      },
      {
        label: "Physical",
        value: 81
      },
      {
        label: "Pace",
        value: 74
      }
    ],
    strengths: [
      "Ball-playing ability",
      "Long passing",
      "Interceptions",
      "Composure"
    ],
    weaknesses: [
      "Occasional lapses in concentration"
    ],
    summary: "The prototypical modern ball-playing centre-back. Exceptional ability to launch attacks from deep.",
    style: "Ball-Playing Defender",
    timeline: [
      {
        season: "21/22",
        rating: 72,
        goals: 0
      },
      {
        season: "22/23",
        rating: 78,
        goals: 1
      },
      {
        season: "23/24",
        rating: 80,
        goals: 0
      },
      {
        season: "24/25",
        rating: 81,
        goals: 3
      },
      {
        season: "proj",
        rating: 84,
        goals: 0
      }
    ]
  },
  {
    id: "j-singh",
    name: "Jeakson Singh",
    club: "Kerala Blasters",
    league: "ISL",
    nation: "India",
    position: "Midfielder",
    sport: "football",
    age: 22,
    rating: 79,
    potential: 86,
    value: "₹2.5 Cr",
    form: 7.7,
    initials: "JS",
    accent: "oklch(0.72 0.14 55)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Jeakson_%28cropped%29.jpg/500px-Jeakson_%28cropped%29.jpg",
    attributes: [
      {
        label: "Tackling",
        value: 82
      },
      {
        label: "Positioning",
        value: 84
      },
      {
        label: "Passing",
        value: 78
      },
      {
        label: "Physical",
        value: 81
      },
      {
        label: "Aerial",
        value: 80
      },
      {
        label: "Pace",
        value: 68
      }
    ],
    strengths: [
      "Interceptions",
      "Positional awareness",
      "Aerial duels",
      "Breaking play"
    ],
    weaknesses: [
      "Progressive passing",
      "Pace"
    ],
    summary: "A reliable defensive midfield anchor. Protects the back four efficiently and excels in breaking up opposition attacks.",
    style: "Anchor Man",
    timeline: [
      {
        season: "20/21",
        rating: 71,
        goals: 1
      },
      {
        season: "21/22",
        rating: 75,
        goals: 1
      },
      {
        season: "22/23",
        rating: 78,
        goals: 0
      },
      {
        season: "23/24",
        rating: 79,
        goals: 0
      },
      {
        season: "24/25",
        rating: 79,
        goals: 0
      }
    ]
  },
  {
    id: "c-goddard",
    name: "Cy Goddard",
    club: "Odisha FC",
    league: "ISL",
    nation: "Japan",
    position: "Midfielder",
    sport: "football",
    age: 27,
    rating: 80,
    potential: 82,
    value: "₹1.8 Cr",
    form: 7.9,
    initials: "CG",
    accent: "oklch(0.87 0.19 128)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Cy_Goddard.jpg/500px-Cy_Goddard.jpg",
    attributes: [
      {
        label: "Dribbling",
        value: 85
      },
      {
        label: "Passing",
        value: 81
      },
      {
        label: "Pace",
        value: 82
      },
      {
        label: "Vision",
        value: 78
      },
      {
        label: "Finishing",
        value: 68
      },
      {
        label: "Physical",
        value: 60
      }
    ],
    strengths: [
      "Agility",
      "Close control",
      "Transitions",
      "Work rate"
    ],
    weaknesses: [
      "Finishing",
      "Aerial duels"
    ],
    summary: "A dynamic attacking midfielder who thrives in transition and tight spaces.",
    style: "Advanced Playmaker",
    timeline: [
      {
        season: "20/21",
        rating: 76,
        goals: 1
      },
      {
        season: "21/22",
        rating: 78,
        goals: 2
      },
      {
        season: "22/23",
        rating: 79,
        goals: 1
      },
      {
        season: "23/24",
        rating: 80,
        goals: 3
      },
      {
        season: "24/25",
        rating: 80,
        goals: 1
      }
    ]
  },
  {
    id: "u-singh",
    name: "Udanta Singh",
    club: "East Bengal FC",
    league: "ISL",
    nation: "India",
    position: "Winger",
    sport: "football",
    age: 28,
    rating: 80,
    potential: 80,
    value: "₹2.1 Cr",
    form: 8.2,
    initials: "US",
    accent: "oklch(0.7 0.14 195)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Uddanta_Singh_2019.jpg/500px-Uddanta_Singh_2019.jpg",
    attributes: [
      {
        label: "Pace",
        value: 88
      },
      {
        label: "Crossing",
        value: 80
      },
      {
        label: "Dribbling",
        value: 79
      },
      {
        label: "Finishing",
        value: 76
      },
      {
        label: "Physical",
        value: 72
      },
      {
        label: "Work Rate",
        value: 85
      }
    ],
    strengths: [
      "Pace",
      "Crossing",
      "Defensive work rate",
      "Directness"
    ],
    weaknesses: [
      "Weak foot",
      "Composure"
    ],
    summary: "A hard-working traditional winger who excels at beating his man and delivering crosses into the box.",
    style: "Traditional Winger",
    timeline: [
      {
        season: "21/22",
        rating: 75,
        goals: 1
      },
      {
        season: "22/23",
        rating: 79,
        goals: 6
      },
      {
        season: "23/24",
        rating: 80,
        goals: 5
      },
      {
        season: "24/25",
        rating: 80,
        goals: 4
      },
      {
        season: "proj",
        rating: 80,
        goals: 0
      }
    ]
  },
  {
    id: "p-kotal",
    name: "Pritam Kotal",
    club: "Odisha FC",
    league: "ISL",
    nation: "India",
    position: "Defender",
    sport: "football",
    age: 36,
    rating: 84,
    potential: 84,
    value: "₹1.5 Cr",
    form: 8.5,
    initials: "PK",
    accent: "oklch(0.72 0.14 55)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Pritam_Kotal_2019.jpg",
    attributes: [
      {
        label: "Aerial",
        value: 95
      },
      {
        label: "Tackling",
        value: 86
      },
      {
        label: "Physical",
        value: 92
      },
      {
        label: "Positioning",
        value: 85
      },
      {
        label: "Passing",
        value: 70
      },
      {
        label: "Pace",
        value: 55
      }
    ],
    strengths: [
      "Aerial dominance",
      "Set-piece threat",
      "Strength",
      "Experience"
    ],
    weaknesses: [
      "Pace",
      "Agility"
    ],
    summary: "The highest-scoring defender in ISL history. An absolute colossus in both penalty boxes.",
    style: "Target Man / Stopper",
    timeline: [
      {
        season: "20/21",
        rating: 86,
        goals: 4
      },
      {
        season: "21/22",
        rating: 85,
        goals: 3
      },
      {
        season: "22/23",
        rating: 84,
        goals: 0
      },
      {
        season: "23/24",
        rating: 84,
        goals: 4
      },
      {
        season: "24/25",
        rating: 84,
        goals: 3
      }
    ]
  },
  {
    id: "b-bhutia",
    name: "Bhaichung Bhutia",
    club: "Bengaluru FC",
    league: "ISL",
    nation: "India",
    position: "Defender",
    sport: "football",
    age: 28,
    rating: 79,
    potential: 80,
    value: "₹1.9 Cr",
    form: 7.6,
    initials: "BB",
    accent: "oklch(0.87 0.19 128)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Bhaichung_Bhutia_at_the_NDTV_Marks_for_Sports_event_21.jpg/500px-Bhaichung_Bhutia_at_the_NDTV_Marks_for_Sports_event_21.jpg",
    attributes: [
      {
        label: "Pace",
        value: 85
      },
      {
        label: "Stamina",
        value: 88
      },
      {
        label: "Tackling",
        value: 78
      },
      {
        label: "Crossing",
        value: 76
      },
      {
        label: "Positioning",
        value: 75
      },
      {
        label: "Physical",
        value: 74
      }
    ],
    strengths: [
      "Work rate",
      "Versatility",
      "Pace",
      "Stamina"
    ],
    weaknesses: [
      "Final third delivery",
      "1v1 Defending against elite wingers"
    ],
    summary: "A legend of Indian football. Exceptional finisher and leader on the pitch.",
    style: "Wing-Back",
    timeline: [
      {
        season: "21/22",
        rating: 75,
        goals: 1
      },
      {
        season: "22/23",
        rating: 78,
        goals: 0
      },
      {
        season: "23/24",
        rating: 79,
        goals: 0
      },
      {
        season: "24/25",
        rating: 79,
        goals: 1
      },
      {
        season: "proj",
        rating: 79,
        goals: 0
      }
    ]
  },
  {
    id: "j-maclaren",
    name: "Jamie Maclaren",
    club: "Mohun Bagan SG",
    league: "ISL",
    nation: "Australia",
    position: "Forward",
    sport: "football",
    age: 30,
    rating: 86,
    potential: 86,
    value: "₹6.0 Cr",
    form: 8.6,
    initials: "JM",
    accent: "oklch(0.7 0.14 195)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Jamie_Maclaren_World_Cup_2018.jpg",
    attributes: [
      {
        label: "Finishing",
        value: 92
      },
      {
        label: "Positioning",
        value: 94
      },
      {
        label: "Pace",
        value: 82
      },
      {
        label: "Dribbling",
        value: 78
      },
      {
        label: "Physical",
        value: 75
      },
      {
        label: "Passing",
        value: 70
      }
    ],
    strengths: [
      "Poaching",
      "Movement off the ball",
      "One-touch finishing",
      "Consistency"
    ],
    weaknesses: [
      "Aerial duels",
      "Hold-up play"
    ],
    summary: "An elite poacher whose movement inside the box is second to none. Guarantees goals if provided service.",
    style: "Poacher",
    timeline: [
      {
        season: "22/23",
        rating: 85,
        goals: 24
      },
      {
        season: "23/24",
        rating: 86,
        goals: 10
      },
      {
        season: "24/25",
        rating: 86,
        goals: 12
      },
      {
        season: "25/26",
        rating: 86,
        goals: 8
      },
      {
        season: "proj",
        rating: 86,
        goals: 0
      }
    ]
  },
  {
    id: "a-kuruniyan",
    name: "Ashique Kuruniyan",
    club: "Mohun Bagan SG",
    league: "ISL",
    nation: "India",
    position: "Winger",
    sport: "football",
    age: 26,
    rating: 78,
    potential: 82,
    value: "₹2.0 Cr",
    form: 7.2,
    initials: "AK",
    accent: "oklch(0.72 0.14 55)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ashique_Kuruniyan.jpg/500px-Ashique_Kuruniyan.jpg",
    attributes: [
      {
        label: "Pace",
        value: 92
      },
      {
        label: "Physical",
        value: 84
      },
      {
        label: "Dribbling",
        value: 81
      },
      {
        label: "Crossing",
        value: 72
      },
      {
        label: "Finishing",
        value: 65
      },
      {
        label: "Tackling",
        value: 75
      }
    ],
    strengths: [
      "Pace",
      "Power",
      "Direct running",
      "Defensive tracking"
    ],
    weaknesses: [
      "End product",
      "Decision making",
      "Injury history"
    ],
    summary: "A powerhouse wide player who can bully defenders with his combination of raw pace and physical strength.",
    style: "Direct Winger / Wing-Back",
    timeline: [
      {
        season: "21/22",
        rating: 77,
        goals: 1
      },
      {
        season: "22/23",
        rating: 79,
        goals: 0
      },
      {
        season: "23/24",
        rating: 78,
        goals: 0
      },
      {
        season: "24/25",
        rating: 78,
        goals: 1
      },
      {
        season: "proj",
        rating: 78,
        goals: 0
      }
    ]
  },
  {
    id: "r-ali",
    name: "Rahim Ali",
    club: "Chennaiyin FC",
    league: "ISL",
    nation: "India",
    position: "Forward",
    sport: "football",
    age: 23,
    rating: 76,
    potential: 83,
    value: "₹1.5 Cr",
    form: 7.8,
    initials: "RA",
    accent: "oklch(0.87 0.19 128)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Rahim_Ali_in_2022.jpg/500px-Rahim_Ali_in_2022.jpg",
    attributes: [
      {
        label: "Physical",
        value: 85
      },
      {
        label: "Pace",
        value: 80
      },
      {
        label: "Finishing",
        value: 72
      },
      {
        label: "Link-up",
        value: 75
      },
      {
        label: "Aerial",
        value: 76
      },
      {
        label: "Dribbling",
        value: 71
      }
    ],
    strengths: [
      "Hold-up play",
      "Physicality",
      "Work rate"
    ],
    weaknesses: [
      "Clinical finishing",
      "First touch"
    ],
    summary: "A robust central forward who excels at holding the ball up and bringing others into play. Needs refinement in front of goal.",
    style: "Target Man",
    timeline: [
      {
        season: "21/22",
        rating: 72,
        goals: 2
      },
      {
        season: "22/23",
        rating: 75,
        goals: 3
      },
      {
        season: "23/24",
        rating: 76,
        goals: 3
      },
      {
        season: "24/25",
        rating: 76,
        goals: 4
      },
      {
        season: "proj",
        rating: 80,
        goals: 0
      }
    ]
  },
  {
    id: "s-singh",
    name: "Subhasish Bose",
    club: "Mohun Bagan SG",
    league: "ISL",
    nation: "India",
    position: "Defender",
    sport: "football",
    age: 28,
    rating: 81,
    potential: 81,
    value: "₹2.4 Cr",
    form: 8.3,
    initials: "SB",
    accent: "oklch(0.7 0.14 195)",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/India_NT_at_2019_AFC_Asian_Cup_%28cropped%29.jpg",
    attributes: [
      {
        label: "Tackling",
        value: 85
      },
      {
        label: "Positioning",
        value: 82
      },
      {
        label: "Aerial",
        value: 80
      },
      {
        label: "Physical",
        value: 83
      },
      {
        label: "Stamina",
        value: 85
      },
      {
        label: "Crossing",
        value: 70
      }
    ],
    strengths: [
      "1v1 Defending",
      "Aerial duels",
      "Consistency",
      "Leadership"
    ],
    weaknesses: [
      "Attacking contribution",
      "Pace"
    ],
    summary: "Mr. Reliable. A defensively sound full-back who rarely gets beaten and provides excellent cover.",
    style: "Defensive Full-Back",
    timeline: [
      {
        season: "21/22",
        rating: 79,
        goals: 1
      },
      {
        season: "22/23",
        rating: 80,
        goals: 1
      },
      {
        season: "23/24",
        rating: 81,
        goals: 1
      },
      {
        season: "24/25",
        rating: 81,
        goals: 2
      },
      {
        season: "proj",
        rating: 81,
        goals: 0
      }
    ]
  }
]

export function getPlayer(id: string) {
  return players.find((p) => p.id === id) ?? players[0]
}

export const dashboardStats = [
  { label: "Players Analysed", value: 12480, suffix: "", delta: "+12.4%", up: true },
  { label: "AI Reports Generated", value: 3126, suffix: "", delta: "+8.1%", up: true },
  { label: "Predictions", value: 8742, suffix: "", delta: "+19.3%", up: true },
  { label: "Similarity Searches", value: 5310, suffix: "", delta: "+4.6%", up: true },
  { label: "Accuracy Score", value: 94.2, suffix: "%", delta: "+1.2%", up: true },
]

export const performanceTimeline = [
  { month: "Aug", rating: 78, xg: 0.4, form: 72 },
  { month: "Sep", rating: 80, xg: 0.5, form: 76 },
  { month: "Oct", rating: 82, xg: 0.6, form: 79 },
  { month: "Nov", rating: 81, xg: 0.55, form: 77 },
  { month: "Dec", rating: 85, xg: 0.7, form: 83 },
  { month: "Jan", rating: 86, xg: 0.72, form: 85 },
  { month: "Feb", rating: 88, xg: 0.81, form: 88 },
  { month: "Mar", rating: 89, xg: 0.85, form: 90 },
]

export const shotMap = [
  { x: 82, y: 42, xg: 0.62, goal: true },
  { x: 76, y: 55, xg: 0.31, goal: false },
  { x: 88, y: 50, xg: 0.74, goal: true },
  { x: 70, y: 35, xg: 0.18, goal: false },
  { x: 84, y: 62, xg: 0.44, goal: true },
  { x: 66, y: 48, xg: 0.12, goal: false },
  { x: 90, y: 46, xg: 0.55, goal: false },
  { x: 79, y: 30, xg: 0.28, goal: true },
  { x: 73, y: 66, xg: 0.22, goal: false },
  { x: 86, y: 38, xg: 0.48, goal: false },
]

export const seasonComparison = [
  { metric: "Goals", current: 31, previous: 26 },
  { metric: "Assists", current: 12, previous: 9 },
  { metric: "xG", current: 28, previous: 22 },
  { metric: "Key Passes", current: 54, previous: 41 },
  { metric: "Dribbles", current: 88, previous: 72 },
]

export const featureImportance = [
  { feature: "Minutes Played", weight: 0.92 },
  { feature: "xG per 90", weight: 0.87 },
  { feature: "Age Curve", weight: 0.81 },
  { feature: "Injury History", weight: 0.68 },
  { feature: "League Strength", weight: 0.63 },
  { feature: "Physical Load", weight: 0.55 },
]

export const testimonials = [
  {
    quote:
      "ScoutIQ compressed our shortlisting from weeks to hours. The similarity search surfaced two signings our analysts had completely missed.",
    name: "Ravi Kumar",
    role: "Technical Director, Bengaluru FC",
    initials: "RK",
  },
  {
    quote:
      "The predictive injury modeling alone changed how we manage minutes. It has quietly become the most-used tool in our department.",
    name: "Vikram Singh",
    role: "Head of Performance, Mumbai City FC",
    initials: "VS",
  },
  {
    quote:
      "Reports that used to take an analyst a full day are now generated in seconds — and they read like our best scouts wrote them.",
    name: "Arjun Nair",
    role: "Talent Lead, Kerala Blasters",
    initials: "AN",
  },
  {
    quote:
      "The knowledge graph gives our recruitment meetings a shared source of truth. Everyone finally works from the same intelligence.",
    name: "Igor Stimac",
    role: "Head Coach, Indian National Team",
    initials: "IS",
  },
]

export const pricing = [
  {
    name: "Scout",
    price: "₹14,999",
    period: "/mo",
    description: "For independent scouts and agents building shortlists.",
    features: ["Up to 500 player profiles", "Standard analytics dashboards", "50 AI reports / month", "Email support"],
    cta: "Start Scouting",
    featured: false,
  },
  {
    name: "Club",
    price: "₹69,000",
    period: "/mo",
    description: "For recruitment departments and analysis teams.",
    features: [
      "Unlimited player profiles",
      "Advanced analytics & heatmaps",
      "Unlimited AI reports",
      "Predictive modeling suite",
      "Knowledge graph access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For federations and multi-club organizations.",
    features: [
      "Everything in Club",
      "Custom data integrations",
      "Dedicated success manager",
      "SSO & advanced security",
      "On-prem deployment options",
    ],
    cta: "Contact Sales",
    featured: false,
  },
]

export const faqs = [
  {
    q: "Which sports does ScoutIQ support?",
    a: "ScoutIQ currently supports football, with phase-adjusted models tailored specifically for the Indian football ecosystem like ISL and I-League.",
  },
  {
    q: "Where does your data come from?",
    a: "We aggregate licensed event and tracking data from official league providers, combined with our proprietary AI feature-engineering pipeline for a unified intelligence layer.",
  },
  {
    q: "How accurate are the predictions?",
    a: "Our current market-value and performance models hold a 94.2% back-tested accuracy score across the last three seasons. Every prediction ships with a confidence interval and feature attribution.",
  },
  {
    q: "Can I export scouting reports?",
    a: "Yes. Every AI-generated report can be exported to branded PDF, shared via secure link, or pushed into your existing recruitment workflow.",
  },
  {
    q: "Do you offer a free trial?",
    a: "The Club plan includes a 14-day free trial with full access to analytics, predictions and unlimited AI reports. No credit card required.",
  },
]

export const knowledgeNodes = [
  { id: "chhetri", label: "S. Chhetri", type: "player", x: 50, y: 45, r: 26 },
  { id: "bfc", label: "Bengaluru FC", type: "club", x: 24, y: 26, r: 22 },
  { id: "isl", label: "ISL", type: "league", x: 14, y: 60, r: 20 },
  { id: "forward", label: "Forward", type: "position", x: 46, y: 80, r: 18 },
  { id: "india", label: "India NT", type: "club", x: 74, y: 22, r: 20 },
  { id: "chhangte", label: "L. Chhangte", type: "player", x: 82, y: 58, r: 22 },
  { id: "mcfc", label: "Mumbai City FC", type: "club", x: 88, y: 82, r: 18 },
  { id: "jhingan", label: "S. Jhingan", type: "player", x: 30, y: 70, r: 20 },
]

export const knowledgeLinks = [
  ["chhetri", "bfc"],
  ["chhetri", "forward"],
  ["chhetri", "india"],
  ["bfc", "isl"],
  ["chhetri", "chhangte"],
  ["chhangte", "mcfc"],
  ["jhingan", "forward"], 
  ["jhingan", "isl"],
  ["chhangte", "forward"],
]
