import axios from "axios";

const baseUrl = "https://api.github.com/users";

export const fetchUser = async (username) => {
  const res = await axios.get(`${baseUrl}/${username}`);

  return res?.data;
};
