import React from 'react';
import { GoPlus } from 'react-icons/go';

const Banner = () => {
    return (
        <div className='text-center pt-20 pb-10 bg-[#F8FAFC]'>
            <h2 className='text-5xl font-bold text-[#1F2937]'>Friends to keep close in your life</h2>
            <p className='text-[#64748B] pt-4 pb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
            <button className='font-semibold text-white px-4 py-3 bg-[#244D3F] rounded-md flex items-center gap-1 mx-auto'><GoPlus />Add a Friend</button>
        </div>
    );
};

export default Banner;