import { getPaginatedPost, likePost } from "./api";

const postQueries = {
    getPaginatedPost: {
        queryKey: ['paginatedPost'],
        queryFn: ({ pageParam = 1 }) => getPaginatedPost(pageParam, 5)
    },

    likePost: {
        mutationKey: ['likePost'],
        mutationFn: ({ id, currentLikes }) => likePost(id, currentLikes)
    }
}

export default postQueries