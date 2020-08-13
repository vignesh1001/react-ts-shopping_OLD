import {
  APP_START,
  UPDATE_FOOTER_FAILURE,
  UPDATE_FOOTER_SUCCESS,
  UPDATE_TOP_CATEGORIES,
  UPDATE_TOP_FAILURE
} from '../actions'

interface IAppStartAction {
  type: typeof APP_START
}
interface UpdateFooterSuccessAction {
  type: typeof UPDATE_FOOTER_SUCCESS
  footer: any
}

interface UpdateFooterFailureAction {
  type: typeof UPDATE_FOOTER_FAILURE,
  footer: null
}

interface TopCategoriesSuccessAction {
  type: typeof UPDATE_TOP_CATEGORIES
  header: any
}

interface TopCategoriesFailureAction {
  type: typeof UPDATE_TOP_FAILURE
  header: any
}

export type CommonActionTypes =
  | IAppStartAction
  | UpdateFooterSuccessAction
  | UpdateFooterFailureAction
  | TopCategoriesSuccessAction
  | TopCategoriesFailureAction
