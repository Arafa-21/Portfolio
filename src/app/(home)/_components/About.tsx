import { MotionDiv } from '@/components/Framer';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const workSamples = [
    {
      id: 1,
      image: "/assets/works/tpmhiring.webp",
    },
    {
      id: 2,
      image: "/assets/works/tpmsquad.webp",
    },
    {
      id: 3,
      image: "/assets/works/saddleup.webp",
    },
    {
      id: 4,
      image: "/assets/works/beyondsyllabus.webp",
    },
    {
      id: 5,
      image: "/assets/works/tpm.webp",
    },
    {
      id: 6,
      image: "/assets/works/tpmrelease.webp",
    },
  ];


  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className=" text-4xl md:text-5xl font-bold tracking-widest">
            <span className="text-primary">ABOUT</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6 mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-8 h-0.5 bg-primary" />
          </div>

          <h3 className="text-xl md:text-2xl font-medium text-foreground mb-6">
            Let me to Introduce myself
          </h3>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-foreground leading-relaxed max-w-2xl mx-auto">
            I'm a multidisciplinary creator specializing in{' '}
            <span className="text-primary">UI/UX designer, Frontend developer, and IoT Innovator</span>.
            I blend artistic flair with technical expertise and express ideas through motion and copy, blending
            creativity with technology.
          </p>
        </MotionDiv>
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {workSamples.map((sample) => (
            <MotionDiv
              key={sample.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer border border-border"
            >
              <img
                src={sample.image}
                alt="Work sample"
                className="w-full h-full object-cover"
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
};
