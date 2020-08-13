import {
  APP_START,
  UPDATE_TOP_CATEGORIES,
  UPDATE_FOOTER_FAILURE,
  UPDATE_FOOTER_SUCCESS,
  UPDATE_TOP_FAILURE
} from '../actions'
import { CommonActionTypes } from '../actions/types'

interface ICommonState {
  pending: boolean
  appStart: boolean
  profile: IProfile | null,
  topCategories: any,
  footer: any
}

const initCommonState: ICommonState = {
  pending: true,
  appStart: true,
  profile: null,
  footer:{},
  topCategories: {}
}

export const common = (state = initCommonState, action: CommonActionTypes) => {
  switch (action.type) {
    case APP_START:
      return { ...state, appStart: true, pending: false }
      case UPDATE_FOOTER_SUCCESS:
        return { ...state, footer: action.footer }
      case UPDATE_FOOTER_FAILURE:
        return { ...state }
    case UPDATE_TOP_CATEGORIES:
      return { ...state, topCategories: action.header }
    case UPDATE_TOP_FAILURE:
      return { ...state }
    default:
      return state
  }
}
