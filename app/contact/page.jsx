"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { Description } from "@radix-ui/react-dialog"
import { FiCopy, FiCheck } from "react-icons/fi"

import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "emailjs-com"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");  // For acknowledgment status
  const [copiedField, setCopiedField] = useState(null);

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: (
        <div className="flex items-center gap-2">
          <span>+1 930-333-4291</span>
          <button
            onClick={() => copyToClipboard("+1 930-333-4291", "Phone")}
            className="p-1 hover:text-accent transition-colors"
          >
            {copiedField === "Phone" ? (
              <FiCheck className="text-accent" />
            ) : (
              <FiCopy />
            )}
          </button>
        </div>
      ),
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: (
        <div className="flex items-center gap-2">
          <span>rohithpavuluru09@gmail.com</span>
          <button
            onClick={() => copyToClipboard("rohithpavuluru09@gmail.com", "Email")}
            className="p-1 hover:text-accent transition-colors"
          >
            {copiedField === "Email" ? (
              <FiCheck className="text-accent" />
            ) : (
              <FiCopy />
            )}
          </button>
        </div>
      ),
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: (
        <>
          United States
          <br />
          <span className="text-accent text-sm">(ready to relocate)</span>
        </>
      ),
    },
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const serviceID = "service_d2nbuw1";
  const templateID = "template_6oqdzqq";
  const publicKey = "2436XL2AEolvY5StI";

  const templateParams = {
    lastname: formData.lastname,
    firstname: formData.firstname,
    to_name: "Rohith",
    message: formData.message,
    email: formData.email,
    phone: formData.phone
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully! We'll get back to you soon.");
        },
        (error) => {
          console.log(error.text);
          setStatus("Oops! Something went wrong. Please try again.");
        }
      );
  };

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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              {/* <p className="text-white/60">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />

              <Button size="md" className="max-w-40 py-3">
                Send message
              </Button>
            </form>

            {/* {status && <p className="mt-4 text-white/60">{status}</p>} */}

            {status && (
              <p
                className={`mt-4 ${
                  status.includes("successfully")
                    ? "text-accent p-3 rounded"
                    : "text-red-600 p-3 rounded"
                }`}
              >
                {status}
              </p>
            )}
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 px-16 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact
