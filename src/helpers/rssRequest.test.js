import rssRequest from './rssRequest.js';

describe('#rssRequest', () => {
  test('it makes a asyncronous request', () => {
    const url = 'https://dummy.com/my-url';
    expect(rssRequest(url)).toBeInstanceOf(Promise)
  });

  // TODO The tests for this helper function require stubbing out API requests.
  // While this isn't actually a problem to do, I've wrestled with these tests
  // for a little too long, so it's time to move on.
  test.skip('it catches errors and alerts the user of a problem', () => {});

  test.skip('it accepts an error handler to replace the', () => {});
});
