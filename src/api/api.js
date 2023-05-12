import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const realEstateAPI = {
  fetchAll: async () => {
    try {
      const response = await api.get("/real-estates");
      return response.data;
    } catch (error) {
      console.error("Error fetching real estates:", error);
      throw error;
    }
  },
  fetchById: async (id) => {
    try {
      const response = await api.get(`/real-estates/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching real estate with id ${id}:`, error);
      throw error;
    }
  },
  updateById: async (id, updatedData) => {
    try {
      const response = await api.put(`/real-estates/${id}`, updatedData);
      return response.data;
    } catch (error) {
      console.error(`Error updating real estate with id ${id}:`, error);
      throw error;
    }
  },
  deleteById: async (id) => {
    try {
      const response = await api.delete(`/real-estates/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting real estate with id ${id}:`, error);
      throw error;
    }
  },
  create: async (newData) => {
    try {
      const response = await api.post(`/real-estates`, newData);
      return response.data;
    } catch (error) {
      console.error(`Error creating new real estate:`, error);
      throw error;
    }
  },
};

export const authAPI = {
  login: async (credentials) => {
    try {
      const response = await api.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  },
  register: async (newUser) => {
    try {
      const response = await api.post("/auth/register", newUser);
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  },
};
