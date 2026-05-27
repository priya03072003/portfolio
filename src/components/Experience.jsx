const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Education & Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] md:mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-extrabold mb-10 text-[var(--text-primary)] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-primary)] flex items-center justify-center text-sm">🎓</span>
              Education
            </h3>

            <div className="space-y-10 border-l-4 border-dashed border-[var(--border-color)] pl-8 ml-4">
              <div className="relative group">
                <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-[var(--color-primary)] border-4 border-[var(--bg-color)] shadow-md group-hover:scale-125 transition-transform"></div>
                <h4 className="font-bold text-xl text-[var(--color-primary)]">B.Tech Artificial Intelligence & Data Science</h4>
                <p className="text-sm font-semibold text-[var(--text-primary)] mt-1">Kangeyam Institute of Technology(2021 - 2025)</p>
                <p className="mt-3 text-sm font-medium text-[var(--text-secondary)] bg-[var(--surface-color)] inline-block px-3 py-1 rounded-md border border-[var(--border-color)]">CGPA: 8.15</p>
              </div>

              <div className="relative group">
                <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-[var(--border-color)] border-4 border-[var(--bg-color)] transition-colors group-hover:bg-[var(--color-secondary)]"></div>
                <h4 className="font-bold text-xl text-[var(--text-primary)]">HSC (Computer Science & Maths)</h4>
                <p className="text-sm font-semibold text-[var(--text-secondary)] mt-1">Govt Girls Model HSS, Erode (2021)</p>
                <p className="mt-3 text-sm font-medium text-[var(--text-secondary)] bg-[var(--surface-color)] inline-block px-3 py-1 rounded-md border border-[var(--border-color)]">Score: 90%</p>
              </div>

              <div className="relative group">
                <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-[var(--border-color)] border-4 border-[var(--bg-color)] transition-colors group-hover:bg-[var(--color-secondary)]"></div>
                <h4 className="font-bold text-xl text-[var(--text-primary)]">SSLC</h4>
                <p className="text-sm font-semibold text-[var(--text-secondary)] mt-1">Municipal Girls HSS, Erode (2019)</p>
                <p className="mt-3 text-sm font-medium text-[var(--text-secondary)] bg-[var(--surface-color)] inline-block px-3 py-1 rounded-md border border-[var(--border-color)]">Score: 87%</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-2xl font-extrabold mb-10 text-[var(--text-primary)] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] flex items-center justify-center text-sm">📜</span>
              Certifications
            </h3>

            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--color-secondary)] transition-all shadow-sm hover:shadow-xl hover:-translate-x-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-xl text-[var(--color-secondary)]">C Programming & DSA</h4>
                  <span className="text-xs font-bold text-[var(--text-secondary)] bg-[var(--bg-color)] px-2 py-1 rounded">June 2023</span>
                </div>
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-4">Six Face, Coimbatore</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Comprehensive learning of Data Structures and Algorithms in C.</p>
              </div>

              <div className="p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--color-secondary)] transition-all shadow-sm hover:shadow-xl hover:-translate-x-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-xl text-[var(--color-secondary)]">Full Stack Course</h4>
                  <span className="text-xs font-bold text-[var(--text-secondary)] bg-[var(--bg-color)] px-2 py-1 rounded">Aug - Sep 2023</span>
                </div>
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-4">Knila IT Solutions</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Web dev fundamentals: HTML, CSS, JavaScript, jQuery, Angular.</p>
              </div>

              <div className="p-8 rounded-3xl bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--color-secondary)] transition-all shadow-sm hover:shadow-xl hover:-translate-x-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-xl text-[var(--color-secondary)]">ML to Generative AI</h4>
                  <span className="text-xs font-bold text-[var(--text-secondary)] bg-[var(--bg-color)] px-2 py-1 rounded">March 2024</span>
                </div>
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-4">IBM</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Project-based hands-on approach to cutting-edge AI technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
