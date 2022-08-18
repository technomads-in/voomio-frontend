import React, { useState } from "react";

const NftGenerator = () => {
  const [show, setshow] = useState(-1)
  const [btnshow, setbtnshow] = useState(-1)
  const [Opcity, setOpcity] = useState(false)
  const [priceOpcity, setpriceOpcity] = useState(false)
  console.log(show);
  const handleSelect = (i) => {
    if (i === show) {
      setshow(-1)

    }
    else {
      setshow(i)

    }
    setpriceOpcity(true)
    setbtnshow(false)
  };
  const handleBtnBasic = () => {

    setshow(-1)
    setbtnshow(true)
    setOpcity(true)
    setpriceOpcity(false)
  }
  // const handleBtnNft = (i) => {
  //   let NftType = document.getElementById("NftType");
  //   NftType.className = "pt-10 opacity-100"

  //   let SingleNft = document.getElementById("SingleNft");
  //   SingleNft.className = "cursor-pointer  mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-100  "

  //   let netSet = document.getElementById("netSet");
  //   netSet.className = "cursor-pointer  mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-100 "

  // }

  // console.log(data);
  const Price = [
    {
      id: "0",
      Title: "A great deal",
      subTitle: "Billed biannualy ($300)",
      price: "50",
      year: "mo",
    },
    {
      id: "1",
      Title: "Popular",
      subTitle: "This is the best plan.",
      price: "75",
      year: "mo",
    },
    {
      id: "2",
      Title: "A great deal",
      subTitle: "Annual payments of $500.",
      price: "500",
      year: "yr",
    },
  ];

  return (
    <>
      <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 ">
        <div className=" text-5xl font-bold text-[#222222]">NFT Generator</div>
        <div className="text-[#7B61FF] pt-6 font-semibold text-3xl">
          Pricing
        </div>
        <div className="text-[#000000]  font-semibold text-2xl pb-8 itemcount">
          Select a subscription for the PFP & Collection Generator.
        </div>
        {/* <div className={`${Hide ? " visible" : ""}`}> */}
        <div>
          <div className=" pt-10 md:flex md:pt-20">
            {Price.map((i, d) => (
              <div
                id={i.id} key={i.id}
                // className="mb-2 mr-5 pt-10 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF]"
                className={`${show === d ? "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white  border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide " : "mb-2 mr-5 pt-10 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF]"}`}
              >
                <p className=" m-4 font-medium text-xl tracking-wide bg-[#E0E7FF] itemcount text-[#4F46E5]  w-max  px-4 py-2 rounded-full uppercase">
                  {i.Title}
                </p>

                <div className="flex m-4 items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight lg:text-7xl text-[#111827]">
                    ${i.price}
                  </span>
                  <span className="ml-1 text-2xl font-medium text-[#6B7280]">
                    {i.year}
                  </span>
                </div>
                {/* <div className=""> */}
                <span className=" pl-5 font-normal text-base text-[#333333] itemcount ">
                  {i.subTitle}
                </span>
                {/* </div> */}
                <div className="bg-[white]/60 hover:bg-[white]/60 rounded-xl">
                  <ul role="list" className="my-7 space-y-5 m-4 pt-5 ">
                    <li className="flex space-x-2">
                      <i className="fa-solid fa-check text-[#22c55e]"></i>
                      <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight itemcount ">
                        Pariatur quod similique
                      </p>
                    </li>

                    <li className="flex space-x-2">
                      <i className="fa-solid fa-check text-[#22c55e]"></i>
                      <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight itemcount ">
                        Sapiente libero doloribus modi nostrum
                      </p>
                    </li>

                    <li className="flex space-x-2">
                      <i className="fa-solid fa-check text-[#22c55e]"></i>
                      <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight itemcount">
                        Vel ipsa esse repudiandae excepturi
                      </p>
                    </li>

                    <li className="flex space-x-2">
                      <i className="fa-solid fa-check text-[#22c55e]"></i>
                      <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight itemcount">
                        Itaque cupiditate adipisci quibusdam
                      </p>
                    </li>
                  </ul>
                  <div className=" justify-center ">
                    <button
                      onClick={() => {
                        handleSelect(d);
                        // handleBtnNft(d)
                      }}
                      type="button"
                      id="btn"
                      className={` ${show === d ? "cursor-pointer text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2  m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full " : "text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full"} itemcount `}
                    >

                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="md:flex pt-8 items-center ">
            <button
              onClick={() => { handleBtnBasic(); }}
              type="button"

              // className=""
              className={` itemcount ${btnshow === true ? "text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2  m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full" : "text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full"}`}
            >
              Select
            </button>
            <div className="">
              <p className="text-2xl  font-normal itemcount">
                Basic
                <span className="text-sm  font-medium pl-2 text-[#4F46E5] itemcount ">

                  FREE
                </span>
              </p>

              <p className="font-normal text-base itemcount">
                Only single NFTs can be generated with Basic plan.
              </p>
            </div>
          </div>

          <div>
            <div
              className={`${Opcity || priceOpcity ? "pt-10 opacity-100" : "pt-10 opacity-20"} itemcount`} id="NftType">
              {/* className="pt-10 opacity-20" > */}
              <p className="text-3xl font-semibold text-[#7B61FF]">NFT Type</p>
              <p className="font-normal text-2xl ">
                Select a subscription for the PFP & Collection Generator.
              </p>
            </div>
            <div className="pt-10 grid md:grid-cols-2  grid-col-1 gap-4 " >
              <div id="SingleNft"
                className={`${Opcity || priceOpcity ? "cursor-pointer  mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-100 " : "mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-20 cursor-not-allowed"}`}>
                {/* className=" "> */}

                <div className="pt-5 px-5 py-5">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.55556 1.5415V8.65262M2 5.09706H9.11111M7.33333 26.4304V33.5415M3.77778 29.9859H10.8889M19.7778 1.5415L23.8418 13.7317L34 17.5415L23.8418 21.3513L19.7778 33.5415L15.7138 21.3513L5.55556 17.5415L15.7138 13.7317L19.7778 1.5415Z" stroke="#7B61FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <div className="text-base font-semibold pl-5">
                  Create a Single NFT
                </div>
                <p className="font-normal text-base px-5 py-5 itemcount">
                  This will generate a tokenset based on the preview you have
                  seen in the gallery. What you’ve seen is what you get. Voomio
                  adds randomization to the token number.
                </p>
                <button
                  // onClick={() => { handleSelect() }}
                  type="button"
                  id="btnSelectsingleNft"
                  className="cursor-not-allowed itemcount text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2 border-[#7B61FF] m-5 font-medium text-xl tracking-wide  md:px-16 py-2 px-8 rounded-full text-center"
                >
                  Get Started
                </button>
              </div>

              <div
                // className={`${Opcity ? "text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2  m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full" : "text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full"}`}>
                className={`${priceOpcity ? "opacity-100 mb-2 mr-5 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF]" : " mb-2 mr-5 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-20 cursor-not-allowed"}`}>
                {/* className=" mb-2 mr-5 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-20 cursor-not-allowed" id="netSet"> */}
                <div className="pt-5 px-5 py-5">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2_9608)">
                      <path d="M32 21.5415V33.5415V21.5415ZM26 27.5415H38H26ZM10 13.5415H14C15.0609 13.5415 16.0783 13.1201 16.8284 12.3699C17.5786 11.6198 18 10.6024 18 9.5415V5.5415C18 4.48064 17.5786 3.46322 16.8284 2.71308C16.0783 1.96293 15.0609 1.5415 14 1.5415H10C8.93913 1.5415 7.92172 1.96293 7.17157 2.71308C6.42143 3.46322 6 4.48064 6 5.5415V9.5415C6 10.6024 6.42143 11.6198 7.17157 12.3699C7.92172 13.1201 8.93913 13.5415 10 13.5415ZM30 13.5415H34C35.0609 13.5415 36.0783 13.1201 36.8284 12.3699C37.5786 11.6198 38 10.6024 38 9.5415V5.5415C38 4.48064 37.5786 3.46322 36.8284 2.71308C36.0783 1.96293 35.0609 1.5415 34 1.5415H30C28.9391 1.5415 27.9217 1.96293 27.1716 2.71308C26.4214 3.46322 26 4.48064 26 5.5415V9.5415C26 10.6024 26.4214 11.6198 27.1716 12.3699C27.9217 13.1201 28.9391 13.5415 30 13.5415ZM10 33.5415H14C15.0609 33.5415 16.0783 33.1201 16.8284 32.3699C17.5786 31.6198 18 30.6024 18 29.5415V25.5415C18 24.4806 17.5786 23.4632 16.8284 22.7131C16.0783 21.9629 15.0609 21.5415 14 21.5415H10C8.93913 21.5415 7.92172 21.9629 7.17157 22.7131C6.42143 23.4632 6 24.4806 6 25.5415V29.5415C6 30.6024 6.42143 31.6198 7.17157 32.3699C7.92172 33.1201 8.93913 33.5415 10 33.5415Z" stroke="#7B61FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges" />
                    </g>
                    <defs>
                      <filter id="filter0_d_2_9608" x="0.5" y="0.0415039" width="43" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_9608" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_9608" result="shape" />
                      </filter>
                    </defs>
                  </svg>


                </div>
                <div className="text-base font-semibold pl-5">
                  Create an NFT Set
                </div>
                <p className="font-normal text-base px-5 py-5 itemcount ">
                  This will create a set based on your rules and rarity
                  settings, but isn’t what you saw in the gallery. This will
                  guarantee higher randomization and less bias.
                </p>
                <button
                  // onClick={() => { handleSelect() }}
                  type="button"
                  id="btnSelectNftSet"
                  className={` itemcount ${priceOpcity ? "cursor-pointer text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2 border-[#7B61FF] m-5 font-medium text-xl tracking-wide  md:px-16 py-2 px-8 rounded-full text-center" : " cursor-not-allowed text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2 border-[#7B61FF] m-5 font-medium text-xl tracking-wide  md:px-16 py-2 px-8 rounded-full text-center"}`}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftGenerator;
