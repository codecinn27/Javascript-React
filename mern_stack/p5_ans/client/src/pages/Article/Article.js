import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import FileDisplay from "../../components/FileDisplay/FileDisplay";
function Article() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/items/Blog/${id}`
        );
        setPost(response.data);
        console.log("fetched post: ", response.data);

        setPost(response.data);
        console.log("fetched post: ", response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [id]);
  if (!post.title) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center flex-col px-64 py-16">
        <div className="desc-hint my-3 text-4xl font-bold  self-start mb-4">
          {post.title}
        </div>
        <div className="author-time self-start flex justify-start items-start mb-10">
          <div className="author-image h-10 w-10 rounded-full bg-[#ffc017] flex justify-center items-center font-bold">
            {post.author.email[0].toUpperCase()}
          </div>
          <div className="author-name-time ml-5">
            <div className="author-name">{post.author.email.split("@")[0]}</div>
            <div className="time my-1 text-gray-500">
              <div className="publish text-sm">
                Published at{" "}
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <div className="min-read">
                {post.content.split(" ").length / 200 < 1
                  ? "1"
                  : Math.ceil(post.content.split(" ").length / 200)}{" "}
                min read
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <FileDisplay fileName={post.file} />
          {/* <img src="/images/image1.jpg" alt="" /> */}
        </div>
        <div className="details px-10 py-10 border-b border-gray-500">
          {post.content}
        </div>

        <div className="related-article -mx-4">
          <div className="post-from-author">
            <div className="author-heading py-10 font-bold">
              More from {post.author.email.split("@")[0]}
            </div>
            <div className="related-posts flex flex-wrap">
              <Link to="/" className="post-1 w-80 flex flex-col mx-4 mb-4">
                <div className="rel-post-img h-48 w-80">
                  <img
                    src="/images/image2.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="rel-post-title mt-2 overflow-hidden font-bold">
                  The Embrace of Sports Gambling Has Gone Too Far
                </div>
                <div className="text-sm flex justify-start items-center text-gray-500">
                  <div>6 min read</div>
                  <div className="mx-3">.</div>
                  <div>Mar 5, 2024</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
