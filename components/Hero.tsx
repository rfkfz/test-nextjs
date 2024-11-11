"use client"
import Image from "next/image"
import { useEffect } from "react"
import { useMotionValue, useMotionTemplate, animate, motion } from "framer-motion"
import obj from '@/assets/cat4.png'
import { FiArrowDownRight } from "react-icons/fi"
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#DD33CC"]

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`


    return (
        <motion.section
            style={{
                backgroundImage
            }}
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open work
                </span>
                <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl">
                    John
                </h1>
                <Image
                    src={obj}
                    alt="profile pic"
                    width={250}
                />

                <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
                    <Image
                        src={obj}
                        alt="object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <Image
                        src={obj}
                        alt="object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <Image
                        src={obj}
                        alt="object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />

                    <p className="font-medium">Happy Client</p>

                </div>


                <p className="my-6 max-w-xl text-center">Fullstack Developer</p>

                <motion.button
                    style={{
                        border,
                        boxShadow
                    }}
                    whileHover={{
                        scale: 1.015
                    }}
                    whileTap={{
                        scale: 0.985
                    }}
                    className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                    onClick={() => window.open("https://drive.google.com/drive/folders/18WYibG55J1VK4giYOLyKFX9Jift8h0Ra?usp=sharing", "_blank")}
                >
                    Download CV
                    <FiArrowDownRight />
                </motion.button>
            </div>

            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>

        </motion.section>
    )
}
