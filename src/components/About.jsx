const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--surface-color)] relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-16 md:text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] md:mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 text-lg">
          <div data-aos="fade-right" className="flex flex-col justify-center">
            <p className="mb-6 md:mb-8 leading-relaxed text-[var(--text-secondary)] text-lg md:text-xl font-medium">
              I am pursuing my B.Tech in Artificial Intelligence and Data Science (Final Year) at Builders Engineering College, maintaining a strong academic record with an 8.15 CGPA.
            </p>
            <p className="leading-relaxed text-[var(--text-secondary)] text-base md:text-lg">
              My journey in tech spans across FullStack Development, UI/UX Designing, and Artificial Intelligence. I am constantly eager to learn and adapt to cutting-edge technologies.
            </p>
          </div>
          
          <div data-aos="fade-left" className="space-y-4 md:space-y-6">
            <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-color)] border border-[var(--border-color)] hover:border-[var(--color-primary)] transition-colors shadow-sm">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-[var(--color-primary)]">UI & UX Design</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">Focusing on visual elements, typography, and interactive layouts to align business goals with user needs.</p>
            </div>
            
            <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-color)] border border-[var(--border-color)] hover:border-[var(--color-secondary)] transition-colors shadow-sm">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-[var(--color-secondary)]">Problem Solving</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">Practicing programming and DSA systematically. Achieved a Bronze badge in C and Problem Solving on HackerRank.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
