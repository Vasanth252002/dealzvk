import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'


function Card({item}) {
 
  return (
    <Link className='links-card' to={`/product/${item?.id}`}>
    <div className='card'>
        <div className="images">
            <img src={item?.attributes?.imgs1} alt="preview1" className="firstImg"/>
            <img src={item?.attributes?.imgs2} alt="preview2" className="secondImg"/>
        </div>
        <h2 className='item-title'>{item?.attributes.title}</h2>
        <div className='prices'>
            <h3 className='old'>${item?.attributes.oldprice || item?.attributes.price+20}</h3>
            <h3 className='new'>${item?.attributes.price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Card