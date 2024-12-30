import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface CTAButtonProps {
  to?: string;
  href?: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ to, href, variant, children, icon = false }) => {
  const baseStyles = "flex items-center justify-center gap-2 px-12 py-5 text-lg font-display tracking-wider transition-all duration-300";
  
  const variants = {
    primary: "group relative overflow-hidden bg-law-red text-white before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-black before:transition-transform before:duration-300 hover:before:translate-y-0",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-black"
  };

  const buttonContent = (
    <>
      <span>{children}</span>
      {icon && <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]}`}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]}`}>
        {buttonContent}
      </a>
    );
  }

  return null;
};

export default CTAButton; 