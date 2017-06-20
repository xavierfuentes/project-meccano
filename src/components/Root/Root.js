import React from 'react';

/* eslint-disable import/first */
import 'sanitize.css/sanitize.css';
import './reset.css'; // some more rules to fix default behaviour
import 'semantic-ui-css/semantic.css';
/* eslint-enable import/first */

import Main from '../../containers/Main/Main';

const Root = () =>
  <div>
    <h1>Hello world!</h1>

    <Main />
  </div>;

export default Root;
