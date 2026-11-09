import { POSTER_BASE_URL } from '../../constants/image'
import type { Movie } from '../../types/movie'
import { formatDate } from '../../utils/formatDate'
import * as S from './MovieCard.styles'

interface MovieCardProps {
  movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {
  const { id, title, overview, poster_path, release_date, vote_average } = movie

  return (
    <S.Card to={`/movie/${id}`}>
      <S.PosterWrapper>
        {poster_path ? (
          <S.Poster src={`${POSTER_BASE_URL}${poster_path}`} alt={title} />
        ) : (
          <S.NoImage>No Image</S.NoImage>
        )}
        <S.Rating>★ {vote_average.toFixed(1)}</S.Rating>
      </S.PosterWrapper>

      <S.Info>
        <S.Title>{title}</S.Title>
        <S.ReleaseDate>{formatDate(release_date)}</S.ReleaseDate>
        <S.Overview>{overview || '등록된 줄거리가 없습니다.'}</S.Overview>
      </S.Info>
    </S.Card>
  )
}

export default MovieCard
