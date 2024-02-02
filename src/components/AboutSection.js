import React from 'react';

const AboutSection = () => {


  const exp = require('./exp.webp')
  const edu = require('./edu.webp')

  return (
    <section className="about-law mt-10 mb-10">
      <div className="container mx-auto">
        <div className="bg-white p-6 md:p-10 lg:p-12 shadow-lg rounded-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-700 mb-10">
            ABOUT US
          </h2>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img
                className="w-full h-auto rounded-lg"
                src={exp}
                alt="Legal books and gavel"
              />
            </div>
            <div className="w-full md:w-1/2 overflow-hidden p-3">
              <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-3">
                Experience
              </h3>
              <p className="text-gray-600">
                With over 10 years of experience as an advocate, I have handled various cases ranging from corporate law to intellectual property. I am dedicated to providing the best legal solutions to my clients.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8">
            <div className="w-full md:w-1/2 overflow-hidden p-3">
              <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-3">
                Education
              </h3>
              <p className="text-gray-600">
                I have a degree in law from Harvard Law School and have completed several courses in business law from Stanford University. I am constantly updating my knowledge to provide the best legal advice to my clients.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                className="w-full h-auto rounded-lg"
                src={edu}
                alt="Law professionals discussing over a laptop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
