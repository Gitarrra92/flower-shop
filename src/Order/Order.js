import React from "react";
import styled from "styled-components";

import { OrderButton } from "../FlowerDialog/FlowerDialog";
import { black } from "../Styles/colors";

const database = window.firebase.database();

export const OrderStyled = styled.div`
  position: fixed;
  right: 15px;
  bottom: 0px;
  width: 340px;
  border: 1px solid black;
  height: calc(100% - 100px);
  z-index: 10;

  @media (max-width: 768px) {
    position: unset;
    margin: 0 auto;
    margin-top: 15px;
  }
`;

const Button = styled(OrderButton)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    position: relative;
  }
`;

const OrderTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid ${black};
`;

const OrderItem = styled.div`
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const OrderItemTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const DeleteOrder = styled.div`
  cursor: pointer;
`;

const LeftOrder = styled.div`
  margin-left: 10px;
`;

function sendOrder(orders, { email, displayName }) {
  const newOrderRef = database.ref("orders").push();
  newOrderRef.set({
    singleOrder: orders,
    email,
    displayName,
  });
}

export const Order = ({
  orders,
  setOrders,
  login,
  loggedIn,
  setOpenOrderDialog,
}) => {
  const totalPrice = orders.reduce((total, item) => {
    return (total += item.price);
  }, 0);

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderTitle>You dont have any orders</OrderTitle>
      ) : (
        <>
          <OrderTitle>You have {orders.length} orders: </OrderTitle>
          {orders.map((order, index) => (
            <OrderItem>
              <LeftOrder>
                {" "}
                <span role="img" aria-label="flowers">
                  💐
                </span>
              </LeftOrder>
              <div>
                <OrderItemTitle> {order.name}</OrderItemTitle>
              </div>
              <div>{order.price}€</div>
              <DeleteOrder
                onClick={() => {
                  deleteItem(index);
                }}
              >
                <span role="img" aria-label="delete">
                  🗑
                </span>
              </DeleteOrder>
            </OrderItem>
          ))}
        </>
      )}
      <OrderItem>
        <div />
        <div>Total price: </div>
        <div>{totalPrice}€</div>
      </OrderItem>
      {orders.length > 0 && (
        <Button
          onClick={() => {
            if (loggedIn) {
              setOpenOrderDialog(true);
              sendOrder(orders, loggedIn);
            } else {
              login();
            }
          }}
        >
          Order
        </Button>
      )}
    </OrderStyled>
  );
};
