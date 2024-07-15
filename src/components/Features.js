import React from "react";
import { Zap, Shield, Star } from "lucide-react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <Zap size={32} className="text-yellow-500" />,
      title: "Lightning Fast",
      description: "Our app is optimized for speed and performance.",
    },
    {
      icon: <Shield size={32} className="text-green-500" />,
      title: "Secure",
      description: "Your data is protected with state-of-the-art security.",
    },
    {
      icon: <Star size={32} className="text-purple-500" />,
      title: "User-Friendly",
      description: "Intuitive interface designed for the best user experience.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
