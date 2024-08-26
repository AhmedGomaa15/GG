import React from 'react'; 
 
const Footer = () => { 
  return ( 
    <footer className="bg-footerGreen text-white py-8"> 
      <div className="container mx-auto text-center"> 
        <div className="flex justify-center space-x-6 mb-4"> 
          <a href="#privacy" className="hover:text-gray-300">Privacy Policy</a> 
          <a href="#terms" className="hover:text-gray-300">Terms of Service</a> 
          <a href="#contact" className="hover:text-gray-300">Contact</a> 
        </div> 
        <div className="mb-4"> 
          <p>&copy; 2024 Coursoo. All rights reserved.</p> 
        </div> 
        <div className="flex justify-center space-x-4"> 
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"> 
            <i className="fab fa-facebook-f"></i> 
          </a> 
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"> 
            <i className="fab fa-twitter"></i> 
          </a> 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"> 
            <i className="fab fa-instagram"></i> 
          </a> 
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"> 
            <i className="fab fa-linkedin-in"></i> 
          </a> 
        </div> 
      </div> 
    </footer> 
  ); 
}; 
 
export default Footer;
