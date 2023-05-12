import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

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