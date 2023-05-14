import React from "react";

const Button = ({ styles }) => (
  <a href='#'>
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-strongerBlue rounded-[10px] outline-none transition-all duration-200 ease-in-out transform hover:scale-110 ${styles}`}>
      Get Started
    </button>
  </a>
);

export default Button;

