import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import contentRoutes from "./routes/content.routes";
import shareRoutes from "./routes/share.routes"

const app = express();
const PORT = parseInt(process.env.PORT || "8080", 10);

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://nitify-frontend.vercel.app", // 👈 must match Vite host
    credentials: true,
  })
);

app.use("/api/v1", authRoutes);
app.use("/api/v1/content", contentRoutes);
app.use("/api/v1/nitify", shareRoutes)

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on 0.0.0.0${PORT}`);
});