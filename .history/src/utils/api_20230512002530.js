import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  eyJhbGciOiJIUzI1NiJ9
    .eyJhdWQiOiI1NWUyNWVlY2QyMzUyZmNhZDMwZTlkMWMwYTVhYTg1NCIsInN1YiI6IjYzNjA4NzM3Yjg3YWVjMDA5MDdlMWU2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
    .NRiIqk7aGafJdG897pIzVqWPUXD9K7ojfiCyucGLt8k;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
