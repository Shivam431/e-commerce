    import { useContext } from "react";
    import classes from "./Cart.module.css";
    import Modal from "../UI/Modal";
    import CartContext from "../../API/CartContext";
    import CartItem from "../layout/CartItem";
    
    export default function Cart(props) {
      const cartctx = useContext(CartContext);
      const hasItem = cartctx.items.length > 0;
      console.log(cartctx.items);
      const cartItemRemoveHandler = (id) => {
        cartctx.removeItem(id); 
      };
    
      const cartItemAddHandler = (item) => {
        cartctx.addItem({...item,amount:1})
      };
      const CartItems = (
        <ul className={classes["cart-items"]}>
          {cartctx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onAdd={cartItemAddHandler.bind(null, item)}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
          ))}
        </ul>
      );
     // const totAmount = `$${cartctx.totalAmount.toFixed(2)}`;
      return (
        <Modal >
          {CartItems}
          <div className={classes.total}>
            <span>total amount</span>
            <span>{cartctx.totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClick}>
              close
            </button>
{hasItem &&  <button
                className={classes.button}

              >
                order
              </button> }
             

          </div>
        </Modal>
      );
    }
