import { useParams } from 'react-router-dom'

function MovieDetailPage() {
  const { movieId } = useParams()

  return <h2>영화 상세 {movieId}</h2>
}

export default MovieDetailPage
