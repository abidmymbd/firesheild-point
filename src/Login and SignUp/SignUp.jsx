import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase.config";
<<<<<<< HEAD
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { FaEye, FaEyeSlash } from "react-icons/fa";
=======
import { createUserWithEmailAndPassword } from "firebase/auth";
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48

const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

<<<<<<< HEAD
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword)

=======
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
    const handleRegister = (e) => {
        e.preventDefault();
        setError("");

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
<<<<<<< HEAD
        const photoURL = form["Photo-URL"].value;


=======


        // Password validation
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
        const uppercasePattern = /[A-Z]/;
        const lowercasePattern = /[a-z]/;

        if (!uppercasePattern.test(password)) {
            setError("Password must have at least 1 uppercase letter.");
            return;
        }

        if (!lowercasePattern.test(password)) {
            setError("Password must have at least 1 lowercase letter.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

<<<<<<< HEAD

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(() => {
                        console.log("Profile updated successfully!");
                        form.reset();
                        navigate("/");
                    })
                    .catch((err) => {
                        console.error("Profile update error:", err);
                        setError("Could not update profile.");
                    });
=======
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Registered user:", user);

                navigate("/")
                form.reset()
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div className="hero bg-base-200 p-10 min-h-screen">
            <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0">
                <form onSubmit={handleRegister} className="card-body px-12 py-10">
                    <fieldset className="fieldset space-y-4">
<<<<<<< HEAD
                        <h1 className="text-5xl font-bold text-center mb-6">
                            Sign Up now!
                        </h1>

                        {/* Name */}
=======
                        <h1 className="text-5xl font-bold text-center mb-6">Sign Up now!</h1>

>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                        <div className="flex flex-col space-y-2">
                            <label className="label font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input input-bordered w-full"
<<<<<<< HEAD
                                placeholder="Your Name"
                                required/>
                        </div>

                        {/* Email */}
=======
                                placeholder="Name"
                                required
                            />
                        </div>

>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                        <div className="flex flex-col space-y-2">
                            <label className="label font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
<<<<<<< HEAD
                                placeholder="Your Email"
                                required/>
                        </div>

                        {/* Photo URL */}
=======
                                placeholder="Email"
                                required
                            />
                        </div>

>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                        <div className="flex flex-col space-y-2">
                            <label className="label font-medium">Photo URL</label>
                            <input
                                type="text"
                                name="Photo-URL"
                                className="input input-bordered w-full"
<<<<<<< HEAD
                                placeholder="https://example.com/your-photo.jpg"/>
                        </div>

                        {/* Password */}
                        <div className="relative flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="input input-bordered w-full pr-10"
                                placeholder="Password"
                                required/>
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute right-5 text-lg text-gray-600">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <p className="text-red-500 text-center mt-2">{error}</p>
                        )}

                        {/* Submit Button */}
=======
                                placeholder="Photo URL"
                            />
                        </div>

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


                        {error && <p className="text-red-500 mt-2">{error}</p>}

>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                        <button type="submit" className="btn btn-neutral mt-4 w-full">
                            Sign Up
                        </button>
                    </fieldset>
                </form>

                <p className="pt-3 text-center">
                    Already have an account?{" "}
<<<<<<< HEAD
                    <Link className="font-semibold text-blue-500" to="/login"> Login </Link>
=======
                    <Link className="font-semibold text-blue-500" to="/login">
                        Login
                    </Link>
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                </p>
            </div>
        </div>
    );
};

export default SignUp;
