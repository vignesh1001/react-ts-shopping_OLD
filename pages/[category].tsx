import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';


import { END } from 'redux-saga';
import { loadFeatureCategoryData, loadCategoryData } from '../store/category/actions';
import { loadFooterData, loadHeaderData} from '../store/common/actions';
import Category from '../components/category';
import { wrapper } from '../store';
const category: any = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(startClock());
  });

  return <Category/>;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
  console.log("query",query)
  let cat = query.category;
   store.dispatch(loadHeaderData());
   store.dispatch(loadFeatureCategoryData(cat));
   store.dispatch(loadCategoryData(cat));
   store.dispatch(loadFooterData());
   store.dispatch(END);
   await store.sagaTask?.toPromise();
 });
 

export default category;
