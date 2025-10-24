
import React, { useEffect } from 'react';
import { MdStarRate } from 'react-icons/md';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const response = await fetch('/topprovider.json');
const providers = await response.json();

const TopProvider = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-white p-2 my-5 rounded-2xl shadow-sm">
            <h2 className="animate__animated text-gray-800 text-3xl text-center mt-5 mb-10 font-bold hover:animate__headShake">
                Top Rated Providers
            </h2>

            <div className="space-y-6">
                {providers.map((provider, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 border-b pb-4 last:border-none">

                        <img
                            src={provider.image}
                            alt={provider.company}
                            className="w-40 md:w-70 bg-cover h-30 rounded-xl object-cover mr-10"/>

                        <div data-aos="zoom-in"  className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900">
                                {provider.company}
                            </h3>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">
                                {provider.providerName}
                            </p>
                            <p className="text-sm text-gray-700 mt-2">{provider.best_for}</p>

                            <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
                                {provider.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>

                            <div className="mt-2">
                                <span className="text-[#3f4d93] text-sm flex items-center justify-start font-bold gap-1">
                                    <MdStarRate />
                                    ({provider.rating})
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopProvider;
