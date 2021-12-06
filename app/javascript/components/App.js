import React from "react";
import HelloWord from "./HelloWorld";
import Root from "./Root";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from "../store/configureStore";
const store = configureStore();

const App = () => (
  <section>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/hello' element={<HelloWord />} />
          <Route path='/' element={<Root />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </section>
)

export default App
