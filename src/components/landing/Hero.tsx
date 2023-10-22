import Image from "next/image";
import React, { useEffect, useState } from "react";
import hexa from "../../../public/hexa-bg.svg";
type HeroProps = {};

export const Hero = ({}: HeroProps) => {
  return (
    <div className="flex flex-col items-center mt-[15%] justify-center w-[70%] text-center">
      <Image
        src={hexa}
        width={100}
        height={100}
        className="w-[150vw] absolute top-0 opacity-50"
        alt="bg"
      />

      {/* container */}
      <div className="z-1 flex flex-col items-center justify-center w-[100%] text-center">
        <div className="p-[0.5px] z-[1] rounded-full mb-5 bg-neutral-500 bg-gradient-radial-middle">
          <div className="bg-gradient-to-b border-2 border-opacity-20 border-neutral-500 from-neutral-900 to-zinc-950 p-[10px] px-1 z-[1] rounded-full">
            <span className="mr-[20px]  bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-2 rounded-full">
              Taylor AI
            </span>
            <span className="text-sm mr-[20px] text-background/60">
              Best way to fine tune open source LLM
            </span>
          </div>
        </div>
        <h1 className="text-6xl font-bold radial_text py-[10px]">
          Navigate your data effortlessly
        </h1>
        <h1 className="text-[64px] font-bold  mb-[50px] ">
          <span className="radial_text mr-[10px]">using</span>
          <span className="text-transparent  bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
            Taylor AI
          </span>
        </h1>
        <p className="text-lg text-background/60 max-w-[60%]">
          Connect your codebases, database metadata, and commits for real data
          documentation, querying and monitoring.
        </p>
      </div>

      {/* image  */}
      <div className="h-[100vh] w-screen mt-[20px] flex items-center justify-center relative">
        <div className="h-[50%] w-screen bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 absolute p-2"></div>
        <div className="w-[80%] h-[90%] backdrop-blur-3xl flex items-center justify-center bg-black/10 z-1 relative rounded-3xl">
          <div className="w-[100%] h-[100%] rounded-2xl bg-gradient-radial-middle flex items-center justify-center">
            <div className="w-[96%] flex items-end border border-neutral-500 border-opacity-50 h-[94%] bg-black/60 pt-[30px] rounded-2xl relative">
              <div className="absolute top-2 flex gap-2 left-2">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="w-[100%] h-[100%] border border-neutral-500 border-opacity-50 bg-black rounded-b-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
