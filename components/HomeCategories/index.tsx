import React from 'react'
//import './category.scss';
import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from '../Slider';

const HomeCategories = () => {
  const categories = useSelector((state: RootState) => state.home.categories);
  const isCurrentLangEng = true;
  return (
    <div>
      { categories && categories.data && categories.data.map((homeCategoryData: any) => 
  <div className="test-wrapper" >
  <div className="wrapper">
    <div className="container border mb-3">
      <div className="row special-border">
        <div className="col-md-12 col-lg-5 d-lg-none d-md-none d-sm-none">
          <div className="selection-container">
            <h2 className="sub-header-regular">
              {homeCategoryData.section_name}
            </h2>
          </div>
        </div>

        <div className=" parentsHeading col-lg-5">
          <div className="selection-container">
          <h2 className="sub-header-regular d-xs-none">
              {isCurrentLangEng==true?homeCategoryData.section_name:homeCategoryData.section_name_gr}
          </h2>

             <ul className="row">
               { homeCategoryData.categories.map((category:any) =>
              <li className=" col-lg-6 col-md-3 col-12 col-6" >
                <div >                  
                  <h3>
                  <a className="nav-link" >{ category.category_name} </a>
                </h3>
              </div>
              </li> 
               )}

            </ul> 
          </div>
        </div>

        <div className="col-md-12 col-lg-7 pr-md-0 pl-0" id="none">
          <div className="section-2">
            <div className="d-xs-none">
              <div className="no-arrows">
                <a href="{{slide.link}}">
                  { homeCategoryData.slides.engSlides[0] && homeCategoryData.slides.engSlides[0].image_path &&
                  <LazyLoadImage  src={ homeCategoryData.slides.engSlides[0].image_path }
                   style={{display: 'block', width: '100%', top:0}}
                   className="img-fluid"
                  />
}
                </a>
               
              </div>
            </div>
          </div>
        </div>

      </div>
<Slider data={homeCategoryData.products} />
    </div>
  </div>
</div>
      )}

</div>
)}

export default HomeCategories
