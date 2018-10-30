import React from 'react';
import PropTypes from 'prop-types';
import './Categories.css';

// Manages HTML and interactions with tags for articles.
const Categories = ({ categories = [], removable = false, onClick = () => {} }) => {
  return (
    <ul className='Categories' aria-label='Filterable categories'>
      {
        categories.map(category => (
          <li key={category}>
            <button className='Categories__category' onClick={() => onClick(category)}>
              {category}
              {removable && <span aria-label='Click to remove filter'> x</span>}
            </button>
          </li>
        ))
      }
    </ul>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  removable: PropTypes.bool,
  onClick: PropTypes.func
};

export default Categories;
