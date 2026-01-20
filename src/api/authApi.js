import api from "./axios";

export const login = (data) => {
  return api.post("/login", data);
};
