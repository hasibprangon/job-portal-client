import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline, IoCalendarOutline } from 'react-icons/io5';

const JobDetails = () => {
    const data = useLoaderData();

    const {
        _id,
        title,
        location,
        jobType,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements = [],
        responsibilities = [],
        company_logo
    } = data;

    // Handle salary range object
    const salaryText = salaryRange
        ? `${salaryRange.min} - ${salaryRange.max} ${salaryRange.currency || ''}`
        : 'Not specified';

    return (
        <div className="container mx-auto p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 lg:w-3/4 mx-auto">
                {/* Header Section */}
                <div className="flex items-center gap-4 border-b pb-4 mb-6">
                    <img src={company_logo} alt={company} className="w-20 h-20 object-cover rounded-full" />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">{company}</h2>
                        <p className="text-gray-500 flex items-center gap-1">
                            <CiLocationOn /> {location}
                        </p>
                    </div>
                </div>

                {/* Job Details */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
                <p className="text-gray-600 mb-6">{description}</p>

                {/* Key Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                        <IoBriefcaseOutline className="text-xl text-blue-500" />
                        <span>Type: {jobType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <IoCalendarOutline className="text-xl text-red-500" />
                        <span>Deadline: {applicationDeadline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <span className="font-semibold">Salary:</span>
                        <span>{salaryText}</span>
                    </div>
                </div>

                {/* Requirements Section */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Requirements:</h3>
                    {requirements.length > 0 ? (
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            {requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No specific requirements mentioned.</p>
                    )}
                </div>

                {/* Responsibilities Section */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsibilities:</h3>
                    {responsibilities.length > 0 ? (
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            {responsibilities.map((res, index) => (
                                <li key={index}>{res}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No specific responsibilities mentioned.</p>
                    )}
                </div>

                {/* Apply Button */}
                <div className="text-center">
                    <Link to={`/jobApply/${_id}`} className="btn btn-primary px-6 py-2 rounded-md text-white shadow-lg">
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
