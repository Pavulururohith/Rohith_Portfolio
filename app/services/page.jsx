"use client"
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion";


const Services = () => {

  const services = [
    {
      num: '01',
      title: 'Nokia Solutions and Networks',
      description: 'Configured and managed alert handling using Alertmanager for alerts sent by client programmers, and utilized Grafana for querying, visualizing, and alerting on metrics. Enhanced Grafana dashboards by adding workload-level resources and fixing bugs in charts to improve reliability and performance. Added CA Cert configuration in the Grafana data source section to ensure secure connections. Implemented feature enhancements for Grafana dashboards to provide more insightful metrics and reports. Utilized Kubernetes, Docker, and Helm for deployment and orchestration of monitoring and visualization tools.',
      href: 'https://drive.google.com/file/d/1860dVRVlatREEQpDlhfSxbQqpNv6jfpi/view?usp=drivesdk'
    },
    {
      num: '02',
      title: 'Nano Robotics Embed Technologies',
      description: 'Led the development of an advanced weather forecasting model using multiple linear regression and Bayesian regularization neural networks. Utilized datasets from the Indian Meteorological Department to build and train the model, incorporating subtractive clustering techniques for data segmentation and analysis, leveraging Python and scikit-learn for implementation. Enhanced model performance through iterative testing and validation, achieving measurable improvements in prediction reliability. Submitted detailed reports and created interactive visualizations using Matplotlib, supporting data-driven decision-making.',
      href: 'https://drive.google.com/file/d/1gLecghfbs4fG9XcddtR7w_WfF3TiVT7d/view?usp=share_link'
    },
  ];


  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay: 2, duration: 0.3, ease: "easeIn"}}} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index)=> {
            return (
              <div key = {index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href = {service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="white-space:pre-wrap">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
