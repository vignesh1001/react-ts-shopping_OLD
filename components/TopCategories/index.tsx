import React from 'react';
import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TopCategories = () => {
  const isCurrentLangEng = true;
  const topCategories = useSelector((state: RootState) => state.home.topCategories);
  return (<div >
<div className="test-wrapper"  >
  <div className="cat-wrapper">
    <div className="container">
      <div className="row text-center category-row">
        <div className="col-md-12">
          <div className="category-heading mb-5">
            <h2 className="main-header-regular alternate">{"top categories"}</h2>
          </div>
        </div>
        {
          topCategories && topCategories.data && topCategories.data.map((category: any) =>
        <div className="col-md-4 col-sm-6 col-xl-3 col-lg-3 col-6 special-class">
            <div className="category-section" >
              <LazyLoadImage  src={category.category_image} alt="" />
                 <p className='mob-btn' >
                {isCurrentLangEng===true?(category.category_name):(category.category_name_gr) }
               </p>
              <div className="category-overlay">
                <div className="overlay">
                  <button
                    className="category-btn">
                    {isCurrentLangEng===true?(category.category_name):(category.category_name_gr) }
                  </button>
                </div>
              </div>
            </div>
          </div>
          )}
      </div>
    </div>
  </div>
</div>
</div>);
}

export default TopCategories
