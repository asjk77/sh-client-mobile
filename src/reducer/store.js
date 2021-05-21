/*******************************************************************************
* File Name      : store.js                                                    *
* Created Date   : Tuesday, May 18th 2021, 2:12:20 am                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : App의 Store을 생성합니다.
import { createStore } from "redux";
import AppReducer from "./AppReducer";

const AppStore = createStore(
    AppReducer
);
export default AppStore; 