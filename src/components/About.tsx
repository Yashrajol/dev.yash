
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, TypeScript, Tailwind CSS' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe Creative Suite' },
    { name: 'Performance', icon: Rocket, description: 'Optimization & Best Practices' },
    { name: 'Collaboration', icon: Users, description: 'Team Leadership & Communication' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating exceptional digital experiences. 
            With 1 year of experience and a keen eye for design and a deep understanding of modern web technologies, 
            I bring ideas to life through clean, efficient code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Started as a curious developer exploring the endless possibilities of web development. 
                Over the years, I've honed my skills in creating user-centered designs and building 
                scalable applications that make a difference.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in the power of clean code, beautiful design, and meaningful user experiences. 
                Every project is an opportunity to learn something new and push the boundaries of what's possible.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  <skill.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
