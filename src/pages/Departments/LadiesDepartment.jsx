import { motion } from 'framer-motion';
import { FiUsers, FiHeart, FiBook, FiMic, FiCalendar } from 'react-icons/fi';

const Departments = () => {
  const departments = [
    {
      name: "Youth Ministry",
      icon: <FiUsers size={32} />,
      description: "Engaging young people in spiritual growth and fellowship",
      leader: "Bro. David Wilson"
    },
    {
      name: "Women's Fellowship",
      icon: <FiHeart size={32} />,
      description: "Supporting and empowering women in faith",
      leader: "Sis. Emily Davis"
    },
    {
      name: "Children's Ministry",
      icon: <FiBook size={32} />,
      description: "Teaching kids about God in fun, creative ways",
      leader: "Sis. Lisa Miller"
    },
    {
      name: "Worship Team",
      icon: <FiMic size={32} />,
      description: "Leading the congregation in praise and worship",
      leader: "Bro. Mark Johnson"
    },
    {
      name: "Evangelism",
      icon: <FiCalendar size={32} />,
      description: "Reaching out to the community with the gospel",
      leader: "Bro. Samuel Peters"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pb-16 md:pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-display font-bold mb-8 text-center">Church Departments</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark mr-4">
                  {dept.icon}
                </div>
                <h2 className="text-2xl font-display font-bold">{dept.name}</h2>
              </div>
              <p className="mb-4">{dept.description}</p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Leader:</span> {dept.leader}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Departments;