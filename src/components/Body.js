import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRes, setListOfRes]= useState(resList);

  
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={()=>{
        const filteredList=listOfRes.filter((res)=>res.info.avgRating>4);
        console.log(filteredList);
        setListOfRes(filteredList);
        }}>
        Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((e) => (
          <RestaurantCard key={e.info.id} resData={e} />
        ))}
      </div>
    </div>
  );
};
export default Body;
