import React, { useEffect, useState } from 'react';
import './Card.css'
import Product from '../Product/Product';
const Card = () => {
    const [dates , setDates] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data=> setDates(data.data.tools))
    }, [])
    return (

        <div className='card-continer'>
            <div className='cards'>
            {
                dates.map((data) => <Product 
                key={data.id}
                data={data}
                >

                </Product>)
            }
            </div>
            <div className='order-detail'>
                <h6>so what! what i can do</h6>
            </div>
        </div>
    );
};

export default Card;