export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
}

export interface MovieListResponse {
  results: Movie[]
  total_pages: number
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCountry {
  name: string
}

export interface SpokenLanguage {
  english_name: string
}

export interface MovieDetail extends Movie {
  original_title: string
  original_language: string
  genres: Genre[]
  runtime: number | null
  vote_count: number
  status: string
  production_countries: ProductionCountry[]
  spoken_languages: SpokenLanguage[]
  budget: number
  revenue: number
}
