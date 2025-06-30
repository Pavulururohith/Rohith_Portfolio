"use client"

import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import{ FiDownload } from "react-icons/fi"

const skills = [
  "Python", "Java", "C", "JavaScript", "TypeScript", "Go", "Solidity",
  "HTML", "CSS", "React", "Node.js", "Express.js", "NestJS", "Next.js", "Tailwind CSS",
  "FastAPI", "Django", "Selenium", "Swagger",
  "AWS", "Google Cloud", "Azure", "Kubernetes", "Docker", "Terraform", "Helm",
  "GitHub Actions", "GitLab CI", "Argo", "Linux",
  "PostgreSQL", "Snowflake", "Kafka", "Tableau",
  "TensorFlow", "OpenCV", "MLflow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib",
  "Ethereum", "Raspberry Pi",
  "Git", "Jenkins", "Jira", "Postman", "Prometheus", "Grafana", "AWS Fargate"
]

const Home = () => {
  return (
    <section className="h-full mb-10">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8">
          <div className="text-center xl:text-left order-2 xl:order-none flex-1">
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Rohith Pavuluru</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A Computer Science Master's student, excels in Data Analysis, Software Engineering, and DevOps. I am proefficient in various programmming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/Rohith_Pavuluru_Resume.pdf" download = "Rohith_Pavuluru_Resume">
                <Button varient="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration:500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 py-32 flex-1 flex justify-center xl:justify-end">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      
      {/* Auto-scrolling Skills Section */}
      <div className="w-full py-4 mt-12 overflow-hidden">
        <div className="flex">
          <div className="animate-scroll flex gap-24 whitespace-nowrap">
            {skills.map((skill, index) => (
              <span key={index} className="text-accent text-lg font-medium">
                {skill}
              </span>
            ))}
          </div>
          <div className="animate-scroll flex gap-24 whitespace-nowrap">
            {skills.map((skill, index) => (
              <span key={`dup-${index}`} className="text-accent text-lg font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
// {Rohith}
export default Home

