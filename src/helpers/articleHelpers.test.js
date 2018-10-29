import filterArticlesByTags from './articleHelpers.js';

describe('#filterArticlesByTags', () => {
  const article1 = {
    categories: ["cities", "economics"],
    creator: "Derek Thompson",
    link: "https://medium.com/the-atlantic/uuid",
    title: "What’s the Matter With Manhattan?",
  }

  const article2 = {
    categories: ["cities", "housing"],
    creator: "Matthew Thompson",
    link: "https://medium.com/the-atlantic/uuid2",
    title: "What’s the Matter With Georgia?",
  }

  const article3 = {
    creator: "Andrew Thompson",
    link: "https://medium.com/the-atlantic/uuid3",
    title: "What’s the Matter With San Francisco?",
  }

  const article4 = {
    categories: ["cities", "housing", "economics"],
    creator: "Matthew Thompson",
    link: "https://medium.com/the-atlantic/uuid4",
    title: "What’s the Matter With Paris?",
  }

  const articles = [article1, article2, article3, article4];

  test('it returns multiple articles when multiple match', () => {
    const tags = ['cities', 'housing'];
    expect(filterArticlesByTags(articles, tags)).toEqual([article2, article4])
  });

  test('it returns an empty array when no articles match', () => {
    const tags = ['cities', 'puppies'];
    expect(filterArticlesByTags(articles, tags)).toEqual([])
  });

  test('it returns an empty array when no articles are provided', () => {
    const tags = ['cities', 'puppies'];
    expect(filterArticlesByTags([], tags)).toEqual([])
  });

  describe('when no tags are provided', () => {
    test('it includes articles without tags only when no', () => {
      expect(filterArticlesByTags([article3], [])).toEqual([article3])
    });

    test('returns all articles when no tags are provided', () => {
      expect(filterArticlesByTags(articles, [])).toEqual(articles)
    });
  });

  test('returns all articles when tags are undefined', () => {
    expect(filterArticlesByTags(articles, null)).toEqual(articles)
  });
});
