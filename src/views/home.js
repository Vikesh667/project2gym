import React from 'react';

import AppHero from '../components/home/hero';
import AppFeature from '../components/home/feature';
import AppPricing from '../components/home/pricing';
import AboutUs from '../components/home/about';
import Training from '../components/home/Training';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AboutUs/>
      <AppFeature/>
      <AppPricing/>
      <Training/>
     
    </div>
  );
}

export default AppHome;