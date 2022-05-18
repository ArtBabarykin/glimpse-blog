import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BlogPost({ title, img }) {
  const navigate = useNavigate();
  return (
    <Card>
      <ImageContainer>
        <img src={img} alt="" />
      </ImageContainer>
      <TextContainer>
        <h3>{title}</h3>
        <Button variant="contained" onClick={() => navigate("/article")}>
          Read
        </Button>
      </TextContainer>
    </Card>
  );
}

export default BlogPost;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: #dfdfdf;
  box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
`;
const TextContainer = styled.div`
  padding: 20px;
  > h3 {
    margin: 0 0 10px 0;
  }
  > .MuiButton-root {
    text-transform: capitalize;
    margin-top: 10px;
  }
`;
const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    :hover {
      transform: scale(1.08);
      opacity: 0.8;
    }
  }
`;

// 549cd2
