export const APP_START = 'APP_START';

export const UPDATE_FOOTER_SUCCESS = 'UPDATE_FOOTER_SUCCESS';
export const UPDATE_FOOTER_FAILURE = 'UPDATE_FOOTER_FAILURE';
export const UPDATE_FOOTER_LOAD = 'UPDATE_FOOTER_LOAD';
export const UPDATE_TOP_CATEGORIES = 'UPDATE_TOP_CATEGORIES';
export const UPDATE_TOP_FAILURE = 'UPDATE_TOP_FAILURE';
export const UPDATE_HEADER_LOAD = 'UPDATE_HEADER_LOAD';

export function loadFooterData() {
    return { type: UPDATE_FOOTER_LOAD }
  }

export function loadHeaderData() {
    return { type: UPDATE_HEADER_LOAD }
  }