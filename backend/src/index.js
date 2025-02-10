import express from "express";
import dotenv from "dotenv";

import adminRoutes from "./routes/admin.route.js"
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import songsRoutes from "./routes/songs.route.js"
import albumsRoutes from "./routes/albums.route.js"
import statsRoutes from "./routes/stats.route.js"
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());  // for parsing req body
app.use("/api/admin", adminRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/songs", songsRoutes)
app.use("/api/albums", albumsRoutes)
app.use("/api/stats", statsRoutes)

app.listen(PORT, () => {
    console.log("Server is running on PORT: ",PORT)
    connectDB()
})