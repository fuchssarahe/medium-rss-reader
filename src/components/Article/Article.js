import React from 'react';
import PropTypes from 'prop-types';
import Categories from '../Categories/Categories';
import './Article.css';

// Responsible for rendering the main content of an article.
const Article = ({ item, addTagFilter }) => {
  return (
    <li className='Article' role='article' tabIndex='-1'>
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
      <h2 className='Article__title'>{title}</h2>
    </a>
  );
};

Title.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const Metadata = ({ creator, date }) => {
  const dateFormatter = new Date(date);
  const isoDate = dateFormatter.toISOString();
  const dateString = `${dateFormatter.toLocaleDateString()} ${dateFormatter.toLocaleTimeString()}`;

  return (
    <p className='Article__metadata'>
      <cite>{creator}</cite>
      <span aria-hidden='true'> | </span>
      <time dateTime={isoDate}>{dateString}</time>
    </p>
  );
};

Metadata.propTypes = {
  creator: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

const Snippet = ({ url, text }) => {
  return (
    <p className='Article__snippet'>
      {formatSnippet(text)}
      <a href={url} aria-hidden='true'>Read More >></a>
    </p>
  );
};

Snippet.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

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
