//@ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Howto = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="nav-bar">
        <div className="logo flex items-center gap-2">
          <img src="/logo2.png" alt="Logo" className="h-8 w-8" />
          <span className="highlight">LiveCanvas</span>
        </div>
        <div className="nav-links">
          <Link to="/" className="signin-link">
            Home
          </Link>
          <a
            href="https://github.com/AdwaitSalankar/Live-Canvas"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Content Section */}
      <div className="content text-left max-w-4xl mx-auto mt-12">
        <h1 className="main-heading text-center">What is LiveCanvas?</h1>
        <p className="subtext text-justify mt-6">
          <strong>LiveCanvas</strong> is a real-time collaborative whiteboard application that allows multiple users to draw, write, and interact simultaneously on a shared canvas.
          It's designed to make brainstorming, teaching, ideation, and collaboration as seamless as possible — whether you're remote or in the same room.
        </p>
        <p className="subtext text-justify mt-6"> 
            Ideal for Designers, educators, developers, students, and remote teams who need a quick, real-time, and easy-to-use collaborative whiteboard.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-2">🔧 Features:</h2>
        <ul className="list-disc list-inside text-gray-800">
          <li>🖌️ Real-time multi-user drawing with WebSockets</li>
          <li>📷 Take and download snapshots of the canvas</li>
          <li>🖼️ Upload and OCR-process images directly in the app</li>
          <li>🌐 Share unique collaboration links with teammates</li>
          <li>🎨 Customizable brush color and size</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-2">🚀 How to Use:</h2>
        <ol className="list-decimal list-inside text-gray-800">
          <li>Click the <strong>Start Board</strong> button on the home page.</li>
          <li>You'll be redirected to a collaborative canvas with a unique room ID.</li>
          <li>Draw freely using the tools provided (choose brush color and size).</li>
          <li>Click <strong>Generate URL</strong> to share the session link.</li>
          <li>Use the image uploader to recognize and translate handwritten content using OCR.</li>
          <li>Take snapshots anytime to save your progress.</li>
        </ol>

        <div className="text-center mt-12">
          <Link to="/" className="cta-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Howto;
