import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article/Article';
import './ArticleList.css';

// Responsible for rendering all articles for a given RSS feed.
// Also responsible for rendering the empty state and intermediate state
// while GET requests are in-flight.
const ArticleList = ({ articles, isFetching = false, addTagFilter }) => {
  if (isFetching) return <FetchingArticlesList />;
  if (!articles || articles.length === 0) return <EmptyArticlesList />;

  return (
    <ul className='ArticleList'>
      {
        articles.map(item => {
          return <Article item={item} addTagFilter={addTagFilter} key={item.link} />
        }
      )}
    </ul>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool,
  addTagFilter: PropTypes.func.isRequired
}

const FetchingArticlesList = () => {
  return (
    <div className='ArticleList ArticleList--fetching ArticleList--empty'>Fetching articles...</div>
  )
}

const EmptyArticlesList = () => {
  return (
    <div className='ArticleList ArticleList--empty'>There are no articles yet! Better find some!</div>
  )
}

export default ArticleList;
