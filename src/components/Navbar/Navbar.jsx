import React from 'react';
import { PiChartLine } from 'react-icons/pi';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='shadow-sm'>
            <div className='flex flex-col md:flex-row gap-3 justify-between items-center py-4 md:px-20'>
                <h2 className='text-2xl font-bold text-[#1F2937]'>Keen<span className='text-[#244D3F]'>Keeper</span></h2>
                <ul className='flex items-center'>
                    <li><NavLink to="/" className={({isActive}) => `font-semibold px-4 py-2 rounded-md flex items-center gap-1 ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}`}><RiHome2Line />Home</NavLink></li>
                    <li><NavLink to="/timeline" className={({isActive}) => `font-semibold px-4 py-2 rounded-md flex items-center gap-1 ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}`}><RiTimeLine />Timeline</NavLink></li>
                    <li><NavLink to="/stats" className={({isActive}) => `font-semibold px-4 py-2 rounded-md flex items-center gap-1 ${isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}`}><PiChartLine />Stats</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;