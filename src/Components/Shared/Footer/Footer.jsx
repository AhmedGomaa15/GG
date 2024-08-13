import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 p-4 text-white mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Coursoo. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#facebook" className="hover:underline">Facebook</a>
          <a href="#twitter" className="hover:underline">Twitter</a>
          <a href="#instagram" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
