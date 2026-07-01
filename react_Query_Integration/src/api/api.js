import { apiGet, apiPatch } from '../apiclient'
import path from './path'

export const getAllPost = async () => {
    return apiGet(path.allPosts)
}

export const getPaginatedPost = async (page, limit) => {
    return apiGet(path.paginatedPosts(page, limit))
}

export const likePost = async (id, currentLikes) => {
    return apiPatch(path.likes(id), { likes: currentLikes + 1 })
}
