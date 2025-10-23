import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        setError("")

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log("Email:", email, "Password:", password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Logged in user:", user);
                navigate("/");
            })
            .catch((err) => {
                setError(err.message);
            });

        form.reset()
    };

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
                             Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
