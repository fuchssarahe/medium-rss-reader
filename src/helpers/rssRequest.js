import Parser  from 'rss-parser';

// Medium follows a same-origin policy, so we'll proxy the
// request to handle headers and get us access to the
// response body. For simplicity, I'll use an existing
// service instead of hosting one myself.
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

function rssRequest(url, errorCallback = null) {
  const parser = new Parser();
  const errorHandler = errorCallback || function(error) { alert(`There was an error with your request to ${url}`) };
  return parser.parseURL(CORS_PROXY + url).catch(errorHandler);
};

export default rssRequest;
