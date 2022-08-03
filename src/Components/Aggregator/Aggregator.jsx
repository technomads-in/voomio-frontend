import React, { useState } from "react";
import "./Aggregator.css";

const Aggregator = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isAccordian, setIsAccordian] = useState(true);
  const openAccr = () => {
    setIsAccordian(!isAccordian);
  };
  // Dropdown
  const openDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const aggrigatorItem = [
    {
      id: 1,
      image: "/monkeysimages/image1.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 2,
      image: "/monkeysimages/image2.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 3,
      image: "/monkeysimages/image3.png",
      icons: "/monkeysimages/looksrare.png",
    },
    {
      id: 4,
      image: "/monkeysimages/image4.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 5,
      image: "/monkeysimages/image5.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 6,
      image: "/monkeysimages/image6.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 7,
      image: "/monkeysimages/image7.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 8,
      image: "/monkeysimages/image8.png",
      icons: "/monkeysimages/looksrare.png",
    },
    {
      id: 9,
      image: "/monkeysimages/image9.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 10,
      image: "/monkeysimages/image10.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 11,
      image: "/monkeysimages/image11.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 12,
      image: "/monkeysimages/image12.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 13,
      image: "/monkeysimages/image13.png",
      icons: "/monkeysimages/looksrare.png",
    },
    {
      id: 14,
      image: "/monkeysimages/image14.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 15,
      image: "/monkeysimages/image15.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 16,
      image: "/monkeysimages/image16.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 17,
      image: "/monkeysimages/image17.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 18,
      image: "/monkeysimages/image18.png",
      icons: "/monkeysimages/looksrare.png",
    },
    {
      id: 19,
      image: "/monkeysimages/image19.png",
      icons: "/monkeysimages/Group1.png",
    },
    {
      id: 20,
      image: "/monkeysimages/image20.png",
      icons: "/monkeysimages/Group1.png",
    },
  ];
  return (
    <>
      <div className="">
        {/* 1st element */}
        <div className="relative">
          <img src="/images/Rectangle 534.png" alt="" />
          <img
            src="/images/Ellipse 2.png"
            alt=""
            className="absolute -bottom-16 right-2/3 border p-3 rounded-full bg-white"
          />
        </div>
        <div className="flex container  mx-auto my-3 items-center">
          <div className="flex flex-col">
            <div className="w-5/5 flex justify-between my-5">
              {" "}
              <div className="aggregatortitle">Filters</div>
              <div className="border w-9 h-9 rounded-[50%] bg-[#6549F6]">
                <i className="fa-solid fa-chevron-left py-2 px-3 text-white"></i>
              </div>
            </div>
            <div className="flex gap-2">
              {" "}
              <div className="aggregatorbuy homebuttonborder rounded-full relative">
                <p className="px-6 py-2">Buy now</p>
                <div className="border w-9 h-9 rounded-[50%] bg-[#6549F6] absolute -top-5 right-0 ">
                  <i className="fa-solid fa-xmark py-2.5 px-3 text-white "></i>
                </div>
              </div>
              <div className="border-[#888888] border-solid border rounded-full relative">
                <p className="px-6 py-2.5 auctiontext ">Auction</p>
              </div>
            </div>
          </div>
          {/* mutant */}
          <div className="ml-96">
            {" "}
            <div className="flex justify-center gap-10 my-3">
              <div className="flex gap-2 items-center">
                <div>
                  <h1 className="aggregatormaintitle">
                    Mutant Ape Yatch Club{" "}
                  </h1>
                </div>
                <img src="/images/verified.png" alt="" className="w-7 h-7" />
              </div>
              <div className="flex gap-5">
                {" "}
                <div className="aggregatorbordericons">
                  <div className="p-2">
                    <img src="/images/twitter.png" alt="" />
                  </div>
                </div>
                <div className="aggregatorbordericons">
                  <div className="p-2">
                    <img src="/images/instagram.png" alt="" />
                  </div>
                </div>
                <div className="aggregatorbordericons">
                  <div className="py-2.5 px-2">
                    <img src="/images/discord.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-5 ">
              <div className="flex gap-2 items-center">
                <div>
                  <h1 className="aggregatormaintitle">10.0K </h1>
                </div>
                <p className="aggregatorparagraph">items</p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <h1 className="aggregatormaintitle">6.3K </h1>
                </div>
                <p className="aggregatorparagraph">Owners</p>
                <div className="flex gap-2 items-center">
                  <div>
                    <h1 className="aggregatormaintitle">
                      87 <i className="fa-brands fa-ethereum"></i>
                    </h1>
                  </div>
                  <p className="aggregatorparagraph">Floor Price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex container  mx-auto my-5 items-center"></div>
      </div>
      {/* 2nd element */}
      <div className="container mx-auto">
        <div className="flex gap-2">
          <div className="w-[24%] flex flex-col">
            <div className="flex items-center justify-center backgroundborder px-8 py-2 w-fit">
              <div className="floor mr-3">FLOOR SWEEP</div>
              <img src="/images/floor.png" alt="" className="w-6 h-6" />
            </div>
            <h1 className="mt-5 subtext">Price</h1>
            <div className="flex  gap-2 mt-2">
              <div className="priceborder ">
                <input
                  type="text"
                  className="h-12 p-4 w-20"
                  placeholder="Min"
                  maxLength={5}
                />
                <i className="fa-brands fa-ethereum text-[#c4c4c4] mr-2 text-xl"></i>
              </div>
              <div className="priceborder ">
                <input
                  type="text"
                  className="h-12 p-4 w-20"
                  placeholder="Max"
                  maxLength={5}
                />
                <i className="fa-brands fa-ethereum text-[#c4c4c4] mr-2 text-xl"></i>
              </div>
            </div>
            <h1 className="mt-5 subtext">Rarity</h1>
            <div className="flex  gap-2 mt-2">
              <div className="priceborder ">
                <input
                  type="text"
                  className="h-12 p-4 w-24 mr-2"
                  placeholder="Min"
                  maxLength={5}
                />
              </div>
              <div className="priceborder ">
                <input
                  type="text"
                  className="h-12 p-4 w-24 mr-2"
                  placeholder="Max"
                  maxLength={5}
                />
              </div>
            </div>
            <h1 className="mt-5 subtext">Traits</h1>
            <div className="flex  gap-2 mt-2">
              <div className="priceborder ">
                <input
                  type="text"
                  className="h-12 p-4 w-56"
                  placeholder="Search traits"
                  maxLength={5}
                />
              </div>
            </div>
            <div className="mt-10"></div>
            {[...Array(7).keys()].map((i, index) => (
              <div
                className="w-52 my-2"
                onClick={() => {
                  openAccr();
                  console.log(index.length);
                }}
                key={i}
              >
                <div className="flex justify-between">
                  <div className="accordiantitle font-bold">Lorem ipsum </div>
                  <div>
                    <i
                      className={`${
                        isAccordian
                          ? "fa-solid fa-chevron-down "
                          : "fa-solid fa-chevron-down rotate-180"
                      }`}
                    ></i>
                  </div>
                </div>
                <div
                  className={`${isAccordian ? "hidden" : "text-justify my-2"}`}
                  id="opentext"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  fugit cupiditate, labore et nihil sequi. Adipisci ratione,
                  voluptas optio, nemo porro corporis tempore aperiam unde neque
                  dolor dolores maiores perspiciatis.
                </div>
              </div>
            ))}
          </div>
          <div className="w-[74%] ">
            <div className="gap-28  collectiontext font-bold items-center flex">
              <div className="">
                <h1>Collection</h1>
              </div>
              <div>
                <h1 className="flex gap-2 text-center">
                  Community
                  <img src="/images/q.png" alt="" />
                </h1>
              </div>
              <div>
                <h1 className="flex gap-2 ">
                  Activity
                  <img src="/images/activity.png" alt="" />
                </h1>
              </div>
            </div>
            <div className="bordersetactive mt-3"></div>
            <hr className="border-b-[1px] w-full  border-[#E2E2E2] border-solid "></hr>
            <div className="flex justify-between">
              <div>
                <div className="flex  gap-2 mt-2">
                  <div className="priceborder ">
                    <i className="fa-solid fa-magnifying-glass text-[#888888] ml-2"></i>
                    <input
                      type="text"
                      className="h-12 p-4 "
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="relative inline-block text-left mb-10">
                  <div className="homebuttonborder  rounded-3xl">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium menufont z-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={openDropdown}
                    >
                      Sort
                      {/* Heroicon name: solid/chevron-down */}
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
                  {isDropdown ? (
                    <div
                      className="origin-top-right z-50 absolute  mt-2 w-20 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownborder"
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
                          id="menu-item-1"
                        >
                          A to Z
                        </a>
                        <a
                          href="/"
                          className="menufont block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-2"
                        >
                          Z to A
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
            <div className="grid grid-cols-5 gap-1">
              {aggrigatorItem.map((i) => (
                <div className="h-[270px] w-48 shadow-lg rounded-md" key={i.id}>
                  <div className="relative">
                    <img className="h-48" src={i.image} alt="" />
                    <div className="bg-[#00DAD9] w-10 h-12 absolute flex justify-center items-center top-0 right-3 rounded-b-full">
                      <img className="absolute h-6" src={i.icons} alt="" />
                    </div>
                  </div>
                  <div className="pl-2">
                    <div className="flex">
                      <p className="font-bold text-xs text-[#C4C4C4] leading-5">
                        Sample Collection
                      </p>
                      <img
                        className="h-5 pl-1"
                        src="/monkeysimages/Vector.png"
                        alt=""
                      />
                    </div>
                    <div className="font-bold text-xs">2087</div>
                  </div>
                  <div className="flex items-center justify-end font-bold text-sm pr-2 gap-1">
                    <div className="text-[#C4C4C4] ">Last</div>
                    <div className="h-5 w-5">
                      <img src="/images/ethereum.png" alt="" />
                    </div>
                    <div className="text-lg">70</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aggregator;
