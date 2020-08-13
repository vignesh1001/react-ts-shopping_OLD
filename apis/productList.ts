import { logger } from '../utils/logger'
import api from './api'

const getProductData = async (cat: any) => {
  let data = {"min_price":0,"max_price":0,"category":cat.productList,"brand":[],"color":[],"room":[],"sort_by":"","item_per_page":10,"page_no":1,"specification":[]}
  try {
    const action = '/product/filter_products'
    const result = await api.postData(action, data);
    console.log("result.data",result.data)
    return result.data
  } catch (error) {
    logger('error.response', error)
    throw error
  }
}

const getBCData = async (cat: any) => {
  try {
    const action = '/product/breadcum_data_by_sub_category/'+cat.category
    const result = await api.getData(action)

    return result.data
  } catch (error) {
    logger('error.response', error)
    throw error
  }
}


export default {
  getBCData,
  getProductData
}
