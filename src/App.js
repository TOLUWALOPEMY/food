import { useEffect, useState } from 'react';
import FoodCard from './components/foodCard';


const Loader = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div
      className="animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-400 h-20 w-20"
      style={{ borderTopColor: '#FA9E0D' }}
    />
  </div>
);

function App() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('https://asm-dev-api.herokuapp.com/api/v1/food')
      .then((response) => response.json())
      .then((response) => setFoods(response.data.meals))
  }, []);
  console.log(foods)
  return (
    <div className="w-10/12 mx-auto grid grid-cols-12 gap-2 md:gap-6 lg:gap-12 mt-6 md:mt-10">
      {!!foods.length
        ? foods.map((food) => <FoodCard key={food.id} food={food} />)
        : <Loader />
      }
    </div>
  );
}

export default App;