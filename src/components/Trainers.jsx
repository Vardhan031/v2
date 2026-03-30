
const trainers = [
    {
        name: "Hussain",
        role: "Strength Coach",
        img: "src/assets/images/hussin.png",
    },
    {
        name: "Manikanta",
        role: "Weight Loss Expert",
        img: "src/assets/images/mniknt.png",
    },
    {
        name: "Santosh",
        role: "Hypertrophy Specialist",
        img: "src/assets/images/sntosh.png",
    },
    {
        name: "Arun Yogesh",
        role: "Strength Coach",
        img: "src/assets/images/ArunYogesh.png",
    },
];

const Trainers = () => {
    return (
        <section id="trainers" className="bg-black text-white py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Meet Our <span className="text-[#D4AF37]">Trainers</span>
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Train with certified professionals dedicated to your transformation.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainers.map((trainer, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                        >

                            {/* Image */}
                            <img
                                src={trainer.img}
                                alt={trainer.name}
                                className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                            {/* Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[#D4AF37]/10 blur-xl"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-5">
                                <h3 className="text-lg font-semibold">
                                    {trainer.name}
                                </h3>
                                <p className="text-sm text-gray-300">
                                    {trainer.role}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Trainers;