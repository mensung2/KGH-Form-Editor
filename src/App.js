import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import "./buttonUpDown.css";
import html2canvas from "html2canvas";
import socialcard from "./assets/socialcard.png";
import pictureback from "./assets/picture_back.png";
import picturetop from "./assets/picturetop.png";
import picturefront from "./assets/picture_front.png";
import company from "./assets/back_c.png";
import worker from "./assets/back_w.png";
import pictureUpload from "./assets/picture.svg";
import Header from "./Header";
import InputSection from "./InputSection";
import Download from "./Download";

const App = () => {
  const [image, setImage] = useState(null);
  const [yOffset, setYOffset] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState("company");
  const frameRef = useRef(null);
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");
  const [signature, setSignature] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("PNG or JPG files only.");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDownload = async () => {
    if (!frameRef.current) return;

    const canvas = await html2canvas(frameRef.current, {
      backgroundColor: null,
      scale: 2,
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "framed-image.png";
    link.click();
  };

  const moveImage = (direction) => {
    setYOffset((prev) => prev + (direction === "up" ? -10 : 10));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") moveImage("up");
      else if (event.key === "ArrowDown") moveImage("down");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1a1a1a",
        color: "#FAF9F6",
        gap: "28px",
      }}
    >
      <Header />

      <InputSection
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
        handleImageUpload={handleImageUpload}
        handleButtonClick={handleButtonClick}
        fileInputRef={fileInputRef}
        name={name}
        signature={signature}
        setName={setName}
        setSignature={setSignature}
      />

      <div className="imgContainer" style={{ display: "flex", width: "800px" }}>
        <div className="antiSlip">
          <div
            className="kghImg"
            ref={frameRef}
            style={{
              position: "relative",
              width: "750px",
              height: "400px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                fontWeight: "700",
                position: "relative",
                color: "#000",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  zIndex: "6",
                  top: "288px",
                  left: "312px",
                  transform: `translateX(-50%) rotate(-9deg)`,
                  transformOrigin: "top center",
                  textAlign: "center",
                  width: "max-content",
                }}
              >
                <p className="kim">{name}</p>
              </div>
              <div
                style={{
                  position: "absolute",
                  zIndex: "6",
                  top: "308px",
                  left: "330px",
                  transform: `translateX(-50%) rotate(-9deg)`,
                  transformOrigin: "top center",
                  textAlign: "center",
                  width: "max-content",
                }}
              >
                <p className="hurricane" style={{ fontSize: 28 }}>
                  {signature}
                </p>
              </div>
              <img
                src={socialcard}
                alt="Background"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  zIndex: "5",
                  top: "0",
                  left: "0",
                }}
              />
            </div>

            <img
              src={picturetop}
              alt="Background"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                zIndex: "3",
                top: "0",
                left: "0",
              }}
            />
            <img
              src={picturefront}
              alt="Background"
              style={{
                width: "100%",
                height: "100%",
                opacity: "50%",
                objectFit: "cover",
                position: "absolute",
                zIndex: "4",
                top: "0",
                left: "0",
              }}
            />
            <img
              src={pictureback}
              alt="Background"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                zIndex: "1",
                top: "0",
                left: "0",
              }}
            />
            <img
              src={selectedGroup === "company" ? company : worker}
              alt="Background"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                zIndex: "0",
                top: "0",
                left: "0",
              }}
            />

            <div
              style={{
                position: "absolute",
                zIndex: "2",
                width: "386px",
                height: "244px",
                left: "314px",
                top: "88px",
                overflow: "hidden",
                display: "flex",
                maskImage: `url(${pictureUpload})`,
                maskSize: "cover",
                WebkitMaskImage: `url(${pictureUpload})`,
                WebkitMaskSize: "cover",
              }}
            >
              {image && (
                <img
                  src={image}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    position: "absolute",
                    top: `${yOffset}px`,
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <button className="buttonUD" onClick={() => moveImage("up")}>
            ▲
          </button>
          <button className="buttonUD" onClick={() => moveImage("down")}>
            ▼
          </button>
        </div>
      </div>

      <Download handleDownload={handleDownload} image={image} />
    </div>
  );
};

export default App;
