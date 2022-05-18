import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import styled from "styled-components";
import { Button } from "@mui/material";

function BlogPosts({ data }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data);
  }, []);

  const handleSortByTitle = () => {
    const sortedBlogs = [...blogs].sort((a, b) => (a.title < b.title ? 1 : -1));
    setBlogs(sortedBlogs);
  };

  const handleSortByDate = () => {
    const sortedBlogs = [...blogs].sort((a, b) => (a.date < b.date ? 1 : -1));
    setBlogs(sortedBlogs);
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={handleSortByTitle} variant="contained">
          {" "}
          Sort by Title
        </Button>
        <Button onClick={handleSortByDate} variant="contained">
          {" "}
          Sort by Date
        </Button>
      </ButtonContainer>
      <BlogBody>
        {blogs.map((doc) => (
          <BlogPost
            key={doc.id}
            title={doc.title}
            author={doc.author}
            content={doc.content}
            img={doc.img}
          />
        ))}
      </BlogBody>
    </>
  );
}

export default BlogPosts;

const BlogBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;
