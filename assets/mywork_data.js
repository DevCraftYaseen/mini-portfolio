import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'

// Project data array with one real project and five dummy projects
const workData = [
  {
    id: 1,
    title: "Modern Currency Exchanger",
    description:
      "A sleek, user-friendly application that allows users to convert between different currencies with real-time exchange rates. The app features an intuitive interface with interactive elements and responsive design.",
    keyPoints: [
      "Real-time currency conversion with latest exchange rates",
      "Support for 170+ global currencies",
      "Interactive currency selection with search functionality",
      "Historical exchange rate charts and data visualization",
      "Responsive design that works on all devices",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "API Integration", "Chart.js"],
    uniqueFeature:
      "Implementing efficient API caching to minimize requests while ensuring exchange rate data remains current. The solution involved a custom caching layer with time-based invalidation to balance data freshness with performance.",
    image: "/images/projects/currency-exchanger.jpg",
    liveLink: "https://modern-currency-exchanger.vercel.app",
    githubLink: "https://github.com/DevCraftYaseen/modern-currency-exchanger",
    image: project1_img,
  },
  {
    id: 2,
    title: "Movie Dashboard",
    description:
      "Clean and professional dashboard design for movie enthusiasts to track, rate, and discover new films.",
    keyPoints: [
      "Personalized movie recommendations based on user preferences",
      "Real-time updates on new releases and trending films",
      "Interactive watchlist with progress tracking",
      "Social sharing capabilities for movie reviews",
    ],
    technologies: ["React", "Redux", "Node.js", "MongoDB", "TMDB API"],
    uniqueFeature:
      "Custom algorithm that analyzes viewing patterns to suggest movies that match user's unique taste profile.",
    image: "/images/projects/movie-dashboard.jpg",
    liveLink: "https://movie-dashboard.example.com",
    githubLink: "https://github.com/example/movie-dashboard",
    image: project2_img,
  },
  {
    id: 3,
    title: "VR Experience Platform",
    description:
      "Own a piece of the digital universe with this immersive VR platform designed for gaming and educational experiences.",
    keyPoints: [
      "High-fidelity 3D environments with realistic physics",
      "Cross-platform compatibility (Oculus, Vive, Index)",
      "Multiplayer capabilities with real-time interaction",
      "Custom environment builder for user-generated content",
    ],
    technologies: ["Three.js", "WebXR", "JavaScript", "WebGL", "Socket.io"],
    uniqueFeature:
      "Proprietary rendering technique that achieves console-quality graphics in a web browser environment.",
    image: "/images/projects/vr-experience.jpg",
    liveLink: "https://vr-experience.example.com",
    githubLink: "https://github.com/example/vr-experience",
    image: project3_img,
  },
  {
    id: 4,
    title: "Dental Clinic Website",
    description:
      "Bring the bright smile with healthy dental care through this modern, accessible website for a dental practice.",
    keyPoints: [
      "Online appointment scheduling system",
      "Interactive dental care guides and resources",
      "Patient portal for medical history and treatment plans",
      "Before/after gallery with filtering options",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Strapi CMS", "Stripe"],
    uniqueFeature:
      "3D interactive tooth model that allows patients to identify and learn about specific dental issues.",
    image: "/images/projects/dental-website.jpg",
    liveLink: "https://dental-clinic.example.com",
    githubLink: "https://github.com/example/dental-clinic",
    image: project4_img,
  },
  {
    id: 5,
    title: "Agency & Portfolio WordPress Theme",
    description:
      "Professional WordPress theme for creative agencies and freelancers to showcase their work and services.",
    keyPoints: [
      "Customizable portfolio layouts and filtering",
      "Integrated blog with rich media support",
      "Client testimonial and case study sections",
      "Contact forms with custom field builder",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "SCSS", "Gutenberg Blocks"],
    uniqueFeature:
      "Custom page builder with drag-and-drop interface that requires zero coding knowledge while maintaining performance.",
    image: "/images/projects/portfolio-theme.jpg",
    liveLink: "https://portfolio-theme.example.com",
    githubLink: "https://github.com/example/portfolio-theme",
    image: project5_img,
  },
  {
    id: 6,
    title: "Interactive Learning Platform",
    description:
      "Comprehensive e-learning platform with interactive courses, quizzes, and progress tracking for students and educators.",
    keyPoints: [
      "Adaptive learning paths based on student performance",
      "Interactive exercises and real-time feedback",
      "Collaborative learning spaces for group projects",
      "Comprehensive analytics for educators",
    ],
    technologies: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
    uniqueFeature:
      "AI-powered learning assistant that identifies knowledge gaps and automatically generates personalized practice exercises.",
    image: "/images/projects/education-platform.jpg",
    liveLink: "https://education-platform.example.com",
    githubLink: "https://github.com/example/education-platform",
    image: project6_img,
  },
]

export default workData
