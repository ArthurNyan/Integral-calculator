import './App.scss'
import Header from './Widgets/Header/Header'
import React from 'react';
import { RouterProvider } from './app/Provider/Provider';

const App = () => {
  return <>
    <Header />
    <RouterProvider />
  </>
};

export default App;
