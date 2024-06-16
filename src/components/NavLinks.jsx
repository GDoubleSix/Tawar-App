"use client";

import { navData } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

function NavLinks() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleSmoothScroll = (href) => {
    const element = document.getElementById(href.substring(1));

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {navData.map(({ _id, title, href }) => (
        <motion.div
          smooth
          key={_id}
          className="relative -mx3 -my-2 px-3 rounded-lg py-2 text-base text-gray-900 transition-colors hover:bg-gray-200 cursor-pointer"
          onMouseEnter={() => setHoverIndex(_id)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => href && handleSmoothScroll(href)}
        >
          <AnimatePresence>
            {hoverIndex === _id && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-green-700"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{title}</span>
        </motion.div>
      ))}
    </>
  );
}

export default NavLinks;
