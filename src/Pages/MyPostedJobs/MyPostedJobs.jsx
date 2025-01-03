import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user?.email])
    return (
        <div>
            <h2>My posted jobs{jobs?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Deadline</th>
                            <th>Job</th>
                            <th>HR</th>
                            <th>Applied</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                         jobs?.map((job, index) => <tr key={index}>
                         <td>
                             <div className="flex items-center gap-3">
                                 <div className="avatar">
                                     <div className="mask mask-squircle h-12 w-12">
                                         <img
                                             src={job?.companyLogo}
                                             alt="Avatar Tailwind CSS Component" />
                                     </div>
                                 </div>
                                 <div>
                                     <div className="font-bold">{job?.company}</div>
                                     <div className="text-sm opacity-50">{job?.location}</div>
                                 </div>
                             </div>
                         </td>
                         <td>{job?.applicationDeadline}</td>
                         <td>
                             {job.title}
                             <br />
                             <span className="badge badge-ghost badge-sm">{job?.jobType}</span>
                         </td>
                         <td>{job?.hr_name}</td>
                         <td>{job?.applicationCount}</td>
                         
                         <th>
                            <Link to={`/viewApplications/${job?._id}`}> <button className="btn  btn-xs">View Applications</button></Link>
                         </th>
                     </tr>)   
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;