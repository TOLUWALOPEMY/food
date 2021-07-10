function FoodCard({food}) {
  return (
    <div className="card">
      <h2>{food.strMeal}</h2>
      <img src={food.strMealThumb} alt={food.strMeal}/>
    </div>
  )
}

export default FoodCard;