import React from 'react';
import Article from '../Article/Article';
import './ArticleList.css';

const ArticleList = ({ articles, isFetching }) => {
  if (isFetching) return <FetchingArticlesList />;
  if (!articles) return <EmptyArticlesList />;

  return (
    <ul className='Articles'>
      {
        articles.items.map(item => {
          return <Article item={item} key={item.link} />
        }
      )}
    </ul>
  );
}

const FetchingArticlesList = () => {
  return (
    <div className='Articles--fetching'>Fetching articles...</div>
  )
}

const EmptyArticlesList = () => {
  return (
    <div className='Articles--empty'>There are no articles yet! Better find some!</div>
  )
}

export default ArticleList;
