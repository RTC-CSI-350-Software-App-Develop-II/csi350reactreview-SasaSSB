import { data } from "../data/data.js";
import Restaurant from "./Restaurant";

const RestaurantsContainer = () => {
  return (
    <div className="restaurantContainer">
      {data.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantsContainer;
