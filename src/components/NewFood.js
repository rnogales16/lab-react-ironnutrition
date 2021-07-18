import React, { useState } from "react";

function NewFood(props){
  
  const initialState = {
    name: '',
    calories:'',
    image: ''
  }
  const [formState, setFormState] = useState(initialState)

  function handleChange(event){
    setFormState( { ...formState, [event.target.name]: event.target.value } )
  }

  function handleOnSubmit(event){
    event.preventDefault();
    console.log(formState)
    props.addFoodHandler(formState)
    setFormState(initialState)
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit} >
        <label>Name:</label>
        <input type="text" name="name" value={formState.name} onChange={handleChange} />

        <label>Calories:</label>
        <input type="number" name="calories" value={formState.calories} onChange={handleChange} />

        <label>Image:</label>
        <input type="url" name="image" value={formState.image} onChange={handleChange} />

        <button type="submit">Add New Food</button>
      </form>
    </div> 
  )
}
export default NewFood