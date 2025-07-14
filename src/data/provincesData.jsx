// src/data/provincesData.js

// Import paths for overseer images.
// YOU MUST ENSURE THESE IMAGE FILES EXIST IN YOUR src/assets/leaders/ DIRECTORY
// with the exact names specified.
import revMatambanadzoImage from '../assets/leaders/matambanadzo.jpg';
import revMaereseraImage from '../assets/leaders/maeresera.jpg';
import revRuzvidzoImage from '../assets/leaders/ruzvidzo.jpg';
import revNdlovuImage from '../assets/leaders/ndlovu.jpg';
import revJinjikaImage from '../assets/leaders/jinjika.jpg';
import revPMagejoImage from '../assets/leaders/magejo.jpg';
import revPMlauziImage from '../assets/leaders/moyo.jpg'; // Assuming 'moyo.jpg' is for Rev P. Mlauzi from Mat South
import drWMasinireImage from '../assets/leaders/msinire.jpg'; // Corrected filename to 'msinire.jpg'
import revMoyoManicalandNorthImage from '../assets/leaders/Secondmoyoo.jpg'; // Using 'Secondmoyoo.jpg' for Manicaland North Rev Moyo
import revJBunzaImage from '../assets/leaders/j-bunza.jpg'; // Corrected filename to 'j-bunza.jpg'
import revCharukwaImage from '../assets/leaders/charukwa.jpg';
import revNehandaImage from '../assets/leaders/nehanda.jpg';
// No import for 'overseer_k_kawonde.jpg' as Bulawayo West should not have a picture.
import revZvavaheraImage from '../assets/leaders/zvavahera.jpg';


const provincesData = [
  {
    id: 'masvingo-province',
    name: 'Masvingo Province',
    overseer: 'Rev E Matambanadzo',
    overseerImage: revMatambanadzoImage,
    bio: [
      'Born 6 July 1970. Accepted Jesus Christ 1984 and was Baptized 1985.',
      'During 1991-92, he walked with the late former President of AFM Rev S Mutemererwa.',
      'Married on 30 August 1997.',
      'From December 11, 1997, to 2003, he joined the Gospel Out-Reach led by Evangelist H Wendland.',
      'Enrolled with Living Waters Bible College from 2003 – 2005.',
      'Has been pastoring in the province since January 2006.',
      'Held previous Provincial positions in the committee: 2015 – 2018 Provincial Secretary, 2012 – 2015 Provincial Committee Member, 2009 – 2012 Provincial Evangelist.'
    ],
    about: [
      'To the north, the province borders Chivhu Province, to the east Manicaland Provinces, to the west there is Mid East Province that takes part of Chivi District, to the South there is Lowveld province which takes up the greater part of Zaka District, part of Bikita and Chivi districts.',
      'In Gutu there are 12 assemblies, Zaka 1 Assembly bordering Lowveld Province, Bikita 3 Assemblies, Masvingo Urban 10 Assemblies, Masvingo Rural 9 Assemblies, Chivi 5 Assemblies.',
      'The province is highly rural though it has major growth points like Mashava Mine, Chivi, Mupandawana, Nemamwa, and Nyika.',
      'Assemblies List and their Locations are available for this province.'
    ],
  },
  {
    id: 'chitungwiza-east-province',
    name: 'Chitungwiza East Province',
    overseer: 'Rev Maeresera',
    overseerImage: revMaereseraImage,
    bio: [], // No specific bio provided in the text, keeping it empty for now
    about: [
      'The Province covers the eastern part of the Chitungwiza Municipality which includes Seke Unit A to Unit P, Mayambara communal lands, the whole of Seke Communal Lands into parts of Chihota Communal Lands and resettlements.',
      'Our prime objective is to be a united Province, working as a team towards the spiritual, numerical, financial, physical/structural and developmental growth of the AFM in Zimbabwe in our Province, and Assemblies and also as individuals and families.',
      'The Province came into being in March 2009 when Mashonaland East Province was split as part of the vision of the AFM in Zimbabwe National Executive church expansion.',
      'The province currently has 25 Assemblies, 19 localized and 6 centralized assemblies with 28 Pastors. Adding the assembly membership statistics, Chitungwiza East Province has a membership of about 10000 members+/-.',
    ],
  },
  {
    id: 'mashonaland-west-province',
    name: 'Mashonaland West Province',
    overseer: 'Rev Ruzvidzo',
    overseerImage: revRuzvidzoImage,
    bio: [], // No specific bio provided in the text
    about: [
      'The province stretches from Chikuti River in the eastern part of Karoi to Chirundu boarder post and Kariba in the West.',
      'It covers Hurungwe and Nyaminyami districts, which is Siakobvu, Bumi Hills and the fishing camps along the Zambezi River.',
      'It also covers Marongora and Mana Pools national parks, Karoi town, Magunje growth point and Kariba town including all the communal areas.',
      'The province was born in September 2015 when it was split from Chinhoyi province following the vision of the then president of the Apostolic Faith Mission in Zimbabwe Doctor A. Madziyire.',
      'It has a total membership of plus 4000 people.',
      'The province has two schools Chirundu secondary and primary schools located at Chirundu boarder post.'
    ],
  },
  {
    id: 'bulawayo-south-province',
    name: 'Bulawayo South Province',
    overseer: 'Rev Ndlovu',
    overseerImage: revNdlovuImage,
    bio: [], // No specific bio provided for Rev Ndlovu in the text
    about: [
      'Bulawayo South Province is located in the greater Bulawayo Metropolitan Province of Zimbabwe.',
      'The Province covers the Southern part of the City. On its South it borders with Botswana, with assemblies at Plumtree Town and Zimhlophe at Zinyama rural areas.',
      'At the City Centre our boundary starts from 12th Avenue and on the Eastern side covers Waterford, Hillside, Burnside, Morningside, Bellevue etc. On the Western front the Province covers up Pumula South, Nkulumane areas.',
      'Bulawayo South Province started in the year 2009 with Rev C. Mupakaidzwa as the overseer after delimitation, on the formation of Bulawayo South and North from Matabeleland Central.',
      'On the realignment in the year 2019 with the amended constitution, Rev C. Mupakaidzwa became the Provincial Overseer, who was also elected the Deputy President of the AFM IN Zimbabwe in 2018.'
    ],
  },
  {
    id: 'bulawayo-north-province',
    name: 'Bulawayo North Province',
    overseer: 'Rev Jinjika',
    overseerImage: revJinjikaImage,
    bio: [], // No specific bio provided in the text
    about: [
      'Bulawayo North Province takes most suburbs on the northern side of Bulawayo. The Province was the centre of the original Matabeleland North Province running from Plumtree to Victoria Falls.',
      'As the work of the Lord progressed, the province was demarcated and gave birth to Bulawayo and Matabeleland North Province. The Bulawayo province was later demarcated and gave birth to Bulawayo South and North Province.',
      'The province covers areas outside Bulawayo up to Shangani along the Harare road and up to Insuza on the Victoria Falls road.',
      'We are determined to advance the work of God through the proclamation of the gospel, extending the Kingdom of God by any and every lawful means, according to the Holy scriptures and as led by the Holy Spirit, whilst upholding the highest standard of Christianity, moral behaviour and will of God in our lives.',
      'The Province has 31 localized assemblies, 2 centralized assemblies and 4 sub-assemblies.'
    ],
  },
  {
    id: 'midlands-north-province',
    name: 'Midlands North Province',
    overseer: 'Rev P Magejo',
    overseerImage: revPMagejoImage,
    bio: [
      'Rev Peter Magejo was born on the 20th of March 1965 and went to A.F.M Living Waters Theological Seminary from 1985-1987 and was ordained in 1990.',
      'He is married to Patricia Marava (Magejo) and survived by three children.',
      'In the year 2006, he became the Overseer of Mid-North to today.',
      'In 2015, he went back to Living Waters Theological Seminary for further studies and attained a Bachelor and a Masters degree.'
    ],
    about: [
      'Midlands North Province covers the areas of Mhondoro Mubaira, Manyoni, Mhondoro Mamina having the boundary with Harare South.',
      'Mid-North province has boundaries with Midlands Central at Munyati River and with Gokwe province it demarcates along Sanyati River. It stretches from Selous along Harare –Bulawayo road to Munyati River.',
      'The province covers rural areas of Sanyati and Msengezi small scale farming areas and resettlements. Its headquarters is in Chegutu town at 105 George Avenue.',
      'Currently Mid North Province has 29 assemblies.'
      // The bios for Funny Nyaruwata, Michael Chingosho, and Deacon Muza are support staff, not the overseer, so they are not included in the main 'about' but could be added to a 'leadership' sub-section if needed.
    ],
  },
  {
    id: 'matabeleland-south-province',
    name: 'Matabeleland South Province',
    overseer: 'Rev P. Mlauzi',
    overseerImage: revPMlauziImage,
    bio: [], // No specific bio provided for Rev P. Mlauzi in the text provided
    about: [
      'AFM Matabeleland South Province is found within one of Zimbabwe’s administrative provinces namely Matabeleland South and covers Gwanda district, Insiza, Umzingwane and part of Matobo district sharing borders with Matabeleland East province (Beitbridge) to the south, Zvishavane to the east and most of Bulawayo provinces to the north.',
      'It hosts one of the monumental AFM historic features (Gobatema Farm established in 1916) which was used as a spring board for early missionary work in Zimbabwe.',
      'The church had very vibrant projects on the farm which included a missionary school which not only offered religious learning and academic studies but also offered various vocational skills training.',
      'AFM Matabeleland South province grew in leaps and bounds under the Overseership of the late Rev D. M Mabusa who took over from white missionaries after independence. After Rev Mabusa came the late Rev Musinyali, retired Rev R.S Mbedzi and then the current serving Overseer Rev P. Mlauzi.',
      'The province has a number of assemblies providing access to the church to every inhabitant of the province. Approximately 22 localized assemblies have been established, 4 in Gwanda town and the rest in growth points and rural areas.',
      'AFM Mat South province is home to an excellent theological establishment namely Bread Of Life Campus which is part of a consortium of theological academies under the banner of Living Waters Theological Seminary.',
      'The church continues to affirm and uphold the divine assignment given to any Christian believer as enshrined in the Great Commission “Mathew 28:19 ” – emphasizing "The Year Of Apostolic Restoration, Reconciliation and Healing".'
    ],
  },
  {
    id: 'afm-midlands-south-province',
    name: 'AFM Midlands South Province',
    overseer: 'Dr W Masinire',
    overseerImage: drWMasinireImage,
    bio: [
      'The Overseer Rev Dr. Wilson Masinire is a graduate of Living Waters Bible College with a diploma in 1991 and was ordained in 2001.',
      'He was the Provincial YPU leader for one term and became the Provincial Secretary from 2009, a post he held until 2015 before becoming the Provincial overseer.',
      'He is married to Mrs. Gladys Masinire and has three children.',
      'He holds a Bachelor of Arts Degree and Masters Degree with Vision International (an affiliate of LWTS) and PhD degree with Bay view University.',
      'He is a Marriage Officer since 1999, a Lecturer at LWTS Azusa Theological College, and also lectured at Gweru Satellite College.'
    ],
    about: [
      'The Provincial offices are located at no 3201 Essex Road, corner Coolmoreen Road. The provincial Conference Centre which is still being built is also located there.',
      'The province borders Shurugwi, Tongogara, Chachacha, Lalapanzi, Lower Gweru, Somabhula and Zhaugwe areas.',
      'Midlands South Province was birthed from Midlands-Mashonaland West province which covered areas from as far as Kariba to Shurugwi, eventually being delimited into the current Midlands South (Gweru-Shurugwi) and later giving birth to Zvishavane (Midlands East Province).',
      'The Province, which has the acronym, Midsouth, has seen notable pastors take their positions in turn as leaders of this great province.',
      'The province continues to grow numerically, spiritually and financially. The province has a total of 37 assemblies. Only 4 of the assemblies defected with their pastors. The province has 26 localized assemblies and 11 centralized assemblies.',
      'Tithe performance has been resounding, thanks to the teachings of the word and encouragement from pastors.'
    ],
  },
  {
    id: 'manicaland-north-province',
    name: 'Manicaland North Province',
    overseer: 'Rev Moyo',
    overseerImage: revMoyoManicalandNorthImage,
    bio: [], // No specific bio provided in the text
    about: [
      'It is proud of producing great leaders in the likes of our own former late AFM President Rev J. Mvenge and many others.',
      'The Province was born in the year 2009 as a segment of the then Manicaland Province (Region) which stood alone as the only Church Province of that time.',
      'The birth of the Province was solely as a result of the fast growing of the church in the entire region and was done in response to the AFM President’s national vision which aimed at preaching and spreading the word of God to all souls, in line with the fulfilment of the great commission (Mathew 28 vs 19-20).',
      'The splitting of the big Province into 4 small independent Provinces was a positive move which saw church assemblies being established and greatly contributed towards the fulfilment of the great commission and accomplishing the AFM President’s vision and objective.',
      'The Province is located in the Eastern region of the republic of Zimbabwe stretching from South to the North along the border.',
      'It shares common boundaries with Manicaland central in the North West, Manicaland South in the South west and Manicaland East in the South – East of Mutare CBD.',
      'The Province covers part of Mutare urban and Rusape district up to Headlands, and stretches back up to the Mozambican border covering all areas such as Nyanga, Mutasa and Honde valley districts.',
      'It has got a total number of 43 assemblies all of which have got ordained pastors.'
    ],
  },
  {
    id: 'manicaland-central-province',
    name: 'Manicaland Central Province',
    overseer: 'Rev J Bunza',
    overseerImage: revJBunzaImage,
    bio: [], // No specific bio provided in the text
    about: [
      'AFM Manicaland Central Province is in the Western side of Manicaland as a whole.',
      'The Provincial offices are situated at 26 Agribank complex, Aerodrome Road, Mutare.',
      'It is demarcated by the Mutare-Harare Road from Mutare it is at the left side and from Harare it is at the right side.',
      'It stretches from Mutare to Rusape and lies within the tobacco belt Region 1.'
    ],
  },
  {
    id: 'harare-north-province',
    name: 'Harare North Province',
    overseer: 'Rev Charukwa',
    overseerImage: revCharukwaImage,
    bio: [], // No specific bio provided in the text
    about: [
      'Harare North Province is demarcated by Sam Munjoma, in the city centre and to the West by Samora Machel Avenue, to the East. It goes up to Makumbe Mission.',
      'It was established in 2008, and has also established a Conference Centre, whose services are augmented by a competent Public Address System facilitated and acquired by the ladies department, with an injection from the Youth Department.',
      'The Harare North Province strategy produces quantity through quality, knowing that: A Great Commitment to the Great Commandment and the Great Commission will grow a Great Church.',
      'Inspiration Box: God is most glorified in us when we are most satisfied in Him…- John Piper.'
    ],
  },
  {
    id: 'harare-east-province',
    name: 'Harare East Province',
    overseer: 'Rev Nehanda',
    overseerImage: revNehandaImage,
    bio: [], // No specific bio provided in the text
    about: [
      'The province’s geographical area covers the Eastern suburbs of Harare demarcated by Samora Machel Avenue to the North.',
      'Such suburbs are Hillside, Braeside, Cranborne, up to the whole of Epworth. Manyame, Hatfield, Sunningdale, Mbare, Waterfalls District.',
      'The Harare east Province initially started off with 21 Assemblies (local & rural).',
      'Our prime objective is to be a united Province, working as a team towards the spiritual, numerical, financial, physical/structural and developmental growth of the AFM in Zimbabwe in our Province, and Assemblies and as individuals and families.',
      'Inspiration Box: Radical obedience to Christ is not easy… It’s not comfort, not health, not wealth, and not prosperity in this world. Radical obedience to Christ risks losing all these things. But in the end, such risk finds its reward in Christ. And he is more than enough for us… – David Platt.'
    ],
  },
  {
    id: 'bulawayo-west-province',
    name: 'Bulawayo West Province',
    overseer: 'Overseer K. R. Kawonde',
    overseerImage: null, // Explicitly set to null as per your request
    bio: [
      'Overseer K. R. Kawonde is a pastor of AFM in Zimbabwe.',
      'He established a number of assemblies: 2000-2002 (Emganwini/ Figtree sub-branch), 2002-2012 (Cowdray Park Assembly and four more assemblies in the same area), 2013-2016 (Deputy Overseer, Bulawayo North Province and pastored Mahatshula Assembly, which experienced significant growth numerically and in infrastructure).',
      '2017-2018 established the fourth assembly, Cowdray Park Hillside Assembly.',
      '2019 to date, pastoring at Magwegwe Fellowship.',
      'Overseer KR Kawonde is a Lecturer and a teacher of the word. Rev/Apostle Kawonde is a holder of a Diploma in Theology from LWTS and a BA in Theology, Vision Inter University.'
    ],
    about: [
      'The province is a fundamental segment of the global ecclesiastical formulation with Christ being the Head in accordance with the stipulations of Holy Scriptures and the universal influence of the Holy Ghost.',
      'The province covers the Western part of Bulawayo metropolitan city. The province is demarcated by the Nketa drive stretching into the Victoria Falls railway line. The boundary moves through State house via Harrisvale extending into Rural Tsholotsho through Nyamandlovu. The boundary stretches from Tsholotsho up to Solusi through Khami prison and heads back to the Khami road.',
      'The province was established by the National Executive of AFM in July 2016. Two local provinces in Bulawayo Metropolitan city, AFM in Zimbabwe, Bulawayo North Province and Bulawayo South Province were both divided to create Bulawayo West province.',
      'The province is constituted of fifteen assemblies, fourteen localized assemblies and one centralized which are under the leadership of Overseer K Kawonde.'
    ],
  },
  {
    id: 'mashonaland-central-province',
    name: 'Mashonaland Central Province',
    overseer: 'Rev Zvavahera',
    overseerImage: revZvavaheraImage,
    bio: [], // No specific bio provided in the text
    about: [
      'Mashonaland Central Province was born in 1996 from the then Mashonaland Province.',
      'The founding Overseer and Chairman became Rev Matafeni Shumbambiri who led for the Province up to the year 2006. Rev S Gwenzi was elected the succeeding overseer to the late Rev Shumbambiri, a position he still holds to date.',
      'The thrust of the province is evangelism focusing on the urban communities which are densely populated. These communities are prone to evils associated with culture mix and globalization.',
      'In Zimbabwe, the church plays a significant role in the livelihoods of the community through improved socialization, youth empowerment, counselling services and social corporate responsibility.',
      'Mashonaland central Province was re-demarcated in 2013 giving birth to Mvurwi Province. By then the work had grown to accommodate 38 Ordained Pastors from 10 ordained pastors at the time of inception translating a 400% growth. This percentage growth prompted for a second delimitation which saw us retain 22 Pastors.',
      'The new and current Mashonaland central Province is a stretch of over 280km due North from the National Defence College in Harare. This is where our Province’s peg beacon is, up to Mukumbura where Zimbabwe shares its border with Mozambique.',
      'From Mukumbura, we travel due East for around 170kms to Mazowe Bridge where we share boarders with Mashonaland North province. Our neighbouring Provinces are Mvurwi, Mashonaland North, Harare North and Harare South. Our capital town is Bindura which is a mining town. Mashonaland Central is almost 10% mining community and 90% rural and farming communities.'
    ],
  },
];

export default provincesData;