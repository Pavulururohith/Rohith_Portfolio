"use client"
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion";

const Services = () => {

  const services = [
    {
      num: '01',
      title: 'Nokia Solutions and Networks',
      description: 'Configured Alertmanager for efficient handling of system alerts and utilized Grafana to visualize and monitor metrics, streamlining metrics with Kafka. Improved over 15 Grafana dashboards, increasing system reliability by 22%.\nLed the proof of concept (POC) and implementation of a dynamic log management solution for OpenSearch application audit logs, enhancing log management capabilities while ensuring other logs remained unaffected.\nUtilized Kubernetes, Docker, and Helm to streamline the deployment process, reducing deployment time by 25% and enhancing tool reliability. Implemented and optimized Docker images, achieving up to 50% size reduction.\nAchieving 92.4% code coverage by JUnit and end-to-end tests.',
      href: 'https://drive.google.com/file/d/1860dVRVlatREEQpDlhfSxbQqpNv6jfpi/view?usp=drivesdk'
    },
    {
      num: '02',
      title: 'Nano Robotics Embed Technologies',
      description: 'Led the development of an advanced weather forecasting model, improving prediction accuracy by 12% using multiple linear regression and Bayesian neural networks with data from the Indian Meteorological Department.\nAnalyzed over 1,000,000 data points, enhancing model performance and creating over 15 interactive visualizations with Matplotlib for data-driven decision-making.\nEmployed subtractive clustering techniques and leveraged Python and scikit-learn in an Agile environment.',
      href: 'https://drive.google.com/file/d/1gLecghfbs4fG9XcddtR7w_WfF3TiVT7d/view?usp=share_link'
    },
    {
      num: '03',
      title: 'Pramahasoft Solutions Pvt Ltd',
      description: 'Designed and optimized data pipelines using Infor Data Lake, Infor ION, and Snowflake, ensuring efficient data integration, seamless flow, and high accuracy for downstream applications.\nDeveloped and automated data processing workflows with Python (Pandas, NumPy) and SQL, enhancing performance, resolving data inconsistencies, and eliminating manual work through robust automation.\nBuilt and deployed interactive dashboards using Tableau, enabling real-time data visualization for over 50 stakeholders, driving data-driven decision-making.\nEngineered a centralized reporting platform, streamlining access to critical data, improving system scalability, and reducing report generation time by 40%.',
      href: 'https://drive.google.com/file/d/1VMJydfb491JuOa-KymgDWfIn2nr2EYa3/view?usp=sharing'
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.3, ease: "easeIn" } }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            const points = service.description.split('\n').filter(point => point.trim() !== '');

            return (
              <div key={index} className="flex-1 flex flex-col justify gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <ul className="list-disc pl-5">
                  {points.map((point, idx) => (
                    <li key={idx} className="text-white/80 mb-2">{point.trim()}</li>
                  ))}
                </ul>
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