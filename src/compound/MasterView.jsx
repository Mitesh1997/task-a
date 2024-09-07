import React, { useState } from 'react';
import Custonhook from "../hook/coustomHook"

function Masterview({ onSelect }) {
  const api = `https://fakestoreapi.com/products`;
  const [products, error, loading] = Custonhook(`${api}`);
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card

  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength 
      ? description.substring(0, maxLength) + '...'
      : description;
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="masterview">
      {products?.map((product) => (
        <div
          className={`card ${selectedCard === product.id ? 'selected' : ''}`}
          key={product.id}
          onClick={() => {
            onSelect(product);
            setSelectedCard(product.id); // Set the selected card
          }}
        >
          <div className="card-img">
            <img src={product.image} alt={product.title} />
            <div className="card-img-detail">
              <img src="/Star.svg" alt="rating star" />
              <span>{product.rating.rate} ({product.rating.count})</span>
            </div>
          </div>
          <div className="card-text">
            <div className="card-category">{product.category}</div>
            <div className="card-title">{product.title}</div>
            <div className="card-description">{truncateDescription(product.description, 30)}</div>
            <div className="card-price">${product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Masterview;
