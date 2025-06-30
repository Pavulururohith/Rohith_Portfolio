"use client"
import { easeIn, motion } from "framer-motion"
import Image  from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay: 1.0 , duration:0.2, ease: "easeIn"},}}>
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay: 1.5 , duration:0.2, ease: "easeInOut"},}}>
          <div className="absolute left-1/2 top-1/2 w-[292px] h-[292px] xl:w-[496px] xl:h-[496px] -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden flex items-center justify-center z-10">
            <Image src="https://raw.githubusercontent.com/Pavulururohith/Photos/main/c09b245e-ae54-4153-b58c-7fcafa355f0b%20(1).png" priority quality={100} fill alt="" className="object-cover object-center scale-125"/>
          </div>
        </motion.div>
      </motion.div>
      <motion.svg initial={{opacity:0}} animate={{opacity:1, transition:{delay: 1.5 , duration:0.2, ease: "easeIn"}}} className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
        <motion.circle initial={{strokeDasharray:"24 10 0 0"}} animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate:[120,360]}} cx="253" cy="253" r="248" stroke="#00ff99" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
        transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
        }} />
      </motion.svg>
    </div>
  )
}

export default Photo
