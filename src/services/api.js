import { BASE_URL, API_KEY } from "../config/apiConfig";
import axios from "axios";

export const getMovies = async (filter) => {
  const url = BASE_URL;
  try {
    const moviesAxios = await axios.get(
      `${url}/movie/${filter}?api_key=${API_KEY}`
    );
    const response = moviesAxios.data;

    return response;
  } catch (error) {
    console.error("error", error);
  }
};
