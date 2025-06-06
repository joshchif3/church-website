import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 pb-16 md:pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-display font-bold mb-8 text-center">About AFM Church</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-4">Our History</h2>
            <p className="mb-4">
              Founded in 1955, AFM Church has been a beacon of hope in our community for over six decades. 
              What started as a small gathering in a home has grown into a vibrant congregation serving 
              thousands of members.
            </p>
            <p>
              Through the years, we've remained committed to spreading the gospel and serving our community 
              with love and compassion.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6"
          >
            <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              To lead people into a growing relationship with Jesus Christ through worship, discipleship, 
              and service.
            </p>
            <h3 className="text-xl font-display font-bold mb-2">Core Values</h3>
            <ul className="space-y-2">
              <li>• Biblical Truth</li>
              <li>• Authentic Worship</li>
              <li>• Intentional Discipleship</li>
              <li>• Compassionate Outreach</li>
              <li>• Loving Community</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary-light/10 dark:bg-primary-dark/10 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-display font-bold mb-4 text-center">Our Leadership</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Pastor John Smith", role: "Senior Pastor" },
              { name: "Pastor Sarah Johnson", role: "Associate Pastor" },
              { name: "Deacon Michael Brown", role: "Head Deacon" },
              { name: "Sister Emily Davis", role: "Women's Ministry" },
              { name: "Brother David Wilson", role: "Youth Pastor" },
              { name: "Sister Lisa Miller", role: "Children's Ministry" },
            ].map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 dark:bg-gray-600 mb-3"></div>
                <h3 className="font-bold">{leader.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{leader.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
