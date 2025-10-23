<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { useLoaderData, useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { MdStarRate } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";

const Home = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleViewDetails = (skillId) => {
        if (user) {
            navigate(`/skills/${skillId}`);
        } else {
            alert("Please login first to view details!");
            navigate("/login");
        }
    };

    return (
        <div>
            <Slider />

            <div className="my-10 space-y-10">
=======
import React from 'react';
import Slider from './Slider';
import { Link, useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <Slider></Slider>

            <div className="my-10 space-y-10">

>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                <h2 className="text-3xl font-bold text-center mt-10">Top Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((skill) => (
                        <div
                            key={skill.skillId}
<<<<<<< HEAD
                            className="card bg-gray-200 rounded-xl"
                        >
=======
                            className="card bg-gray-200 rounded-xl">
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                            <figure>
                                <img
                                    src={skill.image}
                                    alt={skill.skillName}
                                    className="w-full h-56 object-cover rounded-t-xl"
                                />
                            </figure>

<<<<<<< HEAD
                            <div className="p-5">
=======
                            <div className='p-5'>
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                                <h2 className="card-title">{skill.skillName}</h2>

                                <div className="flex justify-between items-center mt-2">
                                    <p className="flex items-center gap-1 font-semibold">
<<<<<<< HEAD
                                        <MdStarRate /> {skill.rating}
                                    </p>
                                    <p className="text-lg font-bold text-primary flex items-center gap-2">
                                        <IoMdPricetags /> ${skill.price}
=======
                                         {skill.rating}
                                    </p>
                                    <p className="text-lg font-bold text-primary">
                                        ${skill.price}
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                                    </p>
                                </div>

                                <div className="card-actions mt-4">
<<<<<<< HEAD
                                    <button
                                        onClick={() => handleViewDetails(skill.skillId)}
                                        className="btn bg-gray-600 text-white text-sm font-semibold btn-sm">
                                        View Details
                                    </button>
=======
                                    <Link to={`/skills/${skill.skillId}`}>
                                        <button className="btn btn-primary btn-sm">
                                            View Details
                                        </button>
                                    </Link>
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
