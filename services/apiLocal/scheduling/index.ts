import { api } from "../api";

export const getAvailableDates = async () => {
  const response = await api.get("/scheduling/date");

  return response;
};

export const getAvailableTimes = async () => {
  const response = await api.post("/scheduling/time", {});

  return response;
};
