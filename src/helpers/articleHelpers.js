function filterArticlesByTags(articles, tags) {
  if (!articles) { return []; }
  if (!tags || tags.length === 0) { return articles; }

  return articles.filter(article => {
    let matchesTags = true;
    tags.forEach(tag => {
      if (!article.categories || !article.categories.includes(tag)) { matchesTags = false; }
    })
    return matchesTags;
  });
}

export default filterArticlesByTags;
