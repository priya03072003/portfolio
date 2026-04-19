import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', role: '', query: '' });

  const handleMailTo = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.query) return;
    const subject = encodeURIComponent(`Portfolio Query from ${formData.name} - ${formData.role}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nRole: ${formData.role}\n\nQuery:\n${formData.query}`);
    window.location.href = `mailto:priyaprakasam45@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', role: '', query: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--bg-color)] relative overflow-hidden">

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-[0.03] pointer-events-none">
        <div className="w-[200%] h-[200%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" data-aos="fade-up">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight">Let's Work Together</h2>
          <div className="w-16 md:w-24 h-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mx-auto mb-6 md:mb-10 rounded-full"></div>
          <p className="text-base md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto font-medium px-4">
            Interested in collaborating, hiring, or have a question? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Left Side: Contact Tiles */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-4 md:gap-6">
            <a href="mailto:priyaprakasam45@gmail.com" className="group flex items-center p-4 md:p-6 bg-[var(--surface-color)] rounded-2xl md:rounded-3xl border border-[var(--border-color)] hover:border-[var(--color-primary)] transition-all duration-300 shadow-sm cursor-none flex-1">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[var(--bg-color)] flex items-center justify-center mr-4 md:mr-6 text-[var(--color-primary)] group-hover:scale-110 shadow-sm border border-[var(--border-color)] transition-transform shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base md:text-lg text-[var(--text-primary)]">Email</h3>
                <p className="text-xs md:text-sm font-medium text-[var(--text-secondary)] truncate">priyaprakasam45@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919095155492" className="group flex items-center p-4 md:p-6 bg-[var(--surface-color)] rounded-2xl md:rounded-3xl border border-[var(--border-color)] hover:border-[var(--color-secondary)] transition-all duration-300 shadow-sm cursor-none flex-1">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[var(--bg-color)] flex items-center justify-center mr-4 md:mr-6 text-[var(--color-secondary)] group-hover:scale-110 shadow-sm border border-[var(--border-color)] transition-transform shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-[var(--text-primary)]">Phone</h3>
                <p className="text-xs md:text-sm font-medium text-[var(--text-secondary)]">+91 9095155492</p>
              </div>
            </a>

            <div className="group flex items-center p-4 md:p-6 bg-[var(--surface-color)] rounded-2xl md:rounded-3xl border border-[var(--border-color)] hover:border-[var(--text-primary)] transition-all duration-300 shadow-sm flex-1">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[var(--bg-color)] flex items-center justify-center mr-4 md:mr-6 text-[var(--text-primary)] group-hover:scale-110 shadow-sm border border-[var(--border-color)] transition-transform shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg text-[var(--text-primary)]">Location</h3>
                <p className="text-xs md:text-sm font-medium text-[var(--text-secondary)]">Erode, TamilNadu</p>
              </div>
            </div>
          </div>

          {/* Right Side: Ask Queries Form */}
          <div className="lg:col-span-3 bg-[var(--surface-color)] border border-[var(--border-color)] rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-xl shadow-[var(--color-primary)]/5">
            <h3 className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)] mb-2 flex items-center gap-3">
              Ask a Query <span className="text-[var(--color-primary)] animate-pulse">_</span>
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 md:mb-8 text-sm font-medium">Send directly to my email client using the form below.</p>

            <form onSubmit={handleMailTo} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--text-primary)] pl-1">Your Name</label>
                  <input
                    type="text" required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all cursor-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--text-primary)] pl-1">Your Role</label>
                  <input
                    type="text"
                    placeholder="Recruiter / Founder"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all cursor-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--text-primary)] pl-1">Your Query</label>
                <textarea
                  required rows="5"
                  placeholder="How can we collaborate on..."
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full resize-none bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all cursor-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 md:py-4 rounded-xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-lg shadow-[var(--color-primary)]/20 cursor-none text-sm md:text-base"
              >
                Send Message via Email <Send className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
