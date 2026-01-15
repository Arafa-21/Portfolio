"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl font-bold tracking-[0.3em] text-primary"
        >
          SKILLS
          <div className="flex items-center justify-center gap-2 mt-6 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-8 h-0.5 bg-primary" />
          </div>
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4" />
        <p className="text-muted-foreground mt-8 max-w-xl mx-auto">
          Showcasing my skills visually with images in an orbital layout.
        </p>
      </div>
      <div className="relative mx-auto w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
        <Image
          src="/assets/skills/skills.webp"
          fill
          alt="Center Icon"
          className="w-24 h-24 md:w-32 md:h-32 mx-auto object-cover"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
