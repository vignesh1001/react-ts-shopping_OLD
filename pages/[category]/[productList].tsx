import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';


import { END } from 'redux-saga';
import { loadProductData, loadBCData } from '../../store/productList/actions';
import { loadFooterData, loadHeaderData} from '../../store/common/actions';
import ProductList from '../../components/productList';
import { wrapper } from '../../store';
import useSWR from 'swr'
const productList: any = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(startClock());
  });

  return <ProductList/>;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
   store.dispatch(loadHeaderData());
   
   store.dispatch(loadProductData(query));
   store.dispatch(loadBCData(query));

   store.dispatch(loadFooterData());
   store.dispatch(END);
   await store.sagaTask?.toPromise();
 });
 

export default productList;
