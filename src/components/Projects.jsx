import AnimatedSection from "./AnimatedSection"
import fitBharat from "../assets/fitBharat.json"
import blis from "../assets/blis.json"

const Project = ()=>{
    return (
        <>
            {/* Achievements and Projects Section */}
      <section className="w-full max-w-6xl py-16 text-center">
        <h3 className="text-3xl font-bold text-white mb-10">Current Projects & Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-green-400/20 transition">
            <h4 className="text-xl font-semibold text-green-300 mb-2">FitBharat</h4>
            <AnimatedSection animationData={fitBharat}/>
            <p className="text-gray-400">A fitness-focused mobile app that connects users across India to stay active together with features like RunTogether, gamified challenges, and health tracking.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-yellow-400/20 transition">
            <h4 className="text-xl font-semibold text-yellow-300 mb-2">BLIS</h4>
            <AnimatedSection animationData={blis}/>
            <p className="text-gray-400">BLIS (Book Libraries in Seconds) is a smart platform to discover, book, and manage library study rooms instantly across campuses and cities.</p>
          </div>
        </div>
      </section>
        </>
    )
}

export default Project