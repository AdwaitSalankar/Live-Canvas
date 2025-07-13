//@ts-nocheck
import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <meta
          name="google-site-verification"
          content="LTEslH9dKKs5wwLu8JhLPM4jiI1qE-M05wJUK2eKZnU"
        />
      </Helmet>

      <nav className="nav-bar">
        <div className="logo flex items-center gap-2">
          <img src="/logo2.png" alt="Logo" className="h-8 w-8" />
          <span className="highlight">LiveCanvas</span>
        </div>
        <div className="nav-links">
          <a href="/howto" className="question"><b>?</b></a>
          <a href="https://github.com/AdwaitSalankar/Live-Canvas" target="_blank" className="github-button">Github</a>
        </div>
      </nav>

      <div className="content">
        <div className="badge">✨ Real-time Collaboration Board</div>
        <h1 className="main-heading">
          The Live Canvas board<br/> <span className="highlight-blue">for collaboration.</span>
        </h1>
        <p className="subtext">
          LiveCanvas lets you collaborate in real-time with others on a shared drawing board — powered by Socket.IO and OCR.
        </p>
        <a href="/board" target="_blank" className="cta-button">Start Board 🡪</a>
        <p className="note-text">Draw. Collaborate. Create.</p>
      </div>
    </div>
  );
};

export default Home;
