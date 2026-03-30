const plans = [
    {
        name: "Basic",
        price: "₹999",
        duration: "/month",
        features: ["Gym Access", "Basic Equipment", "Locker Facility"],
        highlight: false,
    },
    {
        name: "Standard",
        price: "₹1999",
        duration: "/month",
        features: [
            "All Basic Features",
            "Personal Trainer",
            "Diet Plan",
            "24/7 Access",
        ],
        highlight: true,
    },
    {
        name: "Premium",
        price: "₹2999",
        duration: "/month",
        features: [
            "All Standard Features",
            "Advanced Training",
            "Priority Support",
            "Exclusive Access",
        ],
        highlight: false,
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="bg-black text-white py-28 relative overflow-hidden">

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Membership <span className="text-[#D4AF37]">Plans</span>
                    </h2>
                    <p className="mt-4 text-gray-400">
                        Choose the plan that fits your goals and start your transformation today.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative group rounded-2xl p-8 overflow-hidden transition-all duration-500 ${plan.highlight
                                ? "bg-white/10 backdrop-blur-xl border border-[#D4AF37]/40 scale-105"
                                : "bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#D4AF37]/40"
                                } hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)]`}
                        >

                            {/* SHINY SWEEP EFFECT */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                <div className="absolute -left-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>
                            </div>

                            {/* GOLD GLOW */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-[#D4AF37]/10 blur-2xl"></div>

                            {/* Content */}
                            <div className="relative z-10">

                                {/* Plan Name */}
                                <h3 className="text-xl font-semibold">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="mt-4 flex items-end gap-1">
                                    <span className="text-4xl font-bold text-[#D4AF37]">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-400 text-sm">
                                        {plan.duration}
                                    </span>
                                </div>

                                {/* Features */}
                                <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>✔ {feature}</li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button
                                    className={`mt-8 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.highlight
                                        ? "bg-[#D4AF37] text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                                        : "border border-white/20 hover:bg-white hover:text-black"
                                        }`}
                                >
                                    Choose Plan
                                </button>

                            </div>

                            {/* Badge */}
                            {plan.highlight && (
                                <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pricing;