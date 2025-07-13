import { useState } from "react";
import WhiteBoard from "../components/WhiteboardComponent";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CanvasDrawing = () => {
  const [brushColor, setBrushColor] = useState("white");
  const [brushSize, setBrushSize] = useState<number>(5);
  const [uuid, setUuid] = useState<string>("");
  const [link, setLink] = useState<Boolean>(false);

  const handleUuid = (id: any) => setUuid(id);
  const urlRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);
  
  const baseUrl = "https://livecanvas-collab.vercel.app/board";
  const url = baseUrl + "?roomID=" + uuid;

  return (
    <div className="home-container">
      {/* NAVBAR */}
      <nav className="nav-bar">
        <Link to="/" className="logo flex items-center gap-2">
          <img src="/logo2.png" alt="Logo" className="h-8 w-8" />
          <span className="highlight">LiveCanvas</span>
        </Link>
        <div className="nav-links">
          <a href="https://github.com/AdwaitSalankar/Live-Canvas" target="_blank" className="github-button">
            Github
          </a>
        </div>
      </nav>

      {/* Heading */}
      <div className="text-center mt-10">
        <h1 className="main-heading">CANVAS Board</h1>
        <p className="subtext">Draw. Collaborate. Create.</p>
      </div>

      {/* Canvas + Tools */}
      <div className="flex flex-col items-center justify-center mt-8 gap-6">
        <WhiteBoard
          brushColor={brushColor}
          brushSize={brushSize}
          handleUuid={handleUuid}
        />

        <div className="tools flex flex-row p-5 space-x-4 bg-white text-black justify-between items-center rounded-xl shadow-md">
          <div className="flex flex-row justify-center items-center gap-5">
            <div>
              <span className="text-center">Color: </span>
              <input
                type="color"
                value={brushColor}
                onChange={(e) => setBrushColor(e.target.value)}
              />
            </div>
            <div>
              <span>Size: </span>
              <input
                type="range"
                color="#fac176"
                min="1"
                max="100"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
              />
              <span>{brushSize}</span>
            </div>
          </div>
          <div>
            <button
              className="cta-button"
              onClick={() => {
                setLink(true);
                setTimeout(() => {
                  urlRef.current?.scrollIntoView({ behavior: "smooth" });
                }, 100); // Short delay ensures the element exists before scrolling
              }}
            >
              Generate URL
            </button>
          </div>
        </div>

        {/* Link Output */}
        {link && (
          <div
            ref={urlRef}
            id="url"
            className="flex flex-col items-center bg-[#faebd7] p-4 rounded-xl text-black mt-2 mb-16 shadow-md"
          >
            <div className="text-center break-all mb-2">{url}</div>

            <button
              className="copy-button"
              onClick={() => {
                navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? "✅ Copied!" : "Copy Link"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CanvasDrawing;
