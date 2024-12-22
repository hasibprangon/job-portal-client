import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const coverLetter = form.coverLetter.value;

        const jobApplication = {
            job_id: id,
            applicant: user.email,
            name,
            email,
            phone,
            linkedIn,
            github,
            resume,
            coverLetter
        };

        fetch('http://localhost:5000/job-application', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            navigate('/myApplications');
        })
    }
    return (
        <div className="container mx-auto p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Job Application
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            // value={formData.name}
                            // onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="input input-bordered w-full mt-1"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            // value={formData.email}
                            // onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                            className="input input-bordered w-full mt-1"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            required
                            className="input input-bordered w-full mt-1"
                        />
                    </div>
                    {/* LinkedIn */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            LinkedIn URL
                        </label>
                        <input
                            type="url"
                            id="linkedIn"
                            name="linkedIn"
                            placeholder="Enter LinkedIn URL"
                            required
                            className="input input-bordered w-full mt-1"
                        />
                    </div>
                    {/* Github URL */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Github URL
                        </label>
                        <input
                            type="url"
                            id="github"
                            name="github"
                            placeholder="Enter Github URL"
                            required
                            className="input input-bordered w-full mt-1"
                        />
                    </div>

                    {/* Resume Upload */}
                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                            Upload Resume
                        </label>
                        <input
                            type="url"
                            placeholder='Your resume URL'
                            id="resume"
                            name="resume"
                            // onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            required
                            className="file-input file-input-bordered w-full mt-1"
                        />
                    </div>

                    {/* Cover Letter */}
                    <div>
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                            Cover Letter
                        </label>
                        <textarea
                            id="coverLetter"
                            name="coverLetter"
                            // value={formData.coverLetter}
                            // onChange={handleChange}
                            placeholder="Write your cover letter"
                            rows="4"
                            required
                            className="textarea textarea-bordered w-full mt-1"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-6 py-2 w-full">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;