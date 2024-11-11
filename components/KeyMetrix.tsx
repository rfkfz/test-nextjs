"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
    {
        id: 1,
        value: '5+',
        label: 'Python',
        description: 'Selama empat tahun bekerja di Advanced Systems Solutions, saya mengembangkan berbagai aplikasi berbasis web dan desktop yang berfokus pada optimasi kinerja. Berkolaborasi dengan tim lintas divisi, saya memimpin proyek integrasi sistem yang kompleks, memanfaatkan teknologi seperti Node.js, React, dan MongoDB. Saya juga berhasil mengurangi waktu respons aplikasi sebesar 30% melalui refactoring kode dan pengimplementasian cache pada lapisan back-end. Selain itu, saya terlibat dalam proses CI/CD yang mempercepat siklus pengembangan dan pengujian, memungkinkan rilis versi baru dalam waktu singkat dengan kualitas tinggi',
    },
    {
        id: 2,
        value: '50+',
        label: 'MongoDB',
        description: 'Sebagai Data Analyst di Insightful Analytics, saya bertanggung jawab atas analisis data kompleks dan penyusunan laporan yang mendalam untuk berbagai klien. Dengan menggunakan Python dan SQL, saya melakukan ekstraksi, transformasi, dan penggabungan data dari berbagai sumber, menghasilkan laporan yang berorientasi pada pengambilan keputusan strategis. Saya berhasil menyusun visualisasi data interaktif menggunakan Tableau dan Power BI yang digunakan oleh klien untuk memantau performa bisnis secara real-time. Proyek unggulan saya adalah analisis tren pelanggan, yang berhasil mengidentifikasi segmen pasar baru, meningkatkan pangsa pasar klien sebesar 15% dalam waktu satu tahun',
    },
    {
        id: 3,
        value: '500+',
        label: 'Linux',
        description: 'Selama lima tahun di Global Connect, saya bekerja sebagai Network Engineer dengan fokus utama pada peningkatan infrastruktur jaringan untuk perusahaan multinasional. Saya mengawasi implementasi dan pemeliharaan jaringan LAN, WAN, dan VPN, memastikan keamanan jaringan melalui konfigurasi firewall dan monitoring trafik secara berkelanjutan. Saya juga memimpin proyek migrasi jaringan perusahaan ke teknologi SD-WAN, yang meningkatkan kecepatan dan stabilitas koneksi lintas cabang. Dalam peran ini, saya mengembangkan skrip otomatisasi untuk manajemen jaringan, yang berhasil menurunkan waktu pemulihan saat terjadi gangguan hingga 40%',
    },
    {
        id: 4,
        value: '5000+',
        label: 'Docker',
        description: 'Sebagai Project Manager di Visionary Development Corp, saya mengelola tim multidisiplin dalam berbagai proyek pengembangan perangkat lunak yang kompleks. Dengan menggunakan metodologi Agile, saya berhasil mempersingkat waktu pengerjaan proyek rata-rata sebesar 25%, sekaligus memastikan kualitas hasil akhir sesuai dengan ekspektasi klien. Saya juga mengembangkan framework komunikasi yang meningkatkan kolaborasi antar tim dan mengurangi kesalahpahaman proyek. Pengalaman ini melibatkan keterlibatan intens dalam analisis risiko dan mitigasi masalah, memungkinkan kami menyelesaikan proyek besar tanpa mengalami penundaan yang signifikan',
    },
    {
        id: 5,
        value: '50000+',
        label: 'Kubernetes',
        description: 'Di Nexus Cloud Solutions, saya mengelola infrastruktur cloud untuk mendukung operasi bisnis klien secara efisien dan aman. Peran saya meliputi desain dan implementasi arsitektur cloud yang scalable menggunakan AWS dan Azure, serta automasi deployment dengan Terraform dan Ansible. Saya juga mengoptimalkan penggunaan sumber daya untuk menurunkan biaya operasional sebesar 20% melalui pemantauan yang teliti dan penyesuaian otomatis. Selain itu, saya berhasil memperkuat sistem keamanan cloud dengan menerapkan enkripsi data dan praktik IAM yang ketat, sehingga memenuhi standar compliance dan menjaga integritas data klien',
    }
];

export const KeyMetrics = () => {
    const ref = React.useRef<HTMLElement>(null);

    const isInView = useInView(ref, { once: false });
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="px-4 py-32 text-white glass"
            id="about"

        >
            <div className='container mx-auto'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-6xl font-bold mb-12"
                >
                    KEY METRICS
                </motion.h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8"
                >
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                            className="flex flex-col"
                        >
                            <motion.h3
                                initial={{ scale: 0.5 }}
                                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.4, type: 'spring' }}
                                className="text-5xl font-bold text-purple-300 mb-2"
                            >
                                {metric.value}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                                className="text-xl font-semibold mb-2"
                            >
                                {metric.label}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                                className="text-gray-400 text-justify"
                            >
                                {metric.description}
                            </motion.p>

                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};