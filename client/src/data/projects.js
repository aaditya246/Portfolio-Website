export const projects = [
  {
    id: 1,
    title: 'ZestFuse',
    subtitle: 'Digital Canteen Ordering System',
    event: 'Avishkar Techfest 2025',
    description:
      'Full-stack real-time canteen management platform with multi-role access, live order tracking, and integrated payments — built for MNNIT Allahabad campus use.',
    highlights: [
      'Engineered a responsive multi-role UI (Admin, Staff, Customer) using React.js, Tailwind CSS, and Bootstrap, ensuring seamless UX across all device sizes.',
      'Architected real-time order tracking using WebSockets, enabling instant status updates from kitchen to customer without page refresh.',
      'Implemented secure role-based access control (RBAC) with OAuth 2.0 and JSON Web Token (JWT) session management, supporting 3 distinct user roles.',
      'Integrated Stripe API for seamless online payment processing, handling multiple transaction types with webhook-based event confirmation.',
      'Delivered a full admin dashboard enabling canteen owners to manage menus, monitor live orders, and update item availability in real time.',
      'Built a dynamic product catalog with search and filter capabilities, reducing item discovery time for end users.',
    ],
    techStack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Bootstrap',
      'Tailwind CSS',
      'JWT',
      'WebSockets',
      'Stripe API',
      'OAuth 2.0',
    ],
    githubUrl: 'https://github.com/aaditya246/ZestFuse',
    liveUrl: 'https://zest-fuse.vercel.app/',
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 2,
    title: 'Medi-help',
    subtitle: 'Doctor Consultation Platform',
    event: 'May 2025',
    description:
      'Developed a full-stack telemedicine platform that allows patients to search for doctors, book appointments, and make secure online payments.',
    highlights: [
      'Integrated Socket.IO for real-time appointment management, enabling live booking, confirmation, cancellation, and status synchronization.',
      'Implemented secure multi-method authentication (OAuth 2.0, OTP login) with JWT-based session management and role-based access for patients, doctors, and admins.',
      'Architected a RESTful API backend using Node.js and Express.js, supporting all CRUD operations for appointment booking, doctor profiles, and consultation records.',
      'Built a specialisation-based doctor search with filter functionality, enabling patients to find relevant doctors quickly across multiple medical categories.',
      'Integrated a secure payment gateway for consultation fee transactions, with server-side validation and payment status tracking.',
      'Designed a responsive Doctor Dashboard using React.js and Tailwind CSS for appointment management and initiating video consultations from a single interface.',
    ],
    techStack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'OAuth 2.0',
    ],
    githubUrl: 'https://github.com/aaditya246/Medi-help',
    liveUrl: 'https://medi-help-mu.vercel.app/',
    featured: true,
    category: 'Full-Stack',
  },
]

// Categories derived from project data, used by ProjectFilter component
export const projectCategories = ['All', 'Full-Stack']