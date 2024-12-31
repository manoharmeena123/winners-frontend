export const mpConstableData = {
  title:
    "MP Constable 2025: Notification, Registration, and Exam Dates Announced",
  intro: `
                  मध्य प्रदेश व्यावसायिक परीक्षा बोर्ड (MPPEB) ने आधिकारिक रूप से MP Constable 2025 अधिसूचना की घोषणा की है, 
                  जिसमें पंजीकरण मई 2025 से शुरू होने की उम्मीद है। उम्मीदवार आधिकारिक वेबसाइट 
                  www.peb.mp.gov.in के माध्यम से आवेदन कर सकते हैं। यह गाइड MP Constable 2025 परीक्षा के बारे में व्यापक विवरण प्रदान करता है, 
                  जिसमें परीक्षा तिथियाँ, आवेदन प्रक्रिया, पात्रता मानदंड, वेतन संरचना, परीक्षा पैटर्न, और बहुत कुछ शामिल है।
              `,
  content: `
                  MP Constable परीक्षा, जो मध्य प्रदेश व्यावसायिक परीक्षा बोर्ड द्वारा वार्षिक रूप से आयोजित की जाती है, राज्य में सबसे अधिक मांग वाली परीक्षाओं में से एक है, 
                  जिसका उद्देश्य कांस्टेबल (जीडी और रेडियो-ऑपरेटर) के पद के लिए उम्मीदवारों की भर्ती करना है। चयनित उम्मीदवारों को मध्य प्रदेश के विभिन्न पुलिस विभागों में नियुक्त किया जाएगा। 
                  आकर्षक वेतन, नौकरी की सुरक्षा, और करियर विकास के लिए प्रसिद्ध इस परीक्षा में राज्य भर के हजारों उम्मीदवार भाग लेते हैं। 
                  यह पृष्ठ MP Constable 2025 के लिए आपका एकमात्र गाइड है, जो अधिसूचना, पंजीकरण प्रक्रिया, पात्रता, परीक्षा तिथियाँ, और सफलता के लिए रणनीतियों के बारे में जानकारी प्रदान करता है। 
                  नवीनतम अपडेट और संसाधनों के लिए जुड़े रहें।
              `,
  officialWebsite: "https://esb.mp.gov.in/",
};

export const tableOfContentsData = [
  {
    title: "MP Constable 2025 Notification Released",
    link: "#mp-constable-2025-notification-released",
  },
  {
    title: "MP Constable Physical Test 2025",
    link: "#mp-constable-physical-test-2025",
  },
  {
    title: "MP Constable Syllabus 2025",
    link: "#mp-constable-syllabus-2025",
  },
  {
    title: "Frequently Asked Questions",
    link: "#frequently-asked-questions",
  },
];

export const mpConstableExamData = {
  notificationData: {
    title: "MPESB Constable Recruitment 2025",
    ageLimit: {
      min: 18,
      max: 33,
    },
    ageRelaxation: [
      { category: "Scheduled Castes (SC)", relaxation: 5 },
      { category: "Scheduled Tribes (ST)", relaxation: 5 },
      { category: "Other Backward Classes (OBC)", relaxation: 5 },
    ],
    qualifications: [
      {
        role: "Constable (GD)",
        details: [
          "Passed 10th Class under the 10+2 system or equivalent from a recognized board.",
        ],
      },
      {
        role: "Constable (Radio-Operator)",
        details: [
          "Passed 12th Class under the 10+2 system from a recognized board.",
         "Additionally, successfully completed a 2-year diploma or certification program in Electronics, Electricals, Computer Hardware (excluding Computer Applications), Telecommunication, Instrument Mechanics, or Information Technology Engineering from a government-recognized polytechnic, institute, college, university, or ITI.",
        ],
      },
    ],
  },

  examData: [
    {
      id: 1,
      description: "सामान्य ज्ञान और तर्कशक्ति / General Knowledge & Reasoning",
      totalQuestions: 40,
      totalMarks: 100,
      totalTime: "120 Minutes",
    },
    {
      id: 2,
      description:
        "बौद्धिक क्षमता और मानसिक क्षमता / Intellectual Ability & Mental Ability",
      totalQuestions: 30,
      totalMarks: 100,
      totalTime: "120 Minutes",
    },
    {
      id: 3,
      description: "विज्ञान एवं सरल अंकगणित / Science & Simple Arithmetic",
      totalQuestions: 30,
      totalMarks: 100,
      totalTime: "120 Minutes",
    },
  ],
  physicalParametersTable: [
    {
      id: 1,
      description: ["अ. अनारक्षित", "ब. अन्य पिछड़ा वर्ग"],
      category: "पुरुष",
      height: "168 से.मी.",
      chestWithoutExpansion: "79 से.मी.",
      chestWithExpansion: "84 से.मी.",
    },
    {
      id: 2,
      description: ["अ. गोरखा", "ब. गढ़वाली", "ग. कुमाऊँ के मामले में"],
      category: "पुरुष",
      height: "157 से.मी.",
      chestWithoutExpansion: "79 से.मी.",
      chestWithExpansion: "84 से.मी.",
    },
    {
      id: 3,
      description: ["अ. मराठा", "ब. अनुसूचित जाति", "ग. अनुसूचित जनजाति"],
      category: "पुरुष",
      height: "165 से.मी.",
      chestWithoutExpansion: "79 से.मी.",
      chestWithExpansion: "84 से.मी.",
    },
  ],
  specialphysicalParametersTable: [
    {
      id: 1,
      description:
        "आरक्षक ‘विशेष सशस्‍त्र बल छोड़कर' अन्‍य सभी संवर्ग:\nक. अनारक्षित\nख. अनुसूचितजाति\nग. अन्‍य पिछड़ावर्ग",
      male: {
        category: "पुरुष",
        height: "168 से.मी.",
        chestWithoutExpansion: "81 से.मी.",
        chestWithExpansion: "86 से.मी.",
      },
      female: {
        category: "महिला",
        height: "155 से.मी.",
        chestWithoutExpansion: "लागू नहीं",
        chestWithExpansion: "लागू नहीं",
      },
    },
    {
      id: 2,
      description:
        "आरक्षक ‘विशेष सशस्‍त्र बल छोड़कर' अन्‍य सभी संवर्ग: अनुसूचित जनजाति",
      male: {
        category: "पुरुष",
        height: "160 से.मी.",
        chestWithoutExpansion: "76 से.मी.",
        chestWithExpansion: "81 से.मी.",
      },
      female: {
        category: "महिला",
        height: "155 से.मी.",
        chestWithoutExpansion: "लागू नहीं",
        chestWithExpansion: "लागू नहीं",
      },
    },
  ],

  secondPhaseofExam: {
    secondPhase: [
      {
        postName: "आरक्षक (जीडी)",
        description:
          "शारीरिक दक्षता परीक्षण होगा, जिसके अंक अंतिम प्रवीणता सूची के लिए प्रथम चरण के अंकों के साथ जोड़े जाएँगे।",
      },
      {
        postName: "आरक्षक (ऑपरेटर-रेडियो)",
        description:
          "शारीरिक दक्षता परीक्षण के लिए चुना जाएगा, लेकिन इसके अंक अंतिम प्रवीणता सूची के लिए प्रथम चरण के अंकों के साथ नहीं जोड़े जाएँगे। यह शारीरिक दक्षता परीक्षण केवल क्वालिफाइंग प्रकृति का होगा।",
      },
    ],
    testDetailsData: [
      "पुरुषों के लिए गोला- गोले का वजन 7.26 कि.ग्रा.",
      "महिलाओं के लिए गोला- गोले का वजन 4.00 कि.ग्रा.",
      "800 मीटर दौड़ हेतु एक अवसर तथा लम्‍बी कूद एवं गोला फेंक हेतु 3 अवसर प्रदान किये जायेंगे।",
    ],
    relaxedStandardsData: [
      "पुरुषों के लिए गोला- गोले का वजन 7.26 कि.ग्रा.",
      "महिलाओं के लिए गोला- गोले का वजन 4.00 कि.ग्रा.",
      "800 मीटर दौड़ हेतु एक अवसर तथा लम्‍बी कूद एवं गोला फेंक हेतु 3 अवसर प्रदान किये जायेंगे।",
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "MP Constable 2025 की अधिसूचना कब जारी होगी?",
        answer:
          "MP Constable 2025 की अधिसूचना जारी कर दी गई है, और पंजीकरण 1 मई 2025 से शुरू होंगे।",
      },
      {
        question: "MP Constable परीक्षा के लिए चयन प्रक्रिया क्या है?",
        answer:
          "MP Constable 2025 चयन प्रक्रिया में लिखित परीक्षा, शारीरिक दक्षता परीक्षा (PET), और दस्तावेज़ सत्यापन शामिल हैं।",
      },
      {
        question: "MP Constable परीक्षा के लिए पात्रता मानदंड क्या हैं?",
        answer:
          "उम्मीदवारों को मान्यता प्राप्त बोर्ड से 10वीं कक्षा (मैट्रिकुलेशन) उत्तीर्ण होना चाहिए और आयु सीमा 18 से 25 वर्ष होनी चाहिए।",
      },
      {
        question: "MP Constable परीक्षा के लिए आवेदन शुल्क क्या है?",
        answer:
          "सामान्य और ओबीसी उम्मीदवारों के लिए आवेदन शुल्क 500 रुपये है, जबकि एससी/एसटी उम्मीदवारों के लिए यह 250 रुपये है।",
      },
      {
        question: "मैं MP Constable परीक्षा के लिए कैसे आवेदन कर सकता हूँ?",
        answer:
          "उम्मीदवार आधिकारिक वेबसाइट www.peb.mp.gov.in पर जाकर ऑनलाइन आवेदन पत्र भरकर MP Constable परीक्षा के लिए आवेदन कर सकते हैं।",
      },
    ],
  },
  notification: {
    title: "MP Constable 2025 Notification Released",
    description:
      "The MPESB 2025 Notification has been officially released. Candidates can download the notification PDF from the link below. Additionally, the MPESB 2025 calendar has also been released, providing important dates for upcoming exams and events.",
    link: "https://esb.mp.gov.in/exams_schedule/exams_schedule.htm",
  },
  syllabus: {
    title: "MP Constable Syllabus 2025",
    description: `
                          पिछली अधिसूचना के अनुसार, MP Constable भर्ती में चयन प्रक्रिया में लिखित परीक्षा और शारीरिक परीक्षा शामिल होगी। 
                          उम्मीदवारों को अगले चरण के लिए पात्र होने के लिए लिखित परीक्षा उत्तीर्ण करनी होगी। 
                          अब हम लिखित परीक्षा के पाठ्यक्रम को देख सकते हैं। उम्मीदवारों को परीक्षा की तैयारी करते समय नीचे दिए गए पाठ्यक्रम का पालन करना चाहिए।
                  `,
    tableData: [
      {
        id: 1,
        subject: "सामान्य ज्ञान और तर्क (General Knowledge & Reasoning)",
        questions: 40,
        marks: 40,
        time: "120 मिनट",
      },
      {
        id: 2,
        subject:
          "बौद्धिक क्षमता और मानसिक क्षमता (Intellectual Ability & Mental Ability)",
        questions: 30,
        marks: 30,
        time: "120 मिनट",
      },
      {
        id: 3,
        subject: "विज्ञान और सरल अंकगणित (Science & Simple Arithmetic)",
        questions: 30,
        marks: 30,
        time: "120 मिनट",
      },
    ],
    sections: [
      {
        name: "Reasoning Topics (मौखिक / Verbal)",
        topics: [
          "सादृश्य परीक्षण / Analogy Test",
          "वर्गीकरण / Classification",
          "वर्णमाला / Alphabet",
          "कोडिंग-डिकोडींग / Coding-Decoding",
          "दिशा-दूरी / Direction-Distance",
          "रक्त संबंध / Blood Relation",
          "पदानुक्रम / Ranking",
          "पदों का व्यवस्थीकरण / Arrangement of Terms",
          "लुप्त पद / क्विज टेबल / Missing Term / Quiz Table",
          "अक्षर-श्रृंखला / Alphabet-Series",
          "संख्या-श्रृंखला / Number-Series",
          "गणितीय संक्रियाएं / Mathematical Operations",
          "वर्ण-अंक श्रृंखला / Letter-Number Series",
          "शब्दों का तार्किक क्रम / Logical Sequence of Words",
          "असमानता / Inequality",
          "पंचांग / Calendar",
          "घड़ी / Clock",
          "पासा / Dice",
          "घन और घनाभ / Cube and Cuboid",
          "न्याय-निगमन / Syllogism",
          "तार्किक कथन / Logical Statement",
          "कथन और पूर्वधारणाएँ / Statements and Assumptions",
          "कथन और तर्क / Statements and Arguments",
          "कथन और कार्यवाही / Course of Action",
          "कारण और कथन / Cause and Statements",
          "आव्यूह (मेट्रिक्स) / Metrics",
          "आकृतियों की गिनती / Counting of Figures",
          "अंकगणितीय तर्कशक्ति / Arithmetical Reasoning",
          "पहेली / Puzzle",
          "कथन और निष्कर्ष / Statements and Conclusions",
          "वेन-आरेख / Venn-Diagram",
        ],
      },
      {
        name: "गणित (Maths)",
        topics: [
          "अनुपात और समानुपात / Ratio and Proportion",
          "आयु / Age",
          "नाव और धारा / Boat & Stream",
          "प्रतिशत / Percentage",
          "संख्या पद्धति / Number System",
          "क्षेत्रमिति / Mensuration",
          "लाभ - हानि और छूट / Profit – Loss & Discount",
          "लघुत्तम समापवर्त्य एवं महत्तम समापवर्तक / LCM & HCF",
          "मिश्रण / Mixture & Allegation",
          "साधारण ब्याज / Simple Interest",
          "घातांक और करणी / Surds & Indices",
          "बहुपद / Polynomials",
          "चक्रवृद्धि ब्याज / Compound Interest",
          "डेटा व्याख्या / Data Interpretation",
          "साझेदारी / Partnership",
          "समय और कार्य / Time and Work",
          "सरलीकरण / Simplification",
          "निर्देशांक ज्यामिति / Coordinate Geometry",
          "श्रृंखला नियम / Chain Rule",
          "प्रायिकता / Probability",
          "क्रमचय, संचय / Permutation, accumulation",
          "औसत / Average",
          "पाइप और टंकी / Pipes & Cistern",
          "बीजगणित / Algebra",
          "सांख्यिकी / Statistics",
          "समय और दूरी / Time and Distance",
          "ऊँचाई और दूरी / Height and Distance",
          "त्रिकोणमिति / Trigonometry",
          "दशमलव भाग / Decimal, Fractions",
          "रेल गाड़ी / Train",
          "ज्यामिति गणना / Geometry Calculations",
        ],
      },
      {
        name: "सामान्य ज्ञान (Genaral Knowledge)",
        topics: [
          "मध्य प्रदेश का सामान्य ज्ञान / General Knowledge of Madhya Pradesh",
          "समसमायिकी / Current Affairs",
          "भारतीय अर्थव्यवस्था / Indian Economy",
          "भूगोल / Geography",
          "इतिहास / History",
          "राजनीति शास्त्र / Political Science",
          "खेल / Sports",
          "कला और संस्कृति / Art and Culture",
          "विविध / Miscellaneous",
        ],
      },

      {
        name: "भौतिकी (Physics)",
        topics: [
          "भौतिक राशियाँ और मापन / Physical Quantities and Measurement",
          "यांत्रिकी / Mechanics",
          "ऊष्‍मा एवं ऊष्‍मागतिकी / Heat and Thermodynamics",
          "तरंगे / Waves",
          "ध्‍वनि / Sound",
          "प्रकाशिकी / Optics",
          "विद्युत धारा एवं चुंबकत्‍व / Electric Current and Magnetism",
          "मापक यंत्र / Measuring Instrument",
          "महत्वपूर्ण आविष्कार / Important Inventions",
        ],
      },
      {
        name: "रसायन (Chemistry)",
        topics: [
          "परमाणु संरचना / Atomic Structure",
          "रासायनिक अभिक्रियाएँ / Chemical Reactions",
          "तत्‍वों का वर्गीकरण / Classification of Elements",
          "अम्‍ल, क्षार एवं लवण / Acids, Bases and Salts",
          "तत्‍व एवं यौगिक / Elements and Compounds",
          "कार्बन एवं उसके यौगिक / Carbon and its Compounds",
          "पदार्थ एवं उसकी प्रकृति / Matter and its Nature",
          "धातु एवं अधातुएँ / Metals and Non-Metals",
          "द्रव्‍य एवं उनके गुण / Matter and Their Properties",
        ],
      },
      {
        name: "जीवविज्ञान (Biology)",
        topics: [
          "जीव एवं पादपों का वर्गीकरण / Classification of Animals and Plants",
          "कोशिका / Cell",
          "ऊतक / Tissue",
          "मानव शरीर के तंत्र / Human Body Systems",
          {
            subtopics: [
              "पाचन तंत्र / Digestive System",
              "श्‍वसन तंत्र / Respiratory System",
              "परिसंचरण तंत्र / Circulatory System",
              "तंत्रिका तंत्र / Nervous System",
              "उत्‍सर्जन तंत्र / Excretory System",
              "कंकाल तंत्र / Skeletal System",
            ],
          },
          "अन्‍त: स्‍त्रावी ग्रंथि / Endocrine Gland",
          "मानव रोग / Human Disease",
          "पादप कार्यिकी / Plant Physiology",
          "विज्ञान के अध्‍ययन की महत्वपूर्ण शाखाएं / Important Branches of Study of Science",
          "पोषण / Nutrition",
        ],
      },
    ],
  },
};

export const smallScreenClasses = [
  {
    image: "/mppeb/vyapam-foundation-square.jpg",
    description: "ESB/ Vyapam Foundation Combo Online Course (CVF1224)",
    price: "₹1299",
    button: "Buy Now",
    background: "bg-blue-900",
    link: "https://live.winnersinstitute.in/courses/468-esb-vyapam-foundation-combo-online-course-cvf1224",
  },
  {
    image:
      "https://appxcontent.kaxa.in/paid_course3/2024-12-08-0.9882978874810506.jpeg",
    description:
      "जेल प्रहरी, वन एवं क्षेत्र रक्षक Complete Online Course (FFJ0724)",
    price: "₹799",
    button: "Buy Now",
    background: "bg-green-600",
    link: "https://live.winnersinstitute.in/courses/416--complete-online-course-ffj0724",
  },
  {
    image: "/mppeb/women-supervisor-group5-square.jpg",
    description:
      "ESB/Vyapam Group 5 2024 (Part-A) Complete Recorded Course (MPG5-1124)",
    price: "₹499",
    button: "Buy Now",
    background: "bg-teal-600",
    link: "https://live.winnersinstitute.in/courses/465-esb-vyapam-group-5-2024-part-a-complete-recorded-course-mpg5-1124",
  },
];
export const largeScreenClasses = [
  {
    image:
      "https://appxcontent.kaxa.in/paid_course3/2024-12-11-0.5572492968176104.jpeg",
    description: "ESB/ Vyapam Foundation Combo Online Course (CVF1224)",
    price: "₹1299",
    button: "Buy Now",
    background: "bg-blue-900",
    link: "https://live.winnersinstitute.in/courses/468-esb-vyapam-foundation-combo-online-course-cvf1224",
  },
  {
    image:
      "https://appxcontent.kaxa.in/paid_course3/2024-12-08-0.9882978874810506.jpeg",
    description:
      "जेल प्रहरी, वन एवं क्षेत्र रक्षक Complete Online Course (FFJ0724)",
    price: "₹799",
    button: "Buy Now",
    background: "bg-green-600",
    link: "https://live.winnersinstitute.in/courses/416--complete-online-course-ffj0724",
  },
  {
    image:
      "https://appxcontent.kaxa.in/paid_course3/2024-12-08-0.12337163111796157.jpeg",
    description:
      "ESB/Vyapam Group 5 2024 (Part-A) Complete Recorded Course (MPG5-1124)",
    price: "₹499",
    button: "Buy Now",
    background: "bg-teal-600",
    link: "https://live.winnersinstitute.in/courses/465-esb-vyapam-group-5-2024-part-a-complete-recorded-course-mpg5-1124",
  },
];

export const smallScreenTestSeries = [
  {
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2024-12-28-0.9726229122488721.jpeg",
    description: "म.प्र. महिला पर्यवेक्षक TEST SERIES 2025",
    price: "₹199",
    button: "Buy Now",
    background: "bg-blue-900",
    link: "https://live.winnersinstitute.in/test-series/365--test-series-2025",
  },
  {
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2024-12-26-0.9265651890897373.jpeg",
    description: "MPTET शिक्षक भर्ती वर्ग 3 Test Series 2024",
    price: "₹149",
    button: "Buy Now",
    background: "bg-green-600",
    link: "https://live.winnersinstitute.in/test-series/373-mptet-3-test-series-2024",
  },
  {
    image:
      "https://appxcontent.kaxa.in/paid_course3/2024-12-08-0.1402379844059063.jpeg",
    description: "MPPSC Prelims - 2025 (Online Test Series 2.0)",
    price: "₹499",
    button: "Buy Now",
    background: "bg-teal-600",
    link: "https://live.winnersinstitute.in/test-series/454-mppsc-prelims-2025-online-test-series-20",
  },
];
export const largeScreenTestSeries = [
  {
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2024-12-28-0.9726229122488721.jpeg",
    description: "म.प्र. महिला पर्यवेक्षक TEST SERIES 2025",
    price: "₹199",
    button: "Buy Now",
    background: "bg-blue-900",
    link: "https://live.winnersinstitute.in/test-series/365--test-series-2025",
  },
  {
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2024-12-26-0.9265651890897373.jpeg",
    description: "MPTET शिक्षक भर्ती वर्ग 3 Test Series 2024",
    price: "₹149",
    button: "Buy Now",
    background: "bg-green-600",
    link: "https://live.winnersinstitute.in/test-series/373-mptet-3-test-series-2024",
  },
  {
    image:
      "https://appxcontent.kaxa.in/paid_course3/2024-12-08-0.1402379844059063.jpeg",
    description: "MPPSC Prelims - 2025 (Online Test Series 2.0)",
    price: "₹499",
    button: "Buy Now",
    background: "bg-teal-600",
    link: "https://live.winnersinstitute.in/test-series/454-mppsc-prelims-2025-online-test-series-20",
  },
];

export const smallScreenBooks = [
  {
    image: "/mppeb/mp-psc-books-combo.jpg",
    description: "MPPSC Complete Book Combo Set",
    price: "₹1899.00",
    button: "Buy Now",
    background: "bg-blue-900",
    link: "https://books.winnerspublication.store/products/mppsc-complete-book-combo-set",
  },
  {
    image: "/mppeb/women-supervisor-books-combo.jpg",
    description: "Mahila Supervisor Book Combo Set",
    price: "₹999.00",
    button: "Buy Now",
    background: "bg-green-600",
    link: "https://books.winnerspublication.store/products/mahila-supervisor-15-test-papers-based-on-new-pattern",
  },
  {
    image: "/mppeb/mp-tet-group-3.jpg",
    description: "MPTET Grade 3 Maths (Hindi Medium) Book",
    price: "₹179.00",
    button: "Buy Now",
    background: "bg-teal-600",
    link: "https://books.winnerspublication.store/products/mptet-grade-3-maths-hindi-medium-book",
  },
];
export const largeScreenBooks = [
  {
    image:
      "https://appxcontent.kaxa.in/paid_course/2024-12-08-0.22702373599145043.jpeg",
    description: "MPPSC Complete Book Combo Set",
    price: "₹1899.00",
    button: "Buy Now",
    background: "bg-blue-900",
    link: "https://books.winnerspublication.store/products/mppsc-complete-book-combo-set",
  },
  {
    image:
      "https://appx-content-v2.classx.co.in/paid_course/2024-12-28-0.1568644653603044.jpeg",
    description: "Mahila Supervisor Book Combo Set",
    price: "₹999.00",
    button: "Buy Now",
    background: "bg-green-600",
    link: "https://books.winnerspublication.store/products/mahila-supervisor-book-combo-set",
  },
  {
    image:
      "https://appxcontent.securevideo.in/paid_course/2024-10-02-0.15359221998834838.jpeg",
    description: "MPTET Grade 3 Maths (Hindi Medium) Book",
    price: "₹179.00",
    button: "Buy Now",
    background: "bg-teal-600",
    link: "https://books.winnerspublication.store/products/mptet-grade-3-maths-hindi-medium-book",
  },
];
