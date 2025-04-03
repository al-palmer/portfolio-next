import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 w-full mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Alex Palmer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };