import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { MENU_URL } from '../utils/Constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);

    // const handleClick = () => {
    //     setShowItem(!showItem);
    // }

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);


    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // This section is to view resturant menu

    const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.["card"]?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    return (
        <div className='text-center ' >
            <h2 className='font-bold my-4 text-2xl' >{name}</h2>
            <h4 className='font-semibold text-lg'>{cuisines.join(" , ")} - {costForTwoMessage}</h4>
            {/* Accordian categories */}
            {
                categories.map((category, index) => (
                    <RestaurantCategory
                        key={category?.card?.card.title}
                        data={category?.card?.card}

                        // Parent controlled component
                        showItem={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                ))}
        </div>
    )
}

export default RestaurantMenu