import axios from "axios";

const baseUrl = "https://api.github.com/search/users";

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
    const res = await axios.get(`${baseUrl}?q=${query}`);

    if (res?.data?.items?.length > 0) {
      const user = res.data.items[0]; // Select the first user found
      const userDetails = await axios.get(
        `https://api.github.com/users/${user.login}`
      );
      return userDetails.data; // Return detailed user data
    }

    throw new Error("No users found with the given criteria");
  } catch (err) {
    console.error(err, "Error");
    throw err; // Propagate the error to be caught in Search.jsx
  }
};
