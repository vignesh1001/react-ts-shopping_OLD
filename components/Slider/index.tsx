import React from 'react';
//import './slider.scss'
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Slider = (props:any) => {
  const isCurrentLangEng = true;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (<div className="test-wrapper d-xs-none most-popular-carousel"> 
  <div className="wrapper">
  <div className="container">
  <div className="row">
  <div className="col-md-12">
    
  <div className="slider-heading "> 
  {props && props.heading &&   
      <h2 className="main-header-regular" >    
        <span>
          { props.heading }
        </span>         
      </h2>  
}  
    </div>
  <div className="slider-section">
  <div className="sections">
  <div className="inner-wrap">
  {props && props.data &&
  
  <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive} 
    >

{props && props.data  && props.data.map((item: any) => 
      <div className="slide holder-img">        
          <div className="item-contaner" >
            {
              item.in_store_price > 0 && <div className="web_exclusive_online_price" > 
              { "web_exclucive_online_price" }              
            </div>
            }              
            <div className="heartIcons">
            </div>
  
          <div > 
            <span 
              className="gift_icon">
              <LazyLoadImage  src="/images/gift-icon2.png" alt=""/>
            </span>
  
            <a >  <LazyLoadImage  src={item.image} alt="" className="img-resp" /> </a>
              <span className="ribben" > { `Sale` }</span>
  
            <div className="description " >
              <div className="price-label">
                <a  >
                    <p >
                        { item.product_name }
                    </p>
                    {item.sale_price}
                    <i className="elite-lari"></i>
                </a>
  
              </div> 
              
            </div>
          </div> 
          
          </div>
      </div>
      )};
      
    </Carousel>
}
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
}

export default Slider;
