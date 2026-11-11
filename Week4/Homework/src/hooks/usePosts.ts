import { useInfiniteQuery } from '@tanstack/react-query'
import { getPosts } from '../apis/post'

export const usePosts = (keyword: string) => {
  return useInfiniteQuery({
    queryKey: ['posts', keyword],
    queryFn: ({ pageParam }) => getPosts(keyword, pageParam),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    select: (data) => data.pages.flatMap((page) => page.posts),
  })
}
