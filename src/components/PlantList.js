import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleDelete, newPrice, setNewFormPrice, handleEditprice }) {
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard 
        key={plant.id} 
        id={plant.id} 
        name={plant.name} 
        image={plant.image} 
        price={plant.price} 
        handleDelete={handleDelete}
        setNewFormPrice={setNewFormPrice}
        newPrice={newPrice}
        handleEditprice={handleEditprice}
        />
      ))}
      
    </ul>
  );
}

export default PlantList;
