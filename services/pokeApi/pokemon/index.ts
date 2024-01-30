import { api } from "../api";

export const getPokemons = async () => {
  const response = await api.get("/pokemon?limit=5000");

  return response;
};
