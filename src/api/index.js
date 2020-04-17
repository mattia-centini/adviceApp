import axios from "axios";

const url = "https://api.adviceslip.com/advice";

export const fetchApi = async () => {
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {}
};
