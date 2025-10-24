import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import userLogo from "../assets/user.png";

import { toast } from 'react-toastify';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("Logged out");
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    const navigateToProfile = () => {
        if (user) {
            navigate("/profile");
        } else {
            toast.error("Please login first to access your profile!", {
                position: "top-right",
                autoClose: 3000,
                pauseOnHover: true,
                draggable: true,
            });
            navigate("/login", { state: { from: "/profile" } });
        }
    };

    const buttonClass = "btn btn-ghost font-semibold mr-3"

    return (
        <div className="navbar bg-gray-100 my-5">

            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <button className={buttonClass} onClick={() => navigate("/")}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button className={buttonClass} onClick={navigateToProfile}>
                                My Profile
                            </button>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="text-3xl font-bold text-[#3f4d93]">
                    Firesheild Point
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <button className={buttonClass} onClick={() => navigate("/")}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button className={buttonClass} onClick={navigateToProfile}>
                            My Profile
                        </button>
                    </li>
                </ul>
            </div>

            <div className="navbar-end flex items-center">
                {user && (
                    <div className="tooltip tooltip-bottom" data-tip={user.displayName || "No Name"}>
                        <img
                            className="mr-3 w-10 h-10 rounded-full cursor-pointer"
                            src={user.photoURL || userLogo}
                            alt="User"
                        />
                    </div>
                )}

                {user ? (<button onClick={handleLogout} className="btn font-semibold">
                    Logout
                </button>) :
                    (<>
                        <Link className="btn mr-3 font-semibold" to="/login">
                            Login
                        </Link>
                        <Link className="btn font-semibold" to="/signup">
                            Sign Up
                        </Link>
                    </>)
                }
            </div>
        </div>
    );
};

export default Navbar;
