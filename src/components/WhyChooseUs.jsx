const features = [
    {
        title: "Modern Equipment",
        desc: "Train with top-tier machines designed for performance and safety.",
        img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
        title: "Expert Trainers",
        desc: "Get guidance from certified professionals to maximize results.",
        img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    },
    {
        title: "24/7 Access",
        desc: "Workout anytime with full access to our premium facilities.",
        img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
    },
    {
        title: "Personal Plans",
        desc: "Custom training & diet plans tailored for your goals.",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
];

const WhyChooseUs = () => {
    return (
        <section id="features" className="bg-black text-white py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Why Choose <span className="text-[#D4AF37]">V2 Fitness</span>
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Experience elite training with world-class facilities and expert guidance.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="relative h-72 rounded-2xl overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                        >

                            {/* Background Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

                            {/* Gold Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-[#D4AF37]/10 blur-2xl"></div>

                            {/* Border Highlight */}
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-[#D4AF37]/40 transition duration-300"></div>

                            {/* Content */}
                            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;