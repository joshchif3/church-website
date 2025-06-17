import { motion } from 'framer-motion';
import { FiCreditCard, FiDollarSign, FiMail } from 'react-icons/fi';
// The problematic import for FaBank has been removed

const Payments = () => {
  return (
    <div className="container mx-auto px-4 py-12 pb-16 md:pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-display font-bold mb-8 text-center">Giving & Payments</h1>
        
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-display font-bold mb-4 flex items-center">
            <FiDollarSign className="mr-2" /> Online Giving
          </h2>
          <p className="mb-4">Support the ministry through secure online donations.</p>
          <button className="px-6 py-3 bg-primary-light hover:bg-primary-dark text-white rounded-full flex items-center transition-colors">
            Give Now <FiCreditCard className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-display font-bold mb-3 flex items-center">
              {/* FaBank icon removed here */} Bank Transfer 
            </h3>
            <div className="space-y-2">
              <p><span className="font-semibold">Bank:</span> Faith Community Bank</p>
              <p><span className="font-semibold">Account:</span> AFM Church</p>
              <p><span className="font-semibold">Number:</span> 1234567890</p>
              <p><span className="font-semibold">Branch Code:</span> 123456</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-display font-bold mb-3 flex items-center">
              <FiMail className="mr-2" /> Other Methods
            </h3>
            <ul className="space-y-2">
              <li>• Sunday Offering</li>
              <li>• Mobile Payment (M-Pesa, etc.)</li>
              <li>• Check/Money Order</li>
              <li>• In-Kind Donations</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Payments;