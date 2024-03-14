import React, { useContext } from 'react'
import './Categories.scss'
import Context from '../../Context/Context'
import dropdown from '../../Assets/dropdown_icon.png'
import Items from '../../Component/Items/Items'

function Categories(props) {
  let {all_product} = useContext(Context)
  return (
    <div className='category-container'>
      <img src={props.banner} />
      <div className="sorting-feature">
        <p><span>Showing 1 - 12</span> out of 54 Products</p>
        <p>sort by <img src={dropdown}/></p>
      </div>
      <div className="data-container">
        {
          all_product.map((item,index)=>{
            if(props.category === item.category){
              return(
                <Items key={index} id = {item.id} image = {item.image} name ={item.name} new_price = {item.new_price} old_price = {item.old_price}/>
              )
            }
          })
        }
      </div>
      
    </div>
  )
}

export default Categories