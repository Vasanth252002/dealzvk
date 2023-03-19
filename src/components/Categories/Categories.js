import React from 'react'
import men from './Category/Men.jpg'
import women from './Category/women.jpg'
import chld from './Category/children.jpg'
import accesories from './Category/accesories.jpg'
import './Categories.scss'

function Categories() {
  return (
    <div className='categories-Home'>
        <h1 className='Category-Header'>Categories</h1>
        <div className="upper-categories">
            <img src={men} alt="men clothing"/>
            <img src={women} alt="women clothing"/>
        </div>
        <div className="Lower-categories">
            <img src={chld} alt="children"/>
            <img src={accesories} alt="accesories"/>
        </div>
    </div>
  )
}

export default Categories