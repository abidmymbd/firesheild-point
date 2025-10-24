import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const ForgotPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    return (
        <div className='w-11/12 mx-auto text-center p-20 bg-gray-200 mt-10 rounded'>
            <p className='font-semibold pb-5'>Forgotten Password?</p>
            <div className='flex justify-center items-center'>
                <label className="input mr-2">
                    <input
                        type="email"
                        placeholder="your mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <Link to='https://www.gmail.com' target="_blank" className="btn btn-neutral">Reset</Link>
            </div>
            <Link to='/' className="btn bg-white font-semibold mt-15">
                Back to Home
            </Link>
        </div>
    );
};

export default ForgotPassword;
