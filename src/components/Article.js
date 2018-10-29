import React, { Component } from 'react';

class Article extends Component {
  render() {
    const item = this.props.item;
    return (
      <li>
        <a href={item.link}>
        <h3>{item.title}</h3>
        <h4>{item.description} | {item.creator} | {item.pubDate}</h4>
        <h4>Categories: {item.categories.join(' | ')}</h4>
        </a>
      </li>
    );
  }
}

export default Article;
