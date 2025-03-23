"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../nav/navbar';
import Footer from '../foot/footer';
// import fs from 'fs';

export default function Statistics() {
  // const imagePath = "C:/Users/Udit Singh/OneDrive/Desktop/SE_Project/my-app/public/placement-graph.jpeg";
  // const imageBase64 = fs.readFileSync(imagePath, "base64");
  // console.log("Hello:",imageBase64);
  const [cards, setCards] = useState([{}]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const fetched = await axios.get("/api/placement");
        // console.log("API Response:", fetched.data);
        setCards(fetched.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
  }, [cards]);

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar item={"Statistics"} />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Placement Statistics</h2>
          <p className="text-gray-600 mt-2">Explore the placement records and achievements of IIIT Vadodara students.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">{cards[0].placement_rate}</h3>
              <p className="text-gray-700">Placement Rate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">{cards[0].recruiting_partners}</h3>
              <p className="text-gray-700">Recruiting Partners</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">{cards[0].students_placed}</h3>
              <p className="text-gray-700">Students Placed</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-blue-900">Year-wise Placement Trends</h3>
            <img src={`data:image/jpeg;base64,${cards[0]?.placement_image || ""}`} alt="Placement Graph" className="mt-4 rounded-lg shadow-lg w-full max-w-xl mx-auto"/>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-blue-900">Our Top Recruiters</h3>
            <div className="grid grid-flow-col gap-4 items-center">
              <img src="recruiter1.png" alt="Recruiter 1" className="transition-transform transform hover:scale-105" />
              <img src="recruiter2.webp" alt="Recruiter 2" className="transition-transform transform hover:scale-105" />
              <img src="recruiter3.png" alt="Recruiter 3" className="transition-transform transform hover:scale-105" />
              <img src="recruiter4.jpg" alt="Recruiter 4" className="transition-transform transform hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
