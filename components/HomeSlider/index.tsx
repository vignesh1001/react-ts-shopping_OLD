import React from 'react';
//import './home.scss';
import { Carousel } from "react-responsive-carousel";
import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HomeSlider = () => {
  const styles = {width: "100%" };  
  const homeSlider = useSelector((state: RootState) => state.home.homeSlider);
  const stateDatat = useSelector((state: RootState) => state);
  console.log("homeSlider",stateDatat)
  const slider: any = [];
  homeSlider && homeSlider.data && homeSlider.data.slides.map((data:any)=>{
    if(data.language === "1"){
      slider.push(data);
    }
  });
  return (
    <div>
    {slider && slider.length > 0 &&
    <Carousel  showArrows={false} showThumbs={false} interval={5000} >     
  {slider.map((data:any)=>
  <div style={styles}>
  <LazyLoadImage alt="" src={data.image_path} />
</div>
)}
    </Carousel>}</div>);
}

export default HomeSlider
