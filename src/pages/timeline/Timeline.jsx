import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';

const Timeline = () => {
    const {calling} = useContext(FriendContext);
    console.log(calling);


    return (
        <div className='py-20 bg-[#F8FAFC]'>
            <div className='max-w-10/12 mx-auto'>
                <div>
                    <h2 className='text-5xl font-bold text-[#1F2937]'>Timeline</h2>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Timeline;