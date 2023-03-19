import React from 'react'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import FeaturedPro from '../../components/FeaturedPro/FeaturedPro'
import './Home.scss'

function Home() {
  return (
    <div className="home-container">
        
          <Banner/>
          <FeaturedPro type='featured'/>
       
          <FeaturedPro type='trending'/>
        

    </div>
  )
}

export default Home