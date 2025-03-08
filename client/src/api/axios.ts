import axios from "axios";
import { env } from "@/env/client";

// Create a global axios instance with the base URL and default headers.
const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
