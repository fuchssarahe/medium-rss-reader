import React from 'react';
import { shallow } from 'enzyme';
import ArticleList from './ArticleList';

const mockArticles = [{ title: 'Article 1', link: 'a' }, { title: 'Article 2', link: 'b' }]

describe('<ArticleList />', () => {
  it('renders Articles for each provided article object', () => {
    expect(shallow(
      <ArticleList articles={mockArticles} addTagFilter={() => {}} />
    )).toMatchSnapshot();
  })

  describe('when "articles" is undefined', () => {
    test('it renders an empty element', () => {
      expect(shallow(<ArticleList addTagFilter={() => {}} />)).toMatchSnapshot();
    });
  });

  describe('when no articles are present', () => {
    test('it renders an empty element', () => {
      expect(shallow(<ArticleList articles={[]} addTagFilter={() => {}} />)).toMatchSnapshot();
    });
  });

  describe('when articles are currently being fetched', () => {
    test('it renders an empty element', () => {
      expect(shallow(
        <ArticleList
          articles={mockArticles}
          addTagFilter={() => {}}
          isFetching={true}
        />
      )).toMatchSnapshot();
    });
  });
});
