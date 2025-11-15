export const navList = [
  {
    label: "About Me",
    path: "aboutme",
  },
  {
    label: "Experience",
    path: "experience",
  },
  {
    label: "Skills",
    path: "skills",
  },
  {
    label: "Projects",
    path: "projects",
  },
];

export const projectList = [
  {
    title: "Runway",
    description:
      "An exclusive network of the top university students in business development and engineering",
    src: "/Runway.png",
    skills: ["Python", "R", "React"],
    link: "https://www.joinrunway.io/",
    color: "#27272c",
    num: "01.",
  },
  {
    title: "Green Whistle",
    description:
      "Empowering ethical insiders to confidentially expose environmental misconduct",
    src: "/GreenWhistle.png",
    skills: [
      "NextJS",
      "Tailwind",
      "NodeJS",
      "AWS Dynamo/S3/EC2",
      "Java Spring",
    ],
    link: "https://github.com/henqc/WhistleblowingApp",
    color: "#27272c",
    num: "02.",
  },
  {
    title: "SpotiRecc",
    description:
      "Effortlessly discover new music tailored to your Spotify tastes",
    src: "/SpotiRecc.png",
    skills: [
      "NextJS",
      "Tailwind",
      "NodeJS",
      "AWS Dynamo/S3/EC2",
      "Java Spring",
    ],
    link: "https://github.com/henqc/Spotify-Dash",
    color: "#27272c",
    num: "03.",
  },
  {
    title: "Movie Metrics",
    description:
      "Uncover cinematic insights and explore movie trends across the decades",
    src: "/MovieMetric.png",
    skills: [
      "NextJS",
      "Tailwind",
      "NodeJS",
      "AWS Dynamo/S3/EC2",
      "Java Spring",
    ],
    link: "https://github.com/henqc/plotly-dash",
    color: "#27272c",
    num: "04.",
  },
];

export const socialIcons = [
  {
    icon: "/github.svg",
    url: "https://github.com/henqc",
  },
  {
    icon: "/linkedin.svg",
    url: "https://www.linkedin.com/in/henqc/",
  },
  {
    icon: "/email.svg",
    url: "mailto:henryqc.cs@gmail.com?subject=hello",
  },
];

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  dateRange: string;
  description: string[];
  logo?: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Amazon Web Services",
    role: "Software Development Intern",
    location: "Portland, OR",
    dateRange: "Fall 2025",
    description: [
      "Architected a threat intelligence pipeline using GuardDuty and CloudTrail across 1.5M+ AWS accounts to extract malicious IPs and transmit via S3 to AWS Shield, achieving < 1 minutes response time and 95% classification success",
      "Engineered an event-driven workflow with AWS Step Functions and AWS Lambda to process 200+ fraud events daily",
      "Validated pipeline efficacy with a CloudWatch dashboard tracking submission volumes and true positives via Athena",
    ],
    logo: "/aws-logo.png",
  },
  {
    company: "Capital One",
    role: "Software Development Intern",
    location: "Dallas, TX",
    dateRange: "Summer 2025",
    description: [
      "Developed a semantic search engine through fine-tuning BERT models, boosting search relevance by 80%",
      "Trained a BERT-based NER model on 10k+ examples to extract filter tags from queries with a 97% extraction rate",
      "Enabled semantic understanding by authoring custom descriptors for filter tags, embedding them into a 768-dim vector space, and performing vector queries to find the most correlated filters tags, achieving 89% top-3 retrieval accuracy",
    ],
    logo: "/capitalone-logo.png",
  },
];
