import React from "react"
import { motion } from "framer-motion"

import Delayed from "../components/Delayed.ts"
import Footer from "../components/Footer"
import HeadShot from "../images/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg"

function About() {
    return (
        <Delayed>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: "100%"}}
            exit={{opacity: 0, transition: {duration: 0.5}}}
            >
                <div className="pt-20 flex">
                    <div className="m-12">
                        <h1 className="text-7xl font-bold">Alen Agic</h1>
                        <h1 className="text-5xl mt-4">RE/MAX Concepts</h1>
                        <div className="mt-4">
                            <h3 className="text-2xl font-bold underline">Mailing Address</h3>
                            <p>661 NE Venture Drive</p>
                            <p>Waukee, IA 50263-8697</p>
                            <p className="mt-4 text-2xl font-bold underline">Mobile Phone</p> <p>(515) 669-9582</p>
                            {/* TODO: add mailto address */}
                            <p className="mt-4 text-2xl text-blue-500 hover:opacity-30"><a href="https://google.com">Contact Me By Email</a></p>
                        </div>
                    </div>
                    <div className="ml-auto m-12">
                        <img src={HeadShot} alt="" />
                    </div>
                </div>
                <Footer />
            </motion.div>
        </Delayed>
    )
}

export default About