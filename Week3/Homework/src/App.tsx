import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage'
import MovieListPage from './pages/MovieListPage/MovieListPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MovieListPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
