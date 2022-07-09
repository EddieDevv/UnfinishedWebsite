import React from "react"
import { motion } from "framer-motion"

import Delayed from "../components/Delayed.ts"
import HomeLeft from "../components/HomeLeft"
import HomeRight from "../components/HomeRight"
import Footer from "../components/Footer"

function Home() {
    return (
        <Delayed>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: "100%"}}
            exit={{opacity: 0, transition: {duration: 0.5}}}
            >
                <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover splash-img">
                    <div className="p-5 text-5xl text-white bg-gray-700 bg-opacity-50 rounded">
                        Welcome to my site!
                    </div>
                </header>
                <HomeLeft />
                <HomeRight />
                <HomeLeft />
                <Footer />
            </motion.div>
        </Delayed>
    )
}

export default Home