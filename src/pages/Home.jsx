import React, { useState, useEffect } from 'react';
import { BiLogoCPlusPlus } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaReact, FaHtml5, FaCss3, FaJsSquare, FaNodeJs, FaPython, FaFigma, FaDatabase } from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import { RiSendPlane2Fill } from 'react-icons/ri';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: new Date().toLocaleDateString()
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };


  return (
    <div className="bg-gray-900 text-gray-200 font-inter ">
      {/* Navbar */}
      <nav className="navbar bg-gray-800 shadow-lg px-4 py-2 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-teal-400">
            &lt;Suraiya / &gt;
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-teal-400 transition duration-300">Home</a>
            <a href="#about" className="hover:text-teal-400 transition duration-300">About</a>
            <a href="#skills" className="hover:text-teal-400 transition duration-300">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition duration-300">Contact Us</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-800 rounded-lg shadow-md">
            <a href="#home" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-700 transition duration-300">Home</a>
            <a href="#about" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-700 transition duration-300">About</a>
            <a href="#skills" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-700 transition duration-300">Skills</a>
            <a href="#projects" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-700 transition duration-300">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-700 transition duration-300">Contact Us</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative hero bg-gray-900 min-h-screen flex items-center justify-center p-4 pb-20">

        <div className="container w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Info Card */}
          <h1 className="lg:col-span-3 flex justify-center text-6xl md:text-8xl font-bold text-teal-400 mb-4 animate-fadeInUp">Developer</h1>
          <div className='lg:col-span-1 flex justify-center items-center'>
            <div style={{ boxShadow: '-4px -4px 2px 0px #12F7D6' }} className=" bg-gray-800 p-6 rounded-2xl shadow-xl border-4 border-white animate-fadeInUp rounded-tl-[160px] rounded-br-[160px] ">
              <div className="flex flex-col items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/85396098?v=4"
                  alt="Suraiya Jahan Bhuiyan Profile"
                  className="rounded-full w-32 h-32 object-cover ring-4 ring-teal-500 mb-4"
                />
                <h3 className="text-2xl text-center font-bold text-white">Suraiya Jahan Bhuiyan</h3>
                <p className="text-teal-400">Full-stack developer</p>
                <div className="divider my-4"></div>
                <ul className="text-gray-300 text-left w-full space-y-2 text-sm">
                  <li className="flex items-center"><FaEnvelope className="mr-2 text-teal-400" size={16} /> suraiya.jahan.bhuiyan.12@gmail.com</li>
                  <li className="flex items-center">
                    <span className="mr-2 text-teal-400">📞</span> +880-1833072997
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-teal-400">💬</span>
                    <a
                      href="https://wa.me/8801833072997"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-400"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li className="flex items-center"><span className="mr-2 text-teal-400">📍</span> Bangladesh</li>
                  <li className="flex items-center"><span className="mr-2 text-teal-400">💼</span> Student</li>
                  <li className="flex items-center"><a href="https://www.suraiya.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 flex items-center"><span className="mr-2 text-teal-400">🌐</span> www.suraiya.com</a></li>
                </ul>
                <div className='w-full flex flex-wrap gap-2 mt-4 ' >
                  <p className="badge badge-lg bg-teal-600 text-white border-none">HTML</p>
                  <p className="badge badge-lg bg-teal-600 text-white border-none">CSS</p>
                  <p className="badge badge-lg bg-teal-600 text-white border-none">JS</p>
                  <p className="badge badge-lg bg-teal-600 text-white border-none">REACT JS</p><br />
                  <p className="badge badge-lg bg-teal-600 text-white border-none">EXPRESS JS</p>
                  <p className="badge badge-lg bg-teal-600 text-white border-none">MONGO DB</p>
                </div>

              </div><button className="btn btn-primary bg-teal-500 hover:bg-teal-600 text-white border-none rounded-full px-6 py-2 mt-6 text-lg transition duration-300 transform hover:scale-105 flex items-center" >
                Download CV
              </button>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="lg:col-span-2 flex flex-col justify-center gap-4 text-left lg:pl-16 relative">

            <div>
              <div className="relative inline-block animate-fadeInUp delay-100">
                <span className=" text-gray-600 text-opacity-50 text-xl font-mono opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>&lt;h1&gt;</span>
                <p className="text-4xl md:text-5xl font-semibold text-white mb-2">Hey</p>
                <p className="text-5xl md:text-6xl font-bold  mb-4 text-white">I'm <span className='text-teal-400'>Suraiya</span>,</p>
                <p className="text-4xl md:text-4.5xl font-semibold text-white mb-6">Full-Stack Developer
                  <span className=" text-gray-600 text-opacity-50 text-xl font-mono opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>&lt;/h1&gt;</span>
                </p>

              </div>
              <div
                className=" text-gray-600 text-opacity-50 text-xl font-mono opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>&lt;/p&gt;</div>

              <p className="text-base text-gray-300 leading-relaxed text-start ml-12  animate-fadeInUp delay-200">
                I help business grow by crafting amazing web experiences. <br /> If you're looking for a developer that likes to get stuff done,
              </p>
              <div className=" text-gray-600 text-opacity-50 text-xl mb-8 font-mono opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>&lt;p/&gt;</div>

              <button className="text-5xl text-teal-500 hover:text-teal-600  border-none rounded-full px-8 py-3  transition duration-300 transform hover:scale-105 flex items-center w-max animate-fadeInUp delay-300">
                Let's Talk
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" className='m-4 bg-[#43454D] rounded-full p-1'>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00007 5.98266C0.999912 5.99253 0.999896 6.00239 1.00002 6.01225V18C1.00002 19.6523 2.34774 21 4.00002 21H20C21.6523 21 23 19.6523 23 18V6.01236C23.0002 6.00242 23.0001 5.99247 23 5.98251C22.9905 4.33822 21.6465 3 20 3H4.00002C2.35352 3 1.00947 4.3383 1.00007 5.98266ZM3.1066 5.55395C3.27198 5.22692 3.61206 5 4.00002 5H20C20.388 5 20.7281 5.22692 20.8934 5.55395L12 11.7793L3.1066 5.55395ZM21 7.92066V18C21 18.5477 20.5477 19 20 19H4.00002C3.45231 19 3.00002 18.5477 3.00002 18V7.92066L11.4266 13.8192C11.7709 14.0603 12.2292 14.0603 12.5735 13.8192L21 7.92066Z" fill="#12F7D6" />
                </svg>
              </button>
            </div>
            {/* Statistics Boxes */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex-col space-y-6 hidden xl:block">
              <div className="bg-gray-800 p-4 rounded-xl text-center shadow-lg border border-teal-500 w-48 h-28 flex flex-col justify-center animate-fadeInUp delay-400">
                <p className="text-5xl font-bold text-teal-400 mb-1">4</p>
                <p className="text-gray-300 text-sm">Programming Language</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-xl text-center shadow-lg border border-teal-500 w-48 h-28 flex flex-col justify-center animate-fadeInUp delay-500">
                <p className="text-5xl font-bold text-teal-400 mb-1">6</p>
                <p className="text-gray-300 text-sm">Development Tools</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-xl text-center shadow-lg border border-teal-500 w-48 h-28 flex flex-col justify-center animate-fadeInUp delay-600">
                <p className="text-5xl font-bold text-teal-400 mb-1">1</p>
                <p className="text-gray-300 text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative  overflow-hidden py-40 bg-gray-950 px-4 ">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('assets/pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
            pointerEvents: "none",
          }}
        ></div>
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center  justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-on-scroll ">
            <h2 className="text-4xl  font-bold text-white mb-6 flex items-center ">
              <span className='border-6 border-teal-400 rounded-tl-[60px] rounded-br-[60px] p-8'> About Me</span>
            </h2>
            <div className='bg-gray-800 p-8 lg:p-16 rounded-4xl text-teal-400'>
              &lt;p&gt;
              <br />
              <br />
              <div className='ml-6'>
                <span className='text-2xl'>Hello!</span>
                <p className='text-gray-300 text-sm my-4'>
                  My name is Suraiya and I specialize in web developement that utilizes <span className='text-teal-400'>HTML, CSS, JS, REACT, EXPRESS, TAILWIND CSS  <span className='text-gray-300'>and </span>MONGO DB </span> etc.</p>
                <p className="text-sm text-gray-300  my-4 ">
                  I am a passionate Full-Stack Developer with expertise in building robust and scalable web applications.
                  My journey in development has equipped me with skills in both front-end and back-end technologies,
                  allowing me to create seamless and engaging user experiences.
                </p>
                <p className="text-sm text-gray-300 my-4 ">
                  I enjoy tackling complex problems and continuously learning new technologies to stay at the forefront
                  of the ever-evolving tech landscape. Let's connect and build something amazing together!
                </p>
              </div>

              &lt;/p&gt;
            </div>

          </div>
          <div className="md:w-1/2 flex justify-center animate-on-scroll">
            <img
              src="assets/my.png"
              alt="About Me"
              className="rounded-lg shadow-lg w-full max-w-md transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative  overflow-hidden bg-gray-900 py-40  px-4">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('assets/skills.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
            pointerEvents: "none",
          }}
        ></div>
        <div className="relative z-10 container mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-4 animate-on-scroll">Skills</h2>
          <p className='text-center mb-12'>I am striving to never stop learning and improving</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <FaReact size={60} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">React</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <FaNodeJs size={60} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">Node.js</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <SiExpress size={60} className="text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">Express.js</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <SiMongodb size={60} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">MongoDB</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <FaHtml5 size={60} className="text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">HTML5</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <FaCss3 size={60} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">CSS3</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <SiTailwindcss size={60} className="text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">Tailwind CSS</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <FaJsSquare size={60} className="text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">JavaScript</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <FaPython size={60} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">Python</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <FaDatabase size={60} className="text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">SQL</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <FaC size={60} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">C programming</h3>
            </div>
            <div className="skill-card p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-on-scroll">
              <BiLogoCPlusPlus size={60} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">C++ programming</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-40 bg-[#1A1E23] px-4">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('assets/projects.png')",
            opacity: 0.3,
            pointerEvents: "none",
          }}
        ></div>
        <div className="relative z-10 container mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-12 animate-on-scroll">My Projects</h2>
          <div className=" flex flex-col gap-16">
            {/* project 1 */}
            <div className="card  bg-gray-800 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 animate-on-scroll">
              <div className="w-full h-full bg-red-100">
                <div className="w-full h-[350px]  bg-white">
                  <div className="h-[350px]">
                    <iframe
                      src="https://hobby-hub-f64a3.web.app/"
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="card-body p-6 ">
                <h3 className="card-title text-2xl font-semibold text-white mb-2">HobbyHubs</h3>
                <p className="text-gray-300 mb-4 text-start">HobbyHubs is a community-driven platform that allows users to discover, join, or create local hobby groups. Whether it’s hiking, painting, gaming, or reading — HobbyHubs brings people together through shared interests.
                  <p className='text-teal-400 text-sm mt-2'>
                    <strong className='text-gray-300'>Frontend: </strong>

                    React,
                    Tailwind CSS + DaisyUI,
                    React Router,
                    Firebase Auth,
                    firebase
                    <br />
                    <strong className='text-gray-300'>Backend: </strong>
                    Node.js,
                    Express.js,
                    MongoDB Atlas,

                  </p>
                </p>
                <div className="card-actions justify-end space-x-4">
                  <a href='https://hobby-hub-f64a3.web.app/' className="btn btn-sm btn-outline btn-info border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href='https://github.com/suraiya-jahan-bhuiyan-sraboni/hobby-hub-client' className="btn btn-sm btn-outline btn-info border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* project 2 */}
            <div className="card  bg-gray-800 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 animate-on-scroll">
              <div className="w-full h-full bg-red-100">
                <div className="w-full h-[350px]  bg-white">
                  <div className="h-[350px]">
                    <iframe
                      src="https://beauty-service-e3e8a.web.app/"
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="card-body p-6 ">
                <h3 className="card-title text-2xl font-semibold text-white mb-2">BeautyHub</h3>
                <p className="text-gray-300 mb-4 text-start">
                  BeautyHub is a full-stack service-sharing web application where users
                  can add their own beauty services, explore others’ services, book appointments,
                  and manage bookings through a personalized dashboard. Built with React, Firebase,
                  MongoDB, and Express.js, the project showcases real-time user interaction,
                  secure authentication, and dynamic service management.

                  <p className='text-teal-400 text-sm mt-2'>
                    <strong className='text-gray-300'>Frontend: </strong>

                    React,
                    Tailwind CSS + DaisyUI,
                    React Router,
                    Firebase Auth,
                    firebase
                    <br />
                    <strong className='text-gray-300'>Backend: </strong>
                    Node.js,
                    Express.js,
                    MongoDB Atlas,
                    firebase-admin-sdk

                  </p>
                </p>
                <div className="card-actions justify-end space-x-4">
                  <a href='https://beauty-service-e3e8a.web.app/' className="btn btn-sm btn-outline btn-info border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href='https://github.com/suraiya-jahan-bhuiyan-sraboni/beauty-hub-client' className="btn btn-sm btn-outline btn-info border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-900 px-4">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center mb-8 animate-fadeInUp">
            <div className="w-4 h-4 rounded-full bg-teal-500 mb-2"></div>
            <div className="w-0.5 h-16 bg-teal-500"></div>
          </div>
          <h2 className="text-4xl font-bold text-teal-400 mb-4 animate-fadeInUp">Contact</h2>
          <p className="text-lg text-gray-300 mb-12 animate-fadeInUp delay-100">
            I'm currently available for freelance work
          </p>

          <button className="btn btn-outline border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white rounded-full px-8 py-3 text-lg mb-12 transition duration-300 transform hover:scale-105 animate-fadeInUp delay-200">
            Send Me A Message
          </button>

          <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-control animate-fadeInUp delay-300">
                <label htmlFor="name" className="label">
                  <span className="label-text text-gray-400">Your name *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered pl-4 w-full bg-gray-800 border-b-2 border-teal-500 focus:outline-none focus:border-teal-400 rounded-none text-white px-0 pb-2 pt-1"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control animate-fadeInUp delay-400">
                <label htmlFor="email" className="label">
                  <span className="label-text text-gray-400">Your email *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input  pl-4  input-bordered w-full bg-gray-800 border-b-2 border-teal-500 focus:outline-none focus:border-teal-400 rounded-none text-white px-0 pb-2 pt-1"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-control animate-fadeInUp delay-500">
              <label htmlFor="message" className="label">
                <span className="label-text text-gray-400">Your message *</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your text"
                className="textarea  pl-4 pt-4 textarea-bordered w-full bg-gray-800 border-b-2 border-teal-500 focus:outline-none focus:border-teal-400 rounded-none text-white px-0 pb-2  h-24"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary bg-teal-500 hover:bg-teal-600 text-white border-none rounded-full px-8 py-3 text-lg mt-8 transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto animate-fadeInUp delay-600">
              Send Message <RiSendPlane2Fill className="ml-3" />
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-950 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-12 animate-on-scroll">Get In Touch</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <a
              href="https://github.com/suraiya-jahan-bhuiyan-sraboni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition duration-300 transform hover:scale-105 animate-on-scroll"
            >
              <FaGithub size={40} />
              <span className="text-xl">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/suraiya-jahan-bhuiyan-sraboni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition duration-300 transform hover:scale-105 animate-on-scroll"
            >
              <FaLinkedin size={40} />
              <span className="text-xl">LinkedIn</span>
            </a>
            <a
              href="mailto:suraiya.jahan.bhuiyan.12@gmail.com"
              className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition duration-300 transform hover:scale-105 animate-on-scroll"
            >
              <FaEnvelope size={40} />
              <span className="text-xl">Email</span>
            </a>
          </div>
          <p className="mt-16 text-gray-400 text-lg animate-on-scroll">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Suraiya. All rights reserved.</p>
      </footer>


    </div>
  )
}

export default Home