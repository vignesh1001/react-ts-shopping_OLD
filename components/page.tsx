import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import HeaderMenu from '../components/HeaderMenu';
import HomeSlider from '../components/HomeSlider';
import TopCategories from '../components/TopCategories';
import HomeCategories from '../components/HomeCategories';

import Slider from '../components/Slider';

import Footer from '../components/Footer';
import FooterMenu from '../components/FooterMenu';

const Page = () => {  
  const mostPopluarProducts = useSelector((state: RootState) => state.home.mostPopluarProducts);
  const state = useSelector((state: RootState) => state);
  return <div><Header/><HeaderMenu/><HomeSlider/><Slider heading={` Most Popular Products `} data={mostPopluarProducts.data} /><TopCategories/><HomeCategories /><FooterMenu /><Footer /></div>
}
export default Page
