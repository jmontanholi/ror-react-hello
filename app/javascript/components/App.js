import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HelloWord from './HelloWorld';
import Root from './Root';
import configureStore from '../store/configureStore';

const store = configureStore();

const App = () => (
  <section>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/hello" element={<HelloWord />} />
          <Route path="/" element={<Root />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </section>
);

export default App;
