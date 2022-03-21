import * as React from "react"
import Grow from "../images/Grow.png"
import House from "../images/House.png"
import Guild from "../images/Guild.png"
import Pet from "../images/Pet.png"
import Companion from "../images/Companion.png"
import Minigames from "../images/Minigames.png"


const About = () => {
  return (
<div class="container max-w-6xl mx-auto">
        <h2 className="pb-2 text-4xl font-bold tracking-tight text-center"><span className="text-gradient">Hightlight</span></h2>
        <p className="mt-2 text-xl text-center">Introduction to Iris:Verse</p>
        <div className="grid grid-cols-4 gap-8 mt-4 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden">
                <img alt="" src={Grow} className="rounded"></img>
                <h4 class="text-xl font-medium">Grow Your NFT</h4>
                <p class="text-base text-center">Each of NFTs can improve their status and learn new skills.</p>

            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4">
                <img alt="" src={House} className="rounded"></img>
                <h4 class="text-xl font-medium">Build Your House</h4>
                <p class="text-base text-center">Buy land and begin building your house in Iris:Verse.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4">
                <img alt="" src={Guild} className="rounded"></img>
                <h4 class="text-xl font-medium">Join a Guild</h4>
                <p class="text-base text-center">Become a member of an adventure guild or form your own.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4">
            <   img alt="" src={Pet} className="rounded"></img>
                <h4 class="text-xl font-medium">Adopt a Pet</h4>
                <p class="text-base text-center">Adopt and raise a wide range of fantastic pets.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4">
                <img alt="" src={Companion} className="rounded"></img>
                <h4 class="text-xl font-medium">Find a Companion</h4>
                <p class="text-base text-center">Make NPCs a part of your party. You even get married to them!</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4">
                <img alt="" src={Minigames} className="rounded"></img>
                <h4 class="text-xl font-medium">Play Minigames</h4>
                <p class="text-base text-center">Farming, fishing, and other minigames.</p>
            </div>
        </div>
    </div>
  )
}

export default About
