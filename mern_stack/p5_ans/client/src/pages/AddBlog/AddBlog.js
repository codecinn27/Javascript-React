import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
const BlogForm = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
  });
  const [authName, setAuthName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [filename, setFileName] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Please wait...");
    // Handle form submission (e.g., send data to backend)
    try {
      const response = await axios.post(
        "http://localhost:5000/api/items/Blog",
        blogData,
        {
          withCredentials: true,
        }
      );

      if (response.data._id && imageFile) {
        const formData = new FormData();
        formData.append("id", response.data._id);
        formData.append("filename", filename);
        formData.append("file", imageFile);

        const fileResponse = await axios.post(
          "http://localhost:5000/api/storefile",
          formData,
          {
            withCredentials: true,
          }
        );
        toast.update(toastId, {
          render: "Blog Created successfully!",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setBlogData({
          title: "",
          content: "",
          category: "",
          author: "",
        });
        // Reset other states if necessary
        setImageFile(null);
        setImagePreviewUrl("");
        setFileName("");
        console.log("Blog created successfully:", response.data);
        console.log("FileResponse created successfully:", fileResponse.data);
      }
    } catch (error) {
      toast.update(toastId, {
        render: `Error creating task: ${error.message}`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
      console.error("Error creating task:", error.message);
    }

    console.log("Submitted data:", blogData);
  };

  const { authUser } = useContext(AuthContext);
  console.log("authUser: ", authUser);
  const setDefaultAuthor = (defaultAuthorId) => {
    setBlogData((prevData) => ({
      ...prevData,
      author: defaultAuthorId,
    }));
  };
  useEffect(() => {
    if (authUser?.email) {
      const defaultAuthorId = authUser._id; // Replace with the actual default author ID
      setDefaultAuthor(defaultAuthorId);
      setAuthName(authUser.email.split("@")[0]);
    }
  }, [authUser]);
  const tags = [
    "Data Science",
    "Technology",
    "Self Improvement",
    "Writing",
    "Relationships",
    "Machine Learning",
    "Productivity",
    "Politics",
  ];
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      // Validate the file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(file.type)) {
        alert("Invalid file type. Please select a JPG, JPEG, or PNG image.");
        return;
      }

      // Set the file and preview URL
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <Header />
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Create a New Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={blogData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={blogData.content}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={blogData.category}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required>
              <option value="">Select a category</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              id="author"
              name="author"
              value={authName}
              className="mt-1 p-2 w-full border rounded-md"
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept=".jpg, .jpeg, .png" // Specify accepted file formats
              onChange={handleImageUpload}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {imagePreviewUrl && (
              <img
                src={imagePreviewUrl}
                alt="Preview"
                className="mt-4 w-full rounded-md"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
