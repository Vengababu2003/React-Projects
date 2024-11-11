import { useState } from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import TopLayer from './Components/TopLayer';

import BottomLayer from './Components/BottomLayer';
import Products from './Components/Products';
import UserContextProvider from './contect/UserContextProvider';



function App() {
  return (
    <>
    <UserContextProvider>
    <TopLayer/>
    <Products/>
    </UserContextProvider>
    
    <BottomLayer/>
    
    </>
  );
}

export default App;
