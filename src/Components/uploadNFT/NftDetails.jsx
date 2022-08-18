import React from "react";
import { useState } from "react";
const NftDetails = ({ closeModal }) => {
  const [BtnShow, setBtnShow] = useState(true)
  const [Createshow, setCreateshow] = useState(false)
  const attributes = [
    {
      id: 1,
      name: "Clothes",
      content: "Lorem Ipsum",
    },
    {
      id: 2,
      name: "Hair",
      content: "Lorem Ipsum",
    },
    {
      id: 3,
      name: "Texture",
      content: "Lorem Ipsum",
    },
    {
      id: 4,
      name: "Eyes",
      content: "Lorem Ipsum",
    },
    {
      id: 5,
      name: "Mouth",
      content: "Lorem Ipsum",
    },
    {
      id: 6,
      name: "Color Background",
      content: "Lorem Ipsum",
    },
    {
      id: 7,
      name: "Body",
      content: "Lorem Ipsum",
    },
  ];

  const openRule = () => {
    console.log("::::");
    setBtnShow(false);
    setCreateshow(true)
    // console.log(`hello`);

    // const ruleCreation = document.getElementById("ruleCreation");
    // ruleCreation.classList.remove("hidden");
    // ruleCreation.classList.add("block");

    // const createButton = document.getElementById("createButton");
    // createButton.classList.remove("text-white");
    // createButton.classList.remove("create-button");
    // createButton.classList.add("text-[#6549F6]");
    // createButton.classList.add("border-2");
    // createButton.classList.add("border-[#6549F6]");

    // const createCancel = document.getElementById("createCancel");
    // createCancel.textContent = "Cancel";

    // const plusXmark = document.getElementById("plusXmark");
    // plusXmark.classList = "fa-solid fa-xmark";
  };
  return (
    <>
      <div
        id="popup-modal"
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-10 right-0 left-0 z-50 md:inset-0 h-modal md:h-full py-8 items-center justify-center flex transition duration-700 ease-in-out"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative w-full max-w-xl h-full md:h-auto bg-white rounded-xl shadow-2xl ">
          <div className="relative rounded-lg  px-4">
            <div className="flex justify-between">
              <div className="pr-2 pt-5 flex">
                <div className="font-bold text-xl itemcount">#1267</div>
                <div className="pl-5">
                  <svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_2_8071)">
                      <rect
                        x="4"
                        width="23.92"
                        height="23"
                        rx="11.5"
                        fill="#F4EEFF"
                      />
                      <path
                        d="M16.2692 8.75C15.9326 8.75 15.6098 8.60513 15.3717 8.34727C15.1337 8.08941 15 7.73967 15 7.375C15 7.01033 15.1337 6.66059 15.3717 6.40273C15.6098 6.14487 15.9326 6 16.2692 6C16.6059 6 16.9287 6.14487 17.1667 6.40273C17.4047 6.66059 17.5385 7.01033 17.5385 7.375C17.5385 7.73967 17.4047 8.08941 17.1667 8.34727C16.9287 8.60513 16.6059 8.75 16.2692 8.75ZM16.2692 12.875C15.9326 12.875 15.6098 12.7301 15.3717 12.4723C15.1337 12.2144 15 11.8647 15 11.5C15 11.1353 15.1337 10.7856 15.3717 10.5277C15.6098 10.2699 15.9326 10.125 16.2692 10.125C16.6059 10.125 16.9287 10.2699 17.1667 10.5277C17.4047 10.7856 17.5385 11.1353 17.5385 11.5C17.5385 11.8647 17.4047 12.2144 17.1667 12.4723C16.9287 12.7301 16.6059 12.875 16.2692 12.875ZM16.2692 17C15.9326 17 15.6098 16.8551 15.3717 16.5973C15.1337 16.3394 15 15.9897 15 15.625C15 15.2603 15.1337 14.9106 15.3717 14.6527C15.6098 14.3949 15.9326 14.25 16.2692 14.25C16.6059 14.25 16.9287 14.3949 17.1667 14.6527C17.4047 14.9106 17.5385 15.2603 17.5385 15.625C17.5385 15.9897 17.4047 16.3394 17.1667 16.5973C16.9287 16.8551 16.6059 17 16.2692 17Z"
                        fill="#6549F6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_2_8071"
                        x="0"
                        y="0"
                        width="31.9199"
                        height="31"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2_8071"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2_8071"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div onClick={() => {
                closeModal(false);
              }}>
                <button
                  type="button"
                  className="absolute pt-5 right-3 text-[#6549F6] bg-transparent rounded-lg text-sm ml-auto inline-flex items-center "
                  data-modal-toggle="popup-modal"

                >


                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>

                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-10 justify-center mt-6">
            <div>
              <img
                src="/images/monkey.png"
                alt=""
                className="h-64 w-64 rounded-lg"
              />
            </div>
            <div className="w-64">
              <div className="font-semibold text-lg pb-4">Attributes</div>
              <div>
                {attributes.map((i) => {
                  return (
                    <div className="flex gap-2 justify-between text-base">
                      <div className="font-medium pb-1 itemcount">{i.name}</div>
                      <div className="font-normal itemcount">{i.content}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-end my-5">
                <div
                  id="createButton"
                  className={`${BtnShow ? "block" : "hidden"} create-button bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2 border-[#7B61FF] flex items-center gap-2 text-white px-8 py-2 rounded-3xl cursor-pointer`}
                // className="create-button bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2 border-[#7B61FF] flex items-center gap-2 text-white px-8 py-2 rounded-3xl cursor-pointer"
                >
                  <i id="plusXmark" className="fa-solid fa-plus"></i>
                  <div id="createCancel" onClick={openRule} >
                    {/* <div className=> */}
                    Create Rule
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${Createshow ? "block" : "hidden"}`}>
            <div id="ruleCreation" className="bg-[#F4EEFF] mt-5 pl-3 ">
              <div className="flex justify-end my-5 relative">
                <div
                  id="createButton"
                  className={`${BtnShow ? "block" : ""} absolute bg-white border-2 border-[#7B61FF] flex items-center gap-2 text-[#6549F6] px-8 py-2 rounded-3xl cursor-pointer`}
                // className="create-button bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2 border-[#7B61FF] flex items-center gap-2 text-white px-8 py-2 rounded-3xl cursor-pointer"
                >
                  <i id="plusXmark" className="fa-solid fa-plus"></i>
                  <div id="createCancel" onClick={openRule} >
                    {/* <div className=> */}
                    Cancel
                  </div>
                </div>
              </div>
              <div className="text-[#6549F6] font-semibold text-lg">
                Create A Rule
              </div>
              <div className="font-normal text-base pt-2">
                After you create a rule any existing tokens will be regenerated.
              </div>
              <div className="flex gap-2 justify-between pr-3">
                <div className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-2 pl-1 pr-3 w-44 border-box mt-4">
                  <div>Cowboy vest</div>
                  <div>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <div className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-2 pl-1 pr-3 w-44 border-box mt-4">
                  <div>Doesn’t mix with</div>
                  <div>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <div className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-2 pl-1 pr-3 w-44 border-box mt-4">
                  <div>Captain Hat</div>
                  <div>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>
              <div className="flex justify-end pr-4 py-5">
                <div className="create-button flex items-center w-44 gap-2 text-white px-8 py-2 rounded-3xl cursor-pointer">
                  <i className="fa-solid fa-plus"></i>
                  <div>Create Rule</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default NftDetails;
