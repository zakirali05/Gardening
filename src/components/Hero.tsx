"use client"
import { ArrowDown, ArrowRight, ArrowUp, Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <section className="min-h-screen flower-bg relative">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-black to-transparent z-[10]"/>
        <motion.h1
        initial={{
            opacity: 0,
            y:10
          }}
          whileInView={{
            opacity: 1,
            y: 0, 
            transition: {
              duration: 1 
            }
          }}
          viewport={{ once: true }}
        className=" text-5xl lg:text-7xl font-bold  z-[100] absolute max-w-3xl top-36 left-20 uppercase text-white">
        Transform Your Outdoors with Stunning Garden Designs 🌹
        </motion.h1>
        <motion.p 
         initial={{
            opacity: 0,
            y:10
          }}
          whileInView={{
            opacity: 1,
            y: 0, 
            transition: {
              duration: 1 
            }
          }}
          viewport={{ once: true }}
        className="absolute left-20 top-[450px] text-xl text-white/75 z-[100] max-w-xl ">
        GreenNest Landscaping Services, we bring your outdoor dreams to life with sustainable, elegant designs. From lush gardens to serene outdoor spaces, we craft landscapes that are as beautiful as they are eco-friendly. 
        Let&apos;s transform your outdoors into a green haven today.
</motion.p>
<motion.div
 initial={{
    opacity: 0,   
    y:10
  }}
  whileInView={{
    opacity: 1,
    y: 0, 
    transition: {
      duration: 1 
    }
  }}
  viewport={{ once: true }}
className="absolute max-w-xl left-20 top-[660px] lg:top-[580px] text-white text-5xl z-[100] flex items-center gap-3">
    <motion.button          whileTap={{ scale: 0.85 }}
  className="py-2 px-4 cursor-pointer rounded-lg border border-green-950 text-white bg-green-950 text-lg flex items-center gap-2 hover:gap-4 transition-all duration-300">Learn More <ArrowRight className="size-4"/></motion.button>
    <motion.button          whileTap={{ scale: 0.85 }}
  className="py-2 px-4 cursor-pointer rounded-lg border  border-white/40 text-white text-lg flex items-center gap-2 hover:gap-4 transition-all duration-300">Contact Us <ArrowRight className="size-4"/></motion.button>
 
</motion.div>

<motion.div

initial={{
    opacity: 0,
gap : "5rem",
top : "5rem"
}}
  whileInView={{
    opacity: 1,
    gap : "2rem",
    top :"11rem",
    transition: {
      duration: 1 ,
    }
  }}
 

className="z-[100] opacity-75 absolute top-44 backdrop-blur  p-2 rounded-lg left-5 flex flex-col gap-8 text-white items-center justify-center">
    <motion.span 
   
  viewport={{ once: true }}


    whileTap={{ scale: 0.85 }}
  className="" ><ArrowUp className="size-4"/></motion.span>
    <motion.span 
   
  viewport={{ once: true }}


    whileTap={{ scale: 0.85 }}
  className="cursor-pointer transition-all duration-300 hover:bg-white/50 hover:border-white p-2 rounded-full" ><Instagram className="size-4"/></motion.span>
    <motion.span  
  
  viewport={{ once: true }}


    whileTap={{ scale: 0.85 }}
  className="cursor-pointer transition-all duration-300 hover:bg-white/50 hover:border-white p-2 rounded-full" ><Facebook className="size-4"/></motion.span>
    <motion.span   
    
  viewport={{ once: true }}


    whileTap={{ scale: 0.85 }}
  className="cursor-pointer transition-all duration-300 hover:bg-white/50 hover:border-white p-2 rounded-full" > <Twitter className="size-4"/>
    </motion.span>
    <motion.span  
   
  viewport={{ once: true }}


    whileTap={{ scale: 0.85 }}
  className="cursor-pointer transition-all duration-300 hover:bg-white/50 hover:border-white p-2 rounded-full" ><Linkedin className="size-4"/></motion.span>
    <motion.span  
   
  viewport={{ once: true }}


    whileTap={{ scale: 0.85 }}
  className="cursor-pointer transition-all duration-300 hover:bg-white/50 hover:border-white p-2 rounded-full" ><Mail className="size-4"/></motion.span>

    <span><ArrowDown className="size-4"/></span>
</motion.div>
    </section>
  )
}

export default Hero