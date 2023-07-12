import React, { useState } from "react";

const initialFormState = {
  name: "",
  image: "",
  price: ""
}

function NewPlantForm({ onAddPlant }) {

  const [formData, setFormData] = useState(initialFormState)

  const {name, image, price} = formData

  function handleChangeInput(event) {
    const { name, value } = event.target
    setFormData(formData => {
      return {...formData, [name]: value}
    })
  }

  function handleSubmit(event) {
    console.log(event) //logs when you click submit
    event.preventDefault()
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price)
      })
    }
    fetch("http://localhost:6001/plants", config)
      .then(res => res.json())
      .then(onAddPlant)
    setFormData(initialFormState)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeInput} value={name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChangeInput} value={image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChangeInput} value={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
