import React, { Suspense } from 'react';

import Banner from './Banner/Banner';
import AllFriends from './AllFriends/AllFriends';

const HomePage = () => {
    return (
        <div className="relative min-h-screen">
            <Banner></Banner>
            <Suspense fallback={
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-4 bg-white/80 rounded-full shadow-md backdrop-blur-sm border border-gray-100'>
                    <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
                </div>
            }>
                <AllFriends></AllFriends>
            </Suspense>
        </div>
    );
};

export default HomePage;