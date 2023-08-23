import React from 'react';
import GridComponent from './home/page';
import TabsWrappedLabel from './tabs/page';
import Features from './product/page';
import Latest_blog from './latest_blog/page';
import Navbar from './navbar/page';
import Costomer_says from './costomer_says/page';
import Faq from './faq/page';
import Footer from './footer/page';


const Home = () => {
  return (
    <>
      <Navbar />
      <GridComponent />
      <TabsWrappedLabel />
      <Features />
      <Latest_blog />
      <Costomer_says />
      <Faq />
      <Footer/>
    </>
  );
};

export default Home;
