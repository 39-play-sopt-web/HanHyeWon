import { useEffect, useState } from 'react'
import { getMovies } from '../../apis/movie'
import MovieCard from '../../components/MovieCard/MovieCard'
import type { Movie } from '../../types/movie'
import * as S from './MovieListPage.styles'

function MovieListPage() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies({ page: 1 })
      setMovies(data.results)
    }

    fetchMovies()
  }, [])

  return (
    <section>
      <S.Title>영화 둘러보기</S.Title>

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
