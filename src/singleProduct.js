import React from 'react';



export default function singleProduct(props){
        
        return(
                <div className=" f3 bg-#FFA3D7 dib br3 pa3 ma2 grow bw2 shadow-5">
                 <img  width="200" height="200" alt='Orders' src={`https://robohash.org/${props.product.id}?{100*100}}`}/> 
                    <h3>{props.product.orderName}</h3>
                    <h6>{props.product.orderStage}</h6>
                    <h6>{props.product.orderDate}</h6>
                    </div>
        )
}
