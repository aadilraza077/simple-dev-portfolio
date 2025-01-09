import React, { useState } from "react";
const App = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission (e.g., sending email or saving data)
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };
    const skills = [
        { name: "JavaScript", icon: "💻" },
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟩" },
        { name: "TailwindCSS", icon: "🌊" },
        { name: "MongoDB", icon: "📦" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: ".NET", icon: "🖥️" },
        { name: "SQL", icon: "📊" },
        // Add more skills as needed
    ];
    const projects = [
        {
            title: "Project 1",
            description: "A brief description of Project 1. It involves using React, Node.js, and MongoDB.",
            link: "https://example.com/project1",
        },
        {
            title: "Project 2",
            description: "Project 2 is a full-stack application built with Angular and .NET Core. It allows users to manage tasks.",
            link: "https://example.com/project2",
        },
        {
            title: "Project 3",
            description: "This project is a real-time chat app using WebSockets and React. It's a great example of my full-stack abilities.",
            link: "https://example.com/project3",
        },
        // Add more projects as needed
    ];

    return (
        <>
            <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <a href="#home" className="hover:text-indigo-400">DevPortfolio</a>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-6">
                        <a href="#about" className="hover:text-indigo-400 transition">About</a>
                        <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
                        <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
                        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button id="menu-toggle" aria-label="Open Menu" className="text-xl focus:outline-none">
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div id="mobile-menu" className="hidden md:hidden bg-gray-800">
                    <nav className="flex flex-col space-y-4 p-4">
                        <a href="#about" className="hover:text-indigo-400 transition">About</a>
                        <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
                        <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
                        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
                    </nav>
                </div>
            </header>

            <section id="about" className="bg-gray-800 text-white py-20">
                <div
                    className="container mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-16 px-6">
                    {/* Profile Picture */}
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 md:mb-0">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* About Content */}
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-semibold mb-4">Hello, I'm [Your Name]</h2>
                        <p className="text-lg mb-6">
                            I'm a passionate software developer with experience in building full-stack applications
                            using modern technologies. I specialize in [specific technologies or skills], and I'm always
                            excited to learn new tools and techniques. Let's create something amazing together!
                        </p>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md text-lg font-semibold hover:bg-indigo-700 transition"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>
            <section id="projects" className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-semibold text-center mb-12">My Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projects.map((project, index) => (
                            <div key={index}
                                 className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                <p className="text-lg mb-6">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md text-lg font-semibold hover:bg-indigo-700 transition"
                                >
                                    View Project
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="skills" className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-semibold text-center mb-12">Skills</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index}
                                 className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                                <div className="text-4xl mb-4">{skill.icon}</div>
                                <h3 className="text-2xl font-semibold">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="contact" className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-semibold text-center mb-12">Contact Me</h2>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-lg font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white rounded-md text-lg font-semibold hover:bg-indigo-700 transition"
                        >
                            Send Message
                        </button>

                        {isSubmitted && (
                            <div className="mt-4 text-green-500 text-center">
                                Thank you for your message! I'll get back to you soon.
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </>
    )
}
export default App;