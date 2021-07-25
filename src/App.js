import React from 'react';
import CartContextProvider from './components/context/ContextApi';
import RouteConfig from './components/RouteConfig';

const App = () => {
  return (
    <div>
      <CartContextProvider>
        <RouteConfig />
      </CartContextProvider>
    </div>
  );
};

export default App;
