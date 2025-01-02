import { tableData } from "./sscData";

export const railwayNtpcData = {
  title:
    "Railway NTPC 2025: Notification, Registration, and Exam Dates Announced",
  intro: `
      The Railway Recruitment Board (RRB) has officially announced the Railway NTPC 2025 notification, with registrations expected to begin in May 2025. Candidates can apply through the official website www.indianrailways.gov.in. This guide provides comprehensive details about the Railway NTPC 2025 exam, including exam dates, application process, eligibility criteria, salary structure, exam pattern, and much more.
    `,
  content: `
      The Railway NTPC exam, conducted annually by the Railway Recruitment Board (RRB), is one of the most sought-after exams in the country, aimed at recruiting candidates for various Non-Technical Popular Categories (NTPC) positions such as Traffic Assistant, Goods Guard, Junior Clerk, Senior Clerk, and more. Selected candidates will be appointed in various railway zones across India. Known for its attractive salary, job security, and career growth opportunities, this exam sees participation from thousands of candidates nationwide. This page serves as your ultimate guide for Railway NTPC 2025, providing information on the notification, registration process, eligibility, exam dates, and strategies for success. Stay connected for the latest updates and resources.
    `,
  officialWebsite: "https://indianrailways.gov.in/",
};

export const tableOfContentsData = [
  {
    title: "MPESB 2025 Notification Released",
    link: "#mp-si-2025-notification",
  },
  {
    title: "MPESB SI Recruitment 2025",
    link: "#mp-si-exam-dates",
  },
  {
    title: "MP SI Eligibility Criteria",
    link: "#mp-si-eligibility-criteria",
  },
  {
    title: "MP SI Physical Criteria",
    link: "#mp-si-physical-criteria",
  },
  {
    title: "Frequently Asked Questions",
    link: "#frequently-asked-questions",
  },
];

export const railwayNtpcExamData = {
  notificationData: {
    title: "Railway NTPC 2025 Notification Released",
    ageLimit: {
      "12th Pass": {
        min: 18,
        max: 30,
      },
      Graduate: {
        min: 18,
        max: 33,
      },
    },
    ageRelaxation: [
      { category: "Scheduled Castes (SC)", relaxation: 5 },
      { category: "Scheduled Tribes (ST)", relaxation: 5 },
      { category: "Other Backward Classes (OBC)", relaxation: 3 },
      { category: "Persons with Disabilities (PWD)", relaxation: 10 },
    ],
    qualifications: [
      {
        role: "Traffic Assistant, Goods Guard, Junior Clerk, Senior Clerk, etc.",
        details: [
          "12th Pass or Graduation degree from a recognized board or university.",
        ],
      },
    ],
    link: "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281",
  },

  notification: {
    title: "Railway NTPC 2025 Notification Released",
    description:
      "The Railway NTPC 2025 Notification has been officially released. Candidates can download the notification PDF from the link below. Additionally, the Railway NTPC 2025 calendar has also been released, providing important dates for upcoming exams and events.",
    link: "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281",
  },

  examPatternData: [
    {
      subject: "सामान्य जागरूकता / General Awareness",
      questions: 50,
      marks: 50,
      time: "90 मिनट",
    },
    {
      subject: "अंकगणित / Arithmetic",
      questions: 35,
      marks: 35,
      time: "90 मिनट",
    },
    {
      subject: "सामान्य बुद्धि एवं तर्क / General Intelligence & reasoning",
      questions: 35,
      marks: 35,
      time: "90 मिनट",
    },
  ],

  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "RRB NTPC 2025 की अधिसूचना कब जारी होगी?",
        answer:
          "RRB NTPC 2025 की अधिसूचना जल्द ही आधिकारिक वेबसाइट पर जारी की जाएगी।",
      },
      {
        question: "RRB NTPC परीक्षा के लिए चयन प्रक्रिया क्या है?",
        answer:
          "चयन प्रक्रिया में कंप्यूटर आधारित परीक्षा (CBT-1 और CBT-2), टाइपिंग स्किल टेस्ट/कंप्यूटर आधारित एप्टीट्यूड टेस्ट (जहां लागू हो), और दस्तावेज़ सत्यापन शामिल हैं।",
      },
      {
        question: "RRB NTPC परीक्षा के लिए पात्रता मानदंड क्या हैं?",
        answer:
          "उम्मीदवारों को मान्यता प्राप्त बोर्ड या विश्वविद्यालय से 12वीं/स्नातक उत्तीर्ण होना चाहिए।",
      },
      {
        question: "RRB NTPC परीक्षा के लिए आवेदन शुल्क क्या है?",
        answer:
          "सामान्य और ओबीसी उम्मीदवारों के लिए आवेदन शुल्क 500 रुपये है, जबकि एससी/एसटी और महिला उम्मीदवारों के लिए यह 250 रुपये है।",
      },
      {
        question: "मैं RRB NTPC परीक्षा के लिए कैसे आवेदन कर सकता हूँ?",
        answer:
          "उम्मीदवार आधिकारिक वेबसाइट www.indianrailways.gov.in पर जाकर ऑनलाइन आवेदन कर सकते हैं।",
      },
    ],
  },

  syllabusData: {
    title: "Railway NTPC 2025 Syllabus",
    description:
      "The Railway NTPC 2025 syllabus is divided into four sections: General Awareness, Arithmetic, General Intelligence, and Reasoning. The detailed syllabus for each section is as follows:",
    cbt1examData: {
      tableData: [
        {
          subject: "General Awareness",
          questions: 40,
          marks: 40,
          time: "90 Minutes",
        },
        {
          subject: "Mathematics",
          questions: 30,
          marks: 30,
          time: "90 Minutes",
        },
        {
          subject: "General Intelligence & Reasoning",
          questions: 30,
          marks: 30,
          time: "90 Minutes",
        },
      ],
    },
    cbt2examData: {
      tableData: [
        { subject: "Maths", questions: 35, marks: 35, time: "90 Minutes" },
        {
          subject: "General Intelligence & Reasoning",
          questions: 35,
          marks: 35,
          time: "90 Minutes",
        },
        {
          subject: "General Awareness",
          questions: 50,
          marks: 50,
          time: "90 Minutes",
        },
      ],
    },

    sections: [
      {
        name: "सामान्य जागरूकता (General Awareness)",
        topics: [
          "आविष्कार और खोज / Inventions and Discoveries",
          "भारत के पड़ोसी देश / Neighboring Countries of India",
          "राष्ट्रीय और अंतर्राष्ट्रीय महत्व की वर्तमान घटनाएँ / Current Events of National and International Importance",
          "क्रीडा और खेल / Games and Sports",
          "देश, राजधानियाँ और मुद्रा / Countries, Capitals, and Currency",
          "भारत की कला और संस्कृति / Art and Culture of India",
          "भारतीय साहित्य / Indian Literature",
          "भारत के महत्वपूर्ण स्मारक एवं स्थान / Important Monuments and Places of India",
          "सामान्य विज्ञान एवं जीवन विज्ञान (CBSE 10वीं तक) / General Science and Life Science (up to 10th CBSE)",
          "राज्य सभा के सदस्य / Members of Rajya Sabha",
          "भारत का इतिहास और स्वतंत्रता संग्राम / History of India and Freedom Struggle",
          "भारत और विश्व का भौतिक, सामाजिक और आर्थिक भूगोल / Physical, Social and Economic Geography of India and World",
          "फोबिया की सूची / List of Phobias",
          "भारतीय राजव्यवस्था और शासन-संविधान और राजनीतिक व्यवस्था / Indian Polity and Governance- constitution and political system",
          "सामान्य वैज्ञानिक और तकनीकी विकास / General Scientific and Technological Developments",
          "आईपीएल विजेताओं की सूची / List of IPL Winners",
          "संयुक्त राष्ट्र और अन्य महत्वपूर्ण विश्व संगठन, भारत और विश्व से संबंधित पर्यावरणीय मुद्दे / UN and Other important World Organizations, Environmental Issues Concerning India and World",
          "भारत के हवाई अड्डों की सूची / List of Airports of India",
          "कंप्यूटर और कंप्यूटर अनुप्रयोगों की मूल बातें / Basics of Computers and Computer Applications",
          "खेल अवधि की सूची / List of Sports term",
          "सामान्य संक्षिप्ताक्षर / Common Abbreviations",
          "अर्जुन पुरस्कार विजेताओं की सूची / List of Arjuna Award Winners",
          "भारत में परिवहन प्रणालियाँ / Transport Systems in India",
          "भारतीय अर्थव्यवस्था / Indian Economy",
          "भारत और विश्व की प्रसिद्ध हस्तियाँ / Famous Personalities of India and World",
          "प्रमुख सरकारी कार्यक्रम / Flagship Government Programs",
          "भारत की वनस्पति और जीव / Flora and Fauna of India",
          "भारत के महत्वपूर्ण सरकारी एवं सार्वजनिक क्षेत्र के संगठन / Important Government and Public Sector Organizations of India",
          "करंट जीके आदि। / Current GK etc.",
        ],
      },
      {
        name: "गणित (Maths)",
        topics: [
          "संख्या पद्धति / Number System",
          "सरलीकरण / Simplification",
          "दशमलव और भिन्न / Decimals and Fraction",
          "महत्त्तम समापवर्तक और लघुत्तम समापवर्तक / Highest common factor and lowest common multiple",
          "अनुपात और समानुपात / Ratio and Proportion",
          "भागीदारी / Partnership",
          "प्रतिशतता / Percentage",
          "लाभ और हानि / Profit and Loss",
          "छूट / Discount",
          "बीज गणित / Algebra",
          "साधारण ब्याज / Simple interest",
          "चक्रवृद्धि ब्याज / Compound interest",
          "ज्‍यामिति / Geometry",
          "त्रिकोणमिति / Trigonometry / ऊँचाई एवं दूरी / Height and Distance",
          "औसत / Average",
          "समय और कार्य / Time and Work",
          "समय और दूरी / Time and Distance",
          "DI",
          "क्षेत्रफल / Mensuration / 2D & 3D",
          "सांख्यिकी / Statistics",
          "नल एवं टंकी / Pipe & Cistern",
          "वर्ग मूल / Square Root",
          "आयु / Age",
          "बहुपद और समीकरण / Polynomials and Equations",
          "इत्‍यादि / etc",
        ],
      },
      {
        name: "सामान्य बुद्धिमता एवं तर्क ( General Intelligence and Reasoning)",
        topics: [
          "वर्णमाला / Alphabet",
          "कोडिंग-डिकोडिंग / Coding-Decoding",
          "सादृश्य / Analogy",
          "वर्गीकरण / Classification",
          "अक्षर, संख्या एवं मिश्रण श्रृंखला / Letter, Number & Mix Series",
          "न्यायवाक्य / Syllogism",
          "दिशा एवं दूरी / Direction & Distance",
          "रक्‍त संबंध / Blood Relation",
          "कैलेंडर / Calendar",
          "वेन आरेख / Venn Diagram",
          "गणितीय संक्रिया / Mathematical Operation",
          "जंबलिंग / Jumbling",
          "दर्पण छवि / Mirror Image",
          "श्रेणीबद्ध / Ranking",
          "आकृति की गिनती / Counting Of Figure",
          "गैर मौखिक श्रृंखला / Non Verbal Series",
          "बैठक व्यवस्था / Seating Arrangement",
          "सन्निहित आकृति / Embedded Figure",
          "कथन एवं कार्यवाही / Statement & Action",
          "कथन एवं निष्कर्ष / Statement & Conclusion",
          "कथन एवं तर्क, मान्यता / Statement & Argument, Assumption",
          "डेटा पर्याप्तता / Data Sufficiency",
          "पहेली / Puzzle",
          "घड़ी / Clock",
          "पासा, घन और घनाभ / Dice, Cube & Cuboid",
          "इत्‍यादि / etc.",
        ],
      },
    ],
  },
  notes: [
    "दस्तावेज़ सत्यापन (डीवी) / Document Verification (DV)",
    "मेडिकल परीक्षा / Medical Examination (ME)",
    "Computer Based Aptitude Test (CBAT) Only for candidates who have opted for Traffic Assistant and Station Master",
  ],
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
    image: "mppeb/mppsc-prelims-2025.jpeg",
    description: "MPPSC Prelims - 2025 (Online Test Series 2.0)",
    price: "₹499",
    button: "Buy Now",
    background: "bg-teal-600",
    link: "https://live.winnersinstitute.in/test-series/454-mppsc-prelims-2025-online-test-series-20",
  },
];
export const largeScreenTestSeries = [
  {
    image: "mppeb/women-supervisor-square.jpeg",
    description: "म.प्र. महिला पर्यवेक्षक TEST SERIES 2025",
    price: "₹199",
    button: "Buy Now",
    background: "bg-blue-900",
    link: "https://live.winnersinstitute.in/test-series/365--test-series-2025",
  },
  {
    image: "mppeb/mptet-group-2.jpeg",
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
