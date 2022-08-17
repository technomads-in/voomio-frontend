import React, { useState } from "react";

const NftGenerator = () => {
  const [show, setshow] = useState(-1)
  const [btnshow, setbtnshow] = useState(false)
  const [Opcity, setOpcity] = useState(false)
  const handleSelect = (i) => {
    if (i === show) {
      setshow(-1)

    }
    else {
      setshow(i)

    }

    // console.log("::", i);
    // if (i === 0) {
    //   let btnSelect = document.getElementById(`${i}`);
    //   btnSelect.className =
    //     "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white  border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide ";
    // } else if (i === 1) {
    //   let btnSelect = document.getElementById(`${i}`);
    //   btnSelect.className =
    //     "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white mt-20 border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide ";
    // } else if (i === 2) {
    //   let btnSelect = document.getElementById(`${i}`);
    //   btnSelect.className =
    //     "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white mt-20 border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide ";
    //     // let btnSelectPrice = document.getElementById("btnSelectPrice");
    //     // btnSelectPrice.className = "cursor-pointer text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-5 font-medium text-xl tracking-wide  md:px-16 py-2 px-8 rounded-full text-center"
    //   }
  };
  const handleBtnBasic = () => {

    setbtnshow(true)
    setOpcity(true)

  }
  const handleBtnNft = (i) => {
    let NftType = document.getElementById("NftType");
    NftType.className = "pt-10 opacity-100"

    let SingleNft = document.getElementById("SingleNft");
    SingleNft.className = "cursor-pointer  mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-100  "

    let netSet = document.getElementById("netSet");
    netSet.className = "cursor-pointer  mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-100 "

  }

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
        <div className="text-[#000000]  font-semibold text-2xl pb-8 ">
          Select a subscription for the PFP & Collection Generator.
        </div>
        <div className=" pt-10 md:flex md:pt-20">
          {Price.map((i, d) => (
            <div
              id={i.id} key={i.id}
              // className="mb-2 mr-5 pt-10 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF]"
              className={`${show === d ? "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white  border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide " : "mb-2 mr-5 pt-10 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF]"}`}
            >
              <p className=" m-4 font-medium text-xl tracking-wide bg-[#E0E7FF]  text-[#4F46E5]  w-max  px-4 py-2 rounded-full uppercase">
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
              <span className=" pl-5 font-normal text-base text-[#333333] ">
                {i.subTitle}
              </span>
              {/* </div> */}
              <div className="bg-[white]/60 hover:bg-[white]/60 rounded-xl">
                <ul role="list" className="my-7 space-y-5 m-4 pt-5 ">
                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Pariatur quod similique
                    </p>
                  </li>

                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Sapiente libero doloribus modi nostrum
                    </p>
                  </li>

                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Vel ipsa esse repudiandae excepturi
                    </p>
                  </li>

                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Itaque cupiditate adipisci quibusdam
                    </p>
                  </li>
                </ul>
                <div className=" justify-center ">
                  <button
                    onClick={() => {
                      handleSelect(d);
                      handleBtnNft(d)
                    }}
                    type="button"
                    id="btn"
                    className={` ${show === d ? "cursor-pointer text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2  m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full " : "text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full"} `}
                  >

                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <div className="md:flex pt-8 items-center ">
            <button
              onClick={() => { handleBtnBasic(); }}
              type="button"
              id="btnSelectPrice"
              // className=""
              className={`${btnshow ? "text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2  m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full" : "text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full"}`}
            >
              Select
            </button>
            <div className="">
              <p className="text-2xl  font-normal">
                Basic
                <span className="text-sm  font-medium pl-2 text-[#4F46E5] ">

                  FREE
                </span>
              </p>

              <p className="font-normal text-base">
                Only single NFTs can be generated with Basic plan.
              </p>
            </div>
          </div>

          <div>
            <div
              className={`${Opcity ? "pt-10 opacity-100" : "pt-10 opacity-20"}`} id="NftType">
              {/* className="pt-10 opacity-20" > */}
              <p className="text-3xl font-semibold text-[#7B61FF]">NFT Type</p>
              <p className="font-normal text-2xl ">
                Select a subscription for the PFP & Collection Generator.
              </p>
            </div>
            <div className="pt-10 grid md:grid-cols-2  grid-col-1 gap-4 " >
              <div id="SingleNft"
                className={`${Opcity ? "cursor-pointer  mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-100 " : "mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-20 cursor-not-allowed"}`}>
                {/* className=" "> */}
                <img
                  src="/images/Vector.png"
                  alt="Vector"
                  className="pt-5 px-5 py-5"
                ></img>
                <div className="text-base font-semibold pl-5">
                  Create a Single NFT
                </div>
                <p className="font-normal text-base px-5 py-5 ">
                  This will generate a tokenset based on the preview you have
                  seen in the gallery. What you’ve seen is what you get. Voomio
                  adds randomization to the token number.
                </p>
                <button
                  // onClick={() => { handleSelect() }}
                  type="button"
                  id="btnSelectsingleNft"
                  className="cursor-not-allowed text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2 border-[#7B61FF] m-5 font-medium text-xl tracking-wide  md:px-16 py-2 px-8 rounded-full text-center"
                >
                  Get Started
                </button>
              </div>

              <div
                // className={`${Opcity ? "text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2  m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full" : "text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full"}`}>

                className=" mb-2 mr-5 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF] opacity-20 cursor-not-allowed" id="netSet">
                <img
                  src="./images/Vector-10.png"
                  alt="Vector"
                  className="pt-5 px-5 py-5"
                ></img>
                <div className="text-base font-semibold pl-5">
                  Create an NFT Set
                </div>
                <p className="font-normal text-base px-5 py-5 ">
                  This will create a set based on your rules and rarity
                  settings, but isn’t what you saw in the gallery. This will
                  guarantee higher randomization and less bias.
                </p>
                <button
                  // onClick={() => { handleSelect() }}
                  type="button"
                  id="btnSelectNftSet"
                  className=" cursor-not-allowed text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6] border-2 border-[#7B61FF] m-5 font-medium text-xl tracking-wide  md:px-16 py-2 px-8 rounded-full text-center"
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
