# Overview
Single page app that presents an RSS reader for an input Medium feed.

# Tools
- [Create React App](https://github.com/facebook/create-react-app) (and everything that entails)
- [rss-parser](https://www.npmjs.com/package/rss-parser)

# Run it locally
1. Clone the repo
2. `npm install`
3. `npm start` (`npm test` is also a fun one.)
4. Navigate in browser to http://localhost:3000/

# Future work / candidates for improvement
- Some missing unit tests for interactions with 3rd party APIs
- Accessibility
- CSS improvements
    - define variables for colors/widths for consistent across product
    - Actual design?
- Refactor to support routes, offering:
    - better in-browser experience for page navigation
    - ability to share links to current feed/filter
- Better support for alternate RSS feeds/variations between users/publications on medium

# Reference Resources
  https://medium.com/netscape/hacking-it-out-when-cors-wont-let-you-be-great-35f6206cc646
  https://www.npmjs.com/package/rss-parser
  https://medium.com/@cogdog/medium-your-rss-feeds-are-mess-ebfe6f731c22
  https://www.ibm.com/developerworks/library/x-tengoodxmlhabits/index.html#saxoverdom
  https://www.w3.org/TR/xml-c14n2/
