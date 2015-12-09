/* Libraries */
import React from 'react';
import { render } from 'react-dom';

/* Components */
import { MobilesPage } from './views';

/* CSS */
import '../css/style.css';

const mountNode = document.getElementById("parent");

render(<MobilesPage />, mountNode);