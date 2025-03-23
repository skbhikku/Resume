// resumeAnalysis.js
export const jobRoles = [
    { 
      title: 'Software Engineer',
      icon: '👨‍💻',
      color: '#6366f1',
      skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'Git', 'REST APIs', 'SQL'],
      salary: { low: '$50k', avg: '$80k', high: '$120k' }
    },
    {
      title: 'Data Scientist',
      icon: '📊',
      color: '#10b981',
      skills: ['Python', 'Machine Learning', 'SQL', 'Pandas', 'Statistics', 'Data Visualization', 'TensorFlow'],
      salary: { low: '$55k', avg: '$85k', high: '$130k' }
    },
    {
      title: 'UX Designer',
      icon: '🎨',
      color: '#f59e0b',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping', 'UI/UX', 'Accessibility', 'Usability Testing'],
      salary: { low: '$40k', avg: '$70k', high: '$100k' }
    },
    {
      title: 'DevOps Engineer',
      icon: '☁️',
      color: '#3b82f6',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux', 'Bash', 'Monitoring'],
      salary: { low: '$60k', avg: '$90k', high: '$140k' }
    },
    {
      title: 'Project Manager',
      icon: '📋',
      color: '#8b5cf6',
      skills: ['Agile', 'Scrum', 'JIRA', 'Budgeting', 'Risk Management', 'Stakeholder Management', 'Project Planning'],
      salary: { low: '$45k', avg: '$75k', high: '$110k' }
    },
    {
      title: 'Frontend Developer',
      icon: '🌐',
      color: '#ef4444',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'TypeScript', 'Webpack', 'Responsive Design'],
      salary: { low: '$45k', avg: '$80k', high: '$120k' }
    }
  ];
  
  const skillVariants = {
    "react": ["react", "reactjs", "react.js"],
    "node.js": ["node.js", "nodejs", "node js"],
    "javascript": ["javascript", "java script"],
    "python": ["python"],
    "sql": ["sql", "structured query language"],
    "aws": ["aws", "amazon web services"],
    "docker": ["docker"],
    "figma": ["figma"],
    "agile": ["agile", "agile methodology"],
    "scrum": ["scrum"],
    "jira": ["jira"],
    "ui/ux": ["ui/ux", "ux/ui", "user experience", "user interface"],
    "typescript": ["typescript", "ts"],
    "html5": ["html5", "html"],
    "css3": ["css3", "css"],
    "redux": ["redux"],
    "tensorflow": ["tensorflow", "tf"],
    "rest apis": ["rest api", "restful api"],
    "machine learning": ["ml", "machine learning"],
    "ci/cd": ["ci/cd", "continuous integration", "continuous deployment"],
    "terraform": ["terraform"],
    "pandas": ["pandas"],
    "statistics": ["stats", "statistics"]
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
  
  export const analyzeResume = (text) => {
    const normalizedText = text.toLowerCase().replace(/[^a-z0-9\s]/g, '');
    const resumeSkills = new Set();
  
    jobRoles.forEach(role => {
      role.skills.forEach(skill => {
        const baseSkill = skill.toLowerCase();
        const variations = skillVariants[baseSkill] || [baseSkill];
        
        if (variations.some(variant => {
          const regex = new RegExp(`\\b${variant}\\b`, 'i');
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