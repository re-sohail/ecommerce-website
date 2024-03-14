import React from 'react'
import './Popular.scss'
import img from '../../Assets/product_34.png'
import data_product from '../../Assets/data'
import Items from '../Items/Items'

function Popular() {
    return (
        <div className='popular-container'>
            <h1>Popular in Women</h1>
            <hr />
            <div className="data-img">

            {
                data_product.map((item, index) => {
                    return (
                        <Items key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                        )
                    })
                }
                </div>
        </div>
    )
}

export default Popular