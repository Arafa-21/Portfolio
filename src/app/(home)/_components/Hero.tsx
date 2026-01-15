import { MotionH1, MotionSpan } from '@/components/Framer';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 text-center">
        <MotionH1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-6xl md:text-8xl font-bold tracking-wider"
        >
          <MotionSpan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gradient "
          >
            ARAFA
          </MotionSpan>
          <MotionSpan
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-foreground ml-4"
          >
            N
          </MotionSpan>
        </MotionH1>
      </div>
    </section>
  );
};
