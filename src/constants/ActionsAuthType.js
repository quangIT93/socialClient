export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "https://react-nodejs-server.vercel.app/api";

export const LOCAL_STORAGE_TOKEN_NAME = "learnit-mern";
