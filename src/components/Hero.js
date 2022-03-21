import * as React from "react"

import { SiLinktree } from "react-icons/si"
import { SiDiscord } from "react-icons/si"
import { SiTwitter } from "react-icons/si"

const Hero = () => {
    return (
        <div className="containner max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex text-center">
            <div className="mx-auto text-center">
                <h1 className="pb-3 text-5xl font-extrabold leading-10 tracking-tight text-gradient sm:leading-none md:text-5xl lg:text-6xl">
                    <span className="text-gradient">Project:Iris</span>
                </h1>
                <p className="max-w-xl mx-auto mt-5 text-2xl sm:leading-relaxed sm:text-2xl block sm:block">
                   A collection of 10,000 NFTs
                    <span className="block">that give you access to Iris:Verse</span>
                </p>

                <div className="flex flex-wrap justify-center mt-8">
                    <a className="block w-full px-12 py-3 text-xl bg-gradient rounded sm:text-xl sm:w-auto" href="https://discord.gg/nd6ANSuRWa" target="_blank" rel="noreferrer">Join Us on Discord!</a>
                </div>

                <div className="flex flex-wrap justify-center mt-8 space-x-6 text-3xl">
                    <a className="transform hover:scale-125 duration-300 ease-in-out" href="https://linktr.ee/projectirisnft" target="_blank" rel="noreferrer"><SiLinktree /></a>
                    <a className="transform hover:scale-125 duration-300 ease-in-out" href="https://discord.gg/nd6ANSuRWa" target="_blank" rel="noreferrer"><SiDiscord /></a>
                    <a className="transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/ProjectIrisNFT" target="_blank" rel="noreferrer"><SiTwitter /></a>
                </div>  
            </div>
        </div>

        
    )
}

export default Hero

