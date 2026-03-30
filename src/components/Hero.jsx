import heroImg from "../assets/images/hero1.png";

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center text-white overflow-hidden pt-16 lg:pt-20">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroImg}
                    alt="Workout"
                    className="w-full h-full object-cover object-[80%_center] scale-95"
                />
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex items-center min-h-screen lg:pl-12">

                {/* Left Content (Centered, Not Stretched) */}
                <div className="relative max-w-xl lg:max-w-2xl w-full lg:w-1/2 xl:w-2/5 flex flex-col justify-center">

                    <div className="space-y-5 lg:space-y-6 relative">

                        {/* Gold Accent Line */}
                        <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>

                        {/* Heading */}
                        <h1 className="font-display leading-[1.05] tracking-tight">
                            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-white/95 to-gray-100 bg-clip-text text-transparent drop-shadow-2xl">
                                Train the Way
                            </span>

                            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-white/95 to-gray-100 bg-clip-text text-transparent drop-shadow-2xl mt-[-8px] lg:mt-[-12px]">
                                You Were Meant To
                            </span>

                            <span className="block mt-6 text-lg sm:text-xl md:text-2xl font-bold tracking-[3px] uppercase bg-gradient-to-r from-[#D4AF37]/90 via-[#D4AF37] to-[#F1C435] bg-clip-text text-transparent drop-shadow-lg">
                                V2 — The New Benchmark in Fitness
                            </span>
                        </h1>

                        {/* Description */}
                        {/* <p className="mt-4 text-gray-200/95 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed font-light drop-shadow-md tracking-wide">
                            Train at V2 Fitness Zone — where discipline meets results.
                            Push beyond your limits and transform your body.
                        </p> */}

                        {/* CTA Buttons */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-4 max-w-md">
                            <button className="group relative bg-gradient-to-r from-[#D4AF37] to-[#F1C435] text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                                <span className="relative z-10">Join Now</span>
                                <div className="absolute inset-0 bg-white/30 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>

                            <button className="border-2 border-white/60 backdrop-blur-sm bg-white/5 hover:bg-white/20 hover:border-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300">
                                View Plans
                            </button>
                        </div>

                    </div>

                    {/* Stats (Bottom Left, Clean Placement) */}
                    <div className="mt-10 flex gap-8 text-sm">
                        <div>
                            <span className="block font-bold text-2xl text-[#D4AF37]">500+</span>
                            <span className="text-gray-400 font-medium uppercase tracking-wider">
                                Lives Transformed
                            </span>
                        </div>

                        <div>
                            <span className="block font-bold text-2xl text-[#D4AF37]">24/7</span>
                            <span className="text-gray-400 font-medium uppercase tracking-wider">
                                Elite Access
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;