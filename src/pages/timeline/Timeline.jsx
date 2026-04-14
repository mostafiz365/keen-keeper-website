import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendContext';
import CallImg from '../../assets/images/call.png';
import SmsImg from '../../assets/images/text.png';
import VideoImg from '../../assets/images/video.png';

const Timeline = () => {
    const {calling, sms, video} = useContext(FriendContext);


    return (
        <div className='py-20 bg-[#F8FAFC]'>
            <div className='max-w-10/12 mx-auto space-y-6'>
                <div>
                    <h2 className='text-5xl font-bold text-[#1F2937]'>Timeline</h2>
                </div>
                <div>
                    <div className='space-y-6'>
                        {
                            calling.map((data, index) => <div key={index} className='p-4 rounded-lg bg-white flex items-center gap-5 w-full shadow-sm'>
                                <img src={CallImg} alt="" />
                                <div>
                                    <h3 className='text-xl font-medium text-[#244D3F]'>Call <span className='text-lg text-[#64748B]'>with {data.name}</span></h3>
                                    <p className='font-medium text-[#64748B]'>{data.next_due_date}</p>
                                </div>
                            </div>)
                        }
                        {
                            sms.map((data, index) => <div key={index} className='p-4 rounded-lg bg-white flex items-center gap-5 w-full shadow-sm'>
                                <img src={SmsImg} alt="" />
                                <div>
                                    <h3 className='text-xl font-medium text-[#244D3F]'>Text <span className='text-lg text-[#64748B]'>with {data.name}</span></h3>
                                    <p className='font-medium text-[#64748B]'>{data.next_due_date}</p>
                                </div>
                            </div>)
                        }
                        {
                            video.map((data, index) => <div key={index} className='p-4 rounded-lg bg-white flex items-center gap-5 w-full shadow-sm'>
                                <img src={VideoImg} alt="" />
                                <div>
                                    <h3 className='text-xl font-medium text-[#244D3F]'>Video <span className='text-lg text-[#64748B]'>with {data.name}</span></h3>
                                    <p className='font-medium text-[#64748B]'>{data.next_due_date}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Timeline;