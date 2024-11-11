"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import cat1 from "@/assets/cat1.png"
import cat2 from "@/assets/cat2.png"
import cat3 from "@/assets/cat3.png"
import cat4 from "@/assets/cat4.png"
import cat5 from "@/assets/cat5.png"
import cat6 from "@/assets/cat6.png"
import cat7 from "@/assets/cat7.png"
import cat8 from "@/assets/cat8.png"
import cat9 from "@/assets/cat9.png"
import cat10 from "@/assets/cat10.png"

const images = [
    { src: cat1, alt: "1" },
    { src: cat2, alt: "2" },
    { src: cat3, alt: "3" },
    { src: cat4, alt: "4" },
    { src: cat5, alt: "5" },
    { src: cat6, alt: "6" },
    { src: cat7, alt: "7" },
    { src: cat8, alt: "8" },
    { src: cat9, alt: "9" },
    { src: cat10, alt: "10" },
    { src: cat1, alt: "1" },
    { src: cat2, alt: "2" },
    { src: cat3, alt: "3" },
    { src: cat4, alt: "4" },
    { src: cat5, alt: "5" },
    { src: cat6, alt: "6" },
    { src: cat7, alt: "7" },
    { src: cat8, alt: "8" },
    { src: cat9, alt: "9" },
    { src: cat10, alt: "10" },

]

export const LogoAnimation = () => {
    return (
        <div className="py-8 bg-purple-200/10 glass opacity-80">
            <div className="container mx-auto">
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                    <motion.div
                        className="flex gap-14 flex-none pr-14"
                        animate={{
                            translateX: '-100%',
                        }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                height={70}
                            />
                        ))}
                    </motion.div>
                </div>

            </div>

        </div >
    );
};