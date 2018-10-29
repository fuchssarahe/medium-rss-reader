import React, { Component } from 'react';
import rssRequest from './helpers/rssRequest';
import ArticleList from './components/ArticleList/ArticleList';
import FeedSelector from './components/FeedSelector/FeedSelector';
import Categories from './components/Categories/Categories';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { feedName: null, articles: null, isFetching: false, tags: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ feedName: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ isFetching: true })
    const feed = await rssRequest('https://medium.com/feed/' + this.state.feedName);
    this.setState({ articles: feed.items, isFetching: false });
  }

  filteredArticles() {
    const { tags, articles } = this.state;
    if (tags.length === 0) { return articles; }

    return articles.filter(article => {
      let matchesTags = true;
      tags.forEach(tag => {
        if (!article.categories.includes(tag)) { matchesTags = false; }
      })
      return matchesTags;
    });
  }

  addTag = (tag) => {
    if (this.state.tags.includes(tag)) return;
    const newTags = this.state.tags.concat([tag])
    this.setState({ tags: newTags });
  }

  removeTag = (tagToRemove) => {
    const newTags = this.state.tags.filter(tag => { return tag !== tagToRemove });
    this.setState({ tags: newTags });
  }

  render() {
    return (
      <main className="App">
        <h1>Medium RSS Reader</h1>
        <FeedSelector handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Categories categories={this.state.tags} onClick={this.removeTag} removable="true" />
        <ArticleList
          articles={this.filteredArticles(this.state.articles)}
          isFetching={this.state.isFetching}
          addFilter={this.addTag}
        />
      </main>
    );
  }
}

export default App;
