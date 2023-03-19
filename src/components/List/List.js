import './List.scss'
import React from 'react'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

function List({subCats, maxPrice, sort, catId}) {

    const {data,loading,error}=useFetch(`/products?populate=*&[filters][categories][id]=${catId}
    ${subCats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}`)
  return (
    <div className="containerList">
        {error? "Something went Wrong!" : (loading ? "loading" : data.map(item=>(
            
            <Card item={item} key={item.id}/>
        )))}
    </div>
  )
}

export default List