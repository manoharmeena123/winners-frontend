export const ibpsPoData = {
  title: "IBPS PO 2025: Notification Date Out, Registration, Exam Date",
  intro: `
       The IBPS PO 2025 is organized by the Institute of Banking Personnel Selection (IBPS) for the recruitment of Probationary Officers. The IBPS PO 2025 Notification will be released on 1st August 2025 on the official website www.ibps.in. Check complete details about the IBPS PO Exam including age limit, qualification, registration process, exam date, and other information shared on this page.
        `,
  content: `
        The IBPS PO Exam is an annual national-level exam. For the FY 2025-26, the IBPS PO 2025 Notification will be released on 1st August 2025 on the official IBPS website at www.ibps.in. Candidates will be able to register for the Probationary Officer posts from the same day onwards, and the registration will continue until 31st August 2025. Get complete details about the IBPS PO 2025 Exam, Notification, Application Form, Exam Date, Selection Process, and other information here. Bookmark this page for the latest updates about the recruitment cycle.
        `,
  officialWebsite: "https://www.ibps.in",
};

export const tableOfContentsData = [
  {
    title: "What is IBPS PO Exam?",
    link: "#what-is-ibps-po-exam",
  },
  {
    title: "IBPS PO 2025 Syllabus",
    link: "#ibps-po-2025-syllabus",
    subItems: [
      {
        title: "Preliminary Exam Syllabus",
        link: "#preliminary-exam-syllabus",
      },
      {
        title: "Mains Exam Syllabus",
        link: "#mains-exam-syllabus",
      },
      {
        title: "IBPS PO & SBI PO Prelims Syllabus",
        link: "#ibps-po-sbi-po-prelims-syllabus",
      },
      {
        title: "IBPS PO & SBI PO Mains Syllabus",
        link: "#ibps-po-sbi-po-mains-syllabus",
      },
    ],
  },
  {
    title: "Frequently Asked Questions about IBPS PO 2025",
    link: "#frequently-asked-questions-about-ibps-po-2025",
  },
];

export const ipbsExamData = {
  about: {
    title: "What is IBPS PO Exam?",
    content: `
            The IBPS PO, or Institute of Banking Personnel Selection Probationary Officer Exam, is a national-level examination conducted annually to recruit Probationary Officers for various public sector banks in India. The exam consists of three stages: Preliminary Exam, Main Exam, and Interview. Candidates who qualify in all three stages are selected for the post of Probationary Officer. The exam tests candidates on various subjects including quantitative aptitude, reasoning ability, English language, and general awareness. The IBPS PO exam is highly competitive and requires thorough preparation.
            `,
  },
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "What is IBPS PO Exam?",
        answer: `
                The IBPS PO (Probationary Officer) exam is a national-level test conducted by the Institute of Banking Personnel Selection 
                to recruit candidates for the post of Probationary Officers in various public sector banks in India. It includes multiple 
                stages such as Preliminary, Main, and Interview, assessing quantitative aptitude, reasoning, English, and general awareness.
            `,
      },
      {
        question: "What is the IBPS PO 2025 Notification release date?",
        answer: `The IBPS PO 2025 Notification will be released on 1st August 2025.`,
      },
      {
        question: "What is the selection process for IBPS PO 2025?",
        answer: `
                The IBPS PO 2025 Selection process includes Preliminary Exam, Main Exam, and Interview.
            `,
      },
      {
        question: "Is there a negative marking in the IBPS PO Exam?",
        answer: `
                Yes, there is a negative marking of 0.25 mark for each wrong answer marked in both Preliminary and Main exams.
            `,
      },
      {
        question: "Who can apply for the IBPS PO Exam?",
        answer: `
                Candidates who have a Bachelor's degree can apply for the post given that they are within the age limit of 20-30 years.
            `,
      },
      {
        question: "When is the IBPS PO Preliminary Exam 2025?",
        answer: `The IBPS PO Preliminary Exam Date 2025 is expected to be in October 2025.`,
      },
    ],
  },
  syllabus: {
    title: "IBPS PO 2025 Syllabus",
    content: `
      The IBPS PO 2025 Syllabus is divided into three main sections: Preliminary Exam, Main Exam, and Interview. Each section tests different skills and knowledge areas. The Preliminary Exam includes English Language, Quantitative Aptitude, and Reasoning Ability. The Main Exam covers Reasoning & Computer Aptitude, General/Economy/Banking Awareness, English Language, Data Analysis & Interpretation, and English Language (Letter Writing & Essay). The Interview assesses the candidate's personality, communication skills, and overall suitability for the banking sector.
      `,
  },
  prelimsSyllabus: {
    title: "Preliminary Exam Syllabus",
    tableTitle: "PRELIMS",
    examData: [
      { id: 1, section: "English", questions: 30, marks: 30 },
      { id: 2, section: "Maths", questions: 35, marks: 35 },
      { id: 3, section: "Reasoning", questions: 35, marks: 35 },
    ],
    totalQuestions: 100,
    totalMarks: 100,
  },
  mainsData: {
    title: "Mains Exam Syllabus",
    tableTitle: "MAINS",
    sections: [
      {
        name: "Reasoning & Computer Aptitude",
        sbiQuestions: 40,
        ibpsQuestions: 45,
        sbiMarks: 50,
        ibpsMarks: 50,
        sbiTime: "50 Minute",
        ibpsTime: "60 Minute",
      },
      {
        name: "Economics/Banking Awareness",
        sbiQuestions: 50,
        ibpsQuestions: 40,
        sbiMarks: 60,
        ibpsMarks: 40,
        sbiTime: "45 Minute",
        ibpsTime: "35 Minute",
      },
      {
        name: "English Language",
        sbiQuestions: 35,
        ibpsQuestions: 35,
        sbiMarks: 40,
        ibpsMarks: 40,
        sbiTime: "40 Minute",
        ibpsTime: "40 Minute",
      },
      {
        name: "Data Analysis And Interpretation",
        sbiQuestions: 30,
        ibpsQuestions: 35,
        sbiMarks: 50,
        ibpsMarks: 60,
        sbiTime: "45 Minute",
        ibpsTime: "45 Minute",
      },
    ],
    total: {
      sbiQuestions: 155,
      ibpsQuestions: 200,
      sbiMarks: 200,
      ibpsMarks: "—",
      timeAllotted: "3 Hours",
    },
    descriptive: {
      title: "DESCRIPTIVE (English – Letter Writing & Essay)",
      questions: 2,
      marks: 25,
      time: "30 Minute",
    },
  },

  syllabusData: {
    title: "  IBPS PO & SBI PO Prelims Syllabus",
    tableData: [
      {
        section: "Quantitative Aptitude",
        topics: [
          "Simplification/Approximation",
          "Profit & Loss",
          "Mixtures & Alligations",
          "Permutation, Combination & Probability",
          "Work & Time",
          "Sequence & Series",
          "Simple Interest & Compound Interest",
          "Surds & Indices",
          "Mensuration - Cylinder, Cone, Sphere",
          "Time & Distance",
          "Data Interpretation",
          "Ratio & Proportion",
          "Number Systems",
          "Percentage",
        ],
      },
      {
        section: "Reasoning",
        topics: [
          "Alphanumeric Series",
          "Directions",
          "Logical Reasoning",
          "Data Sufficiency",
          "Ranking & Order",
          "Alphabet Test",
          "Seating Arrangement",
          "Coded Inequalities",
          "Puzzle",
          "Syllogism",
          "Blood Relations",
          "Coding-Decoding",
          "Input-Output",
          "Tabulation",
        ],
      },
      {
        section: "English",
        topics: [
          "Reading Comprehension",
          "Fill in the blanks",
          "Cloze Test",
          "Para jumbles",
          "Vocabulary",
          "Paragraph Completion",
          "Multiple Meaning/Error Spotting",
          "Sentence Completion",
          "Tenses Rules",
        ],
      },
    ],
  },
  syllabusData2: {
    title: "IBPS PO & SBI PO Mains Syllabus",
    tableData: [
      {
        section: "Data Analysis & Interpretation",
        topics: [
          "Tabular Graph",
          "Line Graph",
          "Bar Graph",
          "Charts & Tables",
          "Missing Case DI",
          "Radar Graph Caselet",
          "Probability",
          "Data Sufficiency",
          "Let it Case DI",
          "Permutation and Combination",
          "Pie Charts",
        ],
      },
      {
        section: "Reasoning",
        topics: [
          "Verbal Reasoning",
          "Syllogism",
          "Circular Seating Arrangement",
          "Linear Seating Arrangement",
          "Double Lineup",
          "Scheduling",
          "Input Output",
          "Blood Relations",
          "Directions and Distances",
          "Ordering and Ranking",
          "Data Sufficiency",
          "Coding and Decoding",
          "Code Inequalities",
          "Course of Action",
          "Critical Reasoning",
        ],
      },
      {
        section: "General/Economy/Banking Awareness",
        topics: [
          "Current Affairs",
          "Financial Awareness",
          "General Knowledge",
          "Static Awareness",
          "Banking Terminologies Knowledge",
          "Banking Awareness",
          "Principles of Insurance",
        ],
      },
      {
        section: "English Language",
        topics: [
          "Reading Comprehension",
          "Grammar",
          "Verbal Ability",
          "Vocabulary",
          "Sentence Improvement",
          "Word Association",
          "Para Jumbles",
          "Error Spotting",
          "Cloze Test",
          "Fill in the blanks",
        ],
      },
      {
        section: "Computer",
        topics: [
          "Internet",
          "Memory",
          "Keyboard Shortcuts",
          "Computer Abbreviation",
          "Microsoft Office",
          "Computer Hardware",
          "Computer Software",
          "Computer Fundamentals/Terminologies",
          "Networking",
          "Number System",
          "Operating System",
          "Basic of Logic Gates",
        ],
      },
    ],
  },
};

export const classes = [
  {
    image: "banking/banking-foundation.jpeg",
    description: "Banking Foundation Combo Online Course (CBF1224)",
    price: "₹1299",
    button: "Buy Now",
    background: "bg-blue-900",
    link: "https://live.winnersinstitute.in/courses/478-banking-foundation-combo-online-course-cbf1224",
  },
  {
    image: "banking/sbi-po.jpeg",
    description: "SBI PO Pre+Mains Complete Online Course (SBIPM0324)",
    price: "₹1499",
    button: "Buy Now",
    background: "bg-green-600",
    link: "https://live.winnersinstitute.in/courses/368-sbi-po-premains-complete-online-course-sbipm0324",
  },
  {
    image: "banking/banking-foundation.jpeg",
    description: "IBPS PO Complete Online Course (IPPM0324)",
    price: "₹1299",
    button: "Buy Now",
    background: "bg-teal-600",
    link: "https://live.winnersinstitute.in/courses/371-ibps-po-complete-online-course-ippm0324",
  },
];

export const smallScreenClasses = [
  {
    image: "banking/banking-foundation.jpeg",
    description: "Banking Foundation Combo Online Course (CBF1224)",
    price: "₹1299",
    button: "Buy Now",
    background: "bg-blue-900",
    link: "https://live.winnersinstitute.in/courses/478-banking-foundation-combo-online-course-cbf1224",
  },
  {
    image: "banking/sbi-po.jpeg",
    description: "SBI PO Pre+Mains Complete Online Course (SBIPM0324)",
    price: "₹1499",
    button: "Buy Now",
    background: "bg-green-600",
    link: "https://live.winnersinstitute.in/courses/368-sbi-po-premains-complete-online-course-sbipm0324",
  },
  {
    image: "banking/banking-foundation.jpeg",
    description: "IBPS PO Complete Online Course (IPPM0324)",
    price: "₹1299",
    button: "Buy Now",
    background: "bg-teal-600",
    link: "https://live.winnersinstitute.in/courses/371-ibps-po-complete-online-course-ippm0324",
  },
];
export const largeScreenClasses = [
  {
    image: "https://appx-content-v2.classx.co.in/paid_course3/2025-01-01-0.6767091413939894.jpg",
    description: "Banking Foundation Combo Online Course (CBF1224)",
    price: "₹1299",
    button: "Buy Now",
    background: "bg-blue-900",
    link: "https://live.winnersinstitute.in/courses/478-banking-foundation-combo-online-course-cbf1224",
  },
  {
    image: "https://appx-content-v2.classx.co.in/paid_course3/2025-01-02-0.2102024138201053.jpeg",
    description: "SBI PO Pre+Mains Complete Online Course (SBIPM0324)",
    price: "₹999",
    button: "Buy Now",
    background: "bg-green-600",
    link: "https://live.winnersinstitute.in/courses/368-sbi-po-premains-complete-online-course-sbipm0324",
  },
  {
    image: "https://appx-content-v2.classx.co.in/paid_course3/2025-01-01-0.09604143728538528.jpg",
    description: "IBPS PO Complete Online Course (IPPM0324)",
    price: "₹799",
    button: "Buy Now",
    background: "bg-teal-600",
    link: "https://live.winnersinstitute.in/courses/371-ibps-po-complete-online-course-ippm0324",
  },
];