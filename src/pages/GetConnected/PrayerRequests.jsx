import { motion } from 'framer-motion';
import { FiCalendar, FiUsers, FiMessageSquare, FiCoffee } from 'react-icons/fi';

const GetConnected = () => {
  const connectionOptions = [
    {
      title: "Small Groups",
      icon: <FiUsers size={24} />,
      description: "Join a small group for fellowship and Bible study",
      action: "Find a Group"
    },
    {
      title: "New Members Class",
      icon: <FiMessageSquare size={24} />,
      description: "Learn about our church and how to get involved",
      action: "Sign Up"
    },
    {
      title: "Volunteer",
      icon: <FiCoffee size={24} />,
      description: "Serve in one of our many ministry areas",
      action: "Opportunities"
    },
    {
      title: "Events Calendar",
      icon: <FiCalendar size={24} />,
      description: "See upcoming events and mark your calendar",
      action: "View Calendar"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pb-16 md:pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-display font-bold mb-8 text-center">Get Connected</h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">Welcome to AFM Church!</h2>
            <p className="mb-6">
              We're so glad you're interested in connecting with our church family. 
              Here are some ways you can get involved and grow with us.
            </p>
            <button className="px-6 py-3 bg-primary-light hover:bg-primary-dark text-white rounded-full transition-colors">
              I'm New - What's Next?
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {connectionOptions.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark mr-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-display font-bold">{option.title}</h3>
              </div>
              <p className="mb-4">{option.description}</p>
              <button className="text-primary-light dark:text-primary-dark font-semibold hover:underline">
                {option.action} →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GetConnected;