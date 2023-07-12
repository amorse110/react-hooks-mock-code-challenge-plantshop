import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
    
  
  return (
      <PlantCard 
        image={props.image}
        name={props.name}
        price={props.price}
      />
    )
  }

export default PlantList;
