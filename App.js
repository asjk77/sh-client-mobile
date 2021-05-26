
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import AppStore from './src/reducer/store';
import RootNavigation from "./src/routes/rootNavigation";

/**
 * RootEntry
 */
function App() {
  return (
    <Provider store={AppStore}>
      <RootNavigation />
    </Provider>
  );
}
export default App;