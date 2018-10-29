import React from 'react';
import './Article.css';

const Article = ({ item }) => {
  return (
    <li className='Article'>
      <Title url={item.link} title={item.title} />
      <Metadata creator={item.creator} date={item.pubDate} />
      <Categories categories={item.categories} />
      <Snippet text={item.contentSnippet} url={item.link} />
    </li>
  );
}

const Title = ({ url, title }) => {
  return (
    <a href={url}>
      <h3 className='Article__title'>{title}</h3>
    </a>
  );
};

const Metadata = ({ creator, date }) => {
  return (
    <h4 className='Article__metadata'>{creator} | {date}</h4>
  );
}

const Categories = ({ categories }) => {
  return (
    <h4 className='Article__categories'>
      {
        categories.map(category => (
          <div className='Article__category' key={category}>
            {category}
          </div>)
        )
      }
    </h4>
  );
}

const Snippet = ({ url, text }) => {
  return (
    <p className='Article__snippet'>
      {formatSnippet(text)}
      <a href={url}>Read More >></a>
    </p>
  );
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
