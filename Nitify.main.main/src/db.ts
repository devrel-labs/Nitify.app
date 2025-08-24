import mongoose from "mongoose";
import { UserModel } from "./models/user.model";
import { ContentModel } from "./models/content.model";
import { LinkModel } from "./models/link.model";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/fallback3";

mongoose.connect(uri).then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

export { UserModel, ContentModel, LinkModel };