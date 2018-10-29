import React from 'react';

const FeedSelector = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="feed-name" onChange={handleChange}/>
      <button type="submit">View Feed</button>
    </form>
  )
}

export default FeedSelector;
