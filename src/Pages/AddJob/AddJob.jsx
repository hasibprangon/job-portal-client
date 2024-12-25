import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hook/useAuth';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const {user} = useAuth()
    const navigate = useNavigate();

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const { responsibilities, requirements, currencyType, max, min, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currencyType };
        // The split(',') method separates the input string into an array based on commas.
        // The map(item => item.trim()) ensures that any extra spaces around the items are removed.
        newJob.responsibilities = responsibilities.split(',').map(item => item.trim());
        newJob.requirements = requirements.split(',').map(item => item.trim());
        
        fetch('http://localhost:5000/jobs', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "You have posted a job successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  e.target.reset();
                  navigate('/myPostedJobs');
            }
        })

    }

    return (
        <div className="max-w-3xl mx-auto my-10">
            <h2 className="text-4xl font-bold text-center mb-8">Add Job</h2>
            <form onSubmit={handleAddJob} className="bg-base-300 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                {/* Job Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Job Title
                    </label>
                    <input type="text" id="title" name="title" placeholder="Software Engineer" className="input input-bordered w-full" required />
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input type="text" id="location" name="location" placeholder="Halishohor, Chittagong" className="input input-bordered w-full" required />
                </div>

                {/* Job Type */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobType">
                        Job Type
                    </label>
                    <select id="jobType" name="jobType" className="select select-bordered w-full" required>
                        <option value="">Select Job Type</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                        <option value="On-site">On-site</option>
                    </select>
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <input type="text" id="category" name="category" placeholder="Engineering" className="input input-bordered w-full" required />
                </div>

                {/* Application Deadline */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="applicationDeadline">
                        Application Deadline
                    </label>
                    <input type="date" id="applicationDeadline" name="applicationDeadline" className="input input-bordered w-full" required />
                </div>

                {/* Salary Range */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="min">
                            Minimum Salary
                        </label>
                        <input type="number" id="min" name="min" placeholder="Minimum Salary" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="max">
                            Maximum Salary
                        </label>
                        <input type="number" id="max" name="max" placeholder="Maximum Salary" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobType">
                            Currency
                        </label>
                        <select id="jobType" name="currencyType" className="select select-bordered w-full" required>
                            <option value="">Select Currency</option>
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                            <option value="INR">INR</option>
                            <option value="URO">URO</option>
                        </select>
                    </div>
                </div>

                {/* Company Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
                        Company Name
                    </label>
                    <input type="text" id="company" name="company" placeholder="Favorite IT" className="input input-bordered w-full" required />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Job Description
                    </label>
                    <textarea id="description" name="description" placeholder="We are seeking a skilled Software Engineer..." className="textarea textarea-bordered w-full" required></textarea>
                </div>

                {/* Requirements */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requirements">
                        Requirements (Comma Separated)
                    </label>
                    <input type="text" id="requirements" name="requirements" placeholder="JavaScript, React, Node.js, MongoDB" className="input input-bordered w-full" required />
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="responsibilities">
                        Responsibilities (Comma Separated)
                    </label>
                    <input type="text" id="responsibilities" name="responsibilities" placeholder="Develop and maintain software, Collaborate with the team" className="input input-bordered w-full" required />
                </div>

                {/* HR Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hrName">
                            HR Name
                        </label>
                        <input type="text" id="hrName" name="hr_name" placeholder="HR name" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hrEmail">
                            HR Email
                        </label>
                        <input type="email" id="hrEmail" name="hr_email" placeholder="HR email" defaultValue={user?.email} readOnly className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Company Logo */}

                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyLogo">
                        Company Logo
                    </label>
                    <input type="url" id="companyLogo" name="companyLogo" placeholder="Company Logo" className="input input-bordered w-full" required />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary w-full">Add Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;