import React from "react";

function NewPlantForm({ price, name, image, setNewName, setNewPrice, setNewImage, handleFormSubmit }) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setNewName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setNewImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setNewPrice(e.target.value)} />
        <button type="submit" onClick={handleFormSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
