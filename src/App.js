import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AppStatusBar from './components/AppStatusBar';
import MainNavigation from './navigation/MainNavigation';

export  default function App() {
  return (
    <React.Fragment>
      <AppStatusBar />
      <MainNavigation />
    </React.Fragment>
  );
}

/*export default function AppHoc(props) {
  return (
    <Provider store={store} {...props}>
      <App />
    </Provider>
  );
}*/
