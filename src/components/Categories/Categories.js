import React from 'react';
import './Categories.css';

const Categories = ({ categories, removable, onClick = null }) => {
  return (
    <h4 className='Categories'>
      {
        categories.map(category => (
          <div className='Categories__category' key={category} onClick={() => onClick(category)}>
            {category}
            { removable && <span> x</span> }
          </div>)
        )
      }
    </h4>
  );
}

export default Categories;
