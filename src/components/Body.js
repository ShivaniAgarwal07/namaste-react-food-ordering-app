import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((e) => (
          <RestaurantCard key={e.info.id} resData={e} />
        ))}
      </div>
    </div>
  );
};
export default Body;
