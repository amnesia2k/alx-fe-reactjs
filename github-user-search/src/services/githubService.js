import axios from "axios";

const baseUrl = "https://api.github.com/search/users?q";

export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    let query = `user:${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Corrected endpoint for searching users
    const res = await axios.get(`${baseUrl}=${query}`);

    if (res?.data?.items?.length > 0) {
      const users = res.data.items; // Select the first user found
      const userDetailsPromises = users.map((user) =>
        axios
          .get(`https://api.github.com/users/${user.login}`)
          .then((res) => res.data)
      );
      const usersData = await Promise.all(userDetailsPromises);
      return usersData; // Return detailed user data as an array
    }

    throw new Error("No users found with the given criteria");
  } catch (err) {
    console.error(err, "Error");
    throw err; // Propagate the error to be caught in Search.jsx
  }
};
