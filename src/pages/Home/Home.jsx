import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import NewsPreview from '../../components/NewsPreview/NewsPreview';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import CTASection from '../../components/CTASection/CTASection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      <FeaturesSection />
      <NewsPreview />
      <UpcomingEvents />
      <CTASection />
    </div>
  );
};

export default Home;