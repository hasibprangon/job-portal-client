import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })
    },[]);

    return (
        <div>
            <h2 className='text-4xl text-center text-slate-500 font-semibold my-2'>Hot jobs of the day</h2>
            <p className='text-base font-medium text-center text-slate-400 mb-8 '>Search and connect with the right candidates faster.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto p-5 bg-base-300 rounded-xl'>
                {
                    jobs.map(job =><HotJobsCard
                    key={job._id}
                    job={job}
                    ></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;