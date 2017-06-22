import React from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Main from '../../containers/Main/Main';

const Root = () =>
  <div>
    <aside>
      <NavBar />
    </aside>

    <main>
      <Main />
    </main>
  </div>;

export default Root;
