part of marvel_cinema;

Map<String, dynamic> tvShow = {
  "details": {
    "genres": ["Action", "Sci-Fi", "Marvel"],
    "cast": [
      {
        "person": {"name": "Robert Downey Jr."},
        "character": {"name": "Tony Stark / Iron Man"}
      },
      {
        "person": {"name": "Chris Evans"},
        "character": {"name": "Steve Rogers / Captain America"}
      },
      {
        "person": {"name": "Chris Hemsworth"},
        "character": {"name": "Thor"}
      },
      {
        "person": {"name": "Scarlett Johansson"},
        "character": {"name": "Natasha Romanoff / Black Widow"}
      }
    ],
    "episodes": [
      {
        "id": 1,
        "name": "Full Movie Trailer",
        "season": 1,
        "number": 1,
        "runtime": 180,
        "image": "assets/images/end_game.jpg",
        "summary": "Watch the official trailer for this Marvel blockbuster."
      }
    ],
    "year": "2019-04-26",
    "description": "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to restore balance to the universe."
  },
  "id": 101,
  "name": "Avengers: Endgame",
  "image": "assets/images/end_game.jpg",
  "backdrop": "assets/images/end_game.jpg",
  "videoUrl": "assets/video/end_game.mp4"
};

// Marvel Series Data with TMDB Posters & Hindi Clips
List<Map<String, dynamic>> marvelSeries = [
  {
    "id": 201,
    "name": "WandaVision",
    "image": "https://image.tmdb.org/t/p/w500/glKDfhp6btG796vXoJu79JyYpX2.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/57v9SJZx9YIIvS9S9S9S9S9S9S9S9.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=sj9J2pS0w8U",
    "details": {
      "genres": ["Sci-Fi", "Mystery", "Drama"],
      "cast": [], "year": "2021-01-15", "description": ""
    }
  },
  {
    "id": 202,
    "name": "Loki",
    "image": "https://image.tmdb.org/t/p/w500/voHUpf20mZp76q9Bt1vYH8p9vS6.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/tNWCi2yQ1n1K79Et9t5do3322p.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=W86cTI4fV6w",
     "details": {
      "genres": ["Sci-Fi", "Action", "Adventure"],
      "cast": [], "year": "2021-06-09", "description": ""
    }
  },
  {
    "id": 203,
    "name": "The Falcon and the Winter Soldier",
    "image": "https://image.tmdb.org/t/p/w500/6YKW74y81S78779X5605655.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=IWBsDbxfzzc",
    "details": {
      "genres": ["Action", "Adventure", "Drama"],
      "cast": [], "year": "2021-03-19", "description": ""
    }
  },
  {
    "id": 207,
    "name": "Hawkeye",
    "image": "https://image.tmdb.org/t/p/w500/pqvBF13CgftV3P0Tqs114t3g3M.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/1R68vl3d5s86JsS2GkdnV8k3p3.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=5VYb3B1ET3U",
    "details": {
      "genres": ["Action", "Adventure", "Drama"],
      "cast": [], "year": "2021-11-24", "description": ""
    }
  },
  {
    "id": 204,
    "name": "Moon Knight",
    "image": "https://image.tmdb.org/t/p/w500/v69mPnuP5C0S9vmo9Ju9ST7S9S.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/b264gnN6C0L6s9i1L2H9JEp24N2.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=x7Krla_UxRg",
    "details": {
      "genres": ["Action", "Adventure", "Fantasy"],
      "cast": [], "year": "2022-03-30", "description": ""
    }
  },
  {
    "id": 206,
    "name": "Ms. Marvel",
    "image": "https://image.tmdb.org/t/p/w500/cd3OmffwJp2a4L9yT47B2wT3o2s.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/9PFon82sD2s2a1q7p844kGq3r4D.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=m9EX0f6V11Y",
    "details": {
      "genres": ["Action", "Adventure", "Comedy"],
      "cast": [], "year": "2022-06-08", "description": ""
    }
  },
  {
    "id": 205,
    "name": "She-Hulk: Attorney at Law",
    "image": "https://image.tmdb.org/t/p/w500/h9S99793p9YIIvS9S9S9S9S9S9S.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/jTNEp4gP0yIMR3i28PXOoP8d2aW.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=u7JsUqLp68E",
    "details": {
      "genres": ["Comedy", "Sci-Fi"],
      "cast": [], "year": "2022-08-18", "description": ""
    }
  },
  {
    "id": 208,
    "name": "Secret Invasion",
    "image": "https://image.tmdb.org/t/p/w500/f5ZMzzCvt2IZ6UebAWV0iGzJS54.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/1F2UR9lgIoi3u29a134A5A4eQJ.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=Tp_YZuqBKWk",
    "details": {
      "genres": ["Action", "Adventure", "Thriller"],
      "cast": [], "year": "2023-06-21", "description": ""
    }
  },
  {
    "id": 209,
    "name": "Echo",
    "image": "https://image.tmdb.org/t/p/w500/e9YIIvS9S9S9S9S9S9S9S9S.jpg",
    "backdrop": "https://image.tmdb.org/t/p/original/wMUPT99gw6IB9OVvC268t3gKk4a.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=Tp_YZNBhw",
    "details": {
      "genres": ["Action", "Adventure", "Crime"],
      "cast": [], "year": "2024-01-09", "description": ""
    }
  }
];
