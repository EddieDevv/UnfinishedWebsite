import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import RemaxLogo from "../images/remax-logo.png"

function Footer() {
    return (
        <footer className="h-96 w-full text-white">
            <div className="p-8 flex justify-center">
                <div>
                    <img src={RemaxLogo} alt="" />
                    <p className="text-2xl font-extrabold concepts"><a href="https://concepts.remax-central.com" target="_blank" rel="noopener noreferrer">Concepts</a></p>
                    <div className="mt-4">
                        <p>661 NE Venture Drive</p>
                        <p>Waukee, IA 50263-8697</p>
                        <p>Office Phone: () -</p>
                    </div>
                </div>
                <div className="ml-16">
                    <p className="text-3xl font-semibold">Alen Agic</p>
                    <div className="my-4">
                        <p>REALTOR®</p>
                        <p>Iowa</p>
                        <p>Direct: (515) 669-9582</p>
                    </div>
                    <p>FOLLOW ME</p>
                    <div className="flex items-center">
                        <div className="mr-2">
                            <a className="hover:opacity-30" href="https://www.facebook.com/SoldIowa"><FontAwesomeIcon icon={faFacebookF} /></a>
                        </div>
                        <div className="ml-2">
                            <a className="hover:opacity-30" href="https://www.linkedin.com/in/alenagic/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>
                </div>
                <div className="ml-16">
                    <h3 className="text-3xl font-semibold">Contact</h3>
                    {/* TODO: put mailto address */}
                    <form action="mailto:" method="post" encType="text/plain">
                        Name:<br />
                        <input type="text" name="name"></input><br />
                        E-mail:<br />
                        <input type="text" name="mail"></input><br />
                        Comment:<br />
                        <input type="text" name="comment" size="50"></input><br />
                        <input className="hover:opacity-30" type="submit" value="Send" id="hand"></input>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer