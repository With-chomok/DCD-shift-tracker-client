import React from 'react';
import cuctomer from '../../../assets/customerTop.png';
const CustomerSay = () => {
    return (
        <div className='space-y-5 mx-35 mt-25 flex flex-col justify-center items-center text-center'>
            <img src={cuctomer} alt="" />
            <h1 className='text-4xl font-extrabold text-[#03373D]'>What our customers are sayings</h1>
            <p className='text-[#606060]'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
        </div>
    );
};

export default CustomerSay;