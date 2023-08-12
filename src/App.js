import { Fragment, useState } from "react";
import "./App.css";
import ListItems from "./component/Items/ListItems";
import Header from "./component/layout/Header";
import Cart from "./component/Cart/Cart";

function App() {
  const [CartState, setCartState] = useState(false);
  return (
    <Fragment>
     { CartState && <Cart />}
     <Header/>
      <main>
        <ListItems />
      </main>
    </Fragment>
  );
}

export default App;
