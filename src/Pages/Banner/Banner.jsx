import React from 'react';
import { easeInOut, motion } from "motion/react"
import team1 from '../../../src/assets/bannerImg/team-1.jpg'
import team2 from '../../../src/assets/bannerImg/team-2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-blue-500 shadow-2xl " />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        src={team2}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-blue-500 shadow-2xl " />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: [0, 50, 0]}}
                        transition={{ duration: 10, delay: 1, ease: easeInOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['#fcff33', '#33ffb8', '#33f0ff'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Jobs</motion.span> for you!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;