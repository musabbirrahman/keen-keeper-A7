import React, { Suspense } from 'react';

import Banner from './Banner/Banner';
import AllFriends from './AllFriends/AllFriends';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={
                <div className='flex justify-center items-center w-full min-h-[50vh]'>
                    <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
                </div>
            }>
                <AllFriends></AllFriends>
            </Suspense>
        </div>
    );
};

export default HomePage;