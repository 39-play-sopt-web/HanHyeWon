import { useEffect, useRef, useState } from 'react'
import { getMovies } from '../../apis/movie'
import MovieCard from '../../components/MovieCard/MovieCard'
import RatingFilterList from '../../components/RatingFilterList/RatingFilterList'
import { RATING_FILTERS, type RatingFilter } from '../../constants/ratingFilter'
import type { Movie } from '../../types/movie'
import * as S from './MovieListPage.styles'

function MovieListPage() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedFilter, setSelectedFilter] = useState(RATING_FILTERS[0])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ignore = false

    const fetchMovies = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const data = await getMovies({
          page,
          minRating: selectedFilter.min,
          maxRating: selectedFilter.max,
        })
        if (ignore) return

        setMovies((prev) => {
          if (page === 1) return data.results

          // 페이지 사이에 순위가 바뀌면 같은 영화가 다시 올 수 있어서 제외
          const newMovies = data.results.filter((movie) => !prev.some(({ id }) => id === movie.id))
          return [...prev, ...newMovies]
        })
        setHasNextPage(page < data.total_pages)
      } catch {
        if (!ignore) setIsError(true)
      } finally {
        // 성공/실패와 상관없이 로딩을 끝내야 무한스크롤이 멈춘 채로 남지 않음
        if (!ignore) setIsLoading(false)
      }
    }

    fetchMovies()

    return () => {
      ignore = true
    }
  }, [selectedFilter, page])

  useEffect(() => {
    const target = observerRef.current
    if (!target || isLoading || isError || !hasNextPage) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPage((prev) => prev + 1)
    })
    observer.observe(target)

    return () => observer.disconnect()
  }, [isLoading, isError, hasNextPage])

  const handleFilterSelect = (filter: RatingFilter) => {
    setSelectedFilter(filter)
    setPage(1)
  }

  return (
    <section>
      <S.Title>영화 둘러보기</S.Title>

      <RatingFilterList selectedFilter={selectedFilter} onSelect={handleFilterSelect} />

      <S.MovieList>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </S.MovieList>

      {isError && <S.Message>영화를 불러오지 못했어요. 잠시 후 다시 시도해주세요.</S.Message>}

      <div ref={observerRef} />
    </section>
  )
}

export default MovieListPage
