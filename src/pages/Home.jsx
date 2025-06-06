import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="pb-16 md:pb-0">
        <br />
       
        
        

      {/* ----------------------------- Hero Section ----------------------------- */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <img 
          src="/images/church.png" 
          alt="Church" 
          className="hero-image object-cover w-full h-full"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title uppercase">
            WELCOME TO APOSTOLIC FAITH MISSION IN ZIMBABWE
          </h1>
        </motion.div>
      </section>

      {/* ----------------------------- Belief Section ----------------------------- */}
      <section className="belief-section">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="belief-title"
        >
          Our Belief
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="belief-text"
        >
          The Church establishes its foundational beliefs, doctrines, teachings, practices,
          structures, government, discipline, ministries and departments, functions, activities,
          this Constitution, and the Church’s rules, regulations, and policies, as well as its
          very existence, upon the following confession of faith: that the Church and its members
          shall believe and confess faith in...
        </motion.p>
      </section>

      {/* ---------------------- Weekly Message Video Section ---------------------- */}
      <section className="weekly-message-section">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            THIS WEEK'S MESSAGE
          </motion.h2>

          <div className="video-wrapper rounded-xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/ZH-Tj7Nnfak?si=K9S8xLs_vUj8QaF0" 
                title="This Week's Message"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- Events Section ----------------------------- */}
      <section className="events-section py-12">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title text-3xl font-semibold mb-8 text-center"
          >
            Upcoming Events
          </motion.h2>

          {/* Future event content goes here */}
        </div>
      </section>

      {/* ----------------------------- Map Section ----------------------------- */}
<section className="map-section py-12">
  <div className="container mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="section-title text-3xl font-semibold mb-6 text-center"
    >
      VISIT US
    </motion.h2>
    <div className="map-container rounded-xl overflow-hidden shadow-2xl">
      <iframe
        title="Church Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.657620793953!2d30.978830614906536!3d-17.829222287822894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a54fb269dbbb%3A0x27e70fcd8f3ab9d2!2sApostolic%20Faith%20Mission%20in%20Zimbabwe!5e0!3m2!1sen!2szw!4v1716589984021!5m2!1sen!2szw"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[450px] border-none"
      ></iframe>
    </div>
  </div>
</section>
<br />
<br />

    </div>
  );
};

export default Home;
