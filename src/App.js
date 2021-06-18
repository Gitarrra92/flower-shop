import React from "react";

import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { FlowerDialog } from "./FlowerDialog/FlowerDialog";
import { Order } from "./Order/Order";
import { useOpenFlower } from "./Hooks/useOpenFlower";
import { useOrders } from "./Hooks/useOrders";
import { useAuthentication } from "./Hooks/useAuthentication";
import { OrderDialog } from "./Order/OrderDialog";
import { useOrderDialog } from "./Hooks/useOrderDialog";

function App() {
  const openFlower = useOpenFlower();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();

  return (
    <>
      <GlobalStyle />
      <OrderDialog {...orderDialog} {...orders} />
      <FlowerDialog {...openFlower} {...orders} />
      <Navbar {...auth} />
      <Banner />
      <Menu {...openFlower} />
      <Order {...orders} {...auth} {...orderDialog} />
    </>
  );
}

export default App;
