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

                <h2 className="text-3xl font-bold text-center mt-10">Top Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((skill) => (
                        <div
                            key={skill.skillId}
                            className="card bg-gray-200 rounded-xl">
                            <figure>
                                <img
                                    src={skill.image}
                                    alt={skill.skillName}
                                    className="w-full h-56 object-cover rounded-t-xl"
                                />
                            </figure>

                            <div className='p-5'>
                                <h2 className="card-title">{skill.skillName}</h2>

                                <div className="flex justify-between items-center mt-2">
                                    <p className="flex items-center gap-1 font-semibold">
                                         {skill.rating}
                                    </p>
                                    <p className="text-lg font-bold text-primary">
                                        ${skill.price}
                                    </p>
                                </div>

                                <div className="card-actions mt-4">
                                    <Link to={`/skills/${skill.skillId}`}>
                                        <button className="btn btn-primary btn-sm">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;