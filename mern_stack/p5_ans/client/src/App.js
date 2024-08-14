import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signin from "./pages/Auth/Signin";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AuthProvider from "./pages/Auth/AuthProvider";
import Logout from "./pages/Auth/Logout";
import BlogForm from "./pages/AddBlog/AddBlog";
import Article from "./pages/Article/Article";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add-blog"
            element={
              <ProtectedRoute>
                <BlogForm />
              </ProtectedRoute>
            }
          />
          <Route path="/:id" element={<Article />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </AuthProvider>
  );
}

export default App;
