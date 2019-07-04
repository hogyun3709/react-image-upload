exports.CLIENT_ORIGIN =
  process.env.NODE_ENV === "production"
    ? "http://your-production-domain"
    : "http://localhost:3000";
