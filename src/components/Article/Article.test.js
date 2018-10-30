import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';

let userArticle = {
  creator: 'Alan Levine',
  title: 'Attribute always. Period.',
  link: 'https://medium.com/@cogdog/uuid',
  pubDate: 'Fri, 24 Aug 2018 17:41:22 GMT',
  'content:encoded': '<p>Attribute always. Period.</p><p>Even if it is p…ll_rss&postId=95b4d2f7880a'
}

let publicationArticle = {
  categories: ['cities', 'economics', 'retail', 'business', 'housing'],
  content: '"<div class="medium-feed-item"><p class="medium-feed-image"><a href="https://medium.com/the-atlantic/uuid"><img src="https://cdn-images-1.medium.com/max/2000/1*zWOz6wBx-x0zKt8ALrWRiw.jpeg" width="5861"></a></p><p class="medium-feed-snippet">New York&#x2019;s empty storefronts are a dark omen for the future of cities</p><p class="medium-feed-link"><a href="https://medium.com/the-atlantic/uuid">Continue reading on The Atlantic »</a></p></div>"',
  contentSnippet: 'New York’s empty storefronts are a dark omen for the future of citiesContinue reading on The Atlantic »',
  creator: 'Derek Thompson',
  'dc:creator': 'Derek Thompson',
  guid: 'https://medium.com/p/a59edb0399b8',
  isoDate: '2018-10-15T15:30:12.000Z',
  link: 'https://medium.com/the-atlantic/uuid',
  pubDate: 'Mon, 15 Oct 2018 15:30:12 GMT',
  title: 'What’s the Matter With Manhattan?',
}

describe('<Article />', () => {

  test('it handles a sparse user feed', () => {
    expect(shallow(<Article item={userArticle} addTagFilter={() => {}}/>)).toMatchSnapshot();
  });

  test('it handles a publication feed', () => {
    expect(shallow(<Article item={publicationArticle} addTagFilter={() => {}}/>)).toMatchSnapshot();
  });

  test('it does not render unknown html', () => {
    const component = shallow(<Article item={userArticle} addTagFilter={() => {}}/>);
    expect(component.html().indexOf('Even if it is ')).toBe(-1);
  })
});
