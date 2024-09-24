import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

function Category() {
  const categories = ['Electronics', 'Books', 'Clothing'];

  return (
    <div className="category-container">
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/product/${index}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
