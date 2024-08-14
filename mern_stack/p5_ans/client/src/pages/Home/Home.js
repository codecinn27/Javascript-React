import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import FileDisplay from "../../components/FileDisplay/FileDisplay";
function Home() {
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
  const footerItem = [
    "Help",
    "Status",
    "About",
    "Careers",
    "Blog",
    "Privacy",
    "Terms",
  ];
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/items/Blog?sort=createdAt&order=desc"
        );
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="bg-[#ffc017] text-white py-4 pt-16 h-[65vh] flex border-b border-b-black">
          <div className="w-1/2 mx-12">
            <div className=" text-8xl font-bold text-black mb-10">
              Stay curious.
            </div>
            <div className="text-black text-2xl mb-12">
              Discover stories, thinking, and expertise <br /> from writers on
              any topic.
            </div>
            <div className="flex">
              <Link
                to="/"
                className="text-xl text-white bg-gray-950 py-2 px-12 rounded-full">
                Get started
              </Link>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="md:flex">
          <div className="w-full md:w-3/5 p-12">
            {posts.map((post) => (
              <div key={post._id} className="mb-10">
                <div className="article-container">
                  <div className="post-wrap flex items-center">
                    <div className="w-3/4">
                      <div className="author-name flex justify-start items-center text-sm">
                        <div className="icon-img h-8 w-8 rounded-full bg-cyan-950 text-gray-400 flex justify-center items-center">
                          {post.author.email[0]}
                        </div>
                        <div className="author-name ml-2">
                          {post.author.email.split("@")[0]}
                        </div>
                      </div>
                      <Link
                        to={`/${post._id}`}
                        className="title font-bold text-xl">
                        {post.title}
                      </Link>
                      <div className="desc my-2">
                        {post.content.substring(0, 150)}...
                      </div>
                      <div className="time-tag text-sm flex justify-start items-center">
                        <div className="date">
                          {new Date(post.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </div>
                        <div className="mx-2">.</div>
                        <div className="min-read">
                          {post.content.split(" ").length / 200 < 1
                            ? "1"
                            : Math.ceil(
                                post.content.split(" ").length / 200
                              )}{" "}
                          min read
                        </div>
                        <div className="mx-2">.</div>
                        <div className="tag bg-gray-200 px-4 py-2 rounded-full">
                          {post.category}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/${post._id}`}
                      className=" h-32  w-1/3 overflow-hidden">
                      <FileDisplay fileName={post.file} />
                      {/* <img
                        src="/images/image1.jpg"
                        className="h-full w-full"
                        alt=""
                      /> */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/5 p-12">
            <div className="heading font-bold pb-2">
              Discover more of what matters to you
            </div>
            <div className="tags mb-5">
              <div className=" flex flex-wrap">
                {tags.map((tag, index) => (
                  <Link to={`tag/${tag}`} className="flex ">
                    <div
                      key={index}
                      className="p-2 text-sm bg-gray-200 rounded-full mr-2 mb-2">
                      {tag}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <hr />
            <div className="footer flex mr-5 my-12">
              {footerItem.map((tag, index) => (
                <Link to={`/${tag}`} className="flex ">
                  <div key={index} className="p-2 text-sm mr-2 mb-2">
                    {tag}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-gray-800 text-white py-4">
        <div className="container ml-12">
          <p>&copy; 2022 My Blog App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
