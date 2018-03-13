import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react'
import HomeMobile from './mobile/Home.mobile';
import HomeDesktop from './desktop/Home.desktop';

const Home = () => (
  <div>
    <Responsive {...Responsive.onlyMobile}>
      <HomeMobile/>
    </Responsive>
    <Responsive {...Responsive.onlyTablet}>
      <HomeMobile/>
    </Responsive>
    <Responsive {...Responsive.onlyComputer}>
      <HomeDesktop/>
    </Responsive>
  </div>
);

export default Home;