const Hero = ()=>{
    return (
        <>
            {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 z max-w-6xl">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Where Passion Meets Purpose
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Geeks Arena is a collaborative community where learners, developers,
            and innovators unite to grow, share, and solve real-world problems.
          </p>
          <a href="/join" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Join the Arena
          </a>
        </div>
        <div className="flex-1">
          <img
            src="https://i.ibb.co/27dD1bDF/logo.png"
            
            alt="Community of Developers"
            className="w-full h-auto"
          />
        </div>
      </section>
        </>
    )
}

export default Hero