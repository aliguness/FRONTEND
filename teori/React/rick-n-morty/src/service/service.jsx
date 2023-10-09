import axios from "axios";

export const getCharacters = () => {
  return axios
    .get("https://rickandmortyapi.com/api/character/?page=2")
    .then((response) => response.data.results);
};

export const getEpisodeName = (episodeUrl) => {
  return axios.get(episodeUrl).then((response) => response.data.name);
};
