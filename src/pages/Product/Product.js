import React, { useEffect } from 'react'
import { useState } from 'react'
import './Product.scss'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import { useParams } from 'react-router-dom';
import { makeRequest } from '../../makeRequest';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

function Product() {
  const id=parseInt(useParams().id)
  const [selectedImg, setSelectedimg]=useState(0)
  const [quantity,setQuantity]=useState(1)
  const dispatch=useDispatch()
 const [data,setData]=useState({})
 const [loading, setLoading]=useState(false)
 const [error,setError]=useState(false)
 useEffect(()=>{
  const  fetchData = async () => {
    try{
      setLoading(true)
      const res = await makeRequest.get(`/products/${id}?populate=*`)
      setData(res.data.data)
    }catch (err){
      setError(true)
    }
    setLoading(false)
  }
  fetchData();
 },[id])


  const images=[
    data?.attributes?.imgs1,
    data?.attributes?.imgs2
  ]  
  console.log(images)
  return (
    <div className='container-product'>
        {error? "something went wrong!" : (loading? "Loading the information about this Best Product!" : (<><div className="product-left">
            <div className='product-left-left'>
                <img src={images[0]} alt="image1" onClick={(e)=>setSelectedimg(0)}/>
                <img src={images[1]} alt="image2" onClick={(e)=>setSelectedimg(1)}/>
            </div>
            <div className="product-left-right">
                <img src={images[selectedImg]} alt="selected-img"/>
            </div>
        </div>
        <div className="product-right">
          <h1>{data?.attributes?.title}</h1>
            <span className="product-price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
          <div className='quanitiy'>
            <button className="actions" onClick={(e)=>setQuantity((quantity)=>(quantity===1 ? 1:quantity-1))}>-</button>
            <span>{quantity}</span>
            <button className="actions" onClick={(e)=>setQuantity(quantity+1)}>+</button>
          </div>
          <button className="add" onClick={()=>dispatch(addToCart({
            id:data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            price: data.attributes.price,
            img1: data.attributes.imgs1,
            quantity,

          }))}><AddShoppingCartOutlinedIcon/> ADD TO CART</button>
          <div className="product-links">
            <FavoriteBorderOutlinedIcon/> ADD TO WISH LIST
          </div>
          <div className="product-links">
            <BalanceOutlinedIcon/> COMPARE
          </div>
          <hr className='hr'></hr>
          <div className='misc'>FAQ</div>
          <hr className='hr'></hr>
          <div className="misc">ADDITIONAL INFORMATION</div>
          <hr className='hr'></hr>
          <div className='misc'>DESCRIPTION</div>
          <hr className='hr'></hr>
        </div></>))}
    </div>
  )
}

export default Product