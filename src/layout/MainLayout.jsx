import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Hero from '../pages/Hero';
import PlantCareTips from '../components/PlantCareTips';
import GreenExperts from '../components/GreenExperts';

const MainLayout = () => {
  const location = useLocation();
  const homePage = location.pathname === '/';

  return (
    <div className="mx-auto bg-green-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-[1200px] mx-auto">
    
        {homePage && <Hero />}

      
        <Outlet />

     
        {homePage && (
          <>
            <PlantCareTips />
            <GreenExperts />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
