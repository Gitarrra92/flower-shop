import styled from "styled-components";
import { white } from "../Styles/colors";

export const MenuGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const SingleFlower = styled.div`
  height: 200px;
  border-radius: 15px;
  background-image: ${({ img }) => `url(${img});`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  :hover {
    filter: contrast(0.6);
  }
`;

export const SingleFlowerTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const SingleLabel = styled.div`
  position: relative;
  top: 50%;
  background: ${white};
  padding: 8px;
  border-radius: 12px;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  margin: 0 10%;
`;
