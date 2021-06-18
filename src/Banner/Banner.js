import React from "react";
import styled from "styled-components";

export const BannerStyled = styled.div`
  height: 300px;
  background-image: url("/img/banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: contrast(0.6);
`;

export const BannerTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 3.5rem;
  font-family: "Dancing Script", cursive;
`;

export const Banner = () => {
  return (
    <BannerStyled>
      <BannerTitle>Florino shop</BannerTitle>
    </BannerStyled>
  );
};
