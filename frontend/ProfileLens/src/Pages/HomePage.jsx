import { FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="w-full h-screen py-8">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-800">
        Welcome back, Alex!
      </h1>
      <p className="text-gray-500 mt-1">
        Here's how your profile is performing
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        {/* Score */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex gap-1 text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-300" />
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-gray-500 mt-4 text-sm">Current Score</p>
          <p className="text-green-600 text-sm mt-2">+11 from last version</p>
        </div>

        {/* Versions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-800">3</h2>
          <p className="text-gray-500 mt-2 text-sm">Profile Versions</p>
          <p className="text-gray-400 text-sm mt-2">
            Latest: Feb 10, 2026
          </p>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-800">5</h2>
          <p className="text-gray-500 mt-2 text-sm">Reviews Received</p>
          <p className="text-gray-400 text-sm mt-2">
            Avg rating: 4.8/5
          </p>
        </div>

        {/* Improvement */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-800">37%</h2>
          <p className="text-gray-500 mt-2 text-sm">Improvement</p>
          <p className="text-gray-400 text-sm mt-2">
            Since first version
          </p>
        </div>
      </div>

      {/* Active Profile Card */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border mt-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Active Profile - Version 3
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Submitted on Feb 10, 2026
            </p>
          </div>

          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
            Reviewed
          </span>
        </div>

        {/* Progress Bars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {["Submitted", "Under Review", "Feedback Ready", "Improvements"].map(
            (step, i) => (
              <div key={i}>
                <div className="h-2 rounded-full bg-pink-200">
                  <div className="h-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 w-full"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{step}</p>
              </div>
            )
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-400 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition">
            <FiEye />
            View Feedback
          </button>

          <button className="px-5 py-2 rounded-full border text-gray-700 hover:bg-gray-50 transition">
            Compare Versions
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
