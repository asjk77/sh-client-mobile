/*******************************************************************************
* File Name      : accountActions.js                                           *
* Created Date   : Tuesday, May 18th 2021, 3:04:28 am                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : AccountAction을 정의합니다.

import { SET_ACCOUNT } from "./ActionTypes"

export const setAccount = ( email , passwd ) => ({
    type: SET_ACCOUNT,
    payload: {
        email,
        passwd
    }
})

export const unSetAccount = () => ({
    type: UNSET_ACCOUNT
})
