import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] =useState([])
  const [name, setNewName] = useState('')
  const [image, setNewImage] = useState('')
  const [price, setNewPrice] = useState()
  const [search, setSearch] = useState('')
  const [newPrice, setNewFormPrice] = useState()
  const plants_url = 'http://localhost:6001/plants'
  console.log(search)

  useEffect(() => {
    fetch(plants_url)
    .then(res => res.json())
    .then(data => {
      setPlants(data)
      setFilteredPlants(data)
    })
  }, [])

  function handleFormSubmit(e) {
    e.preventDefault()
    const newObj = { 
      name,
      image,
      price
    }
    const updatedPlants = [...plants, newObj]
    setFilteredPlants(updatedPlants)
    fetch(plants_url, {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObj)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

    useEffect(() => {
      const updatedPlants = plants.filter(plant => plant.name.includes(search))
      setFilteredPlants(updatedPlants)
      console.log(search)
    }, [search])

    function handleDelete(id) {
      const updatedPlants = filteredPlants.filter(plant => plant.id !== id)
      setFilteredPlants(updatedPlants)
      fetch(plants_url + `/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    
    function handleEditprice(e, id) {
      e.preventDefault()
      const updatedPlants = filteredPlants.map(plant => {
        if(plant.id === id){
        return{
          ...plant,
          price: newPrice
        } 
      } else {
        return plant
      }
      })
      setFilteredPlants(updatedPlants)
      fetch(plants_url + `/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          price: newPrice,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
  

  return (
    <main>
      <NewPlantForm 
      name={name} 
      image={image} 
      price={price} 
      setNewImage={setNewImage}
      setNewName={setNewName}
      setNewPrice={setNewPrice}
      handleFormSubmit={handleFormSubmit}
      />
      <Search search={search} setSearch={setSearch} />
      <PlantList handleEditprice={handleEditprice} plants={filteredPlants} handleDelete={handleDelete} newPrice={newPrice} setNewFormPrice={setNewFormPrice} />
    </main>
  );
}

export default PlantPage;
