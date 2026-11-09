import MovieCard from '../../components/MovieCard/MovieCard'
import RatingFilterList from '../../components/RatingFilterList/RatingFilterList'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useMovieList } from '../../hooks/useMovieList'
import * as S from './MovieListPage.styles'

function MovieListPage() {
  const { movies, selectedFilter, hasNextPage, isLoading, isError, selectFilter, loadMore } = useMovieList()
  const observerRef = useIntersectionObserver(loadMore, !isLoading && !isError && hasNextPage)

  return (
    <section>
      <S.Title>영화 둘러보기</S.Title>

      <RatingFilterList selectedFilter={selectedFilter} onSelect={selectFilter} />

      <S.MovieList>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </S.MovieList>

      {isLoading && <S.Message>영화를 불러오는 중...</S.Message>}
      {isError && <S.Message>영화를 불러오지 못했어요. 잠시 후 다시 시도해주세요.</S.Message>}

      <div ref={observerRef} />
    </section>
  )
}

export default MovieListPage
