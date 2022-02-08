import React from "react";
import { useState } from "react/cjs/react.development";

function PlantCard({ id, name, image, price, handleDelete, newPrice, setNewFormPrice, handleEditprice }) {
  const [inStock, setInStock] = useState(true)
  const [editPriceDrop, setEditPriceDrop] = useState(false)
  

  function handleInStock() {
    setInStock(inStock => !inStock)
  }

  function handleEditPriceDrop() {
    setEditPriceDrop(editPriceDrop => !editPriceDrop)
  }

  

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {editPriceDrop ? <form>
        <input type="number"  placeholder="Edit price" value={newPrice} onChange={(e) => setNewFormPrice(e.target.value)} />
        <button type='submit' onClick={(e) => handleEditprice(e, id)}>Submit</button>
      </form> : null}
      <button onClick={handleEditPriceDrop}>Edit Price</button>
      {inStock ? (
        <button className="primary" onClick={handleInStock}>In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
