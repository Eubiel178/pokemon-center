import { api } from "../api";

export const getRegions = async () => {
  const response = await api.get("/region");

  return response;
};

export const getOneRegion = async (region: string) => {
  const response = await api.get(`/region/${region}`);

  return response;
};
