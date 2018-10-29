import React from 'react';
import { shallow, mount } from 'enzyme';
import FeedSelector from './FeedSelector';

describe('<FeedSelector />', () => {
  test('it renders a form with input and submit button', () => {
    expect(shallow(
      <FeedSelector handleSubmit={ () => {} } />
    )).toMatchSnapshot();
  });

  test('it submits the form with the user-entered data', () => {
    const actionSpy = jest.fn();

    let component = mount(<FeedSelector handleSubmit={actionSpy} />);
    component
      .find('.FeedSelector__input')
      .first()
      .simulate('change', { target: { value: 'go' } })
    component.find('.FeedSelector').first().simulate('submit');

    expect(actionSpy).toHaveBeenCalledWith('go');
    component.unmount();
  });
});
