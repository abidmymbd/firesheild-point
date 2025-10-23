import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { auth } from "../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import userLogo from "../assets/user.png";

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (result) => {
            setUser(result);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => console.log("Logged out"))
            .catch((err) => console.log(err));
    };

    const links = (
        <>
            <NavLink className="mr-3 font-semibold" to="/"> Home </NavLink>
            <NavLink className="mr-3 font-semibold" to="/profile"> My Profile </NavLink>
        </>
    );

    return (
        <div className="navbar bg-gray-100 my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-xl font-bold"> Firesheild Point </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end flex items-center">
                    <img className="mr-3 w-10 h-10 rounded-full cursor-pointer" src={userLogo} alt="User" />

                {user ? (
                    <button
                        onClick={handleLogout}
                        className="btn font-semibold"> Logout </button>
                ) : (
                    <>
                        <NavLink className="btn mr-3 font-semibold" to="/login"> Login </NavLink>
                        <NavLink className="btn font-semibold" to="/signup"> Sign Up </NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
