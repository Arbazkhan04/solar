import React from 'react';
import { PriceProvider } from './components/shared/PriceContext';
import RoutesComponent from './routes/RoutesComponent';

const App = () => {
  return (
    <>
      <PriceProvider>
        <RoutesComponent/>
      </PriceProvider>
    </>
  );
};

export default App;
