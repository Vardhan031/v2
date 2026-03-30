const CTA = () => {
    return (
        <section id="contact" className="relative bg-black text-white py-28 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                    Start Your Fitness Journey <br />
                    <span className="text-[#D4AF37]">Today</span>
                </h2>

                {/* Subtext */}
                <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                    Join V2 Fitness Zone and transform your body with expert guidance,
                    world-class equipment, and unmatched discipline.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                    {/* Join Button */}
                    <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300">
                        Join Now
                    </button>

                    {/* Contact Button */}
                    <button className="border border-white/20 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                        Contact Us
                    </button>

                </div>

                {/* Optional Info */}
                <div className="mt-12 text-gray-400 text-sm">
                    <p>📍 Sainikpuri, Hyderabad</p>
                    <p className="mt-1">📞 +91 98765 43210</p>
                </div>

            </div>
        </section>
    );
};

export default CTA;