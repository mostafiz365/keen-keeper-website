import React from 'react';

const Count = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='max-w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-7 text-center border-b border-[#E9E9E9] pb-10'>
                <div className='p-8 rounded-lg bg-white space-y-2 shadow-sm'>
                    <h3 className='text-3xl font-semibold text-[#244D3F]'>12</h3>
                    <p className='text-lg text-[#64748B]'>Total Friends</p>
                </div>
                <div className='p-8 rounded-lg bg-white space-y-2 shadow-sm'>
                    <h3 className='text-3xl font-semibold text-[#244D3F]'>4</h3>
                    <p className='text-lg text-[#64748B]'>On Track</p>
                </div>
                <div className='p-8 rounded-lg bg-white space-y-2 shadow-sm'>
                    <h3 className='text-3xl font-semibold text-[#244D3F]'>8</h3>
                    <p className='text-lg text-[#64748B]'>Need Attention</p>
                </div>
                <div className='p-8 rounded-lg bg-white space-y-2 shadow-sm'>
                    <h3 className='text-3xl font-semibold text-[#244D3F]'>20</h3>
                    <p className='text-lg text-[#64748B]'>Interactions This Month</p>

                </div>
            </div>

        </div>
    );
};

export default Count;