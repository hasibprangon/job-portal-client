import React from 'react';
import { BsListNested } from 'react-icons/bs';
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const HotJobsCard = ({ job }) => {
    const { _id, title, location, jobType, salaryRange, description, company, requirements = [], company_logo } = job;

    return (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b">
                <figure>
                    <img
                        src={company_logo}
                        alt={`${company} logo`}
                        className="w-16 h-16 object-cover rounded-full"
                    />
                </figure>
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">{company}</h2>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        <CiLocationOn /> {location}
                    </p>
                </div>
            </div>

            {/* Body */}
            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-1 mb-4">
                    <IoBriefcaseOutline className="text-blue-500" /> {jobType}
                </p>
                <p className="text-sm text-gray-700 line-clamp-3 mb-4">{description}</p>

                {/* Requirements */}
                {requirements.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Requirements:</h4>
                        <div className="flex gap-2 flex-wrap">
                            {requirements.map((req, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
                                >
                                    {req}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-4 py-4 bg-gray-50 border-t">
                <p className="text-sm font-medium text-gray-600">
                    Salary: <span className="text-gray-800">{salaryRange.min} - {salaryRange.max}</span>
                </p>
                <Link to={`/jobs/${_id}`} className="btn btn-primary btn-sm">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default HotJobsCard;
