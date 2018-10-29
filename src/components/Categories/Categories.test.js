import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';


describe('<Categories />', () => {
  it('renders categories as individual elements', () => {
    expect(shallow(
      <Categories
        categories={['a', 'b', 'c']}
        removable={false}
      />
    )).toMatchSnapshot();
  })

  describe('when "categories" is undefined', () => {
    test('it renders an empty element', () => {
      expect(shallow(<Categories />)).toMatchSnapshot();
    })
  });

  describe('when no categories are present', () => {
    test('it renders an empty element', () => {
      expect(shallow(<Categories categories={[]} />)).toMatchSnapshot();
    })
  });

  describe('when categories are removable', () => {
    test('it shows an X on category', () => {
      expect(shallow(<Categories categories={['a']} removable={true} />)).toMatchSnapshot();
    })
  });

  describe('when the category can trigger an action', () => {
    test('it calls the provided handler on click', () => {
      const actionSpy = jest.fn();
      const component = shallow(<Categories categories={['a']} onClick={actionSpy} />);
      component.find('.Categories__category').first().simulate('click');
      expect(actionSpy).toHaveBeenCalled();
    });
  })
});
