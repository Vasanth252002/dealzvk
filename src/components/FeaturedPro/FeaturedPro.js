import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import './FeaturedPro.scss'
/*`/products?populate=*&[filters][type][$eq]=${type}`*/
function FeaturedPro({type}) {
    

    const {data,loading,error}=useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

   
  return (
    <div className="featured-products-container">
        <div className="fp-header">
            <h1>{type} Products</h1>
            
        </div>
        <div className="fp-body">
            {
                error ? "Something Went wrong!" : (loading ? "Wait Till I get The Best items for you!" : data.map((item)=>(
                    <Card item={item} key={item.id}/>
                )))
            }
        </div>
    </div>
  )
}

export default FeaturedPro