import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PriceProvider } from './components/shared/PriceContext';
import RoutesComponent from './routes/RoutesComponent';

const App = () => {
  return (
    <PriceProvider >
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </PriceProvider>
  );
};

export default App;
