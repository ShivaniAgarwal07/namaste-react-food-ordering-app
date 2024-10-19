import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  //tripadvisor
  const url =
    "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "12216056e1msh61664a95f82fa42p1ae9fdjsn0540c1e29cf1",
      "x-rapidapi-host": "tripadvisor16.p.rapidapi.com",
    },
  };
  //namastereact
  const fetchData = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    const restaurantDataList = json?.data?.data;
    setListOfRes(restaurantDataList);
    setFilteredRestaurant(restaurantDataList);
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRes.filter((res) => {
                console.log("filtered res")
                console.log(res.name)
                return res.name.toLowerCase().includes(searchtext.toLowerCase())
              });
              console.log(filteredRestaurant)
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return  <RestaurantCard key={restaurant.restaurantId} resData={restaurant} />
        })}
      </div>
    </div>
  );
};
export default Body;
