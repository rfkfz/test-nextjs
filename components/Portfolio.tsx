"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"
import project1 from "@/assets/cat1.png"
import project2 from "@/assets/cat2.png"
import project4 from "@/assets/cat4.png"

const projects = [
    {
        id: 1, year: 2024, title: 'CAT 1 COY',
        desciption: 'A breakthrough in image processing, CAT 1 COY harnesses advanced neural networks to identify patterns in high-resolution images. This project demonstrates the models ability to learn complex features in diverse datasets, pushing the boundaries of computer vision. CAT 1 COY adalah proyek inovatif dalam bidang pengolahan gambar yang menggunakan jaringan saraf tiruan untuk mendeteksi pola-pola kompleks dalam gambar beresolusi tinggi. Sistem ini dirancang untuk mempelajari berbagai fitur dalam dataset yang luas dan beragam, membuatnya ideal untuk aplikasi dalam pengenalan wajah, analisis citra medis, dan otomasi visual industri. Dengan model yang terus beradaptasi terhadap perubahan pola data, CAT 1 COY berpotensi membantu pengambilan keputusan dengan kecepatan dan akurasi yang lebih baik. Proyek ini mencakup pengembangan model, pelatihan intensif, serta implementasi sistem untuk penggunaan dunia nyata.',
        image: project1
    },
    {
        id: 2, year: 2024, title: 'CAT 2 COY',
        desciption: 'Focusing on real-time data analytics, CAT 2 COY delivers insights at an unprecedented speed. Designed for handling massive datasets, it enables swift data-driven decision-making, with an emphasis on reliability and scalability across cloud platforms. Berfokus pada analisis data secara real-time, CAT 2 COY memberikan wawasan instan dari dataset besar dengan teknologi komputasi awan. Sistem ini dirancang agar dapat memproses data dalam jumlah besar dengan cepat, memberikan informasi penting untuk mendukung keputusan bisnis secara langsung. Menggunakan algoritma yang dioptimalkan untuk kecepatan dan akurasi, CAT 2 COY memungkinkan perusahaan mengidentifikasi tren, menganalisis performa, dan merespons dinamika pasar dengan cepat. Dengan arsitektur yang scalable dan ketahanan tinggi, proyek ini memungkinkan implementasi di berbagai platform cloud dan siap untuk diaplikasikan di lingkungan produksi berskala besar.',
        image: project2
    },
    {
        id: 3, year: 2024, title: 'CAT 3 COY',
        desciption: 'This project pioneers the integration of natural language processing with user-friendly interfaces. CAT 3 COY can process vast volumes of text, identifying sentiment, themes, and anomalies to provide actionable intelligence for content management systems. CAT 3 COY adalah proyek yang menggabungkan pemrosesan bahasa alami (NLP) dengan antarmuka pengguna yang intuitif. Sistem ini mampu memproses teks dalam volume besar, mengidentifikasi sentimen, tema, hingga anomali yang ada untuk menghasilkan wawasan yang berguna bagi pengelolaan konten digital. Proyek ini dikembangkan untuk memenuhi kebutuhan analisis konten dengan tingkat akurasi yang tinggi, membantu perusahaan memahami opini publik, memprediksi tren konten, dan menyusun strategi komunikasi yang lebih efektif. Dikembangkan dengan fokus pada skalabilitas, CAT 3 COY dapat diterapkan dalam aplikasi bisnis seperti analisis media sosial, chatbot pintar, dan sistem rekomendasi berbasis konten',
        image: project4
    },
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#DD33CC"]
export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])
    const color = useMotionValue(COLORS_TOP[0])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [])

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            id="portfolio" className="py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 ">

                <div>
                    <h2 className="text-6xl font-bold mb-10">List <span className="text-purple-400">Projects</span></h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text-lg mb-2">{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors 
                        ${selectedProject.id === project.id ? 'text-purple-200' : ''} duration-300`}>
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-purple-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className="text-gray-400 transition-all duration-500 ease-in-out text-justify">
                                    {project.desciption}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <Image
                    src={selectedProject.image.src}
                    alt={selectedProject.title}
                    className="lg:pt-40 rounded-xl transition-opacity duration-500 ease-in-out"
                    width={600}
                    height={450}
                />
            </div>
        </motion.section >
    )
}