import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import{ FiDownload } from "react-icons/fi"


const Home = () => {
  return (
    <section className="h-full mb-10">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span>Software Developer</span> */}
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Rohith Pavuluru</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A Computer Science Master's student, excels in data science, web development, and blockchain. I am proefficient in various programmming languages and technologies.
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
    
  )
}

export default Home

