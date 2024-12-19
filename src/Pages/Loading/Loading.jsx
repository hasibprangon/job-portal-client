import React from 'react';
import animation from '../../../src/assets/animations/loading/loading.json'
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-[300px] container mx-auto'>
            <div>
                <Lottie
                    animationData={animation}
                    loop={true}
                >
                </Lottie>
            </div>
        </div>
    );
};

export default Loading;