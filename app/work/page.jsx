"use client"

import { motion } from "framer-motion"
import React, {useState} from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip,TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: '01',
    category: 'Web Development',
    title: "CourseCraft",
    description: "Developed a comprehensive Learning Management System by implementing key features including user MFA, dashboards, course search, and multimedia file submission. Engineered backend architecture utilizing Firebase and AWS cloud services, integrating Google API and Duo Authentication API for enhanced security. Contributed to frontend development, backend logic, database management, and deployment processes in an Agile team environment.",
    stack: [{ name:"Html 5" }, {name: "CSS 3"}, {name:"JavaScript"}, {name:"React"}, {name:"Firebase"}],
    image: "/PHOTO-2024-04-19-17-05-06.jpg",
    // github: "https://github.com/nihalshetty-boop/P565-SP24-LMS-G21-Frontend",
    github: "https://github.com/nihalshetty-boop/P565-SP24-LMS-G21-Backend",
  },
  {
    num: '02',
    category: 'Machine Learning and Data Science',
    title: "Detecting Phishing URL's",
    description: "Enhanced phishing detection by achieving an accuracy of 0.9059 using a Gradient Boosting Classifier. Utilized precision, recall, and F1-score metrics, demonstrating strong performance across all categories. Successfully optimized a Gradient Boosting model to reach 0.901 accuracy under random sampling conditions and 1.0 accuracy with weighted sampling. Despite the high overall accuracy, identified and addressed challenges in correctly classifying phishing and malware URLs, leading to improved model robustness.",
    stack: [{name:'Scikit-Learn'}, {name:'PyTorch'}],
    image: "/Untitled design.png",
    github: "https://github.com/Pavulururohith/Detecting-phishing-URL-s",
  },
  {
    num: '03',
    category: 'front-end and Blockchain',
    title: "Blood Registry using Blockchain",
    description: "Directed the front-end development and supported smart contract creation using Solidity for a web portal integrated with the Ethereum Blockchain. Implemented AES encryption for secure data handling. Part of the winning team in Asia's largest innovation hackathon, recognized for enabling transparent blood information management, ensuring privacy and integrity. Blockchain Implementation for Blood Registry Using Ethereum Network (Under Review) A research paper analyzing the project\’s implementation and addressing Ethereum’s limitations in the context of blood registry management.",
    stack: [{ name:"Html 5" }, {name: "CSS 3"}, {name:"JavaScript"}, {name:"Django"}, {name:"Solidity"}],
    image: "/image.png",
    github: "",
  },
  {
    num: '04',
    category: 'Full Stack and machine learning',
    title: "Smart Form Using ML",
    description: "Created a system to identify and prevent repetitive selection of projects by recognizing closely related titles for our university. Implemented cosine similarity and Natural Language Processing (NLP) techniques to analyze and compare project titles with similar meanings achieving a 95\% accuracy rate and reducing project selection time by 40\%. Developed the application using Django and designed an intuitive user interface to facilitate easy interaction with the system. This project was assigned by our professor, who entrusted us with the task, reflecting the confidence placed in our ability to deliver a functional and reliable solution for the institution then successfully implemented across 5 university departments.",
    stack: [{ name:"Html 5" }, {name: "CSS 3"}, {name:"JavaScript"}, {name:"Django"}, {name:"Natural Language Processing"}],
    image: "/image copy.png",
    github: "https://github.com/Pavulururohith/Smart-Form",
  },
  {
    num: '05',
    category: 'full stack and machine learning',
    title: "Textalyzer",
    description: "Implemented an extractive text summarization feature using the TextRank algorithm with the Gensim Python library. Designed the tool to condense lengthy articles into shorter, meaningful summaries while preserving key information. Built a QnA system that processes large amounts of text data to answer user queries. Utilized the TF-IDF (Term Frequency-Inverse Document Frequency) algorithm to extract the most relevant answers while maintaining the original context. Integrated the summarization and QnA functionalities into a user-friendly web application using Django.",
    stack: [{ name:"Html 5" }, {name: "CSS 3"}, {name:"JavaScript"}, {name:"Django"}, {name:"Natural Language Processing"}],
    image: "/image copy 2.png",
    github: "https://github.com/Pavulururohith/Textalyzer",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }

  return (
    <motion.section initial = {{opacity:0}} animate = {{opacity:1, transition: {delay:2.4, duration:0.4, ease: "easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]"> 
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h1 className="text-[54px] font-bold leading-none text-accent transition-all duration-500">{project.title}</h1>
              <h2 className="text-[24px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index)=> {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {item.name}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
               {/* 
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group mb-6">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidePrevClass={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index)=> {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full hfull bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-center" alt='' />
                      </div>
                    </div>
                  </SwiperSlide>
              )})}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
