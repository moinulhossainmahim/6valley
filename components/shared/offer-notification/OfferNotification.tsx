'use client';

import { useState } from "react";

const OfferNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="relative bg-cover bg-center text-blue-800 px-2 lg:px-16 py-2 hidden sm:flex justify-between items-center bg-[url('/assets/offers-bg.png')]"
    >
      <button onClick={() => setIsVisible(false)} className="text-xl">&times;</button>
      <p className="text-sm lg:text-base">50% Off On Black Friday For All Stores&gt; Valid Until 31 January, 2023</p>
      <span className="hidden md:block"></span>
    </div>
    );
};

export default OfferNotification;
