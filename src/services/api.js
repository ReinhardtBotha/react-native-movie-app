import { BASE_URL, API_KEY } from "../config/apiConfig";
import axios from "axios";

export const showTypes = {
  movie: ["now_playing", "popular", "top_rated", "upcoming"],
  tv: ["airing_today", "on_the_air", "popular", "top_rated"],
};

export const getShows = async (type, screen = "movie", page = 1) => {
  try {
    const moviesAxios = await axios.get(
      `${BASE_URL}/${screen}/${type}?api_key=${API_KEY}&page=${page}`
    );

    const response = moviesAxios.data;

    return response;
  } catch (error) {
    console.error("error", error);
  }
};

export const getShowDetails = async (id, screen = "movie") => {
  try {
    const movieDetailsAxios = await axios.get(
      `${BASE_URL}/${screen}/${id}?api_key=${API_KEY}`
    );

    const response = movieDetailsAxios.data;

    return response;
  } catch (error) {
    console.error("error", error);
  }
};

export const searchShows = async (query, type) => {
  try {
    const searchAxios = await axios.get(
      `${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`
    );

    const response = searchAxios.data;

    return response;
  } catch (error) {
    console.error("error", error);
  }
};
