    import classes from "./Cart.module.css";
    import Modal from "../UI/Modal";
    
    export default function Cart(props) {
     // const totAmount = `$${cartctx.totalAmount.toFixed(2)}`;
      return (
        <Modal >
          <div className={classes.total}>
            <span>total amount</span>
            <span>9</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]}>
              close
            </button>

              <button
                className={classes.button}

              >
                order
              </button>

          </div>
        </Modal>
      );
    }
