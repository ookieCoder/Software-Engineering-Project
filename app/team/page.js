import Navbar from "../nav/navbar";
import Footer from "../foot/footer";

export default function Team() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar item={"Our Team"}/>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Our Team</h2>
          <p className="text-gray-600 mt-2 italic">"The strength of the team is each individual member. The strength of each member is the team." – Phil Jackson</p>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="placement-head.png" alt="Placement Head" className="w-28 h-28 border-4 border-blue-400 mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold text-blue-900">Dr. Deepika Gupta</h3>
              <p className="text-blue-500">Placement Head</p>
              <p className="text-gray-600 mt-2">Empowering students to achieve their dreams is my mission.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="coordinator1.jpg" alt="Placement Coordinator 1" className="w-28 h-28 border-4 border-blue-400 object-cover mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold text-blue-900">Mr. Naman Singhla</h3>
              <p className="text-blue-500">Placement Coordinator</p>
              <p className="text-gray-600 mt-2">I believe in guiding students to unlock their potential.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="coordinator2.jpg" alt="Placement Coordinator 2" className="w-28 h-28 border-4 border-blue-400 object-fill mx-auto rounded-full" />
              <h3 className="mt-4 text-xl font-semibold text-blue-900">Ms. Pragya Pranati</h3>
              <p className="text-blue-500">Placement Coordinator</p>
              <p className="text-gray-600 mt-2">My goal is to bridge the gap between students and their dream careers.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
