// eslint-disable-next-line
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isDropdown, setIsDropdown] = useState(false);
  const [isPast, setIsPast] = useState(false);
  const [isAll, setIsAll] = useState(false);
  const [isChain, setIsChain] = useState(false);

  // Dropdown
  const openDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  // past Dropdown
  const past = () => {
    setIsPast(!isPast);
  };
  // past Dropdown
  const all = () => {
    setIsAll(!isAll);
  };
  // chain Dropdown
  const chain = () => {
    setIsChain(!isChain);
  };
  // 1st cards
  const cardsItems = [
    {
      id: "1",
      sharevalue: "+13.13%",
      mainimage: "/images/Rectangle 531 (4).png",
      cardmaintext: "Mutant Ape Yatch Club",
      verifiedimage: "/images/verified.png",
      cardsubtitle: "Floor",
      etereumimage: "/images/ethereum.png",
      cardprice: "70",
    },
    {
      id: "2",
      sharevalue: "+69.13%",
      mainimage: "/images/cartoon.png",
      cardmaintext: "CryptoPunks",
      verifiedimage: "/images/verified.png",
      cardsubtitle: "Floor",
      etereumimage: "/images/ethereum.png",
      cardprice: "70",
    },
    {
      id: "3",
      sharevalue: "+14.58%",
      mainimage: "/images/doodle.png",
      cardmaintext: "Doodles",
      verifiedimage: "/images/verified.png",
      cardsubtitle: "Floor",
      etereumimage: "/images/ethereum.png",
      cardprice: "70",
    },
    {
      id: "4",
      sharevalue: "+14.58%",
      mainimage: "/images/moonbirds.png",
      cardmaintext: "Moonbirds",
      verifiedimage: "/images/verified.png",
      cardsubtitle: "Floor",
      etereumimage: "/images/ethereum.png",
      cardprice: "70",
    },
  ];

  // second videocards
  const secondVideo = [
    {
      id: "1",
      videoimage: "/images/alpha.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
    {
      id: "2",
      videoimage: "/images/nftstobuy.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
    {
      id: "3",
      videoimage: "/images/justinebiber.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
  ];

  // third topcreator
  const topCreatorsItems = [
    {
      id: "1",
      createrImage: "/images/monkeyrounded.png",
      createrText: "Gordon Gonner",
      createrSubText: "@gordongonner",
      createrFollowing: "12",
      createrFollowingText: "Following",
      createrFollowers: "1.2m",
      createrFollowersText: "Followers",
      createrFollowingCollection: "15",
      createrFollowingCollectionText: "Collections",
    },
    {
      id: "2",
      createrImage: "/images/monkeyrounded.png",
      createrText: "Gordon Gonner",
      createrSubText: "@gordongonner",
      createrFollowing: "12",
      createrFollowingText: "Following",
      createrFollowers: "1.2m",
      createrFollowersText: "Followers",
      createrFollowingCollection: "15",
      createrFollowingCollectionText: "Collections",
    },
    {
      id: "3",
      createrImage: "/images/monkeyrounded.png",
      createrText: "Gordon Gonner",
      createrSubText: "@gordongonner",
      createrFollowing: "12",
      createrFollowingText: "Following",
      createrFollowers: "1.2m",
      createrFollowersText: "Followers",
      createrFollowingCollection: "15",
      createrFollowingCollectionText: "Collections",
    },
    {
      id: "4",
      createrImage: "/images/monkeyrounded.png",
      createrText: "Gordon Gonner",
      createrSubText: "@gordongonner",
      createrFollowing: "12",
      createrFollowingText: "Following",
      createrFollowers: "1.2m",
      createrFollowersText: "Followers",
      createrFollowingCollection: "15",
      createrFollowingCollectionText: "Collections",
    },
  ];
  return (
    <>
      {/* first bloges */}
      <div className="homebackgroundimage md:py-20 overflow-x-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-2 md:p-0">
          <div className="hidden lg:block">
            {" "}
            <img src="/images/Group.svg" alt="" />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center lg:justify-start">
              {" "}
              <h1 className="font-bold hometitle text-5xl  xl:text-8xl text-white mb-4  ">
                <span className="mr-3">One</span>
                place, <br />
                It’s all here.
              </h1>
            </div>
            <div className="flex justify-center lg:justify-start">
              <h1 className="text-x md:text-xl w-64 lg:w-full">
                Voomio is an omni-friendly shop for buying and selling NFTs.
                With everything from multi-wallet purchasing to gassless minting
                we’re sure you’re going to love it here.
              </h1>
            </div>
            <div className="flex flex-col justify-center lg:justify-start md:flex-row my-12  md:space-x-4 ">
              <button className="buttonborder  text-white font-bold py-2  px-12 2xl:text-2xl">
                Explore
              </button>
              <div className="homebuttonborder rounded-3xl text-center mt-3 md:mt-0">
                <button
                  type="button"
                  className="hometitle px-12  py-2 font-bold 2xl:text-2xl "
                >
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <img src="/images/Group 548.svg" alt="rectangle" />
          </div>
        </div>
      </div>

      {/* second bloges */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10 mb-1">
        <div className="relative flex flex-col md:flex-row justify-between h-16 mb-5">
          <h1 className="secondtitle font-bold">Trending</h1>
          <div className="text-left mb-10">
            <div className="dropdownborder rounded-2xl">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium menufont z-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={openDropdown}
              >
                Past 24hrs
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
                className="origin-top-right z-50 absolute  mt-2 w-36 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownborder"
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
                    Past 24hrs
                  </a>
                  <a
                    href="/"
                    className="menufont block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    Past 24hrs
                  </a>
                  <a
                    href="/"
                    className="menufont block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    Past 24hrs
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
      {/* new card */}
      <div>
        <div
          className="container max-w-7xl mx-auto px-4 mt-10"
          style={{ cursor: "auto" }}
        >
          <div className="flex flex-wrap justify-center mt-14">
            {cardsItems.map((i) => (
              <div
                className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
                key={i.id}
              >
                <div className=" relative network-box">
                  <div className="absolute left-0 -top-6">
                    <div className="relative inline-block text-left ">
                      {/* <div className="dropdownborder cardborder rounded-3xl">
                        <div
                          className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium  cardincrement"
                          aria-expanded="true"
                          aria-haspopup="true"
                        >
                          {i.sharevalue}
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <img
                    alt="John Doe"
                    src={i.mainimage}
                    className="rounded-xl shadow-lg w-full h-auto align-middle border-none undefined"
                  />
                  <div className="pt-6 text-center">
                    <div className="flex gap-2 pl-6">
                      <h1 className="text-base font-bold leading-normal mt-0 mb-2">
                        {i.cardmaintext}
                      </h1>
                      <img
                        src="/images/verified.png"
                        alt=""
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex items-center justify-end gap-2 pr-5 pb-5">
                      <div>
                        <h1 className="cardtitle font-bold">
                          {i.cardsubtitle}
                        </h1>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <img src={i.etereumimage} alt="etherum" />
                        </div>
                        <div className="cardprice font-bold">{i.cardprice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="buttongradient my-10 text-white font-bold py-1 px-12 rounded-full"
              onClick={() => navigate("/aggregator")}
            >
              Load more
            </button>
          </div>
        </div>
      </div>

      {/* thired bloges */}
      <div className=" md:p-20">
        <div
          className="container max-w-7xl mx-auto px-4 mt-10"
          style={{ cursor: "auto" }}
        >
          <div className="font-bold text-[#222222] secondtitle mb-16 px-9">
            Alpha
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {secondVideo.map((i) => (
              <div className="max-w-sm rounded overflow-hidden" key={i.id}>
                <img
                  className="w-full"
                  src={i.videoimage}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-[#222222]">
                    {i.videotitle}
                  </div>
                  <p className="text-[#222222] text-base">{i.videotext}</p>
                  <p className="text-[#222222] text-base">{i.videoview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* fourth bloges */}
      <div className=" md:p-20">
        <div
          className="container max-w-7xl mx-auto  mt-10"
          style={{ cursor: "auto" }}
        >
          <div className=" font-bold text-[#222222] secondtitle mb-16 px-9  ">
            Top Creators
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 ">
            {topCreatorsItems.map((i) => (
              <div className="rounded-xl network-box" key={i.id}>
                <div className="rounded-lg max-w-sm bg-[#e9ae65] ">
                  <div className="px-10 py-8">
                    <div className="flex justify-center">
                      <img
                        className="border p-1 rounded-full bg-white "
                        src={i.createrImage}
                        alt=""
                      />
                    </div>
                    <div className="my-5">
                      <h5 className="topcreatorstitle flex justify-center">
                        {i.createrText}
                      </h5>
                      <h5 className="topcreatorssubtitle flex justify-center border p-2 rounded-full bg-white">
                        {i.createrSubText}
                      </h5>
                    </div>
                  </div>
                  <div className="bg-white  rounded-lg">
                    <div className="flex justify-between px-7 py-2">
                      <div>
                        <div className="topcreatorssubtext">
                          {i.createrFollowing}
                        </div>
                        <div className="topcreatorssubfolow">
                          {i.createrFollowingText}
                        </div>
                      </div>
                      <div>
                        <div className="topcreatorssubtext">
                          {i.createrFollowers}
                        </div>
                        <div className="topcreatorssubfolow">
                          {i.createrFollowersText}
                        </div>
                      </div>{" "}
                      <div>
                        <div className="topcreatorssubtext">
                          {i.createrFollowingCollection}
                        </div>
                        <div className="topcreatorssubfolow">
                          {i.createrFollowingCollectionText}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 justify-center my-4">
                      <button
                        type="button"
                        className=" px-14 py-2 follow text-white rounded-full hover:shadow-lg topcreatorsfollowing  transition duration-150 ease-in-out"
                      >
                        <i className="fa-solid fa-plus mr-2"></i>Follow
                      </button>
                    </div>
                    <div className="flex  space-x-2 justify-center">
                      <button
                        type="button"
                        className="topcreatorsfollowing px-9 py-2 bg-[#DBDAE2] text-[#8551E6] rounded-full hover:shadow-lg transition duration-150 ease-in-out mb-8"
                      >
                        0x007..373xys..
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* fifth bloges */}
      <div className="overflow-x-auto pt-36 ">
        <div
          className="container max-w-7xl mx-auto px-4 mt-10 network-box"
          style={{ cursor: "auto" }}
        >
          <div className="font-bold text-center secondtitle text-[#222222] mb-5 p-9 ">
            Top NFT
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <div>
              <div className="relative inline-block text-left mb-10">
                <div className="dropdownborder rounded-xl">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium menufont z-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={past}
                  >
                    Past 24hrs
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
                {isPast ? (
                  <div
                    className="origin-top-right z-50 absolute  mt-2 w-36 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownborder"
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
                        Past 24hrs
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        Past 24hrs
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                      >
                        Past 24hrs
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
            <div>
              <div className="relative inline-block text-left mb-10">
                <div className="dropdownborder rounded-xl">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium menufont z-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={all}
                  >
                    All Categories
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
                {isAll ? (
                  <div
                    className="origin-top-right z-50 absolute  mt-2 w-40 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownborder"
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
                        monkey
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        king
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                      >
                        queen
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
            <div>
              <div className="relative inline-block text-left mb-10">
                <div className="dropdownborder rounded-xl">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium menufont z-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={chain}
                  >
                    All Chain
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
                {isChain ? (
                  <div
                    className="origin-top-right z-50 absolute  mt-2 w-32 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dropdownborder"
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
                        0
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        1
                      </a>
                      <a
                        href="/"
                        className="menufont block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                      >
                        2
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
          <div className="flex justify-center m-9">
            <table id="customers">
              <thead>
                <tr>
                  <th>Collection</th>
                  <th className="flex">
                    Volume{" "}
                    <i className="fa-solid fa-sort-down ml-2 text-center"></i>
                  </th>
                  <th>24hr</th>
                  <th>7d</th>
                  <th>Floor Price</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(9).keys()].map((i) => (
                  <tr className="">
                    <td className="tabletext flex items-center gap-3 ">
                      <div className="border-[2px] border-solid border-[#3C3C3B] p-4 rounded-full "></div>
                      Sample Collection
                      <img
                        src="/images/verified.png"
                        alt=""
                        className="w-4 h-4 "
                      />
                    </td>
                    <td>
                      <i className="fa-brands fa-ethereum text-2xl"></i>
                      <span className="text-[#5035da] font-bold text-lg pl-3 ">
                        134
                      </span>
                    </td>
                    <td className="tableincrement font-bold">+13.13%</td>
                    <td className="tableincrement font-bold">+13.13%</td>
                    <td>
                      {" "}
                      <i className="fa-brands fa-ethereum text-2xl"></i>
                      <span className="text-[#5035da] font-bold text-lg pl-3">
                        134
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-5">
          {" "}
          <button className="flex container mx-auto w-fit justify-center buttongradient  text-white font-bold py-1 px-12 rounded-full">
            Load more
          </button>
        </div>
      </div>

      {/* six bloges */}

      <div className=" md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-2 md:p-0">
          <div className="hidden lg:block w-72">
            {" "}
            <img src="/images/Group 548.png" alt="" />
          </div>
          <div className="flex flex-col">
            <div className="">
              {" "}
              <h1 className="font-bold hometitle text-5xl  xl:text-8xl text-white mb-4  ">
                Gassless Minting
              </h1>
            </div>
            <div>
              <div className="flex flex-col items-center bg-white   md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className=" w-36 h-36  rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg"
                  src="/images/icon (5).png"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Set up Your Wallet
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Once you’ve set up your wallet of choice, connect it by
                    clicking the wallet icon in the top right corner.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center bg-white   md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className=" w-36 h-36  rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg"
                  src="/images/icon (4).png"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Create Your Collection
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Upload your work (image, video, audio, or 3D art), add a
                    title and description
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center bg-white   md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className=" w-36 h-36  rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg"
                  src="/images/icon (3).png"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    List them for sale
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    You choose how you want to sell your NFTs, and we help you
                    sell them!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:justify-start md:flex-row my-12  md:space-x-4 ">
              <button className="buttonborder  text-white font-bold py-2  px-12 2xl:text-2xl">
                Explore
              </button>
              <div className="homebuttonborder rounded-3xl text-center mt-3 md:mt-0">
                <button
                  type="button"
                  className="hometitle px-12  py-2 font-bold 2xl:text-2xl "
                >
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-end h-4/5">
            <img src="/images/Group 548 (1).png" alt="rectangle" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
