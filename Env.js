import Dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
Dotenv.config({ path: path.join(__dirname, ".env") });

export const { DATABASE_URL, SECRET_KEY } = process.env;
