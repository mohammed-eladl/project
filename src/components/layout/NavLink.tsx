import React from "react";
import { NavLink } from "react-router-dom";
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLinkK({ href, children, mobile }: NavLinkProps) {
  const baseStyles =
    "text-gray-300 hover:text-white transition-colors duration-200";
  const mobileStyles = mobile
    ? "block px-3 py-2 text-base"
    : "text-sm font-medium";

  return (
    <NavLink to={href} className={`${baseStyles} ${mobileStyles}`}>
      {children}
    </NavLink>
  );
}
