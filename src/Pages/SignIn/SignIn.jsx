import React, { useContext } from 'react';
import animation from '../../../src/assets/animations/signIn/signIn.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../Provider/AuthContextProvider/AuthContextProvider';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const { handleSignInUser, setUser, handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const googleLogin = () => {
        handleGoogleSignIn()
            .then(result => {
                const googleUser = result.user;
                setUser(googleUser)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Register Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                toast.error(`${err.message}`)
            })
    };

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        handleSignInUser(email, password)
            .then(result => {
                const signedInUser = result.user;
                console.log(result.user.email);
                const user = {email: email};
                axios.post('http://localhost:5000/jwt', user, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data);
                })


                setUser(signedInUser);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Sign In successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')
                e.target.reset();
            })
            .catch(err => {
                toast.error(`${err.message}`)
            })
    }
    return (
        <div className="hero min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=" ml-9 w-[500px]">
                    <Lottie
                        animationData={animation}
                        loop={true}
                    ></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl text-center mt-5 font-bold">Sign In now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                            <div className="divider">OR</div>
                            <button type='button' onClick={googleLogin} className="flex justify-center items-center gap-3 px-3 py-2 bg-gray-400 rounded-lg mb-4 text-white font-semibold"><FcGoogle />Sign In With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;