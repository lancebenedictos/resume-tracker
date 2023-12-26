export const BASE =
  process.env.NODE_ENV === "production"
    ? "https://event-snap-18da04b7e300.herokuapp.com/api"
    : "http://localhost:3000/api";
