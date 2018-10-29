import React from 'react';
import PropTypes from 'prop-types';
import Categories from '../Categories/Categories';
import './Article.css';

// Responsible for rendering the main content of an article.
const Article = ({ item, addTagFilter }) => {
  return (
    <li className='Article'>
      <Title url={item.link} title={item.title} />
      <Metadata creator={item.creator} date={item.pubDate} />
      {item.categories && <Categories categories={item.categories} onClick={addTagFilter} />}
      {item.contentSnippet && <Snippet text={item.contentSnippet} url={item.link} />}
    </li>
  );
}

Article.propTypes = {
  item: PropTypes.object.isRequired,
  addTagFilter: PropTypes.func.isRequired
}

const Title = ({ url, title }) => {
  return (
    <a href={url}>
      <h3 className='Article__title'>{title}</h3>
    </a>
  );
};

Title.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

const Metadata = ({ creator, date }) => {
  return (
    <h4 className='Article__metadata'>{creator} | {date}</h4>
  );
}

Metadata.propTypes = {
  creator: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

const Snippet = ({ url, text }) => {
  return (
    <p className='Article__snippet'>
      {formatSnippet(text)}
      <a href={url}>Read More >></a>
    </p>
  );
}

Snippet.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

function formatSnippet(snippet) {
  const trimmedSnippet = snippet.slice(0,-34).trim();
  let suffix;
  if (trimmedSnippet[trimmedSnippet.length - 1] === '.') {
    suffix = ' ';
  } else {
    suffix = '... '
  }
  return trimmedSnippet + suffix;
}

export default Article;
