import React from 'react';

import Nav from '../../containers/Nav/Nav';
import Main from '../../containers/Main/Main';

const Root = () =>
  <div>
    <aside>
      <Nav />
    </aside>

    <main>
      <Main />
    </main>
  </div>;

export default Root;
