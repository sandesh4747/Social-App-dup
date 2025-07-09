import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseUrl = "http://localhost:5002/api";

export const baseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5002/api"
    : import.meta.env.VITE_API_URL; // or REACT_APP_API_URL for CRA

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({}),
});
