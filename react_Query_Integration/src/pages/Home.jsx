import { useEffect, useRef } from 'react'
import { useInfinitePostQuery, useLikePostMutation } from '../api/usePostQueries'

const Home = () => {
    const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinitePostQuery()
    const { mutate: likePost } = useLikePostMutation()

    const isPending = status === 'pending'
    const isError = status === 'error'

    // Sentinel element ref for IntersectionObserver
    const sentinelRef = useRef(null)

    useEffect(() => {
        const sentinel = sentinelRef.current
        if (!sentinel) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage()
                }
            },
            { threshold: 1.0 }
        )

        observer.observe(sentinel)
        return () => observer.disconnect()
    }, [hasNextPage, isFetchingNextPage, fetchNextPage])

    if (isPending) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error fetching data</div>
    }

    return (
        <div>
            <h1>Posts</h1>
            {data?.pages.map((page) =>
                page.data.data.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p><strong>Author:</strong> {post.author}</p>
                        <p>{post.description}</p>
                        <button
                            onClick={() => likePost({ id: post.id, currentLikes: post.likes })}
                        >
                            Like ({post.likes})
                        </button>
                    </div>
                ))
            )}

            {/* Sentinel div for IntersectionObserver to trigger next page load */}
            <div ref={sentinelRef} style={{ height: '1px' }} />

            {isFetchingNextPage && <div>Loading more...</div>}
            {!hasNextPage && <div>No more posts</div>}
        </div>
    )
}

export default Home
