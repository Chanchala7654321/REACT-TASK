
const path = {
    allPosts: '/posts',
    paginatedPosts: (page, limit) => {
        return `/posts?_page=${page}&_per_page=${limit}`
    },
    likes: (id) => `/posts/${id}`,
}

export default path
