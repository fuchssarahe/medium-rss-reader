import React, { Component } from 'react';
import './FeedSelector.css';

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
    this.setState({ feedName: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='FeedSelector'>
        <input type="text" name="feed-name" onChange={this.handleChange} className='FeedSelector__input'/>
        <button type="submit" className='FeedSelector__button'>View Feed</button>
      </form>
    );
  }
}

export default FeedSelector;
