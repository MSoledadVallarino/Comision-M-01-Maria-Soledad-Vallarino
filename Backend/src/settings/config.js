import "dotenv/config";

export const config = {
  port: process.env.PORT || 3000,
  mongo: process.env.MONGO_URI || "mongodb://127.0.0.1:27017",
  jwt_secret: process.env.JWT_SECRET || "juego",
  database: process.env.DATABASE_NAME || "viajes_app",
};
