import React from 'react';
import mapImage from './map.png';

const GoogleMapsSection = () => {
  return (
    <section className="map-section mt-10 mb-20 text-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-700 mb-8">CHECK OUT DIRECTIONS</h2>
      <div className="container mx-auto px-4 lg:px-8">
        <a href="https://maps.google.com/?q=YourStoreLocation" target="_blank" rel="noopener noreferrer">
          <img
            src={mapImage}
            alt="Location Map"
            className="w-full h-auto max-w-full"
          />
        </a>
      </div>
    </section>
  );
};

export default GoogleMapsSection;
