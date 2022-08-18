// eslint-disable-next-line
import React, { useRef, useState } from "react";
import "./Header.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import octopuss from "../../Assets/VoomioImages/octopuss.svg";
import magnifyGlass from "../../Assets/VoomioImages/magnifying-glass.svg";
import MenuAlt3Outline from "../../Assets/VoomioImages/MenuAlt3Outline.svg";
import close from "../../Assets/VoomioImages/X.svg";
import Wallet from "../../Assets/VoomioImages/wallet.svg";
import MetaMask from "../../Assets/VoomioImages/metamask.svg";
import CoinBase from "../../Assets/VoomioImages/coinbase.svg";
import Nami from "../../Assets/VoomioImages/nami.svg";
import Phantom from "../../Assets/VoomioImages/phantom.svg";
let Buffer = require("buffer/").Buffer;

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobilemenu, setOpenMobilemenu] = useState(false);
  const [searchbtn, setSearchbtn] = useState(false);
  const [namiwallet, setNami] = useState(false);
  const [eternlwallet, setEternl] = useState(false);
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

  return (
    <>
      {/* Header */}
      <nav
        className={`${
          openMobilemenu
            ? " bg-purple-100 text-[#250C50] py-3 drop-shadow-2xl lg:relative sticky top-0 z-10"
            : searchbtn
            ? "bg-white py-3 drop-shadow-2xl lg:relative sticky top-0 z-10"
            : " bg-[#250C50] shadow-xl shadow-[#250C50] shadow-opacity-30 text-white py-3 lg:relative sticky top-0 z-10"
        }`}
      >
        <div className="container mx-auto flex lg:justify-center justify-between items-center  md:gap-2 lg:gap-10 lg:p-0 px-5">
          <div className="flex justify-between items-center cursor-pointer ">
            <div className="flex items-center gap-4 zoom-in">
              <img src={octopuss} alt="" />
              <h2 className="font-bold text-2xl ">VOOMIO</h2>
            </div>
          </div>
          <div className="lg:hidden flex items-center gap-3 ">
            <img
              src={magnifyGlass}
              alt=""
              onClick={() => {
                setSearchbtn(true);
                setOpenMobilemenu(false);
              }}
              className={searchbtn ? "hidden " : "block "}
            />
            <img
              src={MenuAlt3Outline}
              alt=""
              onClick={() => setOpenMobilemenu(true)}
              className={openMobilemenu ? "hidden " : "block "}
            />
            {openMobilemenu || searchbtn ? (
              <img
                src={close}
                alt=""
                onClick={() => {
                  setOpenMobilemenu(false);
                  setSearchbtn(false);
                }}
              />
            ) : null}
          </div>
          <div className="border-2 border-[#6549F6] rounded-full bg-white p-3 justify-center items-center gap-2  lg:flex hidden ">
            <i className="fa-solid fa-magnifying-glass text-[#6549F6] cursor-pointer"></i>
            <input
              type="text"
              name=""
              className="border-0 border-white  outline-none text-black md:w-7 lg:w-20 xl:w-full"
              placeholder="Search for assets or collections..."
            />
            <div
              className="flex justify-center items-center gap-2 px-2 border-l-2 cursor-pointer relative"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <div className="text-[#000000] ">ETH</div>
              <i className="fa-solid fa-angle-down text-[#000000]"></i>
              {openDropdown ? (
                <>
                  <div className="border-2 border-[#6549F6] absolute top-11 rounded-md p-5 lg:flex hidden flex-col bg-white text-[#6549F6] gap-3 hover z-[100]">
                    <div>ETH</div>
                    <div>SOL</div>
                    <div>ADA</div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className=" items-center lg:flex hidden gap-8 cursor-pointer font-apply ">
            <h1 className="font-bold ">Explore</h1>
            <h1 className="font-bold">Ranking</h1>
            <h1 className="font-bold">Create</h1>
            <div className="homebuttonborder rounded-3xl text-center ">
              <button
                className="buttonborder menufont text-white font-bold py-3 lg:px-10 md:px-5 "
                onClick={openModel}
              >
                Connect Wallet
              </button>
            </div>

            {/* <div className="homebuttonborder rounded-3xl text-center mt-3 md:mt-0">
              <button
                type="button"
                className="hometitle px-12 py-2 font-bold 2xl:text-2xl "
              >
                Create
              </button>
            </div> */}
          </div>
        </div>
        {/* =================Mobile menu, show/hide based on menu state.============ */}
        {openMobilemenu && (
          <div className=" text-center text-[#250C50] bg-purple-100  pt-20  h-[100vh]  z-50 w-[100%] items-center ">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              <a
                href="/upload-nft"
                className=" menufont block px-3 py-5 rounded-md text-base font-medium "
                aria-current="page"
              >
                Explore
              </a>
              <a
                href="/aggregator"
                className="menufont  block px-3 py-5 rounded-md text-base font-medium "
              >
                Ranking
              </a>
              <a
                href="/nftgenerator"
                className="menufont block px-3 py-5 rounded-md text-base font-medium"
              >
                Create
              </a>
              <button className="buttonborder menufont text-white font-bold py-2 px-12">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
        {/*============= search button ================*/}
        {searchbtn ? (
          <div className="text-left bg-white h-[100vh]  z-50 w-[100%] p-4 lg:hidden block">
            <div className="border-mobile-menu drop-shadow-sm flex justify-around ">
              <div className="flex items-center gap-4 p-3">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  name=""
                  className="outline-none w-28  "
                  placeholder="Search..."
                />
              </div>
              <div
                className="flex justify-center items-center border-l-2 gap-4 p-3 cursor-pointer relative"
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                <div className="text-[#000000] ">ETH</div>
                <i className="fa-solid fa-angle-down text-[#000000]"></i>
                {openDropdown ? (
                  <>
                    <div className="border-2 border-[#6549F6] absolute top-14 rounded-md p-5 flex  flex-col bg-white text-[#6549F6] gap-3 hover ">
                      <div>ETH</div>
                      <div>SOL</div>
                      <div>ADA</div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>

      {/* Popup */}

      {isModel ? (
        <div className="fixed animated fadeInDown backdrop-filter backdrop-blur-sm bg-backdrop flex items-center justify-center overflow-auto z-50 inset-0">
          {/* Main modal */}
          <div className="flex justify-center pt-36 pb-4">
            <div
              id="crypto-modal"
              tabIndex={-1}
              className="z-50"
              aria-modal="true"
              role="dialog"
            >
              <div className="p-4 max-w-2xl">
                {/* Modal content */}
                <div className="bg-white rounded-lg shadow-lg">
                  <div className="flex justify-end">
                  <img src={close} alt="" onClick={openModel} className="px-5 pt-5 cursor-pointer"/>
                  </div>
                  {/* Modal header */}
                  <div className="py-4 px-6 flex gap-4 rounded-t border-b dark:border-gray-600">
                    <div>
                      <img
                        src={Wallet}
                        alt=""
                        className="text-[#7B61FF] h-12 w-12"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#222222] lg:text-2xl dark:text-white">
                        My Wallet
                      </h3>
                      <div className="text-[#999999] font-normal text-base">
                        Connect or create a wallet
                      </div>
                    </div>
                  </div>
                  {/* Modal body */}
                  <div className="">
                    {/* MetaMask */}
                    <div>
                      <div className="py-4 pl-6 flex gap-40 items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-[#F4EEFF] rounded-full w-10 h-10 flex justify-center items-center">
                            <img src={MetaMask} alt="" className="w-7 h-7" />
                          </div>
                          <div className="pl-6 font-medium text-xl">
                            Metamask
                          </div>
                        </div>
                        <div className="mr-5 px-8 py-1 text-[#7B61FF] border-2 border-[#7B61FF] rounded-3xl cursor-pointer flex justify-center w-32">
                          <div className="font-medium text-lg">Connect</div>
                        </div>
                      </div>
                      <div className="border-b-[1px] border-[#D9D9D9]"></div>
                    </div>
                    {/* Coinbase */}
                    <div>
                      <div className="py-4 pl-6 flex gap-40 items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-[#F4EEFF] rounded-full w-10 h-10 flex justify-center items-center">
                            <img src={CoinBase} alt="" className="w-7 h-7" />
                          </div>
                          <div className="pl-6 font-medium text-xl">
                            Coinbase Wallet
                          </div>
                        </div>
                        <div className="cursor-pointer"></div>
                      </div>
                      <div className="border-b-[1px] border-[#D9D9D9]"></div>
                    </div>
                    {/* Nami  */}
                    <div>
                      <div className="py-4 pl-6 flex gap-40 items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-[#F4EEFF] rounded-full w-10 h-10 flex justify-center items-center">
                            <img src={Nami} alt="" className="w-7 h-7" />
                          </div>
                          <div className="pl-6 font-medium text-xl">Nami</div>
                        </div>
                        <div className="mr-5 px-8 py-1 text-[#7B61FF] bg-[#F4EEFF] rounded-3xl cursor-pointer flex justify-center w-32">
                          <div className="font-medium text-lg">cardano</div>
                        </div>
                      </div>
                      <div className="border-b-[1px] border-[#D9D9D9]"></div>
                    </div>
                    {/* Phantom */}
                    <div>
                      <div className="py-4 pl-6 flex gap-40 items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-[#F4EEFF] rounded-full w-10 h-10 flex justify-center items-center">
                            <img src={Phantom} alt="" className="w-7 h-7" />
                          </div>
                          <div className="pl-6 font-medium text-xl">
                            Phantom
                          </div>
                        </div>
                        <div className="mr-5 px-8 py-1 text-[#7B61FF] bg-[#F4EEFF] rounded-3xl cursor-pointer flex justify-center w-32">
                          <div className="font-medium text-lg">solana</div>
                        </div>
                      </div>
                      <div className="border-b-[1px] border-[#D9D9D9]"></div>
                    </div>
                    {/* Show More */}
                    <div className="flex justify-center">
                      <div className="px-12 py-1 my-8 text-[#7B61FF] border-2 border-[#7B61FF] rounded-3xl cursor-pointer">
                        <div className="font-medium text-lg ">Show more</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
