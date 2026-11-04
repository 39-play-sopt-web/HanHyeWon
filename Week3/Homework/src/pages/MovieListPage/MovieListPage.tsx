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
  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ignore = false

    const fetchMovies = async () => {
      setIsLoading(true)
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
      setIsLoading(false)
    }

    fetchMovies()

    return () => {
      ignore = true
    }
  }, [selectedFilter, page])

  useEffect(() => {
    const target = observerRef.current
    if (!target || isLoading || !hasNextPage) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setPage((prev) => prev + 1)
    })
    observer.observe(target)

    return () => observer.disconnect()
  }, [isLoading, hasNextPage])

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

      <div ref={observerRef} />
    </section>
  )
}

export default MovieListPage
