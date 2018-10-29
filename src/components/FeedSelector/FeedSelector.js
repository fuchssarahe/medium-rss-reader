import React from 'react';
import './FeedSelector.css';

const FeedSelector = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='FeedSelector'>
      <input type="text" name="feed-name" onChange={handleChange} className='FeedSelector__input'/>
      <button type="submit" className='FeedSelector__button'>View Feed</button>
    </form>
  )
}

export default FeedSelector;
