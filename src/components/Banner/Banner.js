import React from 'react'
import { bimages } from './BannerImgs'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Banner.scss'

function Banner() {
    const autoplayOptions = {
        delay: 1800,
        stopOnInteraction:false
      }
      const [emblaBanner] = useEmblaCarousel({ loop: true },[Autoplay(autoplayOptions)])
  return (
    <div className="slider-parent">
        <div className="embla" ref={emblaBanner}>
      <div className="embla__container">
        {
            bimages.map((item,index)=>{
                return(
                    <div className="image-container">
                        <img className="images" src={item.url}/>
                        <div className="description">{item.description}</div>
                    </div>
                )
            })
        }
      </div>
    </div>
    </div>
  )
}

export default Banner