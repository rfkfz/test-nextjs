"use client"

import { motion } from 'framer-motion';
import { FiArrowUpRight } from "react-icons/fi"

export const Contact = () => {
    return (
        <section id='contact' className="overflow-x-clip py-16 sm:py-32 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='grid gap-12 lg:grid-cols-2 lg:gap-16'
            >
                <div className='space-y-8 sm:space-y-12'>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-4xl sm:text-7xl font-bold text-gray-300'
                    >
                        Get in <span className='text-purple-500'>touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='glass p-6 sm:p-8 rounded-2xl space-y-6 sm:space-y-8'
                    >
                        <div className='space-y-1 sm:space-y-2'>
                            <p className='text-base sm:text-lg text-gray-300'>
                                Phone
                            </p>
                            <a
                                href="#contact"
                                onClick={() => window.open("tel:+6282146688703", "_blank")}
                                className='text-xl sm:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'
                            >
                                (+62) 821 4668 8703
                                <FiArrowUpRight />
                            </a>
                        </div>

                        <div className='space-y-1 sm:space-y-2'>
                            <p className='text-base sm:text-lg text-gray-300'>Email</p>
                            <a
                                href="#contact"
                                onClick={() => window.open("mailto:rifkifauzi.versia@gmail.com", "_blank")}
                                className='text-xl sm:text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'
                            >
                                rifkifauzi.versia@gmail.com
                                <FiArrowUpRight />
                            </a>
                        </div>

                        <div className='space-y-1 sm:space-y-2'>
                            <p className='text-base sm:text-lg text-gray-300'>Address</p>
                            <address className='text-lg sm:text-xl not-italic leading-relaxed'>
                                Bekasi Timur <br />
                                Jawa Barat <br />
                                Indonesia <br />
                            </address>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='w-full h-64 sm:h-full sm:w-full min-h-[250px] sm:min-h-[250px] rounded-2xl overflow-hidden'
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4800854952675!2d107.0224425642701!3d-6.274204448603905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e130ed08d53%3A0x136f60b9d0025176!2sJl.%20H.%20Jampang%20No.25%2C%20Jatimulya%2C%20Kec.%20Tambun%20Sel.%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017510!5e0!3m2!1sen!2sid!4v1731316370911!5m2!1sen!2sid"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading='lazy'
                    >
                    </iframe>
                </motion.div>
            </motion.div>
        </section>
    );
};
