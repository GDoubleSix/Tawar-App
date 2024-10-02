import clsx from "clsx";
import Link from "next/link";
import React, { forwardRef } from "react";
import Contact from "./Contact";

const baseStyles = {
  solid:
    "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

const variantStyles = {
  solid: {
    blue: "relative overflow-hidden bg-blue-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:text-white/80 before:transition-colors",
    gray: "bg-green-800 text-white hover:bg-green-900 active:bg-green-800 active:text-white/80",
  },
};

const Button = forwardRef(function Button(
  { variant = "solid", color = "gray", className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );
  return href ? (
    <Link
      ref={ref}
      href={`components/${}`}
      className={className}
      {...props}
    >
      {props.children}
    </Link>
  ) : (
    <button ref={ref} className={className} {...props}>
      {props.children}
    </button>
  );
});

export default Button;
