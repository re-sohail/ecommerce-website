import React from 'react'
import './NewCollection.scss'
import collection from '../../Assets/new_collections'
import Items from '../Items/Items'

function NewCollection() {
  return (
    <div className='collection-container'>
      <h1>New Collection</h1>
      <hr />
      <div className="collections">
        {
          collection.map((item,index)=>{
            return(
              <Items key={index} id = {item.id} image = {item.image} name ={item.name} new_price = {item.new_price} old_price = {item.old_price}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default NewCollection