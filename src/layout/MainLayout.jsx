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
    <div className="flex flex-col min-h-screen bg-green-50">
      <Navbar />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[1200px]">
    
        {homePage && <Hero />}

     
        <Outlet />

      
        {homePage && (
          <>
            <PlantCareTips />
            <GreenExperts />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
