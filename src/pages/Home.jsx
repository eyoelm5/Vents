import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh_-_80px)] bg-gradient-to-b from-orange-200 to-purple-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-900">VENT</h1>
          <p className="mt-2 text-lg text-cyan-700">
            Unwind from your thoughts, this is{" "}
            <span className="font-bold">YOUR</span> space
          </p>

          <div className="mt-6">
            <button className="px-6 py-2 mr-4 bg-white text-gray-800 rounded hover:bg-gray-700">
              Get Started
            </button>
            <button className="px-6 py-2 text-white bg-orange-300 rounded hover:bg-orange-300">
              Login
            </button>
          </div>
        </div>
        <footer className="absolute bottom-2 text-center w-full">
          <p className="text-xs text-gray-500">
            All Right Reserved © copyright
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
