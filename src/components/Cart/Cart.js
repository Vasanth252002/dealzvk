import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { makeRequest } from "../../makeRequest";
import { loadStripe } from '@stripe/stripe-js'

function Cart() {
    const products= useSelector(state=>state.cart.products)
    const dispatch = useDispatch()
    const totalPrice = () =>{
        let total=0;
        products.forEach((item)=>(total+=item.quantity*item.price))
        return total.toFixed(2)
    }

    const stripePromise = loadStripe('pk_test_51MmvhjSJFbfK7N4yiWmmHptqRJSfY8083UcKkjz58SpQMYVxAfTZkcMnHAzkX6qzPRrhHF7UVl1UJEZ4t2dVJDgC00ZTQZSPwb');
    const handlePayment = async () =>{
        try{
            const stripe = await stripePromise;
            const res=await makeRequest.post("/orders", {
                products,
            })
            await stripe.redirectToCheckout({
                sessionId:res.data.stripeSession.id,
            })
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className="cart-parent">
        <h1 className="cart-header">Products in your Cart</h1>
        <div className="totally">
        {products?.map((item)=>(
            
            <div className='item' key={item.id}>
                <img src={item.img1} alt="product-img"/>
                <div className="details">
                    <h3 className="item-title">{item.title.substring(0,25)}</h3>
                    <p>{item.desc.substring(0,25)}</p>
                    <div className="cart-price">{item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon onClick={()=>dispatch(removeItem(item.id))}className="delete-btn"/>
            </div>
        ))}  
        </div>  
        <div className="total"><span>SUBTOTAL</span><span>${totalPrice()}</span></div> 
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>  
        <div ><span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span></div>
    </div>

  )
}

export default Cart