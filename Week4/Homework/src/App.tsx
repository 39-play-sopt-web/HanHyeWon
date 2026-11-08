import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout/Layout'
import AuthPage from './pages/AuthPage/AuthPage'
import PostDetailPage from './pages/PostDetailPage/PostDetailPage'
import PostListPage from './pages/PostListPage/PostListPage'
import PostWritePage from './pages/PostWritePage/PostWritePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route element={<Layout />}>
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/write" element={<PostWritePage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
