import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { useLoaderData, useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { MdStarRate } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import TopProvider from "./TopProvider";
import HowItWorks from "./HowItWorks";
import 'animate.css';
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

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
            navigate("/login", { state: { from: `/skills/${skillId}` } });
        }
    };

    return (
        <div>
            <Slider></Slider>

            <div className="my-10 space-y-10">
                <h2 className="text-3xl font-bold text-center mt-10 animate__animated hover:animate__headShake">Top Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((skill) => (
                        <div
                            key={skill.skillId}
                            className="card bg-gray-200 rounded-xl"
                        >
                            <figure>
                                <img
                                    src={skill.image}
                                    alt={skill.skillName}
                                    className="w-full h-56 object-cover rounded-t-xl"
                                />
                            </figure>

                            <div className="p-5">
                                <h2 className="card-title">{skill.skillName}</h2>

                                <div className="flex justify-between items-center mt-2">
                                    <p className="flex items-center gap-1 font-semibold">
                                        <MdStarRate /> {skill.rating}
                                    </p>
                                    <p className="text-lg font-bold text-primary flex items-center gap-2">
                                        <IoMdPricetags /> ${skill.price}
                                    </p>
                                </div>

                                <div className="card-actions mt-4">
                                    <button
                                        onClick={() => handleViewDetails(skill.skillId)}
                                        className="btn bg-gray-600 text-white text-sm font-semibold btn-sm">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Providers */}
            <TopProvider></TopProvider>
            {/* Top Providers */}

            {/* How it Works */}
            <HowItWorks></HowItWorks>
            {/* How it Works */}

            {/* Why Choose Us */}
            <WhyChooseUs></WhyChooseUs>
            {/* Why Choose Us */}
        </div>
    );
};

export default Home;
