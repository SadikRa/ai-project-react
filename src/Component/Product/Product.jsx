import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
    const {image, description, id, name, features, published_in} = props?.data;
    return (
        <div className='card-style'>
            <img src={image}alt="" srcset="" />
            <h5>Features</h5>
            {features?.map((data, index)=> (<p>
                {index +1 }. {data}
            </p>))}
            <hr />
            <h3>{name}</h3>
          <div className='icon'>
          <p><FontAwesomeIcon icon={faCoffee} /> {published_in}</p>
          <p><FontAwesomeIcon icon={faRightToBracket} /></p>
          </div>
        </div>
    );
};

export default Product;