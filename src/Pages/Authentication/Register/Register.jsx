import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import animation from '../../../../src/assets/animations/register/register.json'
import { AuthContext } from '../../../Provider/AuthContextProvider/AuthContextProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const { handleCreateUser, setUser, handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
     
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
              navigate('/');
        })
        .catch(err => {
            toast.error(`${err.message}`)
        })
    };

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if(!passwordRegex.test(password)){
            toast.error('Password must have at least one uppercase, one lowercase and 6 character ')
            return;
        };

        handleCreateUser(email, password)
        .then(result => {
            const newUser = result.user;
            setUser(newUser);
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Register Successful",
                showConfirmButton: false,
                timer: 1500
              });
              e.target.reset();
              navigate('/');
        })
        .catch(err => {
            toast.error(`${err.message}`)
        })

        

    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[500px]">
                    <Lottie
                        animationData={animation}
                        loop={true}
                    ></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl mt-4 text-center font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <div className="divider">OR</div>
                            <button type='button' onClick={googleLogin} className="flex justify-center items-center gap-3 px-3 py-2 bg-gray-400 rounded-lg mb-4 text-white font-semibold"><FcGoogle />Sign In With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;