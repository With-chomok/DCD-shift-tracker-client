import React from 'react';
import Banner from '../banner/Banner';
import BannerCard from '../banner/BannerCard';
import { Service } from '../service/Service';

const Home = () => {
    return (
        <div className='space-y-20 bg-[#EAECED]'>
            <Banner></Banner>
            
            <BannerCard></BannerCard>
            <Service></Service>
        </div>
    );
};

export default Home;