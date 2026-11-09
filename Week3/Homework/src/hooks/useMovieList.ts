import { useCallback, useEffect, useState } from 'react'
import { getMovies } from '../apis/movie'
import { RATING_FILTERS, type RatingFilter } from '../constants/ratingFilter'
import type { Movie } from '../types/movie'

export const useMovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedFilter, setSelectedFilter] = useState(RATING_FILTERS[0])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

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

  const selectFilter = (filter: RatingFilter) => {
    setSelectedFilter(filter)
    setPage(1)
  }

  // observer effect의 의존성이라 매 렌더마다 새로 만들어지지 않게 고정
  const loadMore = useCallback(() => setPage((prev) => prev + 1), [])

  return { movies, selectedFilter, hasNextPage, isLoading, isError, selectFilter, loadMore }
}
