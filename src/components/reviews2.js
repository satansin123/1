import React from 'react';

const CustomerTestimonials = () => {

const person1 = require('./img1.png')
const person2 = require('./img2.png')

return (
  <section className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Hear From Our Customers
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
          Don't just take our word for it, see what others are saying.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded shadow-md">
              <div className="star-rating flex items-center mb-5">
                {/* Use font-awesome for stars */}
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="leading-relaxed mb-6 text-gray-700">
                The service was outstanding! From the friendly customer service to the detail-oriented design team, everything was fantastic.
              </p>
              <div className="testimonial-author inline-flex items-center">
                <img alt="testimonial" src={person1} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <div className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Jane Doe</span>
                  <span className="text-gray-500 text-sm">CEO of ABC Corp</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 rounded shadow-md">
              <div className="star-rating flex items-center mb-5">
                {/* Use font-awesome for stars */}
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="leading-relaxed mb-6 text-gray-700">
                Every aspect of their service was impeccable. The end result was visually stunning and very functional.
              </p>
              <div className="testimonial-author inline-flex items-center">
                <img alt="testimonial" src={person2} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <div className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">John Smith</span>
                  <span className="text-gray-500 text-sm">Founder of XYZ Inc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default CustomerTestimonials;
