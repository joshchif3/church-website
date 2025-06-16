import React from 'react';
//import visionImage from '../../assets/vision.jpg'; // Replace with actual image path

const Vision = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Our Vision</h1>
      <img src={visionImage} alt="Vision" className="w-full h-64 object-cover rounded-md mb-4" />
      <p className="text-lg leading-7 text-gray-700">
        To proclaim the gospel of salvation to the entire world through our words and deeds.
        <br /><br />
        To baptize those who believe in water in the name of the Father, Son, and Holy Spirit.
        <br /><br />
        To pray for converts and prepare them for Holy Spirit baptism with evidence of speaking in tongues.
        <br /><br />
        To heal the sick in the name of Jesus Christ. To make disciples and equip them for ministry.
        <br /><br />
        To prepare believers for the second coming of our Lord Jesus Christ.
      </p>
    </div>
  );
};

export default Vision;
