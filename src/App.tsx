import './App.css'
import Header from './Widgets/Header/Header'
import React from 'react';
import { RouterProvider } from './Provider/Provider';

const App = () => {
  return <>
    <Header />
    <RouterProvider />
  </>
};

export default App;
