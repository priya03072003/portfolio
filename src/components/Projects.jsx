import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, ChevronRight, ChevronLeft, Image as ImageIcon, Video } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const carouselRef = useRef(null);
  const scrollLeft = () => { if (carouselRef.current) carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' }); };
  const scrollRight = () => { if (carouselRef.current) carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' }); };
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, type: "spring" }} className="group flex flex-col bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--color-primary)] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all h-full z-10">
      {/* Responsive Media Carousel */}
      <div className="relative w-full h-64 bg-[var(--border-color)] overflow-hidden group-hover:brightness-110 transition-all">
        {/* Manual Scroll Controls (Desktop Friendly) */}
        {project.media.length > 1 && (
          <>
            <button onClick={scrollLeft} className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-[var(--bg-color)]/70 backdrop-blur-md rounded-full flex items-center justify-center text-[var(--text-primary)] shadow-lg border border-[var(--border-color)] hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-none opacity-0 group-hover:opacity-100"> <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollRight} className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-[var(--bg-color)]/70 backdrop-blur-md rounded-full flex items-center justify-center text-[var(--text-primary)] shadow-lg border border-[var(--border-color)] hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-none opacity-0 group-hover:opacity-100"><ChevronRight className="w-6 h-6" /></button>
          </>
        )}
        {/* Scroll Container */}
        <div ref={carouselRef} className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scroll-bar scroll-smooth">
          {project.media.map((mediaItem, mIdx) => (
            <div key={mIdx} className="w-full h-full flex-shrink-0 snap-center relative">
              {mediaItem.type === 'image' ? (
                <img src={mediaItem.url} alt={`${project.title} - ${mIdx}`} loading="lazy" className="w-full h-full object-cover" />
              ) : (
                <video src={mediaItem.url} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              )}
              <div className="absolute top-4 left-4 bg-[var(--bg-color)]/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-[var(--text-primary)] text-xs font-bold border border-[var(--border-color)] z-20 shadow-sm pointer-events-none">{mediaItem.type === 'image' ? <ImageIcon className="w-3 h-3" /> : <Video className="w-3 h-3" />} {mIdx + 1}/{project.media.length}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Content Panel */}
      <div className="p-8 flex flex-col flex-grow relative">
        <h3 className="text-2xl font-extrabold text-[var(--color-primary)] mb-4 group-hover:text-[var(--color-secondary)] transition-colors">{project.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed font-medium flex-grow">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-primary)]">{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-color)]">
          <a href={project.link} target="_blank" rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center py-3 rounded-2xl text-sm font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-lg hover:opacity-90 hover:scale-[1.02] transition-all cursor-none">View Live <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer"
            className="w-12 h-12 inline-flex items-center justify-center rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all hover:scale-[1.02] cursor-none"><Code className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Fullstack', 'DevOps', 'others'];
  const projects = [
    {
      id: 1,
      title: "The Process – Appointment & Visitor Pass Management System",
      category: "Fullstack",
      desc: "A scalable, multi-tenant, and customizable Visitor Pass Management System developed using React.js, Django REST Framework, and PostgreSQL. The platform is designed to streamline visitor registration, secure check-ins/check-outs, and digital pass generation for organizations of all sizes.The system supports role-based access control with dedicated dashboards for Main Admins, Admins, and Receptionists, enabling efficient business management and visitor handling. Built with a white-label architecture, the platform allows multiple businesses to operate independently with their own branding, themes, and configurations.",
      link: "https://timechat.theprocess.in/",
      github: "",
      tags: ["React", "Redux Toolkit", "PostgreSQL", "Tailwind", "Django"],
      media: [
        { type: 'image', url: '/pass1.png' },
        { type: 'image', url: '/pass2.png' },
        { type: 'image', url: '/pass3.png' }
      ]
    },
    {
      id: 2,
      title: "Donut UI - Interactive Design Prototype",
      category: "others",
      desc: "A modern and visually engaging UI/UX prototype designed in Figma, focused on delivering an interactive and immersive user experience through creative layouts, smooth animations, and clean visual aesthetics. The project demonstrates advanced prototyping techniques, responsive interface concepts, and modern design principles suitable for web and mobile applications.\n\nThe prototype features dynamic transitions, micro-interactions, custom typography styling, and component-based design systems to create a polished and user-friendly interface. Special attention was given to color balance, spacing, usability, and motion design to enhance user engagement and navigation flow.",
      link: "https://www.figma.com/proto/BcvF8nQkfzBtGhecqPjtdG/Donut",
      github: "",
      tags: ["Figma", "UI/UX", "Prototyping", "Animation", "Responsive Design", "Interaction Design", "Creative UI"],
      media: [
        { type: 'image', url: '/donut1.png' },
        { type: 'image', url: '/donut2.png' },
        { type: 'image', url: '/donut.png' }
      ]
    },
    {
      id: 3,
      title: "Gold Bullion Market Analytics Platform",
      category: "Full Stack",
      desc: "Real-time bullion trading and portfolio analytics platform for monitoring live gold and silver market prices, comparing rates across multiple bullion sites, tracking holdings, and analyzing profit/loss performance through interactive dashboards and charts.",
      link: "http://www.shivamtraders.online/",
      github: "#",
      tags: ["React", "Redux Toolkit", "Django", "REST API"],
      media: [
        { type: 'image', url: '/gold1.png' },
        { type: 'image', url: '/gold2.png' },
        { type: 'image', url: '/gold3.png' },
      ]
    },
    {
      id: 4,
      title: "Crop Disease Vision API",
      category: "AI",
      desc: "Machine learning pipeline to classify crop diseases via CNNs. Extracted data points served through Flask.",
      link: "#",
      github: "#",
      tags: ["Python", "TensorFlow", "Flask", "OpenCV"],
      media: [
        { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { type: 'image', url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80' }
      ]
    }
  ];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.category === activeFilter); return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-color)] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] md:mx-auto rounded-full mb-12"></div>
          {/* Framer Motion Layout Filters */}
          <div className="flex flex-wrap items-center justify-start md:justify-center gap-4 bg-[var(--surface-color)] p-2 rounded-[2rem] border border-[var(--border-color)] w-max mx-auto overflow-hidden shadow-sm">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)} className="relative px-6 py-2 text-sm font-bold rounded-full transition-colors cursor-none" style={{ color: activeFilter === cat ? 'white' : 'var(--text-secondary)' }}>
                {activeFilter === cat && (
                  <motion.div layoutId="active-filter" className="absolute inset-0 bg-[var(--color-primary)] rounded-full -z-10 shadow-md" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Projects Grid with AnimatePresence */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (<ProjectCard key={project.id} project={project} />))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-[var(--surface-color)] rounded-3xl border border-[var(--border-color)]">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">No projects found.</h3>
            <p className="text-[var(--text-secondary)]">Try selecting a different category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
