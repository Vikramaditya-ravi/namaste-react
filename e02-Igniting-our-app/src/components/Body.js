import RestaurantCard from "./RestaurantsCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            className="search-input"
            placeholder="search for restaurants"
          ></input>
          <button className="search-btn">Search</button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filterList = restaurantList.filter(
              (res) => res.data.avgRating >= 4
            );
            setRestaurantList(filterList);
          }}
        >
          Filter Button
        </button>
      </div>
      <div className="res-conatainer">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
