"use client";
import React from "react";
import Lottie from "lottie-react";
import animation from "../../public/animations/loading-logo.json";
export const InitialLoad = () => {
  return (
    <div className="w-screen h-screen bg-[#0b0b0b]">
      <Lottie animationData={animation} loop={false} />;
    </div>
  );
};
