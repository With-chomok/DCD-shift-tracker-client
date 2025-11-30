import React from 'react';
import Banner from '../banner/Banner';
import BannerCard from '../banner/BannerCard';
import { Service } from '../service/Service';
import Brands from '../brands/Brands';
import Trdelesup from '../trackdelesup/Trdelesup';
import Marchant from '../marchant/Marchant';

const Home = () => {
    return (
        <div className='space-y-20 bg-[#EAECED]'>
            <Banner></Banner>
            
            <BannerCard></BannerCard>
            <Service></Service>
            <Brands></Brands>
            <Trdelesup></Trdelesup>
            <Marchant></Marchant>
        </div>
    );
};

export default Home;