import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Article() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Lorem Ipsum</h1>
      <TextContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse iusto
        beatae praesentium, molestias culpa cumque sit explicabo voluptatem est
        odit nobis in voluptates. Accusantium eum, asperiores accusamus eligendi
        quod perspiciatis est corporis et eveniet inventore dolor alias iste
        maiores reprehenderit non nemo, enim fuga recusandae saepe distinctio
        cupiditate excepturi? Ipsam.
      </TextContent>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Blog
      </Button>
    </>
  );
}

export default Article;

const TextContent = styled.div`
  width: 90%;
  margin: 20px auto;
  text-align: center;
`;
