"use client"

import TailwindConfig from "@/tailwind.config"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaLinux, FaPython, FaJava, FaCuttlefish, FaDatabase, FaDocker, FaGit, FaJenkins } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const about = {
  title: "About me",
  description: "My journey has equipped me with diverse skills in software development, data science, and machine learning. My projects include creating a blockchain-based blood registry, which won first place at the Smart India Hackathon 2022, and developing a smart form system using machine learning to prevent repetitive project selections. I’m proficient in various programming languages, web development tools, and cloud platforms.",
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

const experience = {
  title: "My experience",
  description: "During my internships, I gained hands-on experience in configuring alert systems and enhancing dashboards with Grafana at Nokia Solutions and Networks. I also managed tool deployment using Kubernetes, Docker, and Helm. At Nano Robotics Embed Technologies, I developed a weather forecasting model using regression techniques and Bayesian neural networks, improving prediction accuracy. My work involved Python and scikit-learn for model development and Matplotlib for visualizations, sharpening my skills in data analysis and software development.",
  items: [
    {
      company: "Nokia Solutions and Networks",
      position: "Student Intern",
      duration: "February 2023 - July 2023"
    },
    {
      company: "Nano Robotics Embed Technologies",
      position: "Technical Intern",
      duration: "July 2022 - October 2022"
    },
  ]
}

const education = {
  title: "My education",
  description: "I am pursuing MS in Computer Science from Indiana University Bloomington with a 3.950/4 GPA, focusing on algorithms, software engineering, and machine learning. Previously, I earned a BE in Computer Science from BMS Institute of Technology and Management, achieving a 9.11/10 GPA, covering diverse computing disciplines.",
  items: [
    {
      institution: "Indiana University Bloomington",
      degree: "Master of Science",
      duration: "2023 - Present"
    },
    {
      institution: "BMS Institute of Technology and Management",
      degree: "Bachelor of Engineering",
      duration: "2019 - 2023"
    },
  ]
}

const skills = {
  title: "My skills",
  description: "I possess strong technical skills across various domains. Proficient in programming languages including Python, Java, C, C++, and JavaScript, I excel in web development using frameworks like Django and React. I have expertise in databases such as MongoDB, MySQL, and SQLite, and experience with cloud platforms like AWS and Google Cloud. My data science skills include working with PyTorch, Scikit-learn, OpenCV, Pandas, and Matplotlib. Additionally, I am adept in DevOps practices using Docker, Jenkins, and GIT, and skilled in tools like Postman, UFT, Jira, and Firebase.",
  skillList:[
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'Django',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaPython />,
      name: 'Python',
    },
    {
      icon: <FaJava />,
      name: 'Java',
    },
    {
      icon: <FaCuttlefish />,
      name: 'C',
    },
    {
      icon: <FaCuttlefish />,
      name: 'C++',
    },
    {
      icon: <FaDatabase />,
      name: 'MongoDB',
    },
    {
      icon: <FaDatabase />,
      name: 'MySQL',
    },
    {
      icon: <FaDatabase />,
      name: 'Firebase',
    },
    {
      icon: <FaPython />,
      name: 'PyTorch',
    },
    {
      icon: <FaPython />,
      name: 'Scikit-learn',
    },
    {
      icon: <FaPython />,
      name: 'Pandas',
    },
    {
      icon: <FaPython />,
      name: 'Numpy',
    },
    {
      icon: <FaPython />,
      name: 'Matplotlib',
    },
    {
      icon: <FaGit />,
      name: 'GIT',
    },
    {
      icon: <FaDocker />,
      name: 'Docker',
    },
    {
      icon: <FaJenkins />,
      name: 'Jenkins',
    },
    {
      icon: <FaLinux />,
      name: 'Linux',
    },
  ]
}




const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{ delay: 2, duration: 0.3, ease:"easeIn" },
    }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
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
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{education .description}</p>
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
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] pb-6">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index)=> {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
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
                        <span className="text-xl">{item.fieldValue}</span>
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
