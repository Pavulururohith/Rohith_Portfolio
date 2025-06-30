"use client"

import TailwindConfig from "@/tailwind.config"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import React, { useState } from "react"
import { FiCopy, FiCheck } from "react-icons/fi"

// React Icons - FA
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaNodeJs,
  FaLinux, 
  FaPython, 
  FaJava, 
  FaCuttlefish, 
  FaDatabase, 
  FaDocker, 
  FaGit, 
  FaJenkins, 
  FaAws,
  FaEthereum,
  FaLinkedin
} from "react-icons/fa"

// React Icons - SI
import { 
  SiPostman, 
  SiJira, 
  SiPrometheus, 
  SiGrafana, 
  SiAwsfargate, 
  SiSolidity, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTerraform,
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiSelenium,
  SiTypescript,
  SiGo,
  SiDjango,
  SiNodedotjs,
  SiGooglecloud,
  SiMicrosoftazure,
  SiKubernetes,
  SiHelm,
  SiGithubactions,
  SiGitlab,
  SiArgo,
  SiSnowflake,
  SiPostgresql,
  SiApachekafka,
  SiAmazonaws,
  SiTensorflow,
  SiOpencv,
  SiMlflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMatplotlib,
  SiEthereum,
  SiRaspberrypi,
  SiSwagger
} from "react-icons/si"

// React Icons - Other
import { 
  IoLogoTableau 
} from "react-icons/io5"
import { 
  MdOutlineDashboard 
} from "react-icons/md"
import { 
  TbAlertHexagon
} from "react-icons/tb"

const about = {
  title: "About me",
  description: "My journey has equipped me with diverse skills in software development, data science, and machine learning. I have worked on impactful projects, such as creating a blockchain-based blood registry, which won 1st place at the Smart India Hackathon 2022, and developing a smart form system using machine learning to prevent repetitive project selections. I am proficient in Python, Java, JavaScript, React, Kubernetes, Docker, and cloud platforms like AWS and GCP. My academic and professional experiences have honed my ability to deliver innovative, scalable solutions to complex problems.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rohith Pavuluru"
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 930-333-4291"
    },
    {
      fieldName: "Email",
      fieldValue: "pavuluru.rohith@gmail.com"
    },
  ]
}

const achievements = {
  title: "Achievements and Certifications",
  description: "My achievements include winning 1st place in Asia's largest hackathon (Smart India Hackathon 2022) for a blockchain-based blood registry, enhancing healthcare transparency. I am an AWS Certified Cloud Practitioner, skilled in cloud computing. A research paper on Blockchain Implementation for Blood Registry Using Ethereum Network is under review. Academically, I achieved a 3.97/4 GPA during my MS in Computer Science at Indiana University and a 9.11/10 GPA during my BE in Computer Science, showcasing my commitment to excellence and innovation.",
  items: [
    {
      issuer: "AWS Certified Cloud Practitioner",
      duration: "August 2024",
      link: "https://drive.google.com/file/d/1QEr2wwFyqH0ZDP1D0Ue92sDZeyMyzVDY/view?usp=sharing",
    },
    {
      issuer: "Smart India Hackathon 2022, Winners",
      duration: "August 2022",
      link: "https://drive.google.com/file/d/1k3ChvicnuAg8HLZqQtgaxHeRCFQeh_TI/view",
    }
  ]
}

const experience = {
  title: "My experience",
  description: "As a Software Engineer with 3 years of experience, I build scalable, secure, and high-performance solutions across various domains. My expertise includes DevOps and Cloud infrastructure, where I've significantly optimized CI/CD pipelines and enhanced system reliability through proactive monitoring. I excel in Data Engineering and Machine Learning, developing advanced predictive models that improved accuracy and building robust data pipelines to streamline information flow. My full-stack development background covers secure Learning Management Systems and blockchain-based solutions. I consistently apply Agile methodologies, focusing on high code quality and security, ensuring the delivery of impactful and robust software.",
  items: [
    {
      company: "Indiana University Bloomington",
      position: "Software Engineer",
      duration: "January 2025 - Present"
    },
    {
      company: "Nokia Solutions and Networks",
      position: "DevOps Engineer",
      duration: "February 2023 - July 2023"
    },
    {
      company: "Nano Robotics Embed Technologies",
      position: "Software Engineer",
      duration: "July 2022 - October 2022"
    },
    {
      company: "Pramahasoft Solutions Pvt Ltd",
      position: "Software Engineer",
      duration: "February 2022 - June 2022"
    },
  ]
}

const education = {
  title: "My education",
  description: "I am pursuing an MS in Computer Science from Indiana University Bloomington with a 3.97/4 GPA, focusing on Applied Algorithms, Software Engineering, Data Mining, and Applied Machine Learning. Previously, I earned a BE in Computer Science from BMS Institute of Technology and Management with a 9.11/10 GPA, where I studied Data Structures, Object-Oriented Concepts, Database Management Systems, and Neural Networks. My academic journey has provided me with a strong foundation in both theoretical and practical aspects of computer science, preparing me to tackle complex technical challenges.",
  items: [
    {
      institution: "Indiana University Bloomington",
      degree: "Master of Science",
      duration: "2023 - 2025"
    },
    {
      institution: "BMS Institute of Technology and Management",
      degree: "Bachelor of Engineering",
      duration: "2019 - 2023"
    },
  ]
}

const skillList = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C", icon: FaCuttlefish },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Go", icon: SiGo },
      { name: "Solidity", icon: SiSolidity }
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "Selenium", icon: SiSelenium },
      { name: "Swagger", icon: SiSwagger }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Azure", icon: SiMicrosoftazure },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Docker", icon: FaDocker },
      { name: "Terraform", icon: SiTerraform },
      { name: "Helm", icon: SiHelm },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "GitLab CI", icon: SiGitlab },
      { name: "Argo", icon: SiArgo },
      { name: "Linux", icon: FaLinux }
    ]
  },
  {
    category: "Databases & Data",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Snowflake", icon: SiSnowflake },
      { name: "Kafka", icon: SiApachekafka },
      { name: "Tableau", icon: IoLogoTableau }
    ]
  },
  {
    category: "AI/ML",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "OpenCV", icon: SiOpencv },
      { name: "MLflow", icon: SiMlflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: SiMatplotlib }
    ]
  },
  {
    category: "Blockchain",
    skills: [
      { name: "Ethereum", icon: SiEthereum },
      { name: "Raspberry Pi", icon: SiRaspberrypi }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: FaGit },
      { name: "Jenkins", icon: FaJenkins },
      { name: "Jira", icon: SiJira },
      { name: "Postman", icon: SiPostman },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "AWS Fargate", icon: SiAwsfargate },
      { name: "Dashboard", icon: MdOutlineDashboard },
      { name: "Alerting", icon: TbAlertHexagon }
    ]
  }
]

const Resume = () => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{ delay: 2, duration: 0.3, ease:"easeIn" },
    }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="achievements">Achievements & Certifications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=> {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.company}</h3>
                          <div>
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.position}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div> 
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=> {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-4">{item.institution}</h3>
                          <div>
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.degree}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>  
            </TabsContent>
            <TabsContent value="achievements" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{achievements.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{achievements.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {achievements.items.map((item, index) => (
                      <a key={index} href={item.link} className="block hover:text-accent">
                        <motion.li
                          whileHover={{ scale: 1.05 }} // Scale up on hover
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:text-white"
                        >
                          <span className="text-accent hover:text-white">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-4">{item.issuer}</h3>
                        </motion.li>
                      </a>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] pb-6">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">Skills</h3>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <div className="flex flex-col gap-8">
                      {skillList.map((category, index)=> {
                        return (
                          <div key={index} className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold">{category.category}</h3>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                              {category.skills.map((skill, index)=> {
                                const IconComponent = skill.icon;
                                return (
                                  <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                            {IconComponent && <IconComponent />}
                                          </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <div className="capitalize">{skill.name}</div>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        )
                      })}
                    </div>
                  </ScrollArea>
              </div> 
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.fieldValue}</span>
                          {['Name', 'Phone', 'Email'].includes(item.fieldName) && (
                            <button
                              onClick={() => copyToClipboard(item.fieldValue, item.fieldName)}
                              className="p-1 hover:text-accent transition-colors"
                            >
                              {copiedField === item.fieldName ? (
                                <FiCheck className="text-accent" />
                              ) : (
                                <FiCopy />
                              )}
                            </button>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
