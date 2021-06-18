import React from "react";
import {
  Dialog,
  DialogShadow,
  DialogContent,
  OrderButton,
  Price,
} from "../FlowerDialog/FlowerDialog";

export const OrderDialog = ({
  openOrderDialog,
  setOpenOrderDialog,
  setOrders,
}) => {
  return openOrderDialog ? (
    <>
      <DialogShadow />
      <Dialog>
        <DialogContent>
          <Price>Your order is on the way!</Price>
          <p>Soon you will get confirmation e-mail</p>
          <OrderButton
            onClick={() => {
              setOrders([]);
              setOpenOrderDialog();
            }}
          >
            More Orders
          </OrderButton>
        </DialogContent>
      </Dialog>
    </>
  ) : (
    <div />
  );
};
