import React from 'react';
import './Categories.css';

const Categories = ({ categories = [], removable = false, onClick = null }) => {
  return (
    <h4 className='Categories'>
      {
        categories.map(category => (
          <button className='Categories__category' key={category} onClick={() => onClick(category)}>
            {category}
            { removable && <span> x</span> }
          </button>)
        )
      }
    </h4>
  );
}

export default Categories;
