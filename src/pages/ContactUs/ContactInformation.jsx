import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 pb-16 md:pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-display font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6"
          >
            <h2 className="text-2xl font-display font-bold mb-4">Get In Touch</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-600" 
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-600" 
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-600" 
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 bg-primary-light hover:bg-primary-dark text-white rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-display font-bold mb-4 flex items-center">
                <FiMapPin className="mr-2" /> Our Location
              </h3>
              <p className="mb-4">123 Faith Avenue, Spiritual City, SC 12345</p>
              <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-md"></div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-display font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <FiPhone className="mr-2" /> (123) 456-7890
                </p>
                <p className="flex items-center">
                  <FiMail className="mr-2" /> info@afmchurch.org
                </p>
                <p className="flex items-center">
                  <FiClock className="mr-2" /> Sunday Services: 9:00 AM & 11:00 AM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;