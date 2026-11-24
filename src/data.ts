// Edit this file to make the site yours. Everything in [BRACKETS] is a placeholder.

export const profile = {
  name: 'Gianmarco Iparraguirre',
  university: 'University of Michigan',
  year: '2026',
  headline: 'a computer science graduate',
  intro:
    'Aspiring software engineer passionate about problem-solving and building practical applications. Looking for opportunities to gain hands-on experience, learn from others, and grow as an engineer.',
  interests: 'software engineering · fintech · ai & emerging technologies',
  status: 'open to internships and new-grad roles',
  domain: 'giparraguirre.github.io',
}

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  href: string
  icon: 'grid' | 'search' | 'mapreduce'
}

// export const projects: Project[] = [
//   {
//     id: '01_pathfinder',
//     title: 'Pathfinder',
//     description: 'Interactive visualizer for BFS, Dijkstra and A* on a drawable grid.',
//     tags: ['TypeScript', 'Canvas'],
//     href: '#',
//     icon: 'grid',
//   },
//   {
//     id: '02_minishell',
//     title: 'Minishell',
//     description: 'A Unix shell in C with pipes, redirection and background job control.',
//     tags: ['C', 'POSIX'],
//     href: '#',
//     icon: 'shell',
//   },
//   {
//     id: '03_studysync',
//     title: 'StudySync',
//     description: 'Full-stack app that finds shared free time for study groups.',
//     tags: ['React', 'Node', 'PostgreSQL'],
//     href: '#',
//     icon: 'calendar',
//   },
// ]

export const projects: Project[] = [
  {
    id: '01_project',
    title: 'Project One',
    description: 'A software development project showcasing problem-solving, application design, and implementation.',
    tags: ['Software Engineering', 'Problem Solving'],
    href: '#',
    icon: 'grid',
  },
  {
    id: '02_search_engine',
    title: 'Search Engine',
    description: 'A scalable search engine over a Wikipedia crawl. Uses MapReduce to build an inverted index, sharded Flask index servers for tf-idf and PageRank ranking, and a web UI with LLM-generated summaries.',
    tags: ['Python', 'Flask', 'MapReduce'],
    href: '#',
    icon: 'search',
  },
  {
    id: '03_mapreduce',
    title: 'MapReduce',
    description: 'A fault-tolerant, multithreaded MapReduce framework in Python. A Manager distributes map and reduce tasks to Workers over TCP, with UDP heartbeats and automatic recovery from Worker failures.',
    tags: ['Python', 'Multithreading', 'Distributed Systems'],
    href: '#',
    icon: 'mapreduce',
  },
];

export const inventory = [
  { title: 'languages', items: ['Python', 'Java', 'C / C++', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'tools', items: ['Git', 'Flask', 'React', 'AWS', 'VS Code', 'Claude Code'] },
  { title: 'coursework', items: ['Data Structures and Algorithms', 'Web Systems', 'Database Management Systems', 'Software Engineering', 'Intro to Computer Organization', 'Foundations of Computer Science'] },
]

export const links = [
  { label: 'email', href: 'mailto:giparraguirre14@gmail.com' },
  { label: 'github', href: 'https://github.com/giparraguirre' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/gianmarcoiparraguirre/' },
  { label: 'resume.pdf', href: '#' },
]
