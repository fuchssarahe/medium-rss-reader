import React from 'react';
import PropTypes from 'prop-types';
import './Categories.css';

// Manages HTML and interactions with tags for articles.
const Categories = ({ categories = [], removable = false, onClick = () => {} }) => {
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

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  removable: PropTypes.bool,
  onClick: PropTypes.func
}

export default Categories;
