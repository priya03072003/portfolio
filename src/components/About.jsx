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
              Full Stack Developer with 1.5 years of hands-on experience in building scalable web applications and managing end-to-end deployment workflows. Specialized in frontend and backend development using React, Django, Tailwind CSS, and Redux for efficient state management.
            </p>
            <p className="mb-4 leading-relaxed text-[var(--text-secondary)] text-base md:text-lg">
              Experienced in DevOps practices including CI/CD pipeline creation with Jenkins and GitLab, along with code quality and testing integration using SonarQube. Passionate about automating workflows and integrating AI-powered solutions using n8n to improve productivity and system efficiency.
            </p>
            <p className="mb-4 leading-relaxed text-[var(--text-secondary)] text-base md:text-lg">
              Currently expanding expertise in DevOps and cloud-native technologies with a strong focus on Kubernetes, deployment automation, and infrastructure management. Enthusiastic about solving real-world problems through modern software engineering, AI integration, and scalable system design.
            </p>
            <p className="leading-relaxed text-[var(--text-secondary)] text-base md:text-lg">
              Driven by continuous learning, innovation, and building impactful digital solutions across Full Stack Development, DevOps, and AI Automation.
            </p>
          </div>
          <div data-aos="fade-left" className="space-y-4 md:space-y-6">
            <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-color)] border border-[var(--border-color)] hover:border-[var(--color-primary)] transition-colors shadow-sm">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-[var(--color-primary)]">Full Stack Development</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Building scalable and responsive web applications using React, Django, Tailwind CSS, and Redux while managing backend integration, deployment workflows, and performance optimization.
              </p>
            </div>
            <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-color)] border border-[var(--border-color)] hover:border-[var(--color-secondary)] transition-colors shadow-sm">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-[var(--color-secondary)]">DevOps Engineering</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Managing CI/CD pipelines using Jenkins and GitLab, integrating SonarQube for code quality, and exploring Kubernetes, automation, and scalable deployment workflows.
              </p>
            </div>
            <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-color)] border border-[var(--border-color)] hover:border-[var(--color-primary)] transition-colors shadow-sm">
              <h3 className="font-bold text-xl md:text-2xl mb-3 text-[var(--color-primary)]">
                AI Automation & Vibe Coding
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Building AI-powered automations using n8n and modern vibe coding workflows with tools like Stitch AI, OpenCode, and Claude CoWorker while integrating local files, APIs, and intelligent productivity systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
