/*******************************************************************************
* File Name      : AppReducer.js                                               *
* Created Date   : Tuesday, May 18th 2021, 2:14:41 am                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : 기본 app 의 reducer 입니다.

const reducerInit =  {
    account : {
      user: undefined, 
      nickname: undefined,
      rank: undefined,
    },
    init: {
      
    }
}
const AppReducer = ( state = reducerInit, action ) => {
    const { type } = action;
    switch ( type ) {

      default:
        return {...state}; 
    }
}


export default AppReducer;