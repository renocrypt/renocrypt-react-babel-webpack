import React from "react";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Awesome App
        </h2>
        <p className="text-xl mb-8">
          Discover amazing features that will revolutionize your workflow
        </p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full inline-flex items-center hover:bg-blue-100 transition duration-300">
          Get Started
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
