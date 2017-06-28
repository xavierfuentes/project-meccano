import React from 'react';
// import PropTypes from 'prop-types';

import NavBar from '../../components/NavBar/NavBar';
import Main from '../../containers/Main/Main';

const AppLayout = () =>
  <div>
    <aside>
      <NavBar />
    </aside>

    <main>
      <Main />
    </main>
  </div>;

AppLayout.propTypes = {};

AppLayout.defaultProps = {};

export default AppLayout;
