import React from 'react'
import classes from "./Display.module.css";
import pic from "../../assest/meals.jpg";
import ListForm from "./ListForm";
import CartContext from "../../API/CartContext";
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
      <ListForm onAddToCart={addToCartHandler}/>
    </div>
  </div>
  )
}
