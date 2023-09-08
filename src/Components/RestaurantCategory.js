import React, { useState } from 'react';
import ItemList from './ItemList';


const RestaurantCategory = ({ data, showItem, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }


    return (
        <div>
            {/* Header */}
            <div className=' mx-auto my-4 w-6/12 bg-gray-50 shadow-lg p-4 ' >

                <div className='flex justify-between cursor-pointer ' onClick={handleClick} >
                    <span className='font-bold text-lg ' >
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span> 🔽 </span>
                </div>

                {showItem && <ItemList items={data.itemCards} />}

            </div>
            {/* Accordion Body */}

        </div>
    );
}

export default RestaurantCategory;
