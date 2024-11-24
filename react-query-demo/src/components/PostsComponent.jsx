import { useQuery } from "react-query";
import axios from "axios";

// Function to fetch posts from API
const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const PostsComponent = () => {
  // React Query hook with caching configurations
  const { data, isLoading, isError, error, refetch } = useQuery(
    "posts", // Query key
    fetchPosts, // Fetching function
    {
      staleTime: 60000, // Data is considered fresh for 1 minute (60,000 ms)
      cacheTime: 300000, // Cache will persist for 5 minutes (300,000 ms)
      refetchOnWindowFocus: false, // Disable refetching when window regains focus
      keepPreviousData: true, // Retain previously fetched data while new data is being fetched
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button
        onClick={refetch}
        className="mt-2 px-4 py-2 bg-blue-500 text-white"
      >
        Refetch Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
