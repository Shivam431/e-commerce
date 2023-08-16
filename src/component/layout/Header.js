import { Fragment } from 'react';
import CartButton from './CartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Cargo-Station</h1>
        <CartButton onClick={props.onClick}/>
      </header>
    </Fragment>
  );
};

export default Header;