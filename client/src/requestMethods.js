import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.data.Token;

export const publicRequest = axios.create({
      baseURL: BASE_URL,
});


const TOKEN = localStorage.getItem("authToken");

export const userRequest = axios.create({
      baseURL: BASE_URL,
      headers: {
            token: `Bearer ${TOKEN}`
      },
});