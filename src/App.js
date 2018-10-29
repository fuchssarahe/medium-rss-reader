import React, { Component } from 'react';
import rssRequest from './helpers/rssRequest';
import Article from './components/Article';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { article: null };
  }

  async componentDidMount() {
    const feed = await rssRequest('https://medium.com/feed/the-atlantic')
    this.setState({ article: feed });
  }

  render() {
    if (!this.state.article) { return (<article>Fetching...</article>) }

    return (
      <ul className="App">
        {this.state.article.items.map(item => {
          console.log(item);
          return <Article item={item} key={item.link}/>
        })}
      </ul>
    );
  }
}

export default App;
