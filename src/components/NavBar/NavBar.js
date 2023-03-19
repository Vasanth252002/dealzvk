import React from 'react'
import './NavBar.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

function NavBar() {
  const [hamburger, setHamburger]=useState(false);
  const [viewmobilemenu, setViewmobilemenu]=useState(false);
  const [opencart,Setopencart]=useState(false)
  const products=useSelector((state)=>state.cart.products)
  return (
    <div className="navbar">
      <div className="logo">
            ||Dealz||
          </div>
        <div className={(hamburger==false)?"left-items active":"left-items"} >
          
          <div className="items"><Link className="links" to="./">Homepage</Link></div>
          <div className="items">
            <Link className="links" to='/products/2'>Men</Link>
          </div>
          <div className="items">
            <Link className="links" to='./products/1'>Women</Link></div>
          <div className="items">
            <Link className="links" to='./products/3'>
            Children</Link></div>
          <div className="items"><Link className="links" to='./products/4'>Accessories</Link></div>
        </div>
        <div className="right-items">
            <div className="icons"><SearchOutlinedIcon/></div>
            <div className='icons'><PersonOutlineOutlinedIcon/></div>
            <div className='icons'><FavoriteBorderOutlinedIcon/></div>
            <div className='icons-cart' onClick={(e)=>Setopencart(!opencart)}><ShoppingCartOutlinedIcon/><span>{products.length}</span></div>
            {opencart && <Cart/>}
            
        </div>
        <div className='icons-mobile' onClick={()=>{setHamburger(!hamburger);setViewmobilemenu(!viewmobilemenu)}}>
              {(hamburger==true)?<CloseOutlinedIcon/>:<MenuOutlinedIcon/>}
            </div>
        
    </div>
  )
}

export default NavBar