import React from 'react';
import Banner from '../banner/Banner';
import BannerCard from '../banner/BannerCard';

const Home = () => {
    return (
        <div className='space-y-20 bg-[#EAECED]'>
            <Banner></Banner>
            
            <BannerCard></BannerCard>
        </div>
    );
};

export default Home;