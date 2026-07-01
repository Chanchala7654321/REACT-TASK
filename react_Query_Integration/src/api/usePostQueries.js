import postQueries from "./queries";
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useInfinitePostQuery = () => {
    const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: postQueries.getPaginatedPost.queryKey,
        queryFn: postQueries.getPaginatedPost.queryFn,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            // json-server v1 returns { data: [], next: <pageNum | null>, last: N }
            return lastPage.data.next ?? undefined
        }
    })
    return { data, status, fetchNextPage, hasNextPage, isFetchingNextPage }
}

export const useLikePostMutation = () => {
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        ...postQueries.likePost,
        onMutate: async ({ id, currentLikes }) => {
            // Cancel any outgoing refetches
            await queryClient.cancelQueries({ queryKey: postQueries.getPaginatedPost.queryKey })

            // Snapshot the previous value
            const previousData = queryClient.getQueryData(postQueries.getPaginatedPost.queryKey)

            // Optimistically update the nested infinite query pages cache
            queryClient.setQueryData(postQueries.getPaginatedPost.queryKey, (old) => ({
                ...old,
                pages: old.pages.map((page) => ({
                    ...page,
                    data: {
                        ...page.data,
                        data: page.data.data.map((post) =>
                            post.id === id ? { ...post, likes: currentLikes + 1 } : post
                        )
                    }
                }))
            }))

            // Return snapshot so we can rollback on error
            return { previousData }
        },
        onError: (_err, _variables, context) => {
            // Revert to snapshot if the mutation fails
            queryClient.setQueryData(postQueries.getPaginatedPost.queryKey, context.previousData)
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: postQueries.getPaginatedPost.queryKey })
        }
    })

    return { mutate }
}
