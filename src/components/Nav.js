import React from "react"
import { Link } from "react-router-dom"

import whiteOnTransparent from "../images/White on Transparent.png"

function Nav() {
    return (
        <nav className="flex w-full h-20 z-10">
            <Link to={"/"}><img className="h-20 min-w-max ml-4 p-2 hover:opacity-30" src={whiteOnTransparent} alt="" /></Link>
            <ul className="flex flex-end ml-auto items-center">
                <Link to={"/properties"}><li className="text-2xl text-white hover:opacity-30 mx-8">Property Search</li></Link>
                <Link to={"/about"}><li className="text-2xl text-white hover:opacity-30 mx-8">About Me</li></Link>
                <Link to={"/contact"}><li className="text-2xl text-white hover:opacity-30 mx-8">Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Nav