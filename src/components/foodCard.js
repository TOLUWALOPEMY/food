import StarRatings from 'react-star-ratings';

function FoodCard({ food }) {
  return (
    <div className="card flex flex-col items-center col-span-12 sm:col-span-6 lg:col-span-4 my-5 md:my-10 pt-10 shadow-lg">
      <img src={food.strMealThumb} alt={food.strMeal} className="rounded-lg card-img" />
      <div className="flex justify-between w-full px-4 mt-6 text-2xl font-bold theme-black">
        <h1>{food.title}</h1>
        <h2>{food.price}</h2>
      </div>
      <h2 className="w-full px-4 text-sm font-semibold theme-grey">{food.strMeal}</h2>
      <p className="w-full px-4 text-sm font-semibold theme-grey mt-4">
        {`${food.description.substring(0, 142)}...`}
      </p>
      <div className="flex justify-between items-center w-full pl-4 mt-6">
        <div className="w-48">
          <StarRatings
            rating={food.ratings * (4/6)}
            starRatedColor="#FA9E0D"
            numberOfStars={4}
            name='rating'
            starDimension="20px"
            starSpacing="0.5px"
          />
        </div>
        <button className="card-btn theme-background py-0 px-10 text-white font-light"> + </button>
      </div>
    </div>
  )
}

export default FoodCard;