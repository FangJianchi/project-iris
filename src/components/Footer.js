import * as React from "react"
import { Link } from "gatsby"
import { SiDiscord } from "react-icons/si"
import { SiTwitter } from "react-icons/si"

const Footer = () => {
  return (
    <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
        <Link to="/" className="text-xl font-black leading-none text-gradient">Project:Iris</Link>
        <p className="mt-4 text-sm sm:ml-4 sm:pl-4 sm:border-l sm:mt-0">© 2022 All Rights Reserved</p>
        <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start text-xl">
            <a className="transform hover:scale-125 duration-300 ease-in-out" href="https://discord.gg/nd6ANSuRWa" target="_blank" rel="noreferrer"><SiDiscord /></a>
            <a className="transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/IntoIrisVerse" target="_blank"rel="noreferrer"><SiTwitter /></a>
        </span>
    </div>
  )
}

export default Footer
