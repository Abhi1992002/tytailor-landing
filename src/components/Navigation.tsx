import React from "react";

type NavigationProps = {};

export const Navigation = ({}: NavigationProps) => {
  return (
    <div className="fixed rounded-full bg-gradient-radial-right w-[70%] p-[0.5px] top-right z-[1] top-8">
      <div className=" rounded-full bg-gradient-radial-left w-[100%] p-[0.5px] top-right z-[1]">
        <div className=" p-5 w-[100%]  bg-gradient-to-b from-neutral-900 to-zinc-950 rounded-full border-t border border-neutral-500 border-opacity-30 flex">
          hello
        </div>
      </div>
    </div>
  );
};
