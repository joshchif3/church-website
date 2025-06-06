import { motion } from 'framer-motion';
import { FiImage } from 'react-icons/fi';

const Gallery = () => {
  const galleryItems = [
    { id: 1, category: 'Service', description: 'Sunday worship service' },
    { id: 2, category: 'Events', description: 'Annual church picnic' },
    { id: 3, category: 'Baptism', description: 'Baptism ceremony' },
    { id: 4, category: 'Service', description: 'Choir performance' },
    { id: 5, category: 'Outreach', description: 'Community feeding program' },
    { id: 6, category: 'Events', description: 'Christmas celebration' },
    { id: 7, category: 'Baptism', description: 'New members baptism' },
    { id: 8, category: 'Outreach', description: 'Mission trip' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 pb-16 md:pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-display font-bold mb-8 text-center">Church Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <FiImage className="w-12 h-12 text-gray-400" />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white font-bold">{item.category}</h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;