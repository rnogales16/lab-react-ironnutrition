import React, { useState } from "react"


function SearchBar(props) {
  const [search, setSearch] = useState('')

  function findFood(event) {
    event.preventDefault()
    console.log(search)
    props.searchHandler(search)
  }

  function handleChange(event) {
    setSearch(event.target.value)
  }
  
  /* const filteredFoods = search.length === 0 ? foods : foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
 */
  return (
    <form onSubmit={findFood}>
      <input type='text' value={search} onChange={handleChange}/>
    </form>
  )
}
export default SearchBar