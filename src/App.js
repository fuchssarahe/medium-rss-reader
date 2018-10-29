import React, { Component } from 'react';
import rssRequest from './helpers/rssRequest';
import ArticleList from './components/ArticleList/ArticleList';
import FeedSelector from './components/FeedSelector/FeedSelector';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { feedName: null, articles: null, isFetching: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ feedName: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ isFetching: true })
    const feed = await rssRequest('https://medium.com/feed/' + this.state.feedName);
    this.setState({ articles: feed, isFetching: false });
  }

  render() {
    return (
      <main className="App">
        <h1>Medium RSS Reader</h1>
        <FeedSelector handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <ArticleList articles={this.state.articles} isFetching={this.state.isFetching} />
      </main>
    );
  }
}

export default App;
