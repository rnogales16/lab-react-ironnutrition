import React, {useState} from 'react'
import allFoods from '../foods.json'
import FoodBox from './FoodBox'
import NewFood from './NewFood'
import SearchBar from './SearchBar'


function Foods() {

  const [foodsData, setFoodsData] = useState(allFoods);

  const [foodsNewData, setFoodsNewData] = useState(allFoods);

  function addFood(newFood){
    const updatedFoodData = [ newFood, ...foodsData ] 
    setFoodsData(updatedFoodData)
  }

  function search(searchingFood) {
    setFoodsData(allFoods)
    const newArr = foodsData.filter((foodItem) => {
      return foodItem.name.toLowerCase().includes(searchingFood.toLowerCase())})
    setFoodsData(newArr)
    setFoodsNewData(foodsNewData)
  }


  return (
    <div>
      <h1>IronNutrition</h1>
      <SearchBar searchHandler={search}/>
      <NewFood addFoodHandler={addFood}/>


      {foodsData.map((food, index) => {
        return(
          <FoodBox key={index} food={food}/>
        )
      })}

    </div>
  )
}

export default Foods