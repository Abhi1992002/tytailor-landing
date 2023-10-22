"use client";
import React, { useEffect, useState } from "react";
import { InitialLoad } from "../InitialLoad";
import { Landing } from "./Landing";
import { AnimatePresence } from "framer-motion";
import { Background } from "../Background";

type MainProps = {};

export const Main = ({}: MainProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <AnimatePresence>
      <div className="w-screen bg-foreground flex items-center justify-center">
        <Background />
        {loading ? <InitialLoad /> : <Landing />}
      </div>
    </AnimatePresence>
  );
};
