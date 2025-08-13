import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import homeBG from '../assets/homeBG.jpg'; // Correct image import

const Home = () => {
    return (
        <div className="pb-16 md:pb-0">
            {/* ----------------------------- Hero Section ----------------------------- */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                {/* Image of church service and a banner  */}
                <div className="hero-background-image" style={{ backgroundImage: `url(${homeBG})` }}></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h1 className="hero-title uppercase">
                        In-person & online services <br /> sundays at 9am
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        "Filled with Holy Spirit, we evangelize, heal the sick and prepare our members for our Lord Jesus Christ’s second coming."
                    </motion.p>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-bible-verse"
                    >
                        
                    </motion.span>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hero-buttons-container"
                    >
                        <Link to="/live-stream" className="hero-button">
                            LIVE STREAM
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* ----------------------------- Connect Cards Section ----------------------------- */}
            <section className="connect-cards-section">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="connect-cards-container"
                >
                    <Link to="/live-stream" className="connect-card">LIVE STREAM</Link>
                    <Link to="/events" className="connect-card">EVENTS</Link>
                    <Link to="/get-connected/prayer-requests" className="connect-card">PRAYER REQUESTS</Link>
                    <Link to="/give" className="connect-card">GIVE</Link>
                </motion.div>
            </section>

            {/* ----------------------------- Our Vision Section ----------------------------- */}
            <section className="vision-section">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Our Vision
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="vision-text"
                >
                     To proclaim the gospel of salvation to the entire world through our words and deeps.

To baptize those who believe  in water in the name of the Father, Son, and Holy Spirit.

To pray for convert and prepare them for Holy Spirit baptism with evidence of speaking in tongues.

To heal the sick in the name of Jesus Christ. To make disciples and equip them for ministry.

To prepare the members for the second coming of our Lord Jesus Christ through teaching, prayer, fasting, education, fellowship, counselling, assisting the needy in society, and performing various works of faith.
                </motion.p>
            </section>

            {/* ----------------------------- Welcome Section ----------------------------- */}
            <section className="welcome-section">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Welcome to AFM in Zimbabwe
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="welcome-text"
                >
                    The Church establishes its foundational beliefs, doctrines, teachings, practices, structures, government, discipline, ministries and departments, functions, activities, this Constitution, and the Church’s rules, regulations, and policies, as well as its very existence, upon the following confession of faith: that the Church and its members shall believe and confess faith in
                </motion.p>
            </section>

           

            {/* ----------------------------- Map Section ----------------------------- */}
            <section className="map-section">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        VISIT US
                    </motion.h2>
                    <div className="map-container">
                        <iframe
                            title="Church Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.657620793953!2d30.978830614906536!3d-17.829222287822894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a54fb269dbbb%3A0x27e70fcd8f3ab9d2!2sApostolic%20Faith%20Mission%20in%20Zimbabwe!5e0!3m2!1sen!2szw!4v1716589984021!5m2!1sen!2szw"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
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