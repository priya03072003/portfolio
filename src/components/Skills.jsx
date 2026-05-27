import { Layout, Server, Code2, Cloud, Brain, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: ["React JS", "Redux", "Tailwind CSS v4", "JavaScript"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Django", "PostgreSQL"]
    },
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["JavaScript/TS", "Python"]
    },
    {
      title: "DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Git & GitHub", "Gitlab", "Jenkins", "Sonarcube"]
    },
    {
      title: "Tools",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["N8N", "Figma", "Linux", "Postman", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-color)] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16 md:text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">Structured Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] md:mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-[var(--surface-color)] rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[var(--border-color)] hover:border-[var(--color-primary)] transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[var(--bg-color)] flex items-center justify-center text-[var(--color-primary)] border border-[var(--border-color)]">
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">{category.title}</h3>
              </div>

              <div className="space-y-4 md:space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)]" />
                    <span className="text-sm md:text-base font-semibold text-[var(--text-primary)]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
