"use client";
import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

const Default_Image = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Fondo_Coming_Soon.png')",
          filter: "brightness(0.9)",
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider text-center mb-6 font-serif">
          PAN Y MIEL
        </h1>

        <div className="text-center">
          <p className="text-xl md:text-2xl font-light tracking-wide mb-2">
            your go to coffee shop
          </p>

          <Link
            className="text-xl md:text-2xl font-light tracking-wide uppercase underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity"
            href="#"
          >
            A click away
          </Link>
        </div>

        {/* Overlay for better text readability 
        <Button 
          color="default" 
          variant="solid" 
          className="uppercase tracking-widest text-sm font-light px-8 py-6 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
        >
          A click away
        </Button>
*/}
      </div>
    </div>
  );
};

export default Default_Image;