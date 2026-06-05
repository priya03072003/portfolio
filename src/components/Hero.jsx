import { ArrowRight, Download, Link, Code, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const titleText = "Crafting Digital";

  return (
    <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Ambient glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-[var(--color-primary)] rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-[var(--color-secondary)] rounded-full blur-[120px] pointer-events-none"
      />

      {/* 
        KEY FIX: Use md:flex-row for responsiveness.
        At 768px (md/tablet) the layout switches to side-by-side.
        This ensures proper display on medium screens.
      */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-12 z-10 w-full relative py-8 md:py-0 lg:py-0">

        {/* Left Content Column */}
        <div className="text-center lg:text-left flex-1 w-full md:w-1/2 mb-8 md:mb-0" style={{ perspective: "1000px" }}>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[var(--color-primary)] font-bold mb-4 lg:mb-6 tracking-widest uppercase text-xs sm:text-sm"
          >
            Hi, I'm Priyadharshini G
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 lg:mb-6 tracking-tight leading-[1.1]"
          >
            {titleText.split(" ").map((word, i) => (
              <motion.span key={i} variants={wordVariant} className="inline-block mr-3 lg:mr-4 transform-gpu">
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-purple-500 to-[var(--color-secondary)] bg-[length:200%_auto] inline-block mt-2"
            >
              Experiences
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl text-[var(--text-secondary)] mb-8 lg:mb-12 leading-relaxed mx-auto lg:mx-0"
          >
            Full Stack Developer with strong hand-on experience in React, Django, Tailwind CSS, and Redux, building scalable web applications and managing complete deployment workflows.

            Experienced in DevOps tools and practices including Jenkins, GitLab, SonarQube, CI/CD pipelines, and automation using n8n with AI integrations.

            Currently focused on advancing in DevOps and cloud-native technologies, especially Kubernetes, deployment automation, and scalable infrastructure management.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-[var(--color-primary)]/50 transition-shadow cursor-none"
            >
              Explore My Work <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1SxJ0CNVALycogpSP0kh1hgF4uLcByu5M/view?usp=sharing" download
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-[var(--border-color)] hover:border-[var(--color-primary)] text-[var(--text-primary)] font-bold flex items-center justify-center gap-2 hover:bg-[var(--surface-color)] transition-colors cursor-none"
            >
              Resume <Download className="w-5 h-5" />
            </motion.a>

            <div className="flex items-center gap-3 sm:gap-4 sm:ml-2 sm:pl-4 sm:border-l border-[var(--border-color)]">
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://github.com/DigiDuchess/" target="_blank" className="p-2 sm:p-3 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors shadow-sm cursor-none">
                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.linkedin.com/in/priya-prakasam-524670269/" target="_blank" className="p-2 sm:p-3 rounded-full bg-[var(--surface-color)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors shadow-sm cursor-none">
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Avatar Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="flex-shrink-0 flex justify-center w-full md:w-1/2 md:justify-end mt-8 md:mt-0"
        >
          <div className="relative group">

            {/* Subtle gradient glow — small and controlled */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-secondary)] blur-3xl opacity-15 pointer-events-none"></div>

            {/* Slowly spinning dashed ring */}
            <div className="absolute inset-[-8px] rounded-full border border-dashed border-[var(--color-secondary)] opacity-30 animate-[spin_20s_linear_infinite]"></div>

            {/* Profile Image Wrapper — perfectly sized per breakpoint */}
            <motion.div
              whileHover={{ rotateY: 8, rotateX: -8 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative z-10 w-40 h-60 sm:w-56 sm:h-84 md:w-72 md:h-108 lg:w-84 lg:h-126 xl:w-[24rem] xl:h-[36rem] rounded-full overflow-hidden border-4 border-[var(--color-primary)] ring-4 ring-[var(--color-primary)] shadow-[0_10px_40px_rgba(0,0,0,0.25)] bg-gradient-to-b from-[var(--color-primary)]/30 to-[var(--color-secondary)]/30 transform-gpu transition-transform duration-500"
            >
              <img
                src="/profile.png"
                alt="Priyadharshini - Profile"
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Floating Stats Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-2 left-0 sm:bottom-4 sm:-left-6 lg:-left-12 bg-[var(--surface-color)]/95 backdrop-blur-md border border-[var(--border-color)] px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl z-20"
            >
              <p className="text-[11px] sm:text-sm font-bold text-[var(--color-primary)] whitespace-nowrap">Full Stack Developer & Devops</p>
              <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Available
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
