import axios from "axios";

const apiLocal = `${process.env.API_LOCAL}/api`;

export const http = axios.create({
  baseURL: apiLocal,
});
