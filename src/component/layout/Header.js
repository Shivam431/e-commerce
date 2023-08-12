import { Fragment } from 'react';
import CartButton from './CartButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
    </Fragment>
  );
};

export default Header;