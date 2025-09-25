import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryList({ products }) {
  return (
    <section id='products'>
      <h2>Products & Services</h2>
      <div className='grid'>
        {products.map((cat, ci) => (
          <Link
            to={`/category/${encodeURIComponent(cat.category)}`}
            key={ci}
            className='card'
            style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          >
            <h3>{cat.category}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
