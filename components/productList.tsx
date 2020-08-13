import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import HeaderMenu from './HeaderMenu';
import HomeSlider from './HomeSlider';
import TopCategories from './TopCategories';
import HomeCategories from './HomeCategories';

import Slider from './Slider';

import Footer from './Footer';
import FooterMenu from './FooterMenu';

const ProductList = () => {  
  const mostPopluarProducts = useSelector((state: RootState) => state.home.mostPopluarProducts);
  const state = useSelector((state: RootState) => state);
  return <div><Header/><HeaderMenu/><FooterMenu /><Footer /></div>
}
export default ProductList
