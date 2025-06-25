import React from 'react';
import historyBannerBg from '../../assets/history-banner-bg.png';

// Existing images
import upperRoomImage from '../../assets/upperRoomImage.jpeg'; // Ensure this file exists

// New images based on your screenshot layout (PLACEHOLDERS - Update these paths and filenames)
import williamSeymourImage from '../../assets/williamSeymour.jpg'; // Placeholder for William Joseph Seymour's image
import johnLakeImage from '../../assets/johnLake.jpg';         // Placeholder for John Graham Lake's image
import langtonKuparaImage from '../../assets/langtonKupara.jpeg'; // Placeholder for Rev Langton Kupara's image
import revMvengeImage from '../../assets/revMvenge.jpg';       // Placeholder for Rev Dr J Mvenge's image
import revMutemererwaImage from '../../assets/revMutemererwa.png'; // Placeholder for Rev P S Mutemererwa's image
import revManyikaImage from '../../assets/revManyika.png';     // Placeholder for Rev Dr E Manyika's image
import revMadziyireImage from '../../assets/revMadziyire.png'; // Placeholder for Rev Dr A Madziyire's image
import revMadawoImage from '../../assets/revMadawo.png';       // Placeholder for Rev Dr AD Madawo's image

// New images for landmarks (PLACEHOLDERS - Update these paths and filenames)
import rufaroConferenceImage from '../../assets/rufaroConference.png'; // Placeholder for Rufaro Conference Centre image
import livingWatersImage from '../../assets/livingWaters.png';     // Placeholder for Living Waters Theological Seminary image

import '../../styles/AboutStyles/History.css';

const History = () => {
  return (
    <div className="history-page bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

      {/* History Banner Section */}
      <div
        className="history-banner"
        style={{ backgroundImage: `url(${historyBannerBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-left px-4">
          {/* Banner text removed as per previous request */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="history-content container mx-auto px-4 py-12">
        <h3 className="history-section-header">History of Apostolic Faith Mission in Zimbabwe</h3>

        <section className="history-section">
          <h3 className="history-subsection-header">Waves of Holy Spirit Outpouring</h3>
          <div className="history-paragraph-group">
            <p>There are basically three waves of Holy Spirit outpouring with a global impact;</p>
            <h4>The Upper Room in Acts 2:1-15.</h4>
            <p>
              This was the initial major outpouring as prophesied in Joel 2:28, the universal outpouring of the Holy Ghost upon all flesh. This was 50 days after the Pass- over and the resurrection of Jesus Christ. Pentecost simply means a festival celebration after 50 days from Passover, also known as the feast of weeks or harvest (Leviticus 23:15, Deuteronomy 16:16). The birth of the church is the first fruits harvest of the work on Calvary.
            </p>

            {/* Existing Upper Room Image */}
            <img
              src={upperRoomImage}
              alt="Illustration of the Upper Room Outpouring"
              className="upper-room-illustration"
            />

            <h4>The Azusa Street Revival in Los Angeles, California, USA.</h4>
            <p>
              -This was under the leadership of an Afro-American man by the name William Joseph Seymour. He was born in 1870 to Simon and Phyllis Seymour. He was enrolled in Charles Fox Parham’s Bible School where emphasis was on the Holy Spirit through the book of Acts. In 1906, William Joseph Seymour was invited to preach in Los Angeles California. His message about The Holy Spirit and tongues was not accepted resulting in him being locked out of the church. He found refuge in the home of Richard Ausbury on Bonnie Brae Street.
            </p>
            <p>
              The Holy Spirit descended upon the house prayer group on April 9, 1906, with evidence of speaking in tongues. They then moved out to a bigger place, a disused barn at 312 Azusa Street in downtown Los Angeles. This Azusa Street movement became the second major Pentecostal outpouring since the day of Pentecost in Acts 2.
            </p>
            <h4>The Charismatic Movement in 1960.</h4>
            <p>
              -This started led by Catholic priest, spreading mainly among previously non-Pentecostal churches and denominations. Again, the people spoke in tongues.
            </p>
            {/* Image of William Joseph Seymour, based on Screenshot 2025-06-25 170644.png */}
            <img
              src={williamSeymourImage}
              alt="William Joseph Seymour"
              className="history-illustration-small"
            />
            <h4>William Joseph Seymour</h4>
          </div>
        </section>

        <section className="history-section">
          <h3 className="history-subsection-header">John Graham Lake and the Genesis in South Africa</h3>
          <div className="history-paragraph-group">
            {/* Image of John Graham Lake, based on Screenshot 2025-06-25 170644.png */}
            <img
              src={johnLakeImage}
              alt="John Graham Lake"
              className="history-illustration-small"
            />
            <p>
              John Graham Lake. (1870-1935). – He received the Holy Spirit baptism in 1907 under William Joseph Seymour. Prior to that, his terminally ill wife had been miraculously healed under John Alexander Dowie. In 1908, John Graham Lake sold his business with the compulsion to spread the message of the Holy Spirit in Africa. He was accompanied by Thomas Hezmalhalch, arriving aboard a ship in Cape Town, South Africa, on May 14, 1908. (Maxwell, 38). They then proceeded by train to Johannesburg. The team was welcomed by Mrs. Goodenough, who gave them one of her houses to use, as she had been instructed by the Holy Spirit. She went to the train station at the right time to meet royal strangers as she was led by The Spirit. On May 25, 1908, John G Lake preached his first message in a small black church in Doornfontein, then outside Johannesburg. His four-square gospel was:
            </p>
            <ul className="history-list">
              <li>Jesus saves!</li>
              <li>Jesus baptizes with the Holy Spirit.</li>
              <li>Jesus heals.</li>
              <li>Jesus is coming back again!</li>
            </ul>
            <p>
              The Apostolic Faith Mission in Zimbabwe is a product of the evangelism efforts of migrant workers who had left Southern Rhodesia to work in South Africa and had encountered the teachings of John Graham Lake and the Apostolic Faith Mission of South Africa, most notably Zacharias Manamela who preached in the Gobatema area of Gwanda. In 1915, the Apostolic Faith Mission of South Africa deployed WF Dugmore to facilitate the formal registration of the newly developed daughter church with the Southern Rhodesian authorities.
            </p>
            <p>
              One of their first converts was Isaac Chiumbu, nicknamed Kachembere. He was of Malawian origin and he took up leadership of the movement in the then Southern Rhodesia. Some of the migrants spread the message in Katerere in Nyanga area. Prominent converts of Isaac Chiumbu were the famous Gwanzura brothers who were shoemakers in Kadoma (then Gatooma). They were Petros, Johannes (nicknamed Chihari), Zachariah, Samson and Enock. These carried the AFM mantra across Zimbabwe.
            </p>
            <p>
              In 1930, Loudeweck L Kruger was sent from South Africa to help with the establishment and organization of the AFM in Zimbabwe. He established assemblies along the following languages: Shona speaking, English and Afrikaans. Some of the first Shona speaking assemblies were in Masvingo, Kadoma, Mbare, Rusape and Mutare. Because of his popularity in establishing assemblies people began to call the church Kruger’s one (Church yekwa Kruger).
            </p>
          </div>
        </section>

        <section className="history-section">
          <h3 className="history-subsection-header">National Leadership and Key Figures</h3>
          <div className="history-paragraph-group">
            {/* Image for Reverend Langton Kupara, based on Screenshot 2025-06-25 185507.png */}
            <img
              src={langtonKuparaImage}
              alt="Reverend Langton Kupara"
              className="history-illustration-small"
            />
            <p>
              <strong>Reverend Langton Kupara</strong> was the first black man to lead AFM in Zimbabwe at National Level as Superintendent in 1983. He was a brave man who stood out for his faith and many exploits for the Kingdom of Jesus.A man who was well at ease with any age group, infants to senior citizens.
            </p>
            {/* Image for Rev Dr J Mvenge, based on Screenshot 2025-06-25 185507.png */}
            <img
              src={revMvengeImage}
              alt="Rev Dr J Mvenge"
              className="history-illustration-small"
            />
            <p>
              <strong>Rev Dr J Mvenge,</strong> rose through the ranks to become Deputy Superintendent at the end of Reverend Willard Wilson whose term came to an end and in 1987 he became the first President of the church.
            </p>
            {/* Image for Rev P S Mutemererwa, based on Screenshot 2025-06-25 185507.png */}
            <img
              src={revMutemererwaImage}
              alt="Rev P S Mutemererwa"
              className="history-illustration-small"
            />
            <p>
              <strong>Rev P S Mutemererwa,</strong> spearheaded the planting of many assemblies in Masvingo province. His ministry emphasised on evangelism, deliverance, miracle works and faith healing. In short, Rev Mutemererwa was a real Pentecostal father. People who worked with him agree that he was tough and uncompromising. in 1996, he was elected president of the AFM in Zimbabwe for a three year term. In 2000, he was called to pastor Mbare Assembly in Harare.
            </p>
            {/* Image for Rev Dr E Manyika, based on Screenshot 2025-06-25 170727.jpg */}
            <img
              src={revManyikaImage}
              alt="Rev Dr E Manyika"
              className="history-illustration-small"
            />
            <p>
              <strong>Rev Dr E Manyika</strong>
            </p>
            {/* Image for REV Dr A Madziyire, based on Screenshot 2025-06-25 170727.jpg */}
            <img
              src={revMadziyireImage}
              alt="REV Dr A Madziyire President Emeritus"
              className="history-illustration-small"
            />
            <p>
              <strong>REV Dr A Madziyire President Emeritus</strong> is one of the longest serving leaders of the AFM in Zimbabwe having taken over from Dr Manyika. Dr Madziyire rose through the ranks to become provincial secretary, overseer and eventually president of the church.
            </p>
            {/* Image for REV DR AD MADAWO, based on Screenshot 2025-06-25 170727.jpg */}
            <img
              src={revMadawoImage}
              alt="REV DR AD MADAWO"
              className="history-illustration-small"
            />
            <p>
              <strong>REV DR AD MADAWO</strong> the current President of AFM in Zimbabwe was the longest serving Secretary General of the church rising through the ranks. Pastored several assemblies including Nyameni in Marondera, Newlife in Chitungwiza and is presiding Pastor at Shiloh Word Miracle Center in Harare.
            </p>
            <p>Technically speaking, the AFM is not a denomination but is a movement of the Holy Spirit.</p>
          </div>
        </section>

        <section className="history-section">
          <h3 className="history-subsection-header">Key Landmarks of the AFM in Zimbabwe</h3>
          <div className="history-paragraph-group">
            <p>Some landmarks of the AFM include the purchase of a farm in Chatsworth for 60 pounds (about US$75.) in 1949 through missionary Johnson. Of particular interest is the fact that the total amount was raised from among the local peasant members of the AFM.</p>
            <h4>RUFARO CONFERENCE CENTRE CHATSWORTH(GOTEKWA)</h4>
            {/* Image for Rufaro Conference Centre, based on Screenshot 2025-06-25 170727.jpg, Screenshot 2025-06-25 191805.jpg */}
            <img
              src={rufaroConferenceImage}
              alt="Rufaro Conference Centre"
              className="history-illustration-medium"
            />
            <p>
              The farm was named Rufaro Mission, where a school and a conference center were established.
            </p>
            <h4>LIVING WATERS THEOLOGICAL SEMINARY</h4>
            {/* Image for Living Waters Theological Seminary, based on Screenshot 2025-06-25 170727.jpg, Screenshot 2025-06-25 191805.jpg */}
            <img
              src={livingWatersImage}
              alt="Living Waters Theological Seminary"
              className="history-illustration-medium"
            />
            <p>
              The second landmark was the establishment of Living Waters Theological Seminary by Missionary Willard Wilson in February 1974.
            </p>
            <p>
              The establishment of many primary and secondary school all over the country, including early learning centers as well as tertiary education centers, the building of many churches and establishing of assemblies within 5km distance from each other and the training of many pastoral staff, and candidates also add to the movement’s great missionary works.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;