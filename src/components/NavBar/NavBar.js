import React from 'react';

import Link from '../../components/Link/Link';
import { DASHBOARD_ROUTE, PROPERTIES_ROUTE } from '../../data/routes';

const NavBar = () =>
  <nav>
    <Link name={DASHBOARD_ROUTE.name}>Dashboard</Link>
    <Link name={PROPERTIES_ROUTE.name}>Properties</Link>
  </nav>;

export default NavBar;
