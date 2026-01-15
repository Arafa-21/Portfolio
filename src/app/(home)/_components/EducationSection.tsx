"use client"
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const logo = "https://www.marian.ac.in/public/frontend/assets/images/emblem.png"

  return (
    <section ref={ref} className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-[0.3em] text-foreground">
            EDUCATION
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="flex items-center justify-center gap-6 bg-card border border-border rounded-xl p-6 max-w-md mx-auto hover:border-primary/50 transition-colors"
        >
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, 0] }}
            className="w-16 h-16 rounded-lg flex items-center justify-center"
          >
            <Image
              src={`https://images.weserv.nl/?url=${logo}&output=webp`}
              alt="Education Icon"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            />
          </motion.div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Marian Engineering College</h3>
            <p className="text-muted-foreground">Bachelor's Computer Science</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
