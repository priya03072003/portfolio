import { Briefcase } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Innovators Inc.",
      duration: "May 2024 - Present",
      description: "Working on modernizing the core customer dashboard using React and Tailwind CSS. Improved rendering performance by 20% and implemented responsive design systems.",
    },
    {
      role: "UI/UX Design Intern",
      company: "Creative Studio",
      duration: "Jan 2024 - April 2024",
      description: "Assisted in creating wireframes, interactive prototypes in Figma, and user flow documentation for an emerging EdTech platform.",
    }
  ];

  return (
    <section id="internships" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--surface-color)] relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Internships</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] md:mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {internships.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative pl-8 lg:pl-0"
            >
              <div className="lg:grid lg:grid-cols-5 lg:gap-8 items-start relative mb-12 group">
                
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-[20%] w-px h-full bg-[var(--border-color)] group-last:h-0 -ml-px top-8 z-0"></div>
                <div className="hidden lg:flex absolute left-[20%] w-10 h-10 -ml-5 rounded-full bg-[var(--bg-color)] border border-[var(--border-color)] items-center justify-center z-10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Briefcase className="w-5 h-5" />
                </div>

                {/* Left side (Duration) */}
                <div className="lg:col-span-1 lg:text-right pt-2 pb-4 lg:pb-2 lg:pr-12">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-xs font-black text-[var(--color-primary)] tracking-tight whitespace-nowrap mb-4 lg:mb-0 shadow-sm">
                    {item.duration}
                  </span>
                </div>

                {/* Right side (Content) */}
                <div className="lg:col-span-4 bg-[var(--bg-color)] border border-[var(--border-color)] p-6 md:p-8 rounded-2xl md:rounded-3xl hover:border-[var(--color-primary)] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
                  <h3 className="text-xl md:text-2xl font-extrabold mb-1 text-[var(--text-primary)] tracking-tight">{item.role}</h3>
                  <h4 className="text-lg font-bold text-[var(--color-secondary)] mb-4">{item.company}</h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base font-medium">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
