/*******************************************************************************
* File Name      : DissmiseKeyboardView.js                                     *
* Created Date   : Saturday, May 22nd 2021, 9:28:47 am                         *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : 키보드 뷰 를 래핑합니다.
import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};
const DismissKeyboardView = DismissKeyboardHOC(View)

export default DismissKeyboardView;