import { useInfiniteQuery } from "@tanstack/react-query";

async function memberApi({ pageParam }) {
  const response = await fetch(
    `https://dummyjson.com/users?limit=5&skip=${pageParam}&select=firstName,age`
  );

  const data = await response.json();

  const nextSkip = pageParam + data.limit;

  return {
    users: data.users,
    nextPage: nextSkip < data.total ? nextSkip : undefined,
  };
}

export default function InfiniteUsersList() {
  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["member"],
    queryFn: memberApi,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  if (isPending) return <div>Loading user catalog...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Team Members Catalog</h2>

      {data.pages.map((page, pageIndex) => (
        <div key={pageIndex}>
          {page.users.map((user) => (
            <div key={user.id}>
              <span>Member #{user.id}</span> <strong>{user.firstName}</strong> ={" "}
              <span> {user.age}</span>
            </div>
          ))}
        </div>
      ))}

      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
      {!hasNextPage && <p>No more users</p>}
    </div>
  );
}
