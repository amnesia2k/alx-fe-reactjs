import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username, location, minRepos);
      console.log("User Data: ", data); // Log the user data to see if it's valid
      setUser(data);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl w-full mx-auto py-10">
      <form onSubmit={handleSearch}>
        <div className="flex flex-col gap-10 justify-center max-w-4xl w-full mx-auto border rounded-md shadow-md p-10 mb-20">
          <Input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Minimum repositories (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
          <Button className="w-[50%] mx-auto text-lg" type="submit">
            Search
          </Button>
        </div>

        <div className="max-w-4xl w-full mx-auto">
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
              <a
                href={`http://github.com/${user?.login}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
