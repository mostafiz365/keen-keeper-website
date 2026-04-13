import React from 'react';

const FriendCard = ({friend}) => {
    console.log(friend);
    return (
        <div>
            <div className='p-7 bg-white rounded-lg space-y-3 shadow-sm hover:scale-105 duration-300'>
                <div><img className='h-20 w-20 rounded-full object-cover mx-auto' src={friend.picture} alt="" /></div>
                <div className='text-center space-y-2.5'>
                    <h2 className='font-semibold text-xl text-[#1F2937]'>{friend.name}</h2>
                    <p className='text-sm text-[#64748B]'>{friend.days_since_contact}d ago</p>
                    <div className='flex gap-2.5 justify-center pb-2'>
                        {
                            friend.tags.map((tag, index) => <span key={index} className='font-semibold text-sm text-[#244D3F] bg-[#CBFADB] px-3 py-2 rounded-full'>{tag}</span>)
                        }
                    </div>
                    <span className={`text-sm font-medium text-white p-2 rounded-full ${friend.status === "overdue" && 'bg-[#EF4444]'} ${friend.status === "almost due" && 'bg-[#EFAD44]'} ${friend.status === "on-track" && 'bg-[#244D3F]'}`}>{friend.status}</span>
                </div>
            </div>
        </div>
    );
};

export default FriendCard;