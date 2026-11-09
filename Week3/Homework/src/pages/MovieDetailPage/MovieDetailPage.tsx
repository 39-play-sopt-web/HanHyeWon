import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetail } from '../../apis/movie'
import { BACKDROP_BASE_URL, POSTER_BASE_URL } from '../../constants/image'
import type { MovieDetail } from '../../types/movie'
import { formatDate } from '../../utils/formatDate'
import { formatLanguage } from '../../utils/formatLanguage'
import { formatRuntime } from '../../utils/formatRuntime'
import * as S from './MovieDetailPage.styles'

function MovieDetailPage() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<MovieDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!movieId) return

    const fetchMovie = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const data = await getMovieDetail(movieId)
        setMovie(data)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    window.scrollTo(0, 0)
    fetchMovie()
  }, [movieId])

  if (isLoading) return <S.Message>영화 정보를 불러오는 중...</S.Message>

  if (isError || !movie) {
    return (
      <article>
        <S.BackLink to="/">← 목록으로 돌아가기</S.BackLink>
        <S.Message>영화 정보를 불러오지 못했어요.</S.Message>
      </article>
    )
  }

  // TMDB는 예산/수익 정보가 없으면 0을 줌
  const formatMoney = (amount: number) => (amount ? `$${amount.toLocaleString('en-US')}` : '정보 없음')

  const infoList = [
    { label: '원제', value: movie.original_title },
    { label: '원어', value: formatLanguage(movie.original_language) },
    { label: '제작 국가', value: movie.production_countries.map(({ name }) => name).join(', ') },
    { label: '사용 언어', value: movie.spoken_languages.map(({ english_name }) => english_name).join(', ') },
    { label: '예산', value: formatMoney(movie.budget) },
    { label: '수익', value: formatMoney(movie.revenue) },
  ]

  return (
    <article>
      <S.BackLink to="/">← 목록으로 돌아가기</S.BackLink>

      <S.Hero $backdrop={movie.backdrop_path ? `${BACKDROP_BASE_URL}${movie.backdrop_path}` : ''}>
        <S.PosterWrapper>
          {movie.poster_path && <S.Poster src={`${POSTER_BASE_URL}${movie.poster_path}`} alt={movie.title} />}
        </S.PosterWrapper>

        <S.Summary>
          <S.Title>{movie.title}</S.Title>

          <S.MetaList>
            <S.Rating>★ {movie.vote_average.toFixed(1)}</S.Rating>
            <span>{formatDate(movie.release_date)}</span>
            {movie.runtime !== null && <span>{formatRuntime(movie.runtime)}</span>}
            <span>투표 {movie.vote_count.toLocaleString()}명</span>
            <S.Status>{movie.status}</S.Status>
          </S.MetaList>

          <S.GenreList>
            {movie.genres.map((genre) => (
              <S.Genre key={genre.id}>{genre.name}</S.Genre>
            ))}
          </S.GenreList>
        </S.Summary>
      </S.Hero>

      <S.Section>
        <S.SectionTitle>줄거리</S.SectionTitle>
        <S.Overview>{movie.overview}</S.Overview>
      </S.Section>

      <S.Section>
        <S.SectionTitle>기본 정보</S.SectionTitle>
        <S.InfoList>
          {infoList.map(({ label, value }) => (
            <S.InfoItem key={label}>
              <S.InfoLabel>{label}</S.InfoLabel>
              <S.InfoValue>{value}</S.InfoValue>
            </S.InfoItem>
          ))}
        </S.InfoList>
      </S.Section>
    </article>
  )
}

export default MovieDetailPage
