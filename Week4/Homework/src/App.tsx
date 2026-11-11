import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from 'react-router'
import Layout from './components/Layout/Layout'
import AuthPage from './pages/AuthPage/AuthPage'
import PostDetailPage from './pages/PostDetailPage/PostDetailPage'
import PostListPage from './pages/PostListPage/PostListPage'
import PostWritePage from './pages/PostWritePage/PostWritePage'
import { checkAuth } from './utils/auth'

const requireAuth = () => {
  if (!checkAuth()) return redirect('/')
  return null
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthPage />} />
      <Route element={<Layout />}>
        <Route path="/posts" element={<PostListPage />} />
        <Route
          path="/posts/write"
          element={<PostWritePage />}
          loader={requireAuth}
        />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
      </Route>
    </>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
