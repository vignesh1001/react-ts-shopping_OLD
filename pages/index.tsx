import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';


import { END } from 'redux-saga';
import { loadHomeSliderData, loadTopCategoryData, loadCategoryData, loadMostPopularData} from '../store/home/actions';
import { loadFooterData, loadHeaderData} from '../store/common/actions';
import Page from '../components/page';
import { wrapper } from '../store';

const Index: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(startClock());
  });

  return <Page />;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
 // store.dispatch(tickClock(false));

  // if (!store.getState().placeholderData) {
  //   store.dispatch(loadData());
  //   store.dispatch(END);
  // }
  store.dispatch(loadHomeSliderData());
  store.dispatch(loadTopCategoryData());
  store.dispatch(loadCategoryData());
  store.dispatch(loadMostPopularData());
  
  store.dispatch(loadHeaderData());
  store.dispatch(loadFooterData());
  store.dispatch(END);
  await store.sagaTask?.toPromise();
});

export default Index;
