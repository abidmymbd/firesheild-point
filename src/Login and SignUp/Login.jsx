import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
<<<<<<< HEAD
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";


=======
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")

<<<<<<< HEAD
    const gprovider = new GoogleAuthProvider();

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword)

=======
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
    const handleLogin = (e) => {
        e.preventDefault()
        setError("")

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

<<<<<<< HEAD
        console.log(email, password);
=======
        console.log("Email:", email, "Password:", password);
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
<<<<<<< HEAD
                console.log("Logged in user", user);
=======
                console.log("Logged in user:", user);
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                navigate("/");
            })
            .catch((err) => {
                setError(err.message);
            });

        form.reset()
    };
<<<<<<< HEAD
    const handleGoogleLogin = () => {
        signInWithPopup(auth, gprovider)
            .then((result) => {
                const user = result.user;
                console.log("Login success", user);
                navigate("/");
            })
            .catch((error) => {
                console.error("Login error", error);
                setError(error.message);
            });
    };

=======
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48

    return (
        <div className="hero bg-base-200 p-10 min-h-screen">
            <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0">
                <div className="card-body px-12 py-10">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset space-y-4">
                            <h1 className="text-5xl font-bold text-center mb-6">Login now!</h1>

                            <div className="flex flex-col space-y-2">
                                <label className="label font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                    placeholder="Email"
                                    required
                                />
                            </div>

<<<<<<< HEAD
                            <div className="relative flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="input input-bordered w-full pr-10"
                                    placeholder="Password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    className="absolute right-5 text-lg text-gray-600"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>


                            <div>
=======
                            <div className="flex flex-col space-y-2">
                                <label className="label font-medium">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input input-bordered w-full"
                                    placeholder="Password"
                                    required
                                />
                            </div>

                            <div className="text-right">
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                                <a className="link link-hover">Forgot password?</a>
                            </div>

                            {error && <p className="text-red-500 mt-2">{error}</p>}

                            <button type="submit" className="btn btn-neutral mt-4 w-full">
                                Login
                            </button>
                        </fieldset>
                    </form>

                    <p className="pt-3 text-center">
                        Don't Have An Account? Please{" "}
                        <Link className="font-semibold text-blue-500" to="/signup">
<<<<<<< HEAD
                            Sign Up
                        </Link>
                    </p>
                    {/* Google */}
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-gray-300 mt-2">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
=======
                             Sign Up
                        </Link>
                    </p>
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                </div>
            </div>
        </div>
    );
};

export default Login;
