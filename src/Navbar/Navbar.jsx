import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router";
=======
import { Link, NavLink } from "react-router";
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
import { auth } from "../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import userLogo from "../assets/user.png";

const Navbar = () => {
    const [user, setUser] = useState(null);
<<<<<<< HEAD
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
=======

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (result) => {
            setUser(result);
        });

>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth)
<<<<<<< HEAD
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
            alert("Please login first to access your profile!");
            navigate("/login", { state: { from: "/profile" } });
        }
    };

    const buttonClass = "btn btn-ghost font-semibold mr-3"

    return (
        <div className="navbar bg-gray-100 my-5">

=======
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
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
<<<<<<< HEAD
                        className="btn btn-ghost lg:hidden">
=======
                        className="btn btn-ghost lg:hidden"
                    >
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
<<<<<<< HEAD
                            stroke="currentColor">
=======
                            stroke="currentColor"
                        >
                            {" "}
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
<<<<<<< HEAD
                                d="M4 6h16M4 12h8m-8 6h16" />
=======
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
<<<<<<< HEAD
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
                <Link to="/" className="text-xl font-bold">
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
=======
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
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
            </div>
        </div>
    );
};

export default Navbar;
