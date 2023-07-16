import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Main } from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
