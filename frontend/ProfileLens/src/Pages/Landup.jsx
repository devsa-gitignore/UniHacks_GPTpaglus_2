import React from "react";
import PL from "../assets/PL.png";
import PLLogo from "../assets/PL Logo.png"
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { BsGraphUpArrow } from "react-icons/bs";
import SC from "../assets/SC.png";
import ER from "../assets/ER.png";
import MJ from "../assets/MJ.png";

const Landup = () => {
  return (
    <>
      <div>
        <div>
          <div className="bg-white h-18 sticky top-0 z-1000">
            <img src={PL} className="p-4 " />
            <div className="flex justify-center items-center gap-20 relative bottom-14 left-[52rem] w-fit">
              <ul className="flex gap-20">
                <li className="cursor-pointer hover:bg-gray-200 rounded-full py-2  px-4">
                  Features
                </li>
                <li className="cursor-pointer hover:bg-gray-200 rounded-full py-2  px-4">
                  How it Works
                </li>
                <li className="cursor-pointer hover:bg-gray-200 rounded-full py-2  px-4">
                  Reviews
                </li>
              </ul>
              <button className="rounded-full bg-gradient-to-r from-[#6C0C27] to-[#EC38A4] py-2 px-4 text-white cursor-pointer">
                <Link to="/login">Get Started</Link>
              </button>
            </div>
          </div>
          <div className="h-screen bg-gradient-to-l from-[#f99fd6] to-[#FFF2FA] min-h-screen">
            <div className="relative bottom-4 flex items-center justify-center p-16">
              <div className="rounded-full bg-white py-4 px-8 w-fit flex justify-center items-center gap-4 shadow-lg cursor-pointer">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>Trusted by 10,000+ users</div>
              </div>
            </div>
            <div className="relative bottom-8 flex items-center justify-center">
              <div className="text-6xl font-bold mt-8 text-[#6C0C27]">
                Helping You Get Matches... not Ghosted
              </div>
            </div>
            <div className="relative bottom-8 flex items-center justify-center">
              <div className="text-4xl font-semibold mt-4 text-[#6C0C27]">
                Because "I love Travelling and Food" isn't groundbreaking!
              </div>
            </div>
            <div className="relative bottom-8 flex items-center justify-center">
              <div className="w-[70rem] text-center text-2xl mt-8 text-gray-600">
                Get private, structured feedback from real people who match your
                dating goals. Improve your profile with actionable insights and
                track your progress over time.
              </div>
            </div>
            <div className="relative bottom-8 flex items-center justify-center gap-10 mt-25">
              <button className="rounded-full bg-gradient-to-r from-[#6C0C27] to-[#EC38A4] py-4 px-8 text-xl text-white cursor-pointer">
                <Link to="/login">Get My Profile Reviewed</Link>
              </button>
              <button className="rounded-full bg-white py-4 px-8 text-xl cursor-pointer">
                See Example Feedback
              </button>
            </div>
            <div className="relative bottom-12 flex items-center justify-center gap-10 mt-20 pb-30">
              <div className="flex items-center justify-center gap-4 text-gray-500">
                <div className="text-green-600 text-xl">
                  <FaCheck />
                </div>{" "}
                100% Private
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-500">
                <div className="text-green-600 text-xl">
                  <FaCheck />
                </div>{" "}
                Real Reviewers
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-500">
                <div className="text-green-600 text-xl">
                  <FaCheck />
                </div>{" "}
                48hr Turnaround
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center">
            <div className="text-5xl pt-12 font-bold mt-4 text-[#6C0C27]">
              Everything You Need to Stand Out
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center text-xl w-[45rem] pt-6 text-[#8c5968]">
              ProfileLens provides a safe, structured way to improve your dating
              profile with real human feedback.
            </div>
          </div>
          <div className="flex items-center justify-center min-h-screen gap-20">
            <div className="relative bottom-20 h-72 w-72 rounded-2xl border border-gray-300 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-200 to-pink-400 shadow-md text-[#6C0C27]">
                <MdOutlinePrivacyTip className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Private & Confidential
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Your profile stays secure. Only selected reviewers see your
                submissions.
              </p>
            </div>
            <div className="relative bottom-20 h-72 w-72 rounded-2xl border border-gray-300 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-200 to-pink-400 shadow-md text-[#6C0C27]">
                <SlPeople className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Choose Your Reviewers
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Select 3-5 reviewers based on gender, age, and dating intent for
                relevant feedback.
              </p>
            </div>
            <div className="relative bottom-20 h-72 w-72 rounded-2xl border border-gray-300 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-200 to-pink-400 shadow-md text-[#6C0C27]">
                <FaRegHeart className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Structured Feedback
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Get honest, actionable insights on photos, bio, prompts, and
                overall authenticity.
              </p>
            </div>
            <div className="relative bottom-20 h-72 w-72 rounded-2xl border border-gray-300 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-200 to-pink-400 shadow-md text-[#6C0C27]">
                <BsGraphUpArrow className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Track Improvements
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Upload multiple versions and visualize your progress over time
                with detailed metrics.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF2FA] h-screen">
          <div className="flex items-center justify-center">
            <div className="text-5xl pt-8 font-bold mt-10 text-[#6C0C27]">
              How it Works?
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center text-xl w-[45rem] pt-6 text-[#8c5968]">
              Get feedback in 3 simple steps
            </div>
          </div>
          <div className="flex items-center justify-center min-h-screen gap-40 relative bottom-20">
            <div className="flex flex-col items-center justify-center w-75">
              <div className="text-5xl pt-8 font-bold mt-4 text-[#6C0C27]">
                01
              </div>
              <div className="text-3xl pt-8 font-semibold mt-4 text-[#6C0C27]">
                Submit Your Profile
              </div>
              <div className="pt-8 text-lg mt-4 text-[#6C0C27]">
                Upload photos, bio, and prompts. Choose your dating intent and
                preference.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-75">
              <div className="text-5xl pt-8 font-bold mt-4 text-[#6C0C27]">
                02
              </div>
              <div className="text-3xl pt-8 font-semibold mt-4 text-[#6C0C27]">
                Select Reviewers
              </div>
              <div className="pt-8 text-lg mt-4 text-[#6C0C27]">
                Pick 3-5 reviewers based on gender, age, and relationship goals
                for relevant insights.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-75">
              <div className="text-5xl pt-8 font-bold mt-4 text-[#6C0C27]">
                03
              </div>
              <div className="text-3xl pt-8 font-semibold mt-4 text-[#6C0C27]">
                Get Feedback
              </div>
              <div className="text-lg pt-8 mt-4 text-[#6C0C27]">
                Recieve structured feedback, honest reviews within 48 hours.
                Track improvements over time.
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center">
            <div className="text-5xl pt-8 font-bold mt-10 text-[#6C0C27]">
              Loved by People Like You
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center text-xl w-[45rem] pt-6 text-[#8c5968]">
              Real feedback from real users who improved their profiles
            </div>
          </div>
          <div className="flex items-center justify-center min-h-screen gap-40 relative bottom-20">
            <div className="relative h-72 w-72 rounded-2xl border border-gray-300 bg-white p-8 text-left shadow-md">
              <div className="flex justify-left gap-1 mb-6 text-yellow-400 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-left my-4 text-sm text-gray-500 leading-relaxed">
                "The feedback was eye-opening. I changed 3 photos and rewrote my
                bio. Got 4x more matches within a week!"
              </p>
              <div className="flex gap-4 justify-center items-center">
                <img src={SC} className="w-12 h-12 mt-4"></img>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sarah Chen
                  </h3>
                  <p>Product Designer, 28</p>
                </div>
              </div>
            </div>
            <div className="relative h-72 w-72 rounded-2xl border border-gray-300 bg-white p-8 text-left shadow-md">
              <div className="flex justify-left gap-1 mb-6 text-yellow-400 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>

              <p className="text-left my-4 text-sm text-gray-500 leading-relaxed">
                "I was skeptical at first, but the structured feedback made it
                so clear what to improve. Highly recommend!"
              </p>
              <div className="flex gap-4 justify-center items-center">
                <img src={ER} className="w-12 h-12 mt-4"></img>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Emma Rodriguez
                  </h3>
                  <p>HR Manager, 26</p>
                </div>
              </div>
            </div>
            <div className="relative h-72 w-72 rounded-2xl border border-gray-300 bg-white p-8 text-left shadow-md">
              <div className="flex justify-left gap-1 mb-6 text-yellow-400 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>

              <p className="text-left my-4 text-sm text-gray-500 leading-relaxed">
                "ProfileLens helped me see what I was missing. The reviewers
                were kind but honest. Best $49 I've spent."
              </p>
              <div className="flex gap-4 justify-center items-center">
                <img src={MJ} className="w-12 h-12 mt-4"></img>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Marcus Johnson
                  </h3>
                  <p>Software Engineer, 32</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#FFF2FA] min-h-screen">
          <div className="relative rounded-3xl text-center py-20 px-40 w-[65rem] bg-gradient-to-br from-[#6C0C27] to-[#F77CC8] shadow-md text-white font-semibold text-4xl">
            Ready to transform your dating profile?
            <p className="text-white text-center font-thin pt-2 text-xl">
              Join thousands of users who've improved their profiles and found
              better matches.
            </p>
            <Link to="/login">
              <button className=" text-[#6C0C27] rounded-full bg-white py-4 px-8 text-xl cursor-pointer mt-16">
                See Example Feedback
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white px-20 py-12 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

            <div>
              <div className="flex items-center gap-4 font-semibold text-gray-800 text-xl">
                <img src={PLLogo}></img>
                ProfileLens
              </div>
              <p className="w-50 text-sm text-gray-500 mt-3 leading-relaxed">
                Private, honest feedback to help you shine in the dating world.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-gray-700 cursor-pointer">Features</li>
                <li className="hover:text-gray-700 cursor-pointer">
                  How It Works
                </li>
                <li className="hover:text-gray-700 cursor-pointer">Pricing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-gray-700 cursor-pointer">About</li>
                <li className="hover:text-gray-700 cursor-pointer">Blog</li>
                <li className="hover:text-gray-700 cursor-pointer">Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-gray-700 cursor-pointer">Privacy</li>
                <li className="hover:text-gray-700 cursor-pointer">Terms</li>
                <li className="hover:text-gray-700 cursor-pointer">Security</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-10 pt-6 text-center text-sm text-gray-400">
            &#169; 2026 ProfileLens. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Landup;
