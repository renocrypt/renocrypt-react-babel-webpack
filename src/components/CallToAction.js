import React from "react";
import { ArrowRight } from "lucide-react";

function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied users today!</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full inline-flex items-center hover:bg-blue-100 transition duration-300">
          Sign Up Now
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
