import React from "react";
import "./Post.css";
import Container from "@mui/material/Container";

const Post = ({ post: { title, body, imgUrl, author }, index }) => {
  return (
    <Container>
      <h1 className="heading">{title}</h1>
      <img className="image" src={imgUrl} alt="post" />
      <p>{body}</p>
      <div className="info">
        <h4>Written by: {author}</h4>
      </div>
    </Container>
  );
};

export default Post;
