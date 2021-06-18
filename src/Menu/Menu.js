import React from "react";
import styled from "styled-components";

import { flowers } from "../Data/FlowerData";
import {
  MenuGrid,
  SingleFlower,
  SingleFlowerTitle,
  SingleLabel,
} from "../Menu/FlowerGrid";

const MenuStyled = styled.div`
  margin: 0 400px 50px 20px;

  @media (max-width: 768px) {
    margin: 0 15px;
  }
`;

export const Menu = ({ setOpenFlower }) => {
  return (
    <MenuStyled>
      <MenuGrid>
        {flowers.map((flower) => (
          <SingleFlower
            img={flower.img}
            key={flower.img}
            onClick={() => {
              setOpenFlower(flower);
            }}
          >
            <SingleLabel>
              <SingleFlowerTitle>{flower.name}</SingleFlowerTitle>
            </SingleLabel>
          </SingleFlower>
        ))}
      </MenuGrid>
    </MenuStyled>
  );
};
