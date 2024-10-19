import {useState, useEffect} from 'react';
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const[resInfo, setResInfo]= useState(null)

    useEffect(()=>{
        fetchMenu()
    },[]);

    const fetchMenu = async () => {
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8788965&lng=81.0034519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json= await data.json()
        console.log(json)
        
    }


    return (
        <div className="menu">
            <h1>name</h1>
            <h2>Restaurant Menu</h2>
            <ul>
            <li>Daal Rice</li>
            <li>Paneer Rice</li>
            <li>Rajma Rice</li>
            <li>Chole Rice</li>
            </ul>
            
        </div>
    )
}
export default RestaurantMenu