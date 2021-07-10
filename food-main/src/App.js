import { useEffect, useState } from 'react';
import FoodCard from './components/foodCard';

function App() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('https://asm-dev-api.herokuapp.com/api/v1/food')
      .then((response) => response.json())
      .then((response) => setFoods(response.data.meals))
  }, []);
  console.log(foods)
  return (
    <div className="container">
      {foods.map((food) => <FoodCard key={food.id} food={food} />)}
    </div>
  );
}

export default App;





// const Loader = () => (
  //   <div
  //     className="loader"
  //     style={{ borderTopColor: '#FA9E0D' }}
  //   />
  // );