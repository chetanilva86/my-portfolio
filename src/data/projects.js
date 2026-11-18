import snippyImage from '../assets/snippy2.png'
import libraryImage from '../assets/library-project.png'
import blogifyImage from '../assets/BLOGIFY.png'

// Add new projects by copying one object and updating its details.
// Put the project screenshot in src/assets and import it at the top of this file.
const projects = [
  {
    title: 'Snippy',
    category: 'Full Stack Application',
    description: 'A URL shortening platform with secure authentication, Google Auth, JWT, password hashing, QR code generation, and protected user-specific URL management.',
    techStack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'EJS'],
    image: snippyImage,
    githubUrl: 'https://github.com/chetanilva86/snippy.git',
    liveUrl: 'https://snippy-ip1d.onrender.com/',
  },
  {
    title: 'Library Management System',
    category: 'Web Application',
    description: 'A digital library platform to manage book inventory, borrowing, and returns, with book search, availability tracking, and organized records.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    image: libraryImage,
    githubUrl: 'https://github.com/chetanilva86/Library-Management-system-.git',
  },
  {
    title: 'Blogify',
    category: 'Full Stack Application',
    description: 'A blogging platform to write, publish, edit, and manage posts with Google authentication, JWT, and personalized content management.',
    techStack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'CSS'],
    image: blogifyImage,
    githubUrl: 'https://github.com/chetanilva86/Blogify.git',
  },
]

export default projects
