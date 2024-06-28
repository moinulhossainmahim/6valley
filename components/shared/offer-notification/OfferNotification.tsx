'use client';

import { useState } from "react";

const OfferNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="relative bg-cover bg-center text-blue-800 px-16 py-2 flex justify-between items-center bg-[url('/assets/offers-bg.png')]"
    >
      <button onClick={() => setIsVisible(false)} className="text-xl">&times;</button>
      <p>50% Off On Black Friday For All Stores&gt; Valid Until 31 January, 2023</p>
      <span></span>
    </div>
    );
};

export default OfferNotification;
