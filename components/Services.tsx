const services = [
    {
        id: '01',
        title: 'Web Design',
        description: 'Mengembangkan desain website yang responsif dengan antarmuka pengguna yang ramah, menggunakan HTML, CSS, dan JavaScript untuk menciptakan pengalaman pengguna yang intuitif dan menarik.'
    },
    {
        id: '02',
        title: 'Data Analysis',
        description: 'Menganalisis data besar untuk mengidentifikasi tren dan pola menggunakan Python dan SQL, memungkinkan perusahaan membuat keputusan bisnis berbasis data yang lebih baik dan akurat.'
    },
    {
        id: '03',
        title: 'Mobile Development',
        description: 'Merancang dan mengembangkan aplikasi mobile yang stabil dan cepat dengan fokus pada pengalaman pengguna yang optimal, menggunakan teknologi seperti React Native dan Flutter.'
    },
    {
        id: '04',
        title: 'SEO Optimization',
        description: 'Mengoptimalkan konten dan struktur website untuk meningkatkan peringkat mesin pencari, meningkatkan visibilitas online, dan mendatangkan lebih banyak traffic organik dengan teknik SEO terbaik.'
    },
    {
        id: '05',
        title: 'Cybersecurity',
        description: 'Mengimplementasikan langkah-langkah keamanan dan enkripsi data untuk melindungi jaringan dan aplikasi dari ancaman siber, serta memastikan kepatuhan terhadap standar keamanan terbaru.'
    }
]

export const Services = () => {

    return (
        <section
            className="text-white py-20"
        >
            <div
                className="container mx-auto flex flex-col md:flex-row px-6 sm:px-6"
            >
                <div
                    className="md:w-1/4 pr-8 mb-12 md:mb-0"
                >
                    <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">Services</h2>

                </div>
                <div
                    className="md:w-3/4"
                >
                    {services.map(services => (
                        <div key={services.id} className="mb-16 flex items-start" >
                            <div className="text-purple-300 font-bold text-5xl mr-6">
                                {services.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">
                                    {services.title}
                                </h3>
                                <p>{services.description}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>


        </section>
    )
}