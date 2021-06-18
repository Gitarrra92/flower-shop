import React from "react";
import styled from "styled-components";

import { black, white, yellow } from "../Styles/colors";
import { SingleFlowerTitle, SingleLabel } from "../Menu/FlowerGrid";
import { NavbarStyled } from "../Navbar/Navbar";

export const Dialog = styled.div`
  width: 500px;
  background: ${white};
  position: fixed;
  top: 75px;
  z-index: 11;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background: ${black};
  opacity: 0.7;
  z-index: 10;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SingleDialogLabel = styled(SingleLabel)`
  top: 10px;
`;

export const DialogContent = styled.div`
  min-height: 400px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 310px;
  }
`;

export const Price = styled.h3`
  font-size: 1.6rem;
  border: 0.5px solid grey;
  padding: 25px;
  border-radius: 12px;
`;

export const DialogGrid = styled.div`
  display: grid;
  justify-content: center;
`;

export const OrderButton = styled.button`
  background: ${yellow};
  padding: 15px 30px;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  outline: none;
  margin-bottom: 1.5rem;
  :hover {
    filter: contrast(0.9);
  }
`;

const DialogFooter = styled(NavbarStyled)`
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FlowerDialog = ({
  openFlower,
  setOpenFlower,
  orders,
  setOrders,
}) => {
  function addToOrder() {
    const order = { ...openFlower };
    setOrders([...orders, order]);
    setOpenFlower();
  }
  return openFlower ? (
    <>
      <DialogShadow
        onClick={() => {
          setOpenFlower();
        }}
      />
      <Dialog>
        <DialogBanner img={openFlower.img}>
          <SingleDialogLabel>
            <SingleFlowerTitle>{openFlower.name}</SingleFlowerTitle>
          </SingleDialogLabel>
        </DialogBanner>

        <DialogContent>
          <Price>Price for one flower: {openFlower.price}€</Price>

          <OrderButton onClick={addToOrder}>Add to your list</OrderButton>
        </DialogContent>
        <DialogFooter>
          Welcome to our shop!{" "}
          <span role="img" aria-label="flowers">
            💐💐💐
          </span>
        </DialogFooter>
      </Dialog>
    </>
  ) : null;
};
