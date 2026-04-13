import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='max-w-10/12 mx-auto pt-20'>

            <div>
                <h2 className='text-5xl text-white font-bold text-center'>KeenKeeper</h2>
                <p className='text-white text-center py-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-xl font-medium text-white text-center'>Social Links</p>
                <div className='flex justify-center items-center gap-3 border-b border-[#1A8862] pb-10 pt-5'>
                    <span className='bg-white p-2 rounded-full'><TbBrandInstagramFilled /></span>
                    <span className='bg-white p-2 rounded-full'><FaFacebookSquare /></span>
                    <span className='bg-white p-2 rounded-full'><FaXTwitter /></span>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center py-8'>
                    <p className='text-[#FAFAFA]'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-7'>
                        <span className='text-[#FAFAFA]'>Privacy Policy</span>
                        <span className='text-[#FAFAFA]'>Terms of Service</span>
                        <span className='text-[#FAFAFA]'>Cookies</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;