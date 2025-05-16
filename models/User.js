import mongoose from "mongoose";

// Define the schema for a user
const userSchema = new mongoose.Schema({
  _id: String,
  email: String,
  name: String,
  imageUrl: String,
});

// Export the model. Avoid redefining the model if it already exists (important in development).
export default mongoose.models.User || mongoose.model("User", userSchema);

