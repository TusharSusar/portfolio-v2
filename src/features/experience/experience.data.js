// ⚠️ PLACEHOLDER — you haven't sent experience data yet.
// Structure is final and matches the timeline design (title > company/date > bullets).
// Replace values below with your real roles.

export const experience = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Motwane Digital',
    logo: null, // pass an image import, or leave null to fallback to initials avatar
    duration: { start: 'Aug 2026', end: 'Present' },
    location: 'Onsite',
    type: 'Full-time', // Full-time | Freelance | Internship | Contract
    bullets: [
      'Developed interactive React.js dashboards for real-time data visualization of industrial asset metrics, trend charts, health indicators, and performance analytics',
      'Collaborated with cross-functional teams to improve UI responsiveness and data readability, enhancing overall user experience for field engineers and monitoring operators.',
    ],
    techUsed: ['React', 'Firebase', 'Tailwind CSS', 'Tanstack Query', 'Zustand', 'Charts Libs'],
  },
  {
    id: 2,
    role: 'Intern',
    company: 'Motwane Digital',
    logo: null, // pass an image import, or leave null to fallback to initials avatar
    duration: { start: 'June 2026', end: 'Aug 2026' },
    location: 'Onsite',
    type: 'Full-time', // Full-time | Freelance | Internship | Contract
    bullets: [
      'Built reusable React.js chart components to display time-series  sensor data, enabling stakeholders to track health trends across configurable time ranges.',
      'Assisted in designing responsive frontend layouts for cloud-connected monitoring interfaces, ensuring consistent performance across desktop and tablet viewports.',
    ],
    techUsed: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    id: 3,
    role: 'Cloud Computing Intern',
    company: 'Sumago Infotech',
    logo: null, // pass an image import, or leave null to fallback to initials avatar
    duration: { start: 'Aug 2025', end: 'Oct 2025' },
    location: 'Onsite',
    type: 'Full-time', // Full-time | Freelance | Internship | Contract
    bullets: [
      'Architected AWS infrastructure (EC2, VPC) with least-privilege IAM policies, cutting provisioning time by 40% and achieving 100% security compliance.',
      'Deployed a Spring Boot backend on secure EC2 instances using custom VPC networking and SSH to validate real-world production readiness.',
    ],
    techUsed: ['AWS', 'Server Config', 'Aws S3', 'AWS EC2', 'AMI', 'Aws Load Balancer'],
  },
  {
    id: 4,
    role: 'Java Full stack Intern',
    company: 'Softcrowd Technologies',
    logo: null, // pass an image import, or leave null to fallback to initials avatar
    duration: { start: 'Dec 2024', end: 'Jan 2025' },
    location: 'Onsite',
    type: 'Full-time', // Full-time | Freelance | Internship | Contract
    bullets: [
      'Built full-featured social media application in React.js achieving 30\% improvement in data retrieval speed through optimized component architecture and efficient state management.',
    ],
    techUsed: [
      'Java',
      'Servlets',
      'Spring boot',
      'hibernate',
      'React',
      'JavaScript',
      'Firebase',
      'Tailwind CSS',
    ],
  },
];
