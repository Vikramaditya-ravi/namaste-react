import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        alt="restaurants-logo"
        src={CDN_URL + cloudinaryImageId}
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>{avgRating}star</h4>
      <h4>{costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
