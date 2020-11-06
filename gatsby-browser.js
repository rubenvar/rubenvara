// import fonts here (https://github.com/KyleAMathews/typefaces -> https://github.com/fontsource/fontsource)
// require('fontsource-mansalva/latin.css');
// require('fontsource-martel/latin.css');
// require('fontsource-rubik/latin.css');
require('victormono');

require('./src/assets/css/dracula-prism.css');

// from https://www.gatsbyjs.com/docs/browser-apis/#wrapPageElement
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./src/components/Layout').default;

exports.wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);
