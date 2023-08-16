import React, { Fragment, useState } from "react";
import classes from "./ListItems.module.css";

import DisplayItem from "./DisplayItem";

const DUMMY_ItemS = [
  {
    id: "m1",
    name: "Cargo Fits ",
    description: "Slim Fit",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Cargo",
    description: "Regular Fit",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Shirt",
    description: "funky trandy shirt",
    price: 12.99,
  }
];

export default function ListItems(props){
  const dislpayItem = DUMMY_ItemS.map((item)=>(
    <DisplayItem
      id={item.id} // this is new!
      key={item.id}
      title={item.name}
      desc={item.description}
      price={item.price}
      loading={props.loading}
    />
  ))
  return (
    <Fragment>
      <div className={classes.row}>
      {dislpayItem}
      </div>
    </Fragment>
  );
}
