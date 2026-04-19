import { Layout, Server, Code2, Cloud, Brain, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "React", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS v4", level: 85 },
        { name: "JavaScript", level: 90 },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 75 },
      ]
    },
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "JavaScript/TS", level: 85 },
        { name: "Python", level: 80 },
        { name: "C / C++", level: 75 },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Figma", level: 90 },
        { name: "Linux", level: 70 },
      ]
    },
    {
      title: "AI & Data Science",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Machine Learning", level: 70 },
        { name: "Data Analysis", level: 75 },
        { name: "OpenCV", level: 65 },
      ]
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
                  <div key={sIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold flex items-center gap-2 text-[var(--text-primary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-secondary)]" /> 
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-[var(--text-secondary)]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[var(--bg-color)] rounded-full h-2.5 border border-[var(--border-color)] overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
