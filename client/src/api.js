import axios from "axios";

export const ping = () => {
  try {
    return axios.get("api/ping");
  } catch (error) {
    console.error(error);
  }
};

export const getInitialCount = () => {
  try {
    return axios.get("api/count");
  } catch (error) {
    console.error(error);
  }
};
