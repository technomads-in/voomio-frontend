import React, { useRef, useState } from "react";
import "./UploadNft.css";

const UploadNft = () => {
  // upload image
  const [selectedImage, setSelectedImage] = useState();
  //   new upload
  function handleFile(files) {
    console.log("Number of files: " + files.length);
  }
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
      setSelectedImage(e.target.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files);
      setSelectedImage(e.target.files[0]);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };
  return (
    <>
      <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 min-h-screen">
        <div className=" text-5xl font-bold text-[#222222]">NFT Generator</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[#250C50] pt-6 text-lg itemcount">
              Current NFT
            </div>
            <div className="text-[#6549F6]  text-lg pb-16 itemcount">
              Single-item
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <img src="/images/upload.svg" alt="" className="mx-10" />
              <img src="/images/path.svg" alt="" />
            </div>
            <img src="/images/EyeOutline.svg" alt="" />
            <img src="/images/CogOutline.svg" alt="" />
            <img src="/images/star.png" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-40">
          <div>
            <div className="text-[#250C50] pb-2 text-lg itemcount">
              Settings
            </div>
            <div className="text-[#6549F6]  text-md pb-2 itemcount">
              General
            </div>
            <div className="text-[#6549F6]  text-md pb-2 itemcount">Layers</div>{" "}
            <div className="text-[#6549F6]  text-md itemcount">Rules</div>
          </div>
          <div>
            {/* new */}
            <div className="flex justify-center">
              <form
                id="form-file-upload"
                onDragEnter={handleDrag}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  accept="image/*"
                  ref={inputRef}
                  type="file"
                  id="input-file-upload"
                  multiple={true}
                  onChange={handleChange}
                />
                {selectedImage ? (
                  <label id="label-file-upload" htmlFor="input-file-upload">
                    <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                  </label>
                ) : (
                  <label
                    id="label-file-upload"
                    htmlFor="input-file-upload"
                    className={dragActive ? "drag-active" : ""}
                  >
                    <div>
                      <p>Drag and drop your file here or</p>
                      <button className="upload-button" onClick={onButtonClick}>
                        Upload a file
                      </button>
                    </div>
                  </label>
                )}
                {dragActive && (
                  <div
                    id="drag-file-element"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  ></div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadNft;
