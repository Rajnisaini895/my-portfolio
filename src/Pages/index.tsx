import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Menu,
  X,
  Download,
} from 'lucide-react';
import DarkModeToggle from '../DarkModeToggle';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Robust scroll handler for all devices
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const isMobile = window.innerWidth <= 768;
        const yOffset = isMobile ? -140 : -80;
        requestAnimationFrame(() => {
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          setTimeout(() => {
            const y2 = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y2, behavior: 'smooth' });
          }, 250);
        });
      }
    }, 300);
  };

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'React.js', 'Next.js'],
    backend: ['Node.js', 'Express.js', 'TypeScript', 'RESTful APIs'],
    database: ['MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub', 'Postman', 'Visual Studio Code'],
    concepts: ['DSA (C++)', 'OOP', 'DBMS', 'Operating systems', 'Computer networks'],
  };

  const projects = [
    {
      title: 'Ethereal Threads',
      date: 'April 2025',
      description:
        'A MERN-based e-commerce platform for eco-friendly handmade jewelry. Features include shopping cart, secure authentication, user feedback system, admin panel, and comprehensive order management.',
      tech: ['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'MongoDB', 'Express.js'],
      features: [
        'Cart Management',
        'Secure Login/Register',
        'Feedback System',
        'Admin Panel',
        'Order Management',
      ],
      image: '/images/ecom1.png',
    },
    {
      title: 'Sign-In/Sign-Up Page',
      date: 'December 2023',
      description:
        'Responsive and accessible authentication interface built with modern CSS frameworks, focusing on user experience and accessibility standards.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      features: ['Responsive Design', 'Accessibility', 'Form Validation', 'Modern UI'],
    },
  ];

  const achievements = [
    'Microsoft INNOVATE Hackathon',
    'Bennett University Hackathon',
    'Google Digital Marketing Certificate',
    'HackerRank Python (Basic)',
    'Web Scraping with Node.js Certificate',
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering (Full-Stack Specialization)',
      institution: 'Bennett University',
      period: '2023 - 2027',
      status: 'In Progress',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-60 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-blue-100 backdrop-blur-md border-b border-gray-300 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
          <div className="flex items-center justify-between h-20">
            <div className="text-3xl hover:text-blue-600 font-bold text-gray-500 animate-slideIn">
              Rajni Saini
            </div>
            <div className="flex-1 text-xl hidden md:flex justify-end space-x-5 mr-10">
              {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Education', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-600 hover:text-purple-400 transition-colors duration-10 font-medium"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="text-gray-600 hover:text-purple-400 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
            <div className="ml-4 hidden md:block">
              <DarkModeToggle />
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-100 border-t border-gray-300">
            <div className="flex flex-col space-y-4 p-4">
              {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Education', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-600 hover:text-purple-400 transition-colors duration-10 font-medium text-left"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>
      {/* Home Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <img
              src="/images/Rajni-Saini_img.jpeg"
              alt="Rajni Saini"
              className="w-32 h-32 rounded-full mx-auto object-cover shadow-md bg-gradient-to-r from-blue-200 to-purple-200 dark:border-blue-300 transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-500 mb-4">
              Hi, I'm <span className="text-blue-600">Rajni Saini</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
              Frontend Developer | MERN Stack Enthusiast | Computer Science Undergraduate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-300 transition-colors duration-200"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-4 border-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-300 hover:text-white dark:text-white transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
            {/* Resume Download */}
            <div className="mt-8 flex justify-center">
              <a
                href="/RAJNI_SAINI_main_resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 pt-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto p-8 rounded-xl bg-white dark:bg-gray-800"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto ">
            <div className="text-lg text-gray-700 dark:text-gray-300  leading-relaxed space-y-6">
              <p>
                I'm a passionate 3rd-year Computer Science Engineering student at Bennett University, specializing in Full-Stack Development.
                My journey in technology is driven by a deep fascination with building scalable and interactive web applications that solve real-world problems.
              </p>
              <p>
                Currently pursuing my B.Tech degree with a focus on modern web technologies, I've developed expertise in the MERN stack
                and enjoy creating seamless user experiences through thoughtful frontend design and robust backend architecture.
              </p>
              <p>
                My academic background in computer science fundamentals, combined with hands-on project experience,
                has equipped me with a strong foundation in data structures, algorithms, and software engineering principles.
                I'm always eager to learn new technologies and contribute to innovative projects that make a positive impact.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-gray-300 to-blue-200 dark:from-gray-900 dark:to-gray-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Backend */}
            <div className="bg-gradient-to-br from-gray-300 to-blue-200 dark:from-gray-900 dark:to-gray-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Database */}
            <div className="bg-gradient-to-br from-gray-300 to-blue-200 dark:from-gray-900 dark:to-gray-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span key={skill} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Tools */}
            <div className="bg-gradient-to-br from-gray-300 to-blue-200 dark:from-gray-900 dark:to-gray-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* CS Concepts */}
            <div className="bg-gradient-to-br from-gray-300 to-blue-200 dark:from-gray-900 dark:to-gray-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">CS Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((skill) => (
                  <span key={skill} className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300 ">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 ">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-300 to-blue-200 dark:from-gray-900 dark:to-gray-600 p-8  rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-4 ">
                {/* Project Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-45 object-cover rounded-lg mb-8"
                  />
                )}
                <div className="flex items-center justify-between mb-4 ">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1 rounded-full ">{project.date}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Achievements & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-300 to-blue-200 dark:from-gray-900 dark:to-gray-600 p-6 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 hover:bg-blue-200 hover:-translate-y-5 dark:hover:bg-gray-700">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{achievement}</h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Education Section */}
      <section
        id="education"
        className="scroll-mt-32 pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Education</h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-gray-700"></div>
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline bullet */}
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-2 ml-2 z-10">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
                {/* Education card */}
                <div className="ml-8 bg-gradient-to-br from-gray-300 to-blue-200 dark:from-gray-900 dark:to-gray-600 p-6 rounded-xl flex-1 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">{edu.institution}</p>
                  <div className="flex items-center justify-between flex-wrap text-sm">
                    <span className="text-gray-600 dark:text-gray-300">{edu.period}</span>
                    {edu.status && (
                      <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-300 to-blue-200 dark:from-gray-900 dark:to-gray-600 p-8 rounded-xl shadow-lg hover:shadow-xl  duration-200">
              <p className="text-lg text-gray-600 text-center mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="mailto:rajnisaini59641@gmail.com"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">rajnisaini59641@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+918950898584"
                  className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
                >
                  <Phone className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 8950898584</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/rajni-saini-6724711a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <p className="text-gray-600">Connect with me</p>
                  </div>
                </a>
                <a
                  href="https://github.com/RajniSaini895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  <Github className="w-6 h-6 text-gray-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">GitHub</p>
                    <p className="text-gray-600">View my repositories</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            ©️ 2024 Rajni Saini. Built with React.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;