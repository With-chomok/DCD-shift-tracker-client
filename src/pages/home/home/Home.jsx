import React from 'react';
import Banner from '../banner/Banner';
import BannerCard from '../banner/BannerCard';
import { Service } from '../service/Service';
import Brands from '../brands/Brands';
import Trdelesup from '../trackdelesup/Trdelesup';
import Marchant from '../marchant/Marchant';
import CustomerSay from '../customertalk/CustomerSay';
import Review from '../review/Review';
import Faq from '../faq/Faq'
const Home = () => {
    const ReviewPromise = fetch("/reviews.json").then(res => res.json())
    return (
        <div className='space-y-20 bg-[#EAECED]'>
            <Banner></Banner>
            
            <BannerCard></BannerCard>
            <Service></Service>
            <Brands></Brands>
            <Trdelesup></Trdelesup>
            <Marchant></Marchant>
            <CustomerSay></CustomerSay>
            <Review ReviewPromise={ReviewPromise}></Review>
            <Faq></Faq>
        </div>
    );
};

export default Home;