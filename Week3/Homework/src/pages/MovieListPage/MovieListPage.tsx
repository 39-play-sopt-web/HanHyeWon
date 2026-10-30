import { useEffect, useState } from 'react'
import { getMovies } from '../../apis/movie'
import MovieCard from '../../components/MovieCard/MovieCard'
import RatingFilterList from '../../components/RatingFilterList/RatingFilterList'
import { RATING_FILTERS } from '../../constants/ratingFilter'
import type { Movie } from '../../types/movie'
import * as S from './MovieListPage.styles'

function MovieListPage() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedFilter, setSelectedFilter] = useState(RATING_FILTERS[0])

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies({
        page: 1,
        minRating: selectedFilter.min,
        maxRating: selectedFilter.max,
      })
      setMovies(data.results)
    }

    fetchMovies()
  }, [selectedFilter])

  return (
    <section>
      <S.Title>영화 둘러보기</S.Title>

      <RatingFilterList selectedFilter={selectedFilter} onSelect={setSelectedFilter} />

      <S.MovieList>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </S.MovieList>
    </section>
  )
}

export default MovieListPage
