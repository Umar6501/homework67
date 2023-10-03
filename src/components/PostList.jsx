import React from "react";
import "../components/PostList.css";
const PostList = ({ loading, posts, error }) => {
  let favorite = false;
  return (
    <div className="container">
      {posts.length > 0 ? (
        <ul className="content-box">
          {posts.map((post) => (
            <li key={post.id} className="card">
              {post.id} <br />
              {post.firstName} {post.lastName} <br /> {post.phone} <br />{" "}
              {post.category}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default PostList;
