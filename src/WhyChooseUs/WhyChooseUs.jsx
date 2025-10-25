import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaHeadset } from "react-icons/fa";
import whyImg from "../assets/why-choose-us.jpg";
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
    return (
        <section className="py-16 mb-10 bg-white rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-15">
                Why Choose Us
            </h2>
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Image Section */}
                <div data-aos="zoom-in" className="flex justify-center">
                    <div className="relative">
                        <img
                            src={whyImg}
                            alt="Why Choose Us"
                            className="w-80 h-80 object-cover rounded-3xl shadow-lg"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-purple-200 w-20 h-20 flex items-center justify-center rounded-full shadow-md">
                            <span className="text-4xl font-bold text-purple-600">?</span>
                        </div>
                    </div>
                </div>

                {/* Right Text Section */}
                <div>
                    {/* Box 1 */}
                    <div data-aos="zoom-in" className="flex items-start gap-5 bg-white shadow-sm rounded-xl p-5 mb-5 hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-[#fff4ec] p-4 rounded-xl">
                            <FaChalkboardTeacher className="text-3xl text-orange-500" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#0f1240]">
                                Expert Instructor
                            </h3>
                            <p className="text-gray-500 text-sm mt-1">
                                Learn from highly qualified instructors with real-world
                                experience who make complex topics easy to understand.
                            </p>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div data-aos="zoom-in" className="flex items-start gap-5 bg-white shadow-sm rounded-xl p-5 mb-5 hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-[#fff4ec] p-4 rounded-xl">
                            <FaLaptopCode className="text-3xl text-orange-500" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#0f1240]">
                                Flexible Learning
                            </h3>
                            <p className="text-gray-500 text-sm mt-1">
                                Study anytime, anywhere at your own pace with access to all
                                materials and live sessions when it suits you best.
                            </p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div data-aos="zoom-in" className="flex items-start gap-5 bg-white shadow-sm rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-[#fff4ec] p-4 rounded-xl">
                            <FaHeadset className="text-3xl text-orange-500" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#0f1240]">
                                Educator Support
                            </h3>
                            <p className="text-gray-500 text-sm mt-1">
                                Get personal guidance, quick feedback, and constant support from
                                our instructors to help you reach your goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
