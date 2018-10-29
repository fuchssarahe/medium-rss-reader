import React, { Component } from 'react';
import rssRequest from './helpers/rssRequest';
import ArticleList from './components/ArticleList/ArticleList';
import FeedSelector from './components/FeedSelector/FeedSelector';
import Categories from './components/Categories/Categories';
import filterArticlesByTags from './helpers/articleHelpers';
import './App.css';

// Responsible for rendering the main content on the page and managing state
// across which feed to fetch and articles to show.
class App extends Component {
  state = {
    articles: null,
    isFetching: false,
    tags: new Set()
  };

  handleSubmit = async (feedName) => {
    this.setState({ isFetching: true })

    const feed = await rssRequest('https://medium.com/feed/' + feedName);

    this.setState({
      articles: feed.items,
      isFetching: false
    });
  }

  addTag = (tag) => {
    this.setState({ tags: this.state.tags.add(tag) });
  }

  removeTag = (tag) => {
    // I don't love that this state is mutating before being set through
    // via #setState, but using a Set here keeps logic a little cleaner
    this.state.tags.delete(tag)
    this.setState({ tags: this.state.tags });
  }

  render() {
    return (
      <main className="App">
        <h1>Medium RSS Reader</h1>
        <FeedSelector handleSubmit={this.handleSubmit} />
        <Categories categories={Array.from(this.state.tags)} onClick={this.removeTag} removable={true} />
        <ArticleList
          articles={filterArticlesByTags(this.state.articles, this.state.tags)}
          isFetching={this.state.isFetching}
          addTagFilter={this.addTag}
        />
      </main>
    );
  }
}

export default App;
