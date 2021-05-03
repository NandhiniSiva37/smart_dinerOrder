import React from 'react';
import SingleProduct from './singleProduct';
import './ProductList.css'

export default function ProductList(props) {
    return(
        <div>
            <div className="button-container">
            <button value="all" onClick={props.handleBtns}>All </button>
            <button value="new" onClick={props.handleBtns}>New </button>
            <button value="processing" onClick={props.handleBtns}>Processing </button>
            <button value="finished" onClick={props.handleBtns}>Finished </button>
        </div>

        <div className="Products-center">
            {props.products.map(product =>{
                    return <SingleProduct key={product.id} product={product}/>
            })}
        </div>

        </div>

        
    )
}