










  // resumeAnalysis.js
export const jobRoles = [
  // 🖥️ IT (Tech) Roles
  // Software Development & Engineering (30)
  { 
    title: 'Software Engineer',
    icon: '👨‍💻',
    color: '#6366f1',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'Git', 'REST APIs', 'SQL'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Full Stack Developer',
    icon: '💻',
    color: '#4ade80',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'MongoDB'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Backend Developer',
    icon: '🖥️',
    color: '#f43f5e',
    skills: ['Node.js', 'Python', 'Java', 'SQL', 'REST APIs'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Frontend Developer',
    icon: '🌐',
    color: '#ef4444',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Web Developer',
    icon: '🌍',
    color: '#60a5fa',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'WordPress'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Mobile App Developer',
    icon: '📱',
    color: '#8b5cf6',
    skills: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'iOS Developer',
    icon: '🍎',
    color: '#f97316',
    skills: ['Swift', 'Objective-C', 'Xcode', 'iOS SDK'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Android Developer',
    icon: '🤖',
    color: '#34d399',
    skills: ['Kotlin', 'Java', 'Android Studio', 'Material Design'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Game Developer',
    icon: '🎮',
    color: '#a78bfa',
    skills: ['C++', 'C#', 'Unity', 'Unreal Engine'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'AR/VR Developer',
    icon: '🕶️',
    color: '#facc15',
    skills: ['Unity', 'Unreal Engine', 'C#', '3D Modeling'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Embedded Systems Engineer',
    icon: '🔌',
    color: '#3b82f6',
    skills: ['C', 'C++', 'Assembly', 'RTOS'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Firmware Engineer',
    icon: '📟',
    color: '#06b6d4',
    skills: ['C', 'Embedded C', 'Microcontrollers', 'Hardware'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Software Architect',
    icon: '🏗️',
    color: '#a3e635',
    skills: ['System Design', 'Architecture', 'Microservices', 'Cloud'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'DevSecOps Engineer',
    icon: '🔐',
    color: '#f472b6',
    skills: ['DevOps', 'Security', 'CI/CD', 'Cloud'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Solutions Architect',
    icon: '🏢',
    color: '#60a5fa',
    skills: ['Architecture', 'Cloud', 'Enterprise Solutions'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Web3 Developer',
    icon: '🌐',
    color: '#9333ea',
    skills: ['Blockchain', 'Solidity', 'Ethereum', 'Smart Contracts'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'IT Consultant',
    icon: '💼',
    color: '#fbbf24',
    skills: ['IT Strategy', 'Consulting', 'Systems Analysis'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Software QA Engineer',
    icon: '🔍',
    color: '#f59e0b',
    skills: ['Testing', 'Selenium', 'QA', 'Automation'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Test Automation Engineer',
    icon: '🤖',
    color: '#f97316',
    skills: ['Automation', 'Selenium', 'Cypress', 'JavaScript'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Blockchain Developer',
    icon: '⛓️',
    color: '#10b981',
    skills: ['Blockchain', 'Solidity', 'Ethereum', 'Smart Contracts'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'UI/UX Designer',
    icon: '🎨',
    color: '#f59e0b',
    skills: ['Figma', 'Sketch', 'User Research', 'Prototyping'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'ERP Consultant',
    icon: '📊',
    color: '#10b981',
    skills: ['ERP', 'SAP', 'Oracle', 'Business Analysis'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Technical Writer',
    icon: '✍️',
    color: '#f472b6',
    skills: ['Technical Writing', 'Documentation', 'Technical Communication'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Chief Technology Officer (CTO)',
    icon: '👔',
    color: '#6b7280',
    skills: ['Leadership', 'Strategy', 'Technology Management'],
    salary: { low: '$100k', avg: '$150k', high: '$250k' }
  },
  { 
    title: 'IT Trainer',
    icon: '📚',
    color: '#facc15',
    skills: ['Training', 'Communication', 'Technical Skills'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'E-commerce Developer',
    icon: '🛒',
    color: '#3b82f6',
    skills: ['JavaScript', 'React', 'E-commerce', 'API Integration'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'IT Business Analyst',
    icon: '📈',
    color: '#34d399',
    skills: ['Business Analysis', 'Requirements Gathering', 'Documentation'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Data Engineer',
    icon: '🗄️',
    color: '#d97706',
    skills: ['SQL', 'ETL', 'Python', 'Big Data'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Systems Analyst',
    icon: '💡',
    color: '#f43f5e',
    skills: ['Systems Analysis', 'IT Strategy', 'Process Improvement'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Site Reliability Engineer',
    icon: '🔧',
    color: '#10b981',
    skills: ['DevOps', 'Monitoring', 'Automation', 'Cloud'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },

  // Data Science & AI (20)
  { 
    title: 'Data Scientist',
    icon: '📊',
    color: '#10b981',
    skills: ['Python', 'Machine Learning', 'SQL', 'Pandas', 'Statistics', 'Data Visualization', 'TensorFlow'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Machine Learning Engineer',
    icon: '🤖',
    color: '#3b82f6',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'Scikit-learn'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'AI Engineer',
    icon: '🧠',
    color: '#f59e0b',
    skills: ['Artificial Intelligence', 'Python', 'Deep Learning'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'NLP Engineer',
    icon: '💬',
    color: '#f97316',
    skills: ['NLP', 'Python', 'Machine Learning', 'NLP Libraries'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'AI Research Scientist',
    icon: '🔬',
    color: '#6366f1',
    skills: ['Research', 'AI', 'Machine Learning', 'Python'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Computer Vision Engineer',
    icon: '👁️',
    color: '#ef4444',
    skills: ['Computer Vision', 'OpenCV', 'Deep Learning', 'Python'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Data Analyst',
    icon: '📈',
    color: '#f59e0b',
    skills: ['SQL', 'Excel', 'Tableau', 'Data Visualization'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Business Intelligence Analyst',
    icon: '📊',
    color: '#34d399',
    skills: ['BI Tools', 'SQL', 'Data Visualization', 'Analytics'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Big Data Engineer',
    icon: '🗄️',
    color: '#d97706',
    skills: ['Big Data', 'Hadoop', 'Spark', 'SQL'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Data Architect',
    icon: '🏛️',
    color: '#a3e635',
    skills: ['Data Architecture', 'SQL', 'Big Data', 'NoSQL'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Quantitative Analyst',
    icon: '📉',
    color: '#10b981',
    skills: ['Mathematics', 'Statistics', 'Python', 'R'],
    salary: { low: '$65k', avg: '$95k', high: '$145k' }
  },
  { 
    title: 'Bioinformatics Scientist',
    icon: '🧬',
    color: '#3b82f6',
    skills: ['Bioinformatics', 'Python', 'R', 'Data Analysis'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Deep Learning Engineer',
    icon: '🧠',
    color: '#6366f1',
    skills: ['Deep Learning', 'TensorFlow', 'Keras', 'Python'],
    salary: { low: '$65k', avg: '$95k', high: '$145k' }
  },
  { 
    title: 'Predictive Analytics Specialist',
    icon: '🔮',
    color: '#ef4444',
    skills: ['Predictive Analytics', 'Python', 'R', 'Statistics'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Data Governance Analyst',
    icon: '📜',
    color: '#f59e0b',
    skills: ['Data Governance', 'Compliance', 'Data Management'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'AI Ethics Researcher',
    icon: '⚖️',
    color: '#a78bfa',
    skills: ['Ethics', 'AI', 'Research', 'Policy'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Statistical Programmer',
    icon: '📊',
    color: '#10b981',
    skills: ['Statistics', 'R', 'SAS', 'Python'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Cloud Data Engineer',
    icon: '☁️',
    color: '#3b82f6',
    skills: ['Cloud', 'Data Engineering', 'SQL', 'Python'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'MLOps Engineer',
    icon: '🤖',
    color: '#f97316',
    skills: ['MLOps', 'CI/CD', 'Machine Learning', 'Docker'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Research Data Analyst',
    icon: '🔍',
    color: '#f59e0b',
    skills: ['Data Analysis', 'Research', 'Excel', 'SQL'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },

  // Cloud Computing & DevOps (15)
  { 
    title: 'DevOps Engineer',
    icon: '☁️',
    color: '#3b82f6',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Cloud Engineer',
    icon: '☁️',
    color: '#60a5fa',
    skills: ['Cloud', 'AWS', 'Azure', 'GCP'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'AWS Engineer',
    icon: '☁️',
    color: '#f59e0b',
    skills: ['AWS', 'EC2', 'S3', 'Lambda'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Azure Engineer',
    icon: '☁️',
    color: '#2563eb',
    skills: ['Azure', 'Cloud', 'DevOps'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Google Cloud Engineer',
    icon: '☁️',
    color: '#0ea5e9',
    skills: ['Google Cloud', 'Cloud', 'DevOps'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Kubernetes Engineer',
    icon: '☁️',
    color: '#14b8a6',
    skills: ['Kubernetes', 'Docker', 'Containerization'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Cloud Security Engineer',
    icon: '🔒',
    color: '#f43f5e',
    skills: ['Cloud Security', 'AWS', 'Azure', 'GCP'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'CI/CD Engineer',
    icon: '🔄',
    color: '#a78bfa',
    skills: ['CI/CD', 'Jenkins', 'Git', 'Automation'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Site Reliability Engineer',
    icon: '🔧',
    color: '#10b981',
    skills: ['DevOps', 'Monitoring', 'Cloud'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Platform Engineer',
    icon: '🖥️',
    color: '#ef4444',
    skills: ['Platform', 'Infrastructure', 'Cloud'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Terraform Specialist',
    icon: '🌐',
    color: '#34d399',
    skills: ['Terraform', 'Infrastructure as Code', 'Cloud'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Infrastructure Engineer',
    icon: '🏗️',
    color: '#6366f1',
    skills: ['Infrastructure', 'Networking', 'Cloud'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Cloud Solutions Architect',
    icon: '🏢',
    color: '#f59e0b',
    skills: ['Cloud Architecture', 'AWS', 'Azure', 'GCP'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Virtualization Engineer',
    icon: '💽',
    color: '#a3e635',
    skills: ['Virtualization', 'VMware', 'Hyper-V'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Hybrid Cloud Engineer',
    icon: '☁️',
    color: '#3b82f6',
    skills: ['Hybrid Cloud', 'AWS', 'Azure'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },

  // Cybersecurity & IT Infrastructure (15)
  { 
    title: 'Cybersecurity Analyst',
    icon: '🔒',
    color: '#ef4444',
    skills: ['Security', 'SIEM', 'Risk Analysis'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Penetration Tester',
    icon: '🔍',
    color: '#f59e0b',
    skills: ['Penetration Testing', 'Security', 'Ethical Hacking'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Ethical Hacker',
    icon: '🦹‍♂️',
    color: '#10b981',
    skills: ['Ethical Hacking', 'Security', 'Vulnerability Assessment'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'IT Security Consultant',
    icon: '💼',
    color: '#6366f1',
    skills: ['Security', 'Consulting', 'Risk Management'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Network Security Engineer',
    icon: '🔐',
    color: '#3b82f6',
    skills: ['Network Security', 'Firewalls', 'VPN'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'SIEM Specialist',
    icon: '🖥️',
    color: '#f43f5e',
    skills: ['SIEM', 'Security Monitoring', 'Log Analysis'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Cryptography Engineer',
    icon: '🔏',
    color: '#a78bfa',
    skills: ['Cryptography', 'Encryption', 'Security'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'IT Auditor',
    icon: '📋',
    color: '#f59e0b',
    skills: ['Audit', 'Compliance', 'Risk Management'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Incident Response Analyst',
    icon: '🚨',
    color: '#ef4444',
    skills: ['Incident Response', 'Security', 'Forensics'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Forensic Analyst',
    icon: '🔍',
    color: '#3b82f6',
    skills: ['Forensics', 'Investigation', 'Security'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Identity & Access Management (IAM) Engineer',
    icon: '🔑',
    color: '#10b981',
    skills: ['IAM', 'Security', 'Access Control'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Threat Intelligence Analyst',
    icon: '⚠️',
    color: '#f59e0b',
    skills: ['Threat Intelligence', 'Security', 'Analysis'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Information Security Officer',
    icon: '👮‍♂️',
    color: '#6366f1',
    skills: ['Information Security', 'Policy', 'Compliance'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Risk & Compliance Analyst',
    icon: '⚖️',
    color: '#a3e635',
    skills: ['Risk Analysis', 'Compliance', 'Security'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Security Operations Center (SOC) Analyst',
    icon: '🛡️',
    color: '#3b82f6',
    skills: ['SOC', 'Monitoring', 'Security'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },

  // Networking & IT Support (10)
  { 
    title: 'Network Engineer',
    icon: '🌐',
    color: '#60a5fa',
    skills: ['Networking', 'Routing', 'Switching'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'System Administrator',
    icon: '🖥️',
    color: '#4ade80',
    skills: ['Linux', 'Windows', 'Server Management'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'IT Support Specialist',
    icon: '💁‍♂️',
    color: '#f59e0b',
    skills: ['Technical Support', 'Troubleshooting', 'Customer Service'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Linux Administrator',
    icon: '🐧',
    color: '#10b981',
    skills: ['Linux', 'Shell Scripting', 'Server Management'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Windows Server Administrator',
    icon: '🪟',
    color: '#2563eb',
    skills: ['Windows Server', 'Active Directory', 'PowerShell'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'IT Service Manager',
    icon: '📋',
    color: '#6366f1',
    skills: ['IT Service Management', 'ITIL', 'Customer Service'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Storage Engineer',
    icon: '💾',
    color: '#f43f5e',
    skills: ['Storage', 'SAN', 'NAS'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'IT Operations Manager',
    icon: '👨‍💼',
    color: '#a3e635',
    skills: ['Operations', 'Management', 'ITIL'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Wireless Network Engineer',
    icon: '📡',
    color: '#f59e0b',
    skills: ['Wireless', 'Networking', 'RF'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Cloud Networking Engineer',
    icon: '☁️',
    color: '#3b82f6',
    skills: ['Cloud Networking', 'AWS', 'Azure'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },

  // Emerging Tech & Specialized IT Roles (10)
  { 
    title: 'Quantum Computing Scientist',
    icon: '⚛️',
    color: '#10b981',
    skills: ['Quantum Computing', 'Research', 'Physics'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Internet of Things (IoT) Developer',
    icon: '🌐',
    color: '#4ade80',
    skills: ['IoT', 'Embedded Systems', 'Networking'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Augmented Reality (AR) Developer',
    icon: '🕶️',
    color: '#f97316',
    skills: ['AR', 'Unity', 'C#'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Virtual Reality (VR) Developer',
    icon: '🕶️',
    color: '#ef4444',
    skills: ['VR', 'Unity', 'C#'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'AI Prompt Engineer',
    icon: '🤖',
    color: '#a78bfa',
    skills: ['AI', 'Prompt Engineering', 'ChatGPT'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Robotics Engineer',
    icon: '🤖',
    color: '#10b981',
    skills: ['Robotics', 'C++', 'ROS'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Digital Twin Engineer',
    icon: '🖥️',
    color: '#3b82f6',
    skills: ['Digital Twin', 'IoT', 'Simulation'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: '3D Printing Engineer',
    icon: '🖨️',
    color: '#f59e0b',
    skills: ['3D Printing', 'CAD', 'Additive Manufacturing'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Computer Hardware Engineer',
    icon: '💻',
    color: '#6366f1',
    skills: ['Hardware', 'Circuit Design', 'Testing'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Chief Information Officer (CIO)',
    icon: '👔',
    color: '#6b7280',
    skills: ['Leadership', 'IT Strategy', 'Management'],
    salary: { low: '$100k', avg: '$150k', high: '$250k' }
  },

  // 💼 Non-IT Roles
  // Sales & Business Development (15)
  { 
    title: 'Sales Executive',
    icon: '💼',
    color: '#f59e0b',
    skills: ['Sales', 'Communication', 'Negotiation'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Business Development Manager',
    icon: '💼',
    color: '#10b981',
    skills: ['Business Development', 'Strategy', 'Networking'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Account Manager',
    icon: '📋',
    color: '#6366f1',
    skills: ['Account Management', 'Client Relations', 'Communication'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Customer Success Manager',
    icon: '😊',
    color: '#fbbf24',
    skills: ['Customer Success', 'Support', 'Communication'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Inside Sales Representative',
    icon: '📞',
    color: '#3b82f6',
    skills: ['Sales', 'Communication', 'CRM'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Key Account Manager',
    icon: '📋',
    color: '#a78bfa',
    skills: ['Key Accounts', 'Client Management', 'Strategy'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Territory Sales Manager',
    icon: '🌍',
    color: '#ef4444',
    skills: ['Sales', 'Strategy', 'Networking'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Channel Sales Manager',
    icon: '🔗',
    color: '#60a5fa',
    skills: ['Channel Sales', 'Partnerships', 'Negotiation'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Enterprise Sales Manager',
    icon: '🏢',
    color: '#6366f1',
    skills: ['Enterprise Sales', 'Strategy', 'Leadership'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Real Estate Agent',
    icon: '🏠',
    color: '#f97316',
    skills: ['Real Estate', 'Negotiation', 'Sales'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Retail Sales Associate',
    icon: '🛍️',
    color: '#f59e0b',
    skills: ['Retail', 'Customer Service', 'Sales'],
    salary: { low: '$30k', avg: '$50k', high: '$80k' }
  },
  { 
    title: 'Insurance Sales Agent',
    icon: '🛡️',
    color: '#10b981',
    skills: ['Insurance', 'Sales', 'Communication'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Pharmaceutical Sales Representative',
    icon: '💊',
    color: '#6366f1',
    skills: ['Pharmaceuticals', 'Sales', 'Networking'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Car Sales Executive',
    icon: '🚗',
    color: '#ef4444',
    skills: ['Automotive', 'Sales', 'Negotiation'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Technical Sales Engineer',
    icon: '🔧',
    color: '#3b82f6',
    skills: ['Technical Sales', 'Engineering', 'Communication'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },

  // Finance & Banking (15)
  { 
    title: 'Financial Analyst',
    icon: '📊',
    color: '#10b981',
    skills: ['Financial Analysis', 'Excel', 'Forecasting'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Investment Banker',
    icon: '💰',
    color: '#f59e0b',
    skills: ['Investment Banking', 'Finance', 'Analysis'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Accountant',
    icon: '📒',
    color: '#6366f1',
    skills: ['Accounting', 'Excel', 'Bookkeeping'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Tax Consultant',
    icon: '🧾',
    color: '#3b82f6',
    skills: ['Tax', 'Consulting', 'Finance'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Risk Analyst',
    icon: '⚖️',
    color: '#10b981',
    skills: ['Risk Analysis', 'Finance', 'Statistics'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Actuary',
    icon: '📈',
    color: '#f59e0b',
    skills: ['Actuarial', 'Statistics', 'Finance'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Portfolio Manager',
    icon: '💼',
    color: '#6366f1',
    skills: ['Portfolio Management', 'Finance', 'Analysis'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Credit Analyst',
    icon: '💳',
    color: '#ef4444',
    skills: ['Credit Analysis', 'Finance', 'Risk'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Loan Officer',
    icon: '🏦',
    color: '#3b82f6',
    skills: ['Loans', 'Finance', 'Customer Service'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Financial Planner',
    icon: '📈',
    color: '#10b981',
    skills: ['Financial Planning', 'Finance', 'Advisory'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Corporate Treasurer',
    icon: '🏢',
    color: '#6366f1',
    skills: ['Treasury', 'Finance', 'Management'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Venture Capital Analyst',
    icon: '🚀',
    color: '#f59e0b',
    skills: ['Venture Capital', 'Analysis', 'Finance'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Wealth Manager',
    icon: '💼',
    color: '#10b981',
    skills: ['Wealth Management', 'Finance', 'Advisory'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'CFO (Chief Financial Officer)',
    icon: '👔',
    color: '#6366f1',
    skills: ['Leadership', 'Finance', 'Management'],
    salary: { low: '$100k', avg: '$150k', high: '$250k' }
  },
  { 
    title: 'Auditor',
    icon: '📋',
    color: '#ef4444',
    skills: ['Audit', 'Finance', 'Compliance'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },

  // Healthcare (15)
  { 
    title: 'Medical Doctor',
    icon: '👨‍⚕️',
    color: '#10b981',
    skills: ['Medicine', 'Diagnosis', 'Patient Care'],
    salary: { low: '$100k', avg: '$150k', high: '$250k' }
  },
  { 
    title: 'Nurse',
    icon: '👩‍⚕️',
    color: '#f59e0b',
    skills: ['Nursing', 'Patient Care', 'Communication'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Pharmacist',
    icon: '💊',
    color: '#6366f1',
    skills: ['Pharmacy', 'Medication', 'Patient Care'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Radiologist',
    icon: '🩻',
    color: '#ef4444',
    skills: ['Radiology', 'Diagnosis', 'Medical Imaging'],
    salary: { low: '$100k', avg: '$150k', high: '$250k' }
  },
  { 
    title: 'Physiotherapist',
    icon: '🤸‍♂️',
    color: '#10b981',
    skills: ['Physiotherapy', 'Rehabilitation', 'Patient Care'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Dentist',
    icon: '🦷',
    color: '#f59e0b',
    skills: ['Dentistry', 'Patient Care', 'Diagnosis'],
    salary: { low: '$80k', avg: '$120k', high: '$180k' }
  },
  { 
    title: 'Veterinarian',
    icon: '🐾',
    color: '#6366f1',
    skills: ['Veterinary', 'Animal Care', 'Diagnosis'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Paramedic',
    icon: '🚑',
    color: '#ef4444',
    skills: ['Emergency Care', 'First Aid', 'Patient Transport'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Surgeon',
    icon: '🔪',
    color: '#3b82f6',
    skills: ['Surgery', 'Patient Care', 'Medical Procedures'],
    salary: { low: '$120k', avg: '$170k', high: '$250k' }
  },
  { 
    title: 'Medical Laboratory Technician',
    icon: '🧪',
    color: '#a3e635',
    skills: ['Laboratory', 'Testing', 'Analysis'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Anesthesiologist',
    icon: '💉',
    color: '#10b981',
    skills: ['Anesthesia', 'Patient Care', 'Medicine'],
    salary: { low: '$120k', avg: '$170k', high: '$250k' }
  },
  { 
    title: 'Nutritionist',
    icon: '🥗',
    color: '#f59e0b',
    skills: ['Nutrition', 'Diet Planning', 'Health'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Optometrist',
    icon: '👁️',
    color: '#6366f1',
    skills: ['Optometry', 'Eye Care', 'Patient Care'],
    salary: { low: '$80k', avg: '$120k', high: '$180k' }
  },
  { 
    title: 'Occupational Therapist',
    icon: '👐',
    color: '#ef4444',
    skills: ['Occupational Therapy', 'Rehabilitation', 'Patient Care'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Speech Therapist',
    icon: '🗣️',
    color: '#3b82f6',
    skills: ['Speech Therapy', 'Communication', 'Rehabilitation'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },

  // Engineering & Manufacturing (15)
  { 
    title: 'Civil Engineer',
    icon: '🏗️',
    color: '#6366f1',
    skills: ['Civil Engineering', 'Design', 'Construction'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Mechanical Engineer',
    icon: '⚙️',
    color: '#10b981',
    skills: ['Mechanical Engineering', 'Design', 'CAD'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Electrical Engineer',
    icon: '💡',
    color: '#f59e0b',
    skills: ['Electrical Engineering', 'Circuit Design', 'Troubleshooting'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Chemical Engineer',
    icon: '⚗️',
    color: '#6366f1',
    skills: ['Chemical Engineering', 'Process Engineering', 'Safety'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Biomedical Engineer',
    icon: '🩺',
    color: '#ef4444',
    skills: ['Biomedical', 'Design', 'Research'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Automotive Engineer',
    icon: '🚗',
    color: '#10b981',
    skills: ['Automotive', 'Design', 'Manufacturing'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Aerospace Engineer',
    icon: '✈️',
    color: '#f59e0b',
    skills: ['Aerospace', 'Design', 'Research'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Industrial Engineer',
    icon: '🏭',
    color: '#6366f1',
    skills: ['Industrial Engineering', 'Optimization', 'Process Improvement'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Structural Engineer',
    icon: '🏗️',
    color: '#3b82f6',
    skills: ['Structural Engineering', 'Design', 'Analysis'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'Manufacturing Engineer',
    icon: '🏭',
    color: '#10b981',
    skills: ['Manufacturing', 'Process Engineering', 'Quality Control'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Robotics Technician',
    icon: '🤖',
    color: '#f59e0b',
    skills: ['Robotics', 'Maintenance', 'Troubleshooting'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Environmental Engineer',
    icon: '🌱',
    color: '#6366f1',
    skills: ['Environmental', 'Sustainability', 'Design'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Materials Engineer',
    icon: '🧪',
    color: '#ef4444',
    skills: ['Materials', 'Testing', 'Research'],
    salary: { low: '$55k', avg: '$85k', high: '$130k' }
  },
  { 
    title: 'Production Supervisor',
    icon: '👷',
    color: '#10b981',
    skills: ['Production', 'Supervision', 'Manufacturing'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Quality Control Engineer',
    icon: '✅',
    color: '#6366f1',
    skills: ['Quality Control', 'Testing', 'Process Improvement'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },

  // Marketing & Media (15)
  { 
    title: 'Digital Marketing Specialist',
    icon: '📱',
    color: '#f59e0b',
    skills: ['Digital Marketing', 'SEO', 'Content Creation'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Content Writer',
    icon: '✍️',
    color: '#10b981',
    skills: ['Writing', 'Content Creation', 'SEO'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Social Media Manager',
    icon: '📱',
    color: '#6366f1',
    skills: ['Social Media', 'Content Strategy', 'Engagement'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'SEO Specialist',
    icon: '🔍',
    color: '#f43f5e',
    skills: ['SEO', 'Analytics', 'Content Optimization'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Copywriter',
    icon: '✍️',
    color: '#a78bfa',
    skills: ['Writing', 'Copywriting', 'Content Creation'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Public Relations Manager',
    icon: '📣',
    color: '#10b981',
    skills: ['PR', 'Communication', 'Media Relations'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Brand Manager',
    icon: '🏷️',
    color: '#6366f1',
    skills: ['Branding', 'Marketing', 'Strategy'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Media Buyer',
    icon: '🛒',
    color: '#f59e0b',
    skills: ['Media Buying', 'Marketing', 'Negotiation'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Market Research Analyst',
    icon: '📊',
    color: '#10b981',
    skills: ['Market Research', 'Analytics', 'Data Analysis'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Advertising Executive',
    icon: '📢',
    color: '#6366f1',
    skills: ['Advertising', 'Marketing', 'Strategy'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Product Marketing Manager',
    icon: '📦',
    color: '#f59e0b',
    skills: ['Product Marketing', 'Strategy', 'Communication'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Email Marketing Specialist',
    icon: '📧',
    color: '#10b981',
    skills: ['Email Marketing', 'Campaigns', 'Analytics'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Influencer Marketing Manager',
    icon: '🤳',
    color: '#6366f1',
    skills: ['Influencer Marketing', 'Social Media', 'Brand Strategy'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Event Planner',
    icon: '📆',
    color: '#f59e0b',
    skills: ['Event Planning', 'Organization', 'Communication'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Creative Director',
    icon: '🎨',
    color: '#10b981',
    skills: ['Creative Direction', 'Design', 'Branding'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },

  // Legal, HR & Admin (10)
  { 
    title: 'Lawyer',
    icon: '⚖️',
    color: '#6366f1',
    skills: ['Law', 'Legal Research', 'Communication'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  },
  { 
    title: 'Paralegal',
    icon: '📚',
    color: '#f59e0b',
    skills: ['Legal Research', 'Documentation', 'Support'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Human Resources Manager',
    icon: '👥',
    color: '#10b981',
    skills: ['HR', 'Management', 'Recruitment'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Recruitment Specialist',
    icon: '🔍',
    color: '#6366f1',
    skills: ['Recruitment', 'Talent Acquisition', 'Communication'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Compensation & Benefits Analyst',
    icon: '💰',
    color: '#f59e0b',
    skills: ['Compensation', 'Benefits', 'Analysis'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Training & Development Manager',
    icon: '📚',
    color: '#10b981',
    skills: ['Training', 'Development', 'HR'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Office Administrator',
    icon: '🏢',
    color: '#6366f1',
    skills: ['Administration', 'Organization', 'Communication'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Corporate Compliance Officer',
    icon: '✅',
    color: '#ef4444',
    skills: ['Compliance', 'Regulations', 'Policy'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Employee Relations Specialist',
    icon: '🤝',
    color: '#10b981',
    skills: ['Employee Relations', 'Communication', 'HR'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'HR Business Partner',
    icon: '👥',
    color: '#6366f1',
    skills: ['HR', 'Business Strategy', 'Management'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },

  // Education & Research (10)
  { 
    title: 'Professor',
    icon: '🎓',
    color: '#10b981',
    skills: ['Teaching', 'Research', 'Subject Expertise'],
    salary: { low: '$60k', avg: '$90k', high: '$140k' }
  },
  { 
    title: 'School Teacher',
    icon: '📚',
    color: '#f59e0b',
    skills: ['Teaching', 'Classroom Management', 'Communication'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Research Scientist',
    icon: '🔬',
    color: '#6366f1',
    skills: ['Research', 'Analysis', 'Data'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Education Consultant',
    icon: '💼',
    color: '#10b981',
    skills: ['Consulting', 'Education', 'Strategy'],
    salary: { low: '$45k', avg: '$75k', high: '$110k' }
  },
  { 
    title: 'Instructional Designer',
    icon: '📝',
    color: '#f59e0b',
    skills: ['Instructional Design', 'E-Learning', 'Training'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Librarian',
    icon: '📚',
    color: '#6366f1',
    skills: ['Library', 'Organization', 'Research'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Special Education Teacher',
    icon: '👩‍🏫',
    color: '#10b981',
    skills: ['Special Education', 'Teaching', 'Patience'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Curriculum Developer',
    icon: '📝',
    color: '#f59e0b',
    skills: ['Curriculum', 'Instructional Design', 'Education'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Private Tutor',
    icon: '👨‍🏫',
    color: '#6366f1',
    skills: ['Tutoring', 'Subject Expertise', 'Communication'],
    salary: { low: '$30k', avg: '$50k', high: '$80k' }
  },
  { 
    title: 'Academic Advisor',
    icon: '🎓',
    color: '#10b981',
    skills: ['Advising', 'Guidance', 'Education'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },

  // Travel, Hospitality & Other (10)
  { 
    title: 'Airline Pilot',
    icon: '✈️',
    color: '#f59e0b',
    skills: ['Piloting', 'Navigation', 'Safety'],
    salary: { low: '$80k', avg: '$120k', high: '$180k' }
  },
  { 
    title: 'Flight Attendant',
    icon: '🛫',
    color: '#6366f1',
    skills: ['Customer Service', 'Safety', 'Communication'],
    salary: { low: '$30k', avg: '$50k', high: '$80k' }
  },
  { 
    title: 'Travel Agent',
    icon: '🌍',
    color: '#10b981',
    skills: ['Travel', 'Booking', 'Customer Service'],
    salary: { low: '$30k', avg: '$50k', high: '$80k' }
  },
  { 
    title: 'Hotel Manager',
    icon: '🏨',
    color: '#f59e0b',
    skills: ['Management', 'Hospitality', 'Customer Service'],
    salary: { low: '$50k', avg: '$80k', high: '$120k' }
  },
  { 
    title: 'Chef',
    icon: '👨‍🍳',
    color: '#6366f1',
    skills: ['Cooking', 'Culinary', 'Management'],
    salary: { low: '$40k', avg: '$70k', high: '$100k' }
  },
  { 
    title: 'Tour Guide',
    icon: '🗺️',
    color: '#10b981',
    skills: ['Tourism', 'Communication', 'Local Knowledge'],
    salary: { low: '$30k', avg: '$50k', high: '$80k' }
  },
  { 
    title: 'Bartender',
    icon: '🍸',
    color: '#f59e0b',
    skills: ['Mixology', 'Customer Service', 'Communication'],
    salary: { low: '$25k', avg: '$40k', high: '$60k' }
  },
  { 
    title: 'Event Coordinator',
    icon: '📆',
    color: '#6366f1',
    skills: ['Event Planning', 'Organization', 'Communication'],
    salary: { low: '$35k', avg: '$60k', high: '$90k' }
  },
  { 
    title: 'Housekeeping Manager',
    icon: '🧹',
    color: '#10b981',
    skills: ['Housekeeping', 'Management', 'Organization'],
    salary: { low: '$30k', avg: '$50k', high: '$80k' }
  },
  { 
    title: 'Cruise Ship Director',
    icon: '🚢',
    color: '#f59e0b',
    skills: ['Management', 'Hospitality', 'Organization'],
    salary: { low: '$70k', avg: '$100k', high: '$150k' }
  }
];

export const skillVariants = {
  "react": ["react", "reactjs", "react.js"],
  "node.js": ["node.js", "nodejs", "node js"],
  "javascript": ["javascript", "java script"],
  "python": ["python"],
  "java": ["java", "java programming"],
  "git": ["git", "version control"],
  "rest apis": ["rest api", "restful api"],
  "sql": ["sql", "structured query language"],
  "html5": ["html5", "html"],
  "css3": ["css3", "css"],
  "bootstrap": ["bootstrap", "twitter bootstrap"],
  "wordpress": ["wordpress", "wp"],
  "mongodb": ["mongodb", "mongo db", "mongo"],
  "vue.js": ["vue", "vue.js", "vuejs"],
  "swift": ["swift", "swift programming"],
  "kotlin": ["kotlin", "kotlin language"],
  "react native": ["react native", "react-native"],
  "flutter": ["flutter"],
  "objective-c": ["objective-c", "objc"],
  "ios sdk": ["ios sdk", "ios software development kit"],
  "android studio": ["android studio", "android"],
  "material design": ["material design"],
  "c++": ["c++", "cplusplus"],
  "c#": ["c#", "csharp"],
  "unity": ["unity", "unity3d"],
  "unreal engine": ["unreal engine", "ue"],
  "ar": ["ar", "augmented reality"],
  "vr": ["vr", "virtual reality"],
  "3d modeling": ["3d modeling", "three-dimensional modeling"],
  "assembly": ["assembly", "asm"],
  "rtos": ["rtos", "real time operating system"],
  "embedded c": ["embedded c", "embedded"],
  "microcontrollers": ["microcontrollers", "micro controller"],
  "system design": ["system design", "architectural design"],
  "microservices": ["microservices", "micro services"],
  "cloud": ["cloud", "cloud computing"],
  "security": ["security", "cyber security"],
  "devops": ["devops", "development operations"],
  "ci/cd": ["ci/cd", "continuous integration", "continuous deployment"],
  "docker": ["docker"],
  "kubernetes": ["kubernetes", "k8s"],
  "terraform": ["terraform"],
  "sap": ["sap"],
  "oracle": ["oracle"],
  "technical writing": ["technical writing", "documentation"],
  "e-commerce": ["e-commerce", "e commerce"],
  "business analysis": ["business analysis", "requirements"],
  "etl": ["etl", "extract transform load"],
  "big data": ["big data", "bigdata"],
  "nosql": ["nosql", "no sql"],
  "r": ["r", "r programming"],
  "sas": ["sas"],
  "deep learning": ["deep learning", "dl"],
  "keras": ["keras"],
  "scikit-learn": ["scikit-learn", "sklearn"],
  "opencv": ["opencv", "open cv"],
  "excel": ["excel", "microsoft excel"],
  "tableau": ["tableau", "data visualization"],
  "bi tools": ["bi tools", "business intelligence"],
  "analytics": ["analytics", "analysis"],
  "hadoop": ["hadoop"],
  "spark": ["spark"],
  "data visualization": ["data visualization", "dataviz"],
  "data governance": ["data governance", "data management"],
  "ethics": ["ethics"],
  "policy": ["policy", "regulations"],
  "jenkins": ["jenkins"],
  "monitoring": ["monitoring", "performance monitoring"],
  "shell scripting": ["shell scripting", "bash scripting"],
  "active directory": ["active directory"],
  "powershell": ["powershell", "ps"],
  "itil": ["itil"],
  "san": ["san", "storage area network"],
  "nas": ["nas", "network attached storage"],
  "virtualization": ["virtualization", "vmware", "hyper-v"],
  "hybrid cloud": ["hybrid cloud"],
  "penetration testing": ["penetration testing", "pen testing"],
  "ethical hacking": ["ethical hacking", "white hat hacking"],
  "vulnerability assessment": ["vulnerability assessment", "vulnerability scanning"],
  "siem": ["siem", "security information and event management"],
  "log analysis": ["log analysis", "log monitoring"],
  "cryptography": ["cryptography", "encryption"],
  "audit": ["audit", "auditing"],
  "forensics": ["forensics", "forensic analysis"],
  "iam": ["iam", "identity and access management"],
  "threat intelligence": ["threat intelligence", "threat analysis"],
  "information security": ["information security", "info sec"],
  "risk analysis": ["risk analysis", "risk assessment"],
  "soc": ["soc", "security operations center"],
  "routing": ["routing", "network routing"],
  "switching": ["switching", "network switching"],
  "technical support": ["technical support", "help desk"],
  "troubleshooting": ["troubleshooting", "problem solving"],
  "rf": ["rf", "radio frequency"],
  "cloud networking": ["cloud networking"],
  "iot": ["iot", "internet of things"],
  "embedded systems": ["embedded systems", "embedded"],
  "chatgpt": ["chatgpt", "gpt"],
  "robotics": ["robotics"],
  "digital twin": ["digital twin", "virtual replica"],
  "3d printing": ["3d printing", "additive manufacturing"],
  "circuit design": ["circuit design"],
  "testing": ["testing", "quality assurance"],
  "cad": ["cad", "computer aided design"],
  "production": ["production", "manufacturing"],
  "quality control": ["quality control", "qc"],
  "seo": ["seo", "search engine optimization"],
  "content creation": ["content creation", "content development"],
  "copywriting": ["copywriting", "copy writer"],
  "social media": ["social media"],
  "content strategy": ["content strategy", "social media strategy"],
  "engagement": ["engagement", "community management"],
  "pr": ["pr", "public relations"],
  "communication": ["communication", "communicating"],
  "branding": ["branding", "brand management"],
  "market research": ["market research", "consumer research"],
  "advertising": ["advertising", "ads"],
  "email marketing": ["email marketing", "email campaigns"],
  "campaigns": ["campaigns"],
  "influencer marketing": ["influencer marketing", "influencer"],
  "event planning": ["event planning", "event coordination"],
  "organization": ["organization", "organizational skills"],
  "creative direction": ["creative direction"],
  "tutoring": ["tutoring", "private tutoring"],
  "advising": ["advising", "counseling"],
  "piloting": ["piloting", "flying"],
  "navigation": ["navigation", "navigating"],
  "safety": ["safety", "risk management"],
  "booking": ["booking", "reservations"],
  "hospitality": ["hospitality"],
  "cooking": ["cooking", "culinary"],
  "mixology": ["mixology", "bartending"],
  "housekeeping": ["housekeeping"],
  "cruise management": ["cruise management", "cruise operations"]
};


export const extractTextFromPDF = async (file) => {
  const pdfjs = await import('pdfjs-dist/build/pdf');
  const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument(arrayBuffer).promise;
  let text = '';

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(item => item.str).join(' ');
  }

  return text.toLowerCase();
};

// Helper function to escape regex special characters
const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const analyzeResume = (text) => {
  const normalizedText = text.toLowerCase().replace(/[^a-z0-9\s]/g, '');
  const resumeSkills = new Set();

  jobRoles.forEach(role => {
    role.skills.forEach(skill => {
      const baseSkill = skill.toLowerCase();
      const variations = skillVariants[baseSkill] || [baseSkill];

      if (variations.some(variant => {
        const regex = new RegExp(`\\b${escapeRegExp(variant)}\\b`, 'i');
        return regex.test(normalizedText);
      })) {
        resumeSkills.add(skill);
      }
    });
  });

  const roleMatches = jobRoles.map(role => ({
    ...role,
    matchedSkills: role.skills.filter(skill => resumeSkills.has(skill)),
    missingSkills: role.skills.filter(skill => !resumeSkills.has(skill))
  })).filter(role => role.matchedSkills.length > 0);

  return {
    roles: roleMatches.sort((a, b) => b.matchedSkills.length - a.matchedSkills.length),
    totalSkills: resumeSkills.size,
    topRoles: roleMatches.slice(0, 3)
  };
};
