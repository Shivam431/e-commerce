import React from "react";
import "./App.css";
import ListItems from "./component/Items/ListItems";
import Header from "./component/layout/Header";
import CartProvider from "./API/CartProvider";
import Cart from "./component/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = React.useState(false);

  const onClickHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={hideCartHandler}/> }
     <Header onClick={onClickHandler}/>
      <main>
        <ListItems onClick={hideCartHandler} />
      </main>
    </CartProvider>
  );
}

export default App;
