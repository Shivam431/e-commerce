import { Fragment } from "react";
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const ModalOverlay= (props) => {
    return (
        <div className={classes.modal}>
          <div className={classes.content}>{props.children}</div>
        </div>
      );
 };

 const Backdrop= (props) => {
    return <div className={classes.backdrop} />;
 };

 const portalElement = document.getElementById('modeloverlays');

 const Modal = (props) => {
    return (
      <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </Fragment>
    );
  };

  export default Modal;