import React from 'react';

const HowItWorks = () => {
  return (
    <section className="text-center py-20 bg-white rounded-3xl my-10">

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          How it Works ?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-15">

        <div className="flex-1 flex flex-col items-center text-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full font-semibold text-white mb-4 bg-blue-600">
            1
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Find Course
          </h3>
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full font-semibold text-black mb-4 bg-yellow-400">
            2
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Book your Seat
          </h3>
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full font-semibold text-white mb-4 bg-blue-600">
            3
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Get certificate
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
