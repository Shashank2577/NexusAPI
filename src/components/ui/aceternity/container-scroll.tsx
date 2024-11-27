"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ContainerScroll = ({
  users,
  titleComponent,
}: {
  users: {
    name: string;
    designation: string;
    image: string;
  }[];
  titleComponent: string | React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleDimensions = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      className="h-[80vh] flex items-center justify-center relative p-20"
      ref={containerRef}
    >
      <div
        className="py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header title={titleComponent} />
        <motion.div
          style={{
            scale: scaleDimensions,
            opacity: opacity,
          }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4"
        >
          {users.map((user, idx) => (
            <motion.div
              key={`user-${idx}`}
              className="relative group cursor-pointer"
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 
                rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
              />
              <div className="relative bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 p-6">
                <div className="space-y-2">
                  <img
                    src={user.image}
                    alt={user.name}
                    height="100"
                    width="100"
                    className="rounded-full h-24 w-24 object-cover"
                  />
                  <p className="text-white font-medium text-lg">{user.name}</p>
                  <p className="text-slate-500 text-sm">
                    {user.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Header = ({ title }: { title: string | React.ReactNode }) => {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
    </div>
  );
};
