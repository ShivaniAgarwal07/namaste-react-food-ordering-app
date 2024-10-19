import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    heroImgUrl,
    name,
    cuisines,
    averageRating,
    // costForTwo,
    // deliveryTime,
  } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={heroImgUrl}
        alt="restaurant"
      />
      <h3> {name} </h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      <h4>{averageRating}</h4>
      {/* <h4>{costForTwo}</h4> */}
      {/* <h4>{deliveryTime}</h4> */}
    </div>
  );
};
export default RestaurantCard;
