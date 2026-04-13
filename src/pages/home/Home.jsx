import React, { Suspense } from 'react';
import Banner from '../../components/homePage/Banner';
import Count from '../../components/homePage/Count';
import Friends from '../../components/homePage/Friends';


const fetchFriends = fetch('/friendsData.json').then(res => res.json());


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Count></Count>
            <Suspense fallback={<div className='flex justify-center items-center h-[60vh]'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>}>
                <Friends fetchFriends={fetchFriends}></Friends>
            </Suspense>
        </div>
    );
};

export default Home;