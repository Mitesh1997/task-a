import React from 'react';

const DetailView = ({ selectedProduct, setSelectedProduct }) => {
  const back = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="detail-view">
      {/* <h2 className="font-bold">Detail View</h2> */}
      {selectedProduct ? (
        <div>
          <button onClick={back} className='btn-view'>Back</button>
          <div className="detail-img">
            <img src={selectedProduct.image} alt={selectedProduct.title} />
          </div>
          <h3>{selectedProduct.title}</h3>
          <p>Category: {selectedProduct.category}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
        </div>
      ) : (
        <div className="empty-view">
         <div className='viwe'>
              <p>Heading and subheading</p>
              <h2>Select an item to display details</h2>
              <p>Select an item from the master view to display details in the detail view.</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
