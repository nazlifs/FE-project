import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-4">
      <p>
        &copy; {new Date().getFullYear()} Kautsar Software. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
