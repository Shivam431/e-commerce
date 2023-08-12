import React, { Fragment } from "react";
import classes from "./ListItems.module.css";
import pic from "../../assest/meals.jpg";

const DUMMY_ItemS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function ListItems() {

  const dislpayItem = DUMMY_ItemS.map((item)=>(
    <div className={classes.cards}>
    <div className={classes.image}>
      <img src={pic} alt="sf" />  
    </div>
    <div className={classes.title}>
      <h1>{item.name}</h1>
    </div>
    <div className={classes.desc}>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button className={classes.button}>Add</button>
    </div>
  </div>
  ))
  return (
    <Fragment>
      <div className={classes.row}>
      {dislpayItem}
      </div>

    </Fragment>

  );
}
