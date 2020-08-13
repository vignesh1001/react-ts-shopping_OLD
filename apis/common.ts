import { logger } from '../utils/logger'
import api from './api'

const getFooterSections = async () => {
  try {
    const action = '/page/all_pages'
    const result = await api.getData(action);
    return result.data
  } catch (error) {
    logger('error.response', error)
    throw error
  }
}

const getTopCategories = async () => {
  try {
    const action = '/product/top_categories'
    const result = await api.getData(action)

    return result.data
  } catch (error) {
    logger('error.response', error)
    throw error
  }
}


export default {
  getTopCategories,
  getFooterSections
}
