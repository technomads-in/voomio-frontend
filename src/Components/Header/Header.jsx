// eslint-disable-next-line
import React, { useRef, useState } from "react";
import "./Header.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
let Buffer = require("buffer/").Buffer;

const Header = () => {
  const [namiwallet, setNami] = useState(false);
  const [eternlwallet, setEternl] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isModel, setIsModel] = useState(false);
  const ref = useRef();
  useEffect(() => {
    pollWallets();
    window.scrollTo(0, 0);
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (ref.current && !ref.current.contains(e.target)) {
        setIsModel(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
    // eslint-disable-next-line
  }, [isModel]);
  // Dropdown
  const openDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  // Model
  const openModel = () => {
    setIsModel(!isModel);
  };
  // connect wallet
  const signhash = async (API) => {
    try {
      if (API === "nami") {
        var message = Buffer.from(
          "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d Let me Trade",
          "utf8"
        ).toString("hex");
        var api = await window.cardano.nami.enable();
        var paymentAddr = await api.getChangeAddress();
        if (JSON.parse(localStorage.getItem("wallet")) == null) {
          var result = await api.signData(paymentAddr, message);
          localStorage.setItem(
            "wallet",
            JSON.stringify({ wallet: "nami", token: result })
          );
        }
        toast.success("Login successful!");
      } else if (API === "eternl") {
        var message = Buffer.from(
          "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d Let me Trade",
          "utf8"
        ).toString("hex");
        var api = await window.cardano.eternl.enable();
        var paymentAddr = await api.getRewardAddresses();
        if (JSON.parse(localStorage.getItem("wallet")) == null) {
          var result = await api.signData(paymentAddr, message);
          localStorage.setItem(
            "wallet",
            JSON.stringify({ wallet: "eternl", token: result })
          );
          toast.success("Login successful!");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("User decline the request!");
    }
  };

  const pollWallets = () => {
    const wallets = [];
    for (const key in window.cardano) {
      if (window.cardano[key].enable && wallets.indexOf(key) === -1) {
        wallets.push(key);
      }
    }
    if (wallets.indexOf("nami") !== -1) {
      setNami(true);
    }
    if (wallets.indexOf("eternl") !== -1) {
      setEternl(true);
    }
  };

  const nami_connect = () => {
    signhash("nami");
  };

  const eternl_connect = () => {
    signhash("eternl");
  };
  const [open, setopen] = useState(false);
  const [openserach, setopenserach] = useState(false);
  // const [close, setclose] = useState(true);

  return (
    <>
      {/* Header */}
      <nav
        className={`${
          open
            ? " bg-purple-100 fixed left-0 right-0 z-10"
            : openserach
            ? " bg-white fixed left-0 right-0 z-20"
            : "headerbackground"
        } `}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="relative left-0 right-0  sm:flex sm:items-center sm:justify-between h-16">
            <div className="flex sm:hidden justify-between h-16 absolute left-0 right-0  ">
              <div className="flex items-center gap-2 ">
                <img
                  className=" h-10 w-auto"
                  src="/images/Octopas.svg"
                  alt="Workflow"
                />
                {open || openserach ? (
                  <img
                    src="/images/VOOMIOdark.svg"
                    alt=""
                    className=" h-10 w-28 "
                  />
                ) : (
                  <img
                    className="h-10 w-28"
                    src="/images/VOOMIO.svg"
                    alt="Workflow"
                  />
                )}
              </div>
              <div className="flex items-center gap-2 ">
                <img
                  src="/images/magnifying-glass 1.svg"
                  alt=""
                  onClick={() => {
                    setopenserach(true);
                    setopen(false);
                  }}
                  className={openserach ? "hidden " : "block "}
                />
                {openserach ? (
                  <img
                    src="/images/X.svg"
                    alt=""
                    className={openserach ? "block " : "hidden "}
                    onClick={() => setopenserach(false)}
                  />
                ) : null}
                {openserach ? null : (
                  <img
                    src="/images/MenuAlt3Outline.svg"
                    alt=""
                    onClick={() => {
                      setopen(true);
                      setopenserach(false);
                    }}
                    className={open ? "hidden " : "block "}
                  />
                )}

                {open ? (
                  <img
                    src="/images/X.svg"
                    alt=""
                    onClick={() => setopen(false)}
                    className={open ? "block " : "hidden "}
                  />
                ) : null}
              </div>
            </div>
            <div className="flex-1 flex items-center justify-start md:justify-center sm:items-stretch">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <img
                  className="sm:block hidden h-9 w-auto"
                  src="/images/Octopas.svg"
                  alt="Workflow"
                />
                <img
                  className=" sm:block hidden h-5 w-16"
                  src="/images/VOOMIO.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:block sm:ml-6 ">
                <div className="flex space-x-4 items-center">
                  <div className="relative inline-block text-left ">
                    <div
                      div
                      className="flex relative w-full dropdownborder  rounded-3xl"
                    >
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-indigo-800 dark:text-7B61FF-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for assets or collections..."
                        required
                      />
                      <div className="items-center">
                        <button
                          type="button"
                          className="inline-flex justify-center w-full  shadow-sm px-4 py-2 text-sm font-medium menufont border-l-2 border-gray-00"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                          onClick={openDropdown}
                        >
                          ADA
                          <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        {isDropdown ? (
                          <div
                            className="origin-top-right absolute  mt-2 w-20 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownborder"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                          >
                            <div className="py-1" role="none">
                              <a
                                href="/"
                                className="menufont block px-4 py-2 text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                              >
                                SOL
                              </a>
                              <a
                                href="/"
                                className="menufont block px-4 py-2 text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                              >
                                ADA
                              </a>
                              <a
                                href="/"
                                className="menufont block px-4 py-2 text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-2"
                              >
                                ETH
                              </a>
                              <form method="POST" action="#" role="none">
                                <button
                                  type="submit"
                                  className="menufont block w-full text-left px-4 py-2 text-sm"
                                  role="menuitem"
                                  tabIndex={-1}
                                  id="menu-item-3"
                                >
                                  ALL
                                </button>
                              </form>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/upload-nft"
                    className="font-bold px-3 py-2 rounded-md menufont text-white"
                  >
                    Explore
                  </Link>
                  <a
                    href="/"
                    className="font-bold px-3 py-2 rounded-md menufont text-white"
                  >
                    Ranking
                  </a>
                  <Link
                    to="/nftgenerator"
                    className="font-bold px-3 py-2 rounded-md menufont text-white "
                  >
                    Create
                  </Link>
                  <button
                    onClick={openModel}
                    className="buttonborder menufont text-white font-bold py-2 px-12"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {open ? (
          <div className="  text-center text-[#250C50] bg-purple-100 h-[100vh]  pt-20  fixed z w-[100%]">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              <Link
                to="/upload-nft"
                className=" menufont block px-3 py-5 rounded-md text-base font-medium "
                aria-current="page"
              >
                Explore
              </Link>
              <Link
                to="/aggregator"
                className="menufont  block px-3 py-5 rounded-md text-base font-medium "
                onClick={() => setopen(false)}
              >
                Ranking
              </Link>
              <Link
                to="/nftgenerator"
                className="menufont block px-3 py-5 rounded-md text-base font-medium"
              >
                Create
              </Link>
              <button
                onClick={openModel}
                className="buttonborder menufont text-white font-bold py-2 px-12"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* search button */}
        {openserach ? (
          <div className="text-left bg-white h-[100vh] fixed z-50 w-[100%]">
            <div className="border1 drop-shadow-sm flex justify-around">
              <img
                src="/images/magnifying-glass 1 (1).svg"
                alt=""
                className="pl-3"
              />
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
              <button
                type="button"
                className="inline-flex justify-center shadow-sm px-4 py-2 text-sm font-medium menufont border-l-2 border-gray-00"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={openDropdown}
              >
                ADA
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>

      {/* Popup */}

      {isModel ? (
        <div className="fixed backdrop-filter backdrop-blur-sm bg-backdrop flex items-center justify-center overflow-auto z-50 inset-0">
          <div
            className="relative bg-white dark:bg-blue-darkest rounded-xl shadow-xl px-16 py-10 max-w-xl w-11/12 md:w-full"
            ref={ref}
          >
            <div className="text-center mb-7">
              <h1 className="text-blue-dark dark:text-gray-lightest mb-10 font-bold text-3xl">
                Select wallet
              </h1>
            </div>{" "}
            <button
              type="button"
              onClick={openModel}
              className="absolute text-2xl px-2.5 text-gray-dark top-3 right-3 hover:opacity-100 opacity-70"
            >
              <i className="fas fa-times" />
            </button>{" "}
            <div className="flex justify-center gap-7">
              {eternlwallet && (
                <div>
                  <button
                    type="button"
                    onClick={eternl_connect}
                    className="relative w-36 p-3 bg-gray-lightest dark:bg-blue-darker rounded-xl text-blue-dark dark:text-gray-regular bg-opacity-60 border-2 hover:bg-opacity-10 dark:hover:bg-blue-meta dark:hover:bg-opacity-20 hover:bg-blue-light hover:border-blue-light text-lg font-semibold dark:border-blue-darkest"
                  >
                    <img
                      src="/images/etrnal.png"
                      alt="eternl wallet"
                      className="w-16 h-16 p-2 mx-auto mb-2"
                    />
                    eternl
                    <div className="text-xs font-normal mt-1.5 text-blue-dark dark:text-blue-meta">
                      <i className="fas fa-link" />
                      enabled
                    </div>
                  </button>
                </div>
              )}
              {namiwallet && (
                <div>
                  <button
                    type="button"
                    onClick={nami_connect}
                    className="relative w-36 p-3 bg-gray-lightest dark:bg-blue-darker rounded-xl text-blue-dark dark:text-gray-regular bg-opacity-60 border-2 hover:bg-opacity-10 dark:hover:bg-blue-meta dark:hover:bg-opacity-20 hover:bg-blue-light hover:border-blue-light text-lg font-semibold border-blue-light"
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 486.17 499.86'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23349ea3;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath id='path16' className='cls-1' d='M73.87,52.15,62.11,40.07A23.93,23.93,0,0,1,41.9,61.87L54,73.09,486.17,476ZM102.4,168.93V409.47a23.76,23.76,0,0,1,32.13-2.14V245.94L395,499.86h44.87Zm303.36-55.58a23.84,23.84,0,0,1-16.64-6.68v162.8L133.46,15.57H84L421.28,345.79V107.6A23.72,23.72,0,0,1,405.76,113.35Z'/%3E%3Cpath id='path18' className='cls-1' d='M38.27,0A38.25,38.25,0,1,0,76.49,38.27v0A38.28,38.28,0,0,0,38.27,0ZM41.9,61.8a22,22,0,0,1-3.63.28A23.94,23.94,0,1,1,62.18,38.13V40A23.94,23.94,0,0,1,41.9,61.8Z'/%3E%3Cpath id='path20' className='cls-1' d='M405.76,51.2a38.24,38.24,0,0,0,0,76.46,37.57,37.57,0,0,0,15.52-3.3A38.22,38.22,0,0,0,405.76,51.2Zm15.52,56.4a23.91,23.91,0,1,1,8.39-18.18A23.91,23.91,0,0,1,421.28,107.6Z'/%3E%3Cpath id='path22' className='cls-1' d='M134.58,390.81A38.25,38.25,0,1,0,157.92,426a38.24,38.24,0,0,0-23.34-35.22Zm-15,59.13A23.91,23.91,0,1,1,143.54,426a23.9,23.9,0,0,1-23.94,23.91Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                      alt="Nami wallet"
                      className="w-16 h-16 p-2 mx-auto mb-2"
                    />
                    Nami
                    <div className="text-xs font-normal mt-1.5 text-blue-dark dark:text-blue-meta">
                      <i className="fas fa-link" />
                      enabled
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
