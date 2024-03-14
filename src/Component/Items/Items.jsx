import React from 'react'
import './Item.scss'

function Items(probs) {
    return (
        <div className='item-container'>
            <div className="cards">
                <div className="card">
                    <div className="popular-img">
                        <img src={probs.image} />
                    </div>
                    <p>{probs.name}</p>
                    <div className="values">
                        <p>${probs.new_price}</p>
                        <p>${probs.old_price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items