import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FeedSelector.css';

// Responsible for user interactions while determining which feed to show.
class FeedSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { feedName: null };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.feedName);
  }

  handleChange = (event) => {
    this.setState({ feedName: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='FeedSelector'>
        <label htmlFor='feed-name-input'>Medium User or Publication:</label>
        <input type='text' name='feed-name' id='feed-name-input' onChange={this.handleChange} className='FeedSelector__input'/>
        <button type='submit' className='FeedSelector__button'>View Feed</button>
      </form>
    );
  }
}

FeedSelector.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default FeedSelector;
