/*******************************************************************************
* File Name      : AppReducer.js                                               *
* Created Date   : Tuesday, May 18th 2021, 2:14:41 am                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : 기본 app 의 reducer 입니다.

import {
  SET_ACCOUNT,
  UNSET_ACCOUNT
} from "../actions/ActionTypes";


const reducerInit =  {
  account: null
}
const AppReducer = ( state = reducerInit, action ) => {
    const { type } = action;
    switch ( type ) {
      case SET_ACCOUNT:
        return {... state, account : action.payload };
      case UNSET_ACCOUNT:
        return {... state, account : null };
      default:
        return {...state}; 
    }
}


export default AppReducer;