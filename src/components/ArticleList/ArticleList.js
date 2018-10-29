import React from 'react';
import Article from '../Article/Article';
import './ArticleList.css';

const ArticleList = ({ articles, isFetching, addFilter }) => {
  if (isFetching) return <FetchingArticlesList />;
  if (!articles) return <EmptyArticlesList />;

  return (
    <ul className='ArticleList'>
      {
        articles.map(item => {
          return <Article item={item} addFilter={addFilter} key={item.link} />
        }
      )}
    </ul>
  );
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
