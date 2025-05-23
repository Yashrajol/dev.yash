
import { Code, Award, Briefcase, GraduationCap } from 'lucide-react';

const Intro = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hello, I'm Yash Rajole
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate web developer with 1 year of experience creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 mx-auto">
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Web Developer</h3>
            <p className="text-gray-400 text-center">
              Specialized in modern frontend frameworks and responsive design
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 mx-auto">
              <Briefcase className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Professional</h3>
            <p className="text-gray-400 text-center">
              Strong focus on clean code, best practices, and performance
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 mx-auto">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Continuous Learner</h3>
            <p className="text-gray-400 text-center">
              Always exploring new technologies and improving my skills
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 mx-auto">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Result-Oriented</h3>
            <p className="text-gray-400 text-center">
              Focused on delivering high-quality solutions that meet client needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
