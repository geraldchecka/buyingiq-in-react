/* Libraries */
import React from 'react';
import { render } from 'react-dom';

/* Others */
import $ from 'jquery';

/* Components */
import MobilesPage from './views/mobilespage';

/* CSS */
import '../css/style.css';

$.ajax({
  url: 'http://localhost:5000/search',
  type: "GET",
  success: function (res) {
    console.log(res);
  },
  error: function (res) {
    console.log(res);
  }
});

const mountNode = document.getElementById("parent");

render(<MobilesPage />, mountNode);