"use client"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
<motion.header 
 initial={{
    opacity: 0,
    y:-5
}}
  whileInView={{
    opacity: 1,
    y:0,
    transition: {
      duration: 1 ,
    }
  }}

className="flex items-center justify-between fixed z-[1000] top-3 text-lg text-white/80 border border-white/10 shadow-lg left-0 right-0 max-w-6xl mx-auto p-5 px-8 rounded-full backdrop-blur-xl">
    <h2>Acme co.</h2>
    <nav>
        <ul className="flex items-center justify-center gap-4">
            <motion.li       whileTap={{ scale: 0.85 }}

            className="cursor-pointer "
            >
                Home
            </motion.li>
            <motion.li       whileTap={{ scale: 0.85 }}

            className="cursor-pointer "
            >About</motion.li>
            <motion.li       whileTap={{ scale: 0.85 }}

            className="cursor-pointer "
            >Contact</motion.li>
        </ul>
    </nav>
</motion.header>
)
}

export default Navbar