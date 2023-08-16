import React from 'react'
import classes from "./Display.module.css";
import pic from "../../assest/hero.png";
import ListForm from "./ListForm";
import CartContext from "../../API/CartContext";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function DisplayItem(item) {
    const cartctx= React.useContext(CartContext)
    const addToCartHandler =(enteredAmount)=>{
        console.log("in list item")
        console.log(item); 
    cartctx.addItem({
      id: item.id,
      name: item.title ,
      amount: enteredAmount,
      price: item.price
    })
      }
  return (
    <React.Fragment>
{ item.loading ?
    <div className={classes.cards}>
    <div className={classes.image}>
      <img src={pic} alt="sf" />  
    </div>
    <div className={classes.title}>
      <h1>{item.name}</h1>
    </div>
    <div className={classes.desc}>
      <p>{item.desc}</p>
      <p>${item.price}</p>
      <div className={classes.btn}>
      <ListForm onAddToCart={addToCartHandler}/>
      </div>
    </div>
  </div>
  :
  <div className={classes.cards}>
   <SkeletonTheme baseColor="grey" highlightColor="white">
    <p>
    <Skeleton variant="rounded" width={408} height={60} />
      <Skeleton variant="text"/>
      <Skeleton variant="text"/>

    </p>
  </SkeletonTheme>
  </div>
}
    </React.Fragment>
  )
}
