import type { MovieDetail, MovieListResponse } from '../types/movie'
import instance from './instance'

interface GetMoviesParams {
  page: number
  minRating?: number
  maxRating?: number
}

export const getMovies = async ({ page, minRating, maxRating }: GetMoviesParams) => {
  const { data } = await instance.get<MovieListResponse>('/discover/movie', {
    params: {
      page,
      'vote_average.gte': minRating,
      'vote_average.lte': maxRating,
    },
  })
  return data
}

export const getMovieDetail = async (movieId: string) => {
  const { data } = await instance.get<MovieDetail>(`/movie/${movieId}`)
  return data
}
