export default function Features(){
    return (
        <>
          {/* Features Section */}
      <section id="features" className="w-full max-w-6xl py-16 text-center">
        <h3 className="text-3xl font-bold text-white mb-10">What We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition duration-300">
            <h4 className="text-xl font-semibold mb-2 text-blue-300">Coding Discussions</h4>
            <p className="text-gray-400">Engage in deep technical talks and problem-solving sessions.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition duration-300">
            <h4 className="text-xl font-semibold mb-2 text-blue-300">Project Collaborations</h4>
            <p className="text-gray-400">Team up to build, contribute, and learn by doing real projects.</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition duration-300">
            <h4 className="text-xl font-semibold mb-2 text-blue-300">Interview Prep</h4>
            <p className="text-gray-400">Sharpen your skills with mock interviews, tips, and peer feedback.</p>
          </div>
        </div>
      </section>

      
        </>
    );
}