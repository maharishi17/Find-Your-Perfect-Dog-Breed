import React from 'react';

const ProductRow = () => {
  const products = [
    { id: 1, name: 'Labrador Retriever', image: '/images/produts/Labrador Retriever Fun Facts.jpeg' },
    { id: 2, name: 'Golden Retriever', image: '/images/produts/gold.jpeg' },
    { id: 3, name: 'German Shepherd', image: '/images/produts/Bird watching 👀.jpeg' },
    { id: 4, name: 'Poodle', image: '/images/produts/Pin on Animals.jpeg' },

    { id: 5, name: 'Bulldog', image: '/images/produts/download.jpeg' },
    { id: 6, name: 'Pembroke Welsh Corgi', image: '/images/produts/Corgis.jpeg' },
    { id: 7, name: 'French Bulldog', image: '/images/produts/welcom.jpeg' },
    { id: 8, name: 'Rottweiler', image: '/images/produts/Pin by Noodles on Dog Breeds _ Rottweiler dog, Dogs, Rottweiler lovers.jpeg' },

    { id: 9, name: 'Siberian Husky ', image: '/images/produts/Siberian Husky.jpeg' },
    { id: 10, name: 'Dachshund', image: '/images/produts/lass.jpeg' },
    { id: 11, name: 'Border Collie', image: '/images/produts/Sam at the beach, border collie, Outer Banks.jpeg' },
    { id: 12, name: 'Australian Shepherd', image: '/images/produts/australian shepherd.jpeg' },

    { id: 13, name: 'Boxer ', image: '/images/produts/Henry on the beach New Year’s Day 2018.jpeg' },
    { id: 14, name: 'Shih Tzu ', image: '/images/produts/shihtzu _ dog.jpeg' },
    { id: 15, name: 'Bernese Mountain  ', image: '/images/produts/pexels-alexander-dummer-37646-132676.jpg' },
    { id: 16, name: 'Yorkshire Terrier', image: '/images/produts/gfds.jpeg'},
        ]
  return (
    <section id="product-row" className="product-row-section">
      <h1 className="machan">The Many Faces of Dogs: A Breed Variety</h1>
      <div className="product-row-container">
        <div className="product-row">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRow;