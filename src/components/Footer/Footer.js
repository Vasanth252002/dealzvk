import React from 'react'
import './Footer.scss'
import stripeimg from './stripe.png'

function Footer() {
  return (
    <div className="footer">
      <section className="flexboxes">
        <div className="footer-links">
          
        </div>
      </section>
      <section className="copyright">
        <div className="right-copy">
          C | VK
        </div>
        <div className="left-copy">
          <div><img className="payment-img" src={stripeimg} /></div>
        </div>
      </section>
    </div>
  )
}

export default Footer