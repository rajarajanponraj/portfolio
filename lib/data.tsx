import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const personalInfo = {
    name: "Rajarajan Ponraj",
    role: "Flutter App Developer & Desktop Support Engineer",
    tagline: "Building seamless cross-platform experiences & resolving technical complexitites.",
    about: `I am an enthusiastic Flutter App Developer and Desktop Support System Engineer with a passion for building high-performance mobile applications and ensuring system stability. 
  
  With experience in the full mobile development lifecycle—from UI design to Firebase integration and State Management (GetX, Riverpod, Bloc)—I create user-friendly apps that solve real-world problems. 
  
  Simultaneously, my background in IT support has sharpened my troubleshooting skills, making me adaptable and efficiency-driven in any technical environment. I thrive in agile teams and am always eager to learn new technologies.`,
    email: "ap.raja1234@gmail.com",
    secondaryEmail: "rajarajan992000@outlook.com",
    phone: "+91-8883106120",
    location: "Coimbatore, Tamil Nadu",
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/rajarajanponraj",
            icon: <Github className="w-5 h-5" />,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/rajarajan-p-68534a219",
            icon: <Linkedin className="w-5 h-5" />,
        },
        {
            name: "Email",
            url: "mailto:ap.raja1234@gmail.com",
            icon: <Mail className="w-5 h-5" />,
        },
    ],
};

export const skills = [
    { name: "Flutter", level: 95 },
    { name: "Dart", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "REST APIs", level: 85 },
    { name: "Python", level: 75 },
    { name: "Web Development", level: 70 },
    { name: "Troubleshooting", level: 90 },
    { name: "Linux / IT Support", level: 80 },
    { name: "Git / GitHub", level: 85 },
    { name: "UI/UX Design", level: 75 },
];

export const experience = [
    {
        role: "Desktop Support System Engineer",
        company: "Sri Krishna College of Technology",
        location: "Coimbatore, Tamil Nadu",
        date: "2024 - Present",
        description: [
            "Handling desktop issue support and hardware troubleshooting.",
            "Managing desktop maintenance and software installations.",
            "Utilizing ticketing systems like Zendesk and Jira for issue tracking.",
            "Working with Linux operating systems and ensuring network stability.",
        ],
    },
    {
        role: "Flutter Developer",
        company: "App Innovation Technology",
        location: "Coimbatore, Tamil Nadu",
        date: "2022 - 2024",
        description: [
            "Developed cross-platform applications using Flutter and Dart.",
            "Integrated Firebase for backend services (Auth, Firestore, Cloud Messaging).",
            "Implemented complex state management using GetX, Riverpod, and Bloc.",
            "Collaborated using Agile methodology and version control with Git/Gitea.",
            "Integrated Stripe payment gateway and REST APIs.",
        ],
    },
    {
        role: "Electronics Engineer",
        company: "JSUN Color Sorter Pvt Ltd",
        location: "Coimbatore, Tamil Nadu",
        date: "2023 - 2024",
        description: [
            "Maintained Sortex machines and handled electronics troubleshooting.",
            "Operations management and variable sorting adjustments.",
            "Resolved tickets related to machine faults and optimized performance.",
        ],
    },
];

export const projects = [
    {
        title: "AurumTile",
        description: "A comprehensive Real Estate application built with Flutter and Firebase.",
        tech: ["Flutter", "Firebase", "Agora", "Google Maps"],
        features: [
            "Complex Firestore database queries for property listings.",
            "Dynamic links for seamless app sharing.",
            "Integrated Video calling using Agora SDK for agent-client communication.",
        ],
        link: "#", // Add live link if available
        github: "#",
    },
    {
        title: "Mentor Social",
        description: "A Q&A platform connecting mentees with mentors for 1-on-1 sessions.",
        tech: ["Flutter", "Stripe", "Dart", "Web"],
        features: [
            "Call scheduling system for mentorship sessions.",
            "Stripe payment integration for paid sessions.",
            "In-app purchases and subscription models.",
            "Cross-platform support (Mobile & Web).",
        ],
        link: "https://play.google.com/store/apps/details?id=com.mentor.app",
        github: "#",
    },
    {
        title: "Qshot",
        description: "A powerful video editing application with advanced filter capabilities.",
        tech: ["Flutter", "FFmpeg", "Canvas API"],
        features: [
            "Video editing functionalities: rotate, flip, trim.",
            "Image filters and canvas access integration.",
            "Phone file access and media management.",
        ],
        link: "#",
        github: "#",
    },
    {
        title: "QA Measures",
        description: "Health monitoring application integrating with external measurement APIs.",
        tech: ["Flutter", "REST API", "HealthKit"],
        features: [
            "API calls to fetch health measurements.",
            "Detection of health conditions based on data.",
            "Patient history management and storage.",
        ],
        link: "#",
        github: "#",
    },
    {
        title: "Voting App",
        description: "Digital election system for schools to manage voting processes.",
        tech: ["Flutter", "Firebase"],
        features: [
            "Secure voting mechanism for school elections.",
            "Real-time voting count and result declaration.",
            "Admin panel for managing candidates and voters.",
        ],
        link: "#",
        github: "#",
    },
];

export const education = [
    {
        degree: "B.E. in Electronics and Communication Engineering",
        institution: "Anna University Regional Campus, Coimbatore",
        date: "2018 - 2022",
        grade: "77.4%",
    },
    {
        degree: "HSC (12th Standard)",
        institution: "Kongu Matric Higher Secondary School, Tirupur",
        date: "2016 - 2018",
        grade: "89%",
    },
    {
        degree: "SSLC (10th Standard)",
        institution: "Kongu Matric Higher Secondary School, Tirupur",
        date: "2016",
        grade: "96.4%",
    },
];

export const certifications = [
    "Diploma in Computer Application (DCA)",
    "Diploma in Desktop Publishing (DDTP)",
    "The Complete Web Development Bootcamp (Dr. Angela Yu)",
    "The Complete Flutter Development Bootcamp 2021 (Dr. Angela Yu)",
    "Cisco CCNA 200-301 - The Complete Guide",
    "Adobe Illustrator CC: Essential Training",
];
