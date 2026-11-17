import aws from "@/assets/aws.png";
import capitalOne from "@/assets/capitalone.png";
import cudaFilters from "@/assets/cuda-filters.jpg";
import fundher from "@/assets/fundher.png";
import google from "@/assets/google.svg";
import inyo from "@/assets/inyo.jpg";
import miro from "@/assets/miro.png";
import talkpilot from "@/assets/talkpilot.jpg";

/** `logoWidth` widens a wordmark that would otherwise look small next to the squarer logos. */
export const experience = [
  { company: "Google", logo: google },
  { company: "Amazon Web Services", logo: aws },
  { company: "Capital One", logo: capitalOne, logoWidth: "84%" },
];

export const projects = [
  { title: "Inyo", tag: "AI matchmaker", href: "https://www.joininyo.com/", image: inyo },
  { title: "TalkPilot", tag: "Voice browser agent", href: "https://github.com/henqc/talk-pilot-v2", image: talkpilot },
  { title: "CUDA Filters", tag: "GPU image processing", href: "https://github.com/henqc/cuda-image-filters", image: cudaFilters },
  { title: "Miro MCP", tag: "MCP server", href: "https://github.com/henqc/miro-mcp", image: miro },
  { title: "FundHer", tag: "NLP funding finder", href: "https://devpost.com/software/fundher", image: fundher },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/henqc" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/henqc/" },
  { label: "Email", href: "mailto:henryqc.cs@gmail.com" },
];
