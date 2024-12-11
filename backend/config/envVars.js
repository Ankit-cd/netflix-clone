import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
    MONGO_URL:process.env.DATABASE_URL,
    PORT:process.env.PORT || 4000,
    JWT_SECRET:process.env.JWT_SECRET,
    TMDB_API_KEY:process.env.TMDB_API_KEY,
}