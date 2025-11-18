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
    title: "TalkPilot",
    description:
      "An agentic voice-activated browser assistant that enables hands-free web browsing through voice commands",
    src: "/talk_pilot.png",
    skills: ["Python", "R", "React"],
    link: "https://github.com/henqc/talk-pilot-v2",
    color: "#27272c",
    num: "01.",
  },
  {
    title: "CUDA Image Filtering",
    description:
      "A GPU-accelerated image filtering library using CUDA to apply various image filters such as blur, edge detection, and more",
    src: "/image-filter.jpg",
    skills: [
      "NextJS",
      "Tailwind",
      "NodeJS",
      "AWS Dynamo/S3/EC2",
      "Java Spring",
    ],
    link: "https://github.com/henqc/cuda-image-filters",
    color: "#27272c",
    num: "02.",
  },
  {
    title: "Miro MCP",
    description:
      "A standalone Model Context Protocol server that enables any MCP-compatible LLM to interact with Miro whiteboards",
    src: "/miro.png",
    skills: [
      "NextJS",
      "Tailwind",
      "NodeJS",
      "AWS Dynamo/S3/EC2",
      "Java Spring",
    ],
    link: "https://github.com/henqc/miro-mcp",
    color: "#27272c",
    num: "03.",
  },
  {
    title: "FundHer",
    description:
      "Explore an NLP-powered, curated list of funding opportunities and unlock new possibilities for your education and career",
    src: "/fund-her.png",
    skills: [
      "NextJS",
      "Tailwind",
      "NodeJS",
      "AWS Dynamo/S3/EC2",
      "Java Spring",
    ],
    link: "https://devpost.com/software/fundher?_gl=1*11s1ccn*_gcl_au*NTQ4NDc3MzEwLjE3NDMzNDc3Mzc.*_ga*MTU5ODM0NzA1My4xNzQzMzQ3NzM4*_ga_0YHJK3Y10M*czE3NTAwMzMxMTUkbzkkZzAkdDE3NTAwMzMxMTUkajYwJGwwJGgw",
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
      "Enabled semantic understanding by authoring custom descriptors for filter tags, embedding them into a 768-dim vector space, and performing vector queries to find the most correlated filter tags, achieving 89% top-3 retrieval accuracy",
    ],
    logo: "/capitalone-logo.png",
  },
];
