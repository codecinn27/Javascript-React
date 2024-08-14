// Import required modules
const mongoose = require("mongoose");

// Define the schema for the chat message
const blogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    file: String,
  },
  { timestamps: true }
);

// Create the model for the chat message
const Blog = mongoose.model("Blog", blogSchema);

// Export the model
module.exports = Blog;
