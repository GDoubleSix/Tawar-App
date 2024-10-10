import clsx from "clsx";
import Link from "next/link";
import React from "react";

function Logo({ className, props }) {
  return (
    <Link href={"https://marketplace-tawar.vercel.app/"}>
      <h2
        className={clsx(
          "text-3xl font-bold text-green-900 hover:text-green-900 duration-300",
          className
        )}
        {...props}
      >
        TAWAR
      </h2>
    </Link>
  );
}

export default Logo;
