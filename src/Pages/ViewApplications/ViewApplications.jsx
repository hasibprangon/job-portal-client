import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const data = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl">Applications For this job{data?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Github Link</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((applicant, index) => <tr key={applicant._id}>
                                <th>{index + 1}</th>
                                <td>{applicant?.name}</td>
                                <td>{applicant?.email}</td>
                                <td><a href={applicant?.github}>{applicant?.github}</a></td>
                                <td>{applicant?.phone}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;