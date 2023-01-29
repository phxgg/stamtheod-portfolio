import { Language } from "@/types/language";

interface Languages {
  [key: string]: Language;
}

export const languages: Languages = {
  javascript: {
    title: "JavaScript",
    iconClass: "devicon-javascript-plain",
    color: "#F7DF1E",
  },
  nodejs: {
    title: "NodeJS",
    iconClass: "devicon-nodejs-plain",
    color: "#339933",
  },
  typescript: {
    title: "TypeScript",
    iconClass: "devicon-typescript-plain",
    color: "#3178C6",
  },
  python: {
    title: "Python",
    iconClass: "devicon-python-plain",
    color: "#3776AB",
  },
  java: {
    title: "Java",
    iconClass: "devicon-java-plain",
    color: "#007396",
  },
  csharp: {
    title: "C#",
    iconClass: "devicon-csharp-plain",
    color: "#239120",
  }
}
