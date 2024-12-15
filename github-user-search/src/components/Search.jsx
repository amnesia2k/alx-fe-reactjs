import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      console.log(data);
      setUser(data);
    } catch (err) {
      console.error(err, "error message");
      setError("Looks like we cant find the user");
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>

        <div>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {user && (
            <div>
              <h2>{user?.login}</h2>
              <img src={user?.avatar_url} alt={user?.login} />
              <p>Bio: {user?.bio}</p>
              <p>Followers: {user?.followers}</p>
              <p>Following: {user?.following}</p>
              <p>Public Repos: {user?.public_repos}</p>
              <p>Public Gists: {user?.public_gists}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
