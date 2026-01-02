import React, { useState } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

const projects = [
    {
      title: 'Car Management System',
      tech: 'Node.js, Express.js, React.js, MySQL, Vite',
      type: 'Course Project',
      description:
        'Comprehensive web platform automating car test drives, service management, and inventory across multiple branches.',
      highlights: [
        'RESTful APIs & JWT',
        '500+ daily transactions',
        '25% data redundancy reduction',
        'Real-time booking updates'
      ],
      github: 'https://github.com/dattu04/drive_ease-car_management_system.git'
    },
    {
      title: 'OS Memory Allocator Simulator',
      tech: 'React.js, JavaScript',
      type: 'Course Project',
      description:
        'Interactive educational tool implementing 6 memory allocation algorithms with step-by-step visualization.',
      highlights: [
        '6 allocation algorithms',
        '40% fragmentation reduction',
        'Real-time visualization',
        '100+ test scenarios'
      ],
      github: 'https://github.com/NikhilKottoli/OS-Lab-MiniProject.git'
    },
    {
      title: 'F1 Championship Manager',
      tech: 'C++, OOP',
      type: 'Personal Project',
      description:
        'Console-based Formula 1 Championship simulation system modeling real-world racing entities.',
      highlights: [
        'Full OOP design',
        'Dynamic rankings',
        'Persistent storage',
        'Race simulations'
      ],
      github: 'https://github.com/dattu04/F1-Championship-Manager.git'
    },
    {
      title: 'Dynamic Load Balancing in Computing',
      tech: 'Algorithms, Distributed Systems',
      type: 'Academic Project',
      description:
        'Implementation and analysis of dynamic load balancing techniques to optimize resource utilization and reduce execution time in computing environments.',
      highlights: [
        'Dynamic task allocation',
        'Improved resource utilization',
        'Reduced response time',
        'Scalable approach'
      ],
      github: 'https://github.com/dattu04/DYNAMIC-LOAD-BALANCING-IN-COMPUTING'
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-black"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-800/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            
            <div className="relative z-10 text-center px-4 max-w-4xl">
              <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent">
                Dattatreya Manepalli
              </h1>
              <p className="text-2xl md:text-3xl text-red-400 mb-4 font-semibold">
                Computer Science Engineering Student
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={() => setActiveSection('contact')}
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/50"
                >
                  Get In Touch
                </button>
                <a
                  href="https://github.com/dattu04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </section>
        );

      case 'about':
        return (
          <section className="min-h-screen flex items-center justify-center px-4 py-24">
            <div className="max-w-4xl w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                About Me
                <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-800 mt-4"></div>
              </h2>
              <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-8 backdrop-blur-sm hover:border-red-600/50 transition-all">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
I’m a passionate Computer Science Engineering student at NIT Karnataka, Surathkal, with a strong foundation in full-stack development and systems programming. I enjoy building scalable applications and diving deep into how computer systems work under the hood.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With hands-on experience in modern web technologies, I’m always pushing myself to build better, faster, and more reliable software. My projects range from end-to-end web platforms to educational simulation tools, with a consistent focus on clean design, performance, and user experience.
                </p>
              </div>
            </div>
          </section>
        );

      case 'skills':
        return (
          <section className="min-h-screen flex items-center justify-center px-4 py-24">
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Technical Skills
                <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-800 mt-4"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: 'Programming Languages',
                    content: (
                      <>
                        <p className="mb-2"><span className="text-red-400 font-semibold">Advanced:</span> C/C++</p>
                        <p><span className="text-red-400 font-semibold">Intermediate:</span> JavaScript, Python</p>
                      </>
                    )
                  },
                  {
                    title: 'Web Technologies',
                    content: (
                      <>
                        <p className="mb-2">React.js, Node.js, Express.js, Vite</p>
                        <p>RESTful APIs, JWT Authentication</p>
                      </>
                    )
                  },
                  {
                    title: 'Databases',
                    content: <p>MySQL - Database Design, Query Optimization, Normalization</p>
                  },
                  {
                    title: 'Developer Tools',
                    content: <p>Git/GitHub, VS Code, Postman, Logisim</p>
                  }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-6 backdrop-blur-sm hover:border-red-600/50 hover:transform hover:scale-105 transition-all"
                  >
                    <h3 className="text-xl font-bold text-red-400 mb-4">{skill.title}</h3>
                    <div className="text-gray-300">{skill.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'projects':
        return (
          <section className="min-h-screen px-4 py-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-white">
                Projects
                <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-800 mt-4"></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-6 backdrop-blur-sm hover:border-red-600/50 transition-all flex flex-col"
                  >
                    <span className="text-xs text-red-400 font-semibold uppercase mb-2">
                      {project.type}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-red-400 text-sm mb-3">
                      {project.tech}
                    </p>

                    <p className="text-gray-300 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="bg-red-950/40 rounded px-2 py-1 text-xs text-gray-300 text-center"
                        >
                          {h}
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-center px-4 py-2 border border-red-600 text-red-400 rounded-lg text-sm font-semibold hover:bg-red-600 hover:text-white transition-all"
                    >
                      View on GitHub
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'education':
        return (
          <section className="min-h-screen flex items-center justify-center px-4 py-24">
            <div className="max-w-4xl w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Education
                <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-800 mt-4"></div>
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-8 backdrop-blur-sm hover:border-red-600/50 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    National Institute of Technology Karnataka, Surathkal
                  </h3>
                  <p className="text-red-400 text-lg mb-2">
                    Bachelor of Technology in Computer Science and Engineering
                  </p>
                  <p className="text-gray-400 mb-4">
                    CGPA: 7.54 | Aug 2023 – May 2027 | Mangaluru, Karnataka
                  </p>
                  <p className="text-gray-300">
                    <span className="text-red-400 font-semibold">Relevant Coursework:</span> Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Organization & Architecture, Computer Networks, Object-Oriented Programming, Digital Logic Design
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-8 backdrop-blur-sm hover:border-red-600/50 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Sri Chaitanya Junior Kalasala
                  </h3>
                  <p className="text-red-400 text-lg mb-2">
                    Intermediate (Class XII)
                  </p>
                  <p className="text-gray-400">
                    98.2% | 2021 – 2023 | Hyderabad, Telangana
                  </p>
                </div>
              </div>
            </div>
          </section>
        );

      case 'achievements':
        return (
          <section className="min-h-screen flex items-center justify-center px-4 py-24">
            <div className="max-w-4xl w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Achievements
                <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-800 mt-4"></div>
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'JEE Mains 2023 - All India Rank 1,894',
                    description: 'Secured 99.84 percentile among 1.4 million+ candidates'
                  },
                  {
                    title: 'JEE Advanced 2023 - All India Rank 4,986',
                    description: 'Qualified among 186,500 candidates'
                  },
                  {
                    title: '100 Percentile in Physics - JEE Mains',
                    description: 'Perfect score in Physics section of the national-level examination'
                  }
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-red-950/30 to-black border-l-4 border-red-600 rounded-lg p-6 backdrop-blur-sm hover:bg-red-950/40 transition-all"
                  >
                    <h4 className="text-xl font-bold text-red-400 mb-2">{achievement.title}</h4>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section className="min-h-screen flex items-center justify-center px-4 py-24">
            <div className="max-w-4xl w-full">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Get In Touch
                <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-800 mt-4"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Email', value: 'dattatreyamanepalli@gmail.com', href: 'mailto:dattatreyamanepalli@gmail.com' },
                  { label: 'Phone', value: '+91 9390210401', href: 'tel:+919390210401' },
                  { label: 'GitHub', value: 'github.com/dattu04', href: 'https://github.com/dattu04' },
                  { label: 'LinkedIn', value: 'Connect with me', href: 'https://www.linkedin.com/in/dattatreya04/' }
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-8 text-center backdrop-blur-sm hover:border-red-600/50 hover:transform hover:scale-105 transition-all"
                  >
                    <h4 className="text-red-400 font-bold mb-3 text-xl">{contact.label}</h4>
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-300 hover:text-red-400 transition-colors break-words text-lg"
                    >
                      {contact.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-center space-x-1 py-4 flex-wrap">
            {['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === section
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-red-900/30 hover:text-red-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20">
        {renderSection()}
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/30 py-6 text-center text-gray-400">
        <p>&copy; 2026 Dattatreya Manepalli. All rights reserved.</p>
      </footer>
    </div>
  );
}