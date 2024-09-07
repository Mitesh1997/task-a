import React, { useState, useEffect } from 'react';
import './App.css';
// import './Appp.css';
import Masterview from './compound/MasterView';
import DetailView from './compound/DetailView';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768; // Mobile screen size

  return (
    <div className="App">
      {!isMobile && (
        <>
          <Masterview onSelect={setSelectedProduct} />
          <DetailView selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
        </>
      )}

      {isMobile && (
        <>
          {!selectedProduct ? (
            <Masterview onSelect={setSelectedProduct} />
          ) : (
            <DetailView selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
