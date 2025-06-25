import React from 'react';
import '../../styles/AboutStyles/ConfessionOfFaith.css'; // Import the new CSS file

const ConfessionOfFaith = () => {
  return (
    <div className="confession-of-faith-page">
      <div className="confession-content">
        <h1 className="confession-title">CONFESSION OF FAITH</h1>
        <p className="confession-intro">
          The Church makes the following confession of faith upon which all its beliefs, doctrines, teachings, practices, structures, government, discipline, ministries and departments, functions, activities, this Constitution and the Church’s rules, regulations, and policies, and its existence shall be founded, based, and established, namely that the Church and its members shall believe and confess faith in:
        </p>
        <ul className="confession-list">
          <li>
            The one true Triune God, God the Father, Son, and Holy Spirit, three persons each with peculiar attributes, yet in absolute and perfect unity.
          </li>
          <li>
            The authority of the Holy Scripture, otherwise referred to as the Canon, comprising 39 books of the Old Testament and 27 books of the New Testament as listed by one of the Church Fathers, Athanasius in 367 AD and as translated into the various languages of every nation, as the divinely inspired Word of God, given to us as the complete rule of faith and practice.
          </li>
          <li>
            The spoken Word of God as may be given through prophecy, to be believed and obeyed.
          </li>
          <li>
            The infallible rule of interpretation of Scripture, namely that the Scripture itself is the supreme judge by which all controversies of religion are to be determined, and all decrees of councils, opinions of ancient writers, doctrines of men, and spirits, are to be examined.
          </li>
          <li>
            The fallen nature and depravity of man by reason of which he is unable of himself to please God.
          </li>
          <li>
            The elect purpose and grace of God, whereby He, through the sacrificial death, resurrection, and ascension of His Son, Jesus Christ, provided for man a means of Justification, Regeneration, and Sanctification, which blessings are granted upon a person’s repentance and faith, with works that beft repentance being a product of man’s justification.
          </li>
          <li>
            The Church being the Body of Christ, and the fellowship of saints, governed by Christ, the Head of His Church, through His Word and the Scriptural Ministries.
          </li>
          <li>
            The Christian Sacraments (ordinances) of Water Baptism through triune immersion and the Lord’s Supper.
          </li>
          <li>
            The Baptism in the Holy Spirit and the evidence thereof, including the evidence of speaking in tongues, and the manifestations of His Fruit, Gifts, and Graces.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ConfessionOfFaith;