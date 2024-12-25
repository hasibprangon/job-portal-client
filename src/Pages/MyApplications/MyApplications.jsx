import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import axios from 'axios';


const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState();
    useEffect(() => {
        
        // fetch(`http://localhost:5000/job-application?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setJobs(data);
        //     })

        axios.get(`http://localhost:5000/job-application?email=${user?.email}`, {
            withCredentials: true
        })
        .then(res => console.log(setJobs(res.data)))



        // setting dependency if user.email changes then it will fetch the data again
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/job-application/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });

                              const remaining = jobs.filter(data => data._id !== id);
                              setJobs(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h2 className="text-3xl">My applications: {jobs?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Job</th>
                            <th>Applicant</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs?.map(job => <tr key={job._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job?.company_logo}
                                                    alt={job?.company_logo} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job?.company}</div>
                                            <div className="text-sm opacity-50">{job?.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job?.title}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{job?.jobType}</span>
                                </td>
                                <td>{job?.name}</td>
                                <th>
                                    <button onClick={() => handleDelete(job?._id)} className="btn btn-ghost  text-2xl btn-xs"><MdDeleteForever /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;