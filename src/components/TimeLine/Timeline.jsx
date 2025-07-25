"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Timeline({ data }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 55%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 9]);

  return (
    <div
      className="w-full bg-[#0a0a0d] font-sans px-4 md:px-10"
    >
      <div className="text-center mb-8 px-4 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7fa4fa] mb-4 font-schibsted">
          Our Journey
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-outfit">
          From a small group of finance enthusiasts to a thriving community of future leaders.
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-20 relative">
        <div ref={ref} className="relative">
          {data.map((item, index) => (
            <div key={index} className="relative flex items-start mb-12">
              <div className="relative z-10 flex-shrink-0 mt-3 ml-2 w-4 h-4 rounded-full bg-blue-500 border border-white" />
              <div className="ml-8 w-full">
                <div className="bg-[#1a1a1f] border border-gray-700 rounded-xl p-6 shadow-lg w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2 font-outfit">
                    {item.title}
                  </h3>
                  <div className="text-gray-300 font-outfit">{item.content}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Animated vertical line without fixed parent height */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
