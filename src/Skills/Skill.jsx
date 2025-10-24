import React, { useState } from "react";
import { IoMdPricetags } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";

const Skill = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const skills = Array.isArray(data) ? data : [];
    const skill = skills.find((item) => item.skillId === parseInt(id));

    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${formData.name}, your booking is confirmed.`);
        setFormData({ name: "", email: "" });
    };


    if (!skill) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <h2 className="text-2xl font-semibold text-error">
                    Skill not found 
                </h2>
            </div>
        );
    }

    return (
        <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <img
                        src={skill.image}
                        alt={skill.skillName}
                        className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                    />
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{skill.skillName}</h2>
                    <p className="text-gray-600">{skill.description}</p>

                    <div className="flex items-center gap-2 font-semibold">
                        <span className="flex items-center gap-2">
                            <MdStarRate /> {skill.rating}
                        </span>
                    </div>

                    <p className="text-lg font-bold text-primary flex items-center gap-2">
                        <IoMdPricetags /> ${skill.price}
                    </p>

                    <div className="space-y-1">
                        <p>
                            <strong>Instructor:</strong> {skill.providerName}
                        </p>
                        <p>
                            <strong>Email:</strong> {skill.providerEmail}
                        </p>
                        <p>
                            <strong>Category:</strong> {skill.category}
                        </p>
                        <p>
                            <strong>Slots Available:</strong> {skill.slotsAvailable}
                        </p>
                    </div>
                </div>
            </div>

            {/* Booking Form */}
            <div className="bg-base-200 p-6 rounded-xl mt-5">
                <h3 className="text-2xl font-semibold mb-4">Book Now</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                            placeholder="Your Email"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Skill;
