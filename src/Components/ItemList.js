import React from 'react';
import { CDN_URL } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addItem } from "../utils/cartSlice"

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));

    }

    return (
        <div>

            {items.map((item) => (
                <div key={item.card.info.id}
                    className='p-2 m-2 border-b-2 border-gray-200 text-left flex  justify-between ' >

                    <div className='w-9/12' >
                        <div className='py-2' >
                            <span className='font-semibold' >{item.card.info.name}</span>
                            <span>
                                {" "}  - ₹ {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice}
                            </span>
                        </div>

                        <p className='text-xs' >{item.card.info.description}</p>
                    </div>
                    <div className='w-3/12 p-4'>
                        <div className='absolute' >
                            <button className='p-1 bg-white shadow-lg mx-20 my-14 rounded-lg'
                                onClick={() => handleAddItem(item)}>
                                <p className='text-sm' >Add +</p>
                            </button>
                        </div>
                        <img className='rounded-lg' src={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
            ))}

        </div>
    );
}

export default ItemList;
