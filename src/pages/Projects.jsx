import { motion } from 'framer-motion';
import { FiHome, FiBook, FiHeart, FiGlobe } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Church Building Fund",
      icon: <FiHome size={24} />,
      description: "Help us expand our worship space to accommodate our growing congregation",
      progress: 65,
      target: "$500,000"
    },
    {
      title: "Bible Distribution",
      icon: <FiBook size={24} />,
      description: "Providing Bibles to new believers and underprivileged communities",
      progress: 40,
      target: "$10,000"
    },
    {
      title: "Community Feeding",
      icon: <FiHeart size={24} />,
      description: "Weekly meals for homeless and low-income families in our area",
      progress: 85,
      target: "$25,000"
    },
    {
      title: "Mission Trip",
      icon: <FiGlobe size={24} />,
      description: "Supporting our team's outreach to rural communities",
      progress: 30,
      target: "$15,000"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pb-16 md:pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-display font-bold mb-8 text-center">Church Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark mr-4">
                    {project.icon}
                  </div>
                  <h2 className="text-2xl font-display font-bold">{project.title}</h2>
                </div>
                <p className="mb-4">{project.description}</p>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress: {project.progress}%</span>
                    <span>Target: {project.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div 
                      className="bg-primary-light dark:bg-primary-dark h-2.5 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-600 px-6 py-3">
                <button className="w-full py-2 bg-primary-light hover:bg-primary-dark text-white rounded-md transition-colors">
                  Support This Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;