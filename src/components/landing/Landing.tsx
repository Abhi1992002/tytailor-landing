import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Hero } from "./Hero";
import { Navigation } from "../Navigation";

export const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-screen flex items-center justify-center text-background z-1 relative"
    >
      <Navigation />
      <Hero />
    </motion.div>
  );
};
