import React, { useState } from "react";
import "./GenerateToken.css"
const GenerateToken = () => {
    const [show, setshow] = useState(-1)
    const [model, setModel] = useState(false);
    const octopussPopup = () => {
        setModel(!model);
    };
    const handleDrop = () => {
        console.log(":::");
        setshow(!show);
    }

    return (
        <>
            <div className="">
                <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 min-h-screen">
                    <div className=" text-5xl font-bold text-[#222222]">
                        NFT Generator
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[#250C50] pt-6 text-lg titleFont">
                                Current NFT
                            </div>
                            <div className="text-[#6549F6]  text-lg pb-16 titleFont">
                                Single-item
                            </div>
                        </div>
                        <div className="flex items-center gap-10  ">
                            <div className='flex flex-col justify-center items-center opacity-20'>
                                <img src="/images/upload.svg" alt="" className='h-10 w-10' />
                                <div className="titleFont text-[#7B61FF]">Upload</div>
                            </div>
                            <div className='flex flex-col justify-center items-center opacity-20'>
                                <img src="/images/EyeOutline.svg" alt="" className='h-10 w-10' />
                                <div className="titleFont text-[#7B61FF]">Preview</div>
                            </div>
                            <div className='flex flex-col justify-center items-center opacity-20'>

                                <img src="/images/CogOutline.svg" alt="" className='h-10 w-10' />
                                <div className="titleFont text-[#7B61FF]">Manage</div>
                            </div>
                            <div className='flex flex-col justify-center items-center '>

                                <img src="/images/star.png" alt="" className='h-10 w-10' />
                                <div className="titleFont text-[#7B61FF]">Generate</div>
                                <img src="/images/path.svg" alt="" className='h-5 ' />
                            </div>
                        </div>
                    </div>

                    <div className="  flex gap-10">
                        <div className="pb-5 pt-36">
                            <div className="text-[#250C50] font-medium titleFont text-lg pb-5">
                                Settings
                            </div>
                            <div className="text-[#6549F6] font-medium titleFont text-base pb-5">
                                General
                            </div>
                            <div className="text-[#6549F6] font-medium titleFont text-base pb-5">
                                Layers
                            </div>
                            <div className="text-[#6549F6] font-medium  titleFont text-base pb-5">
                                Rules
                            </div>
                        </div>

                        <div className=" pt-5 flex flex-col">
                            <div className="pb-5 text-3xl pl-3  font-semibold text-[#7B61FF]">
                                Generate Tokens
                            </div>
                            <div className="pl-2 titleFont">
                                Ready to generate your assets? Let’s get started!
                            </div>
                            <div className="pt-10 grid md:grid-cols-2  grid-col-1 gap-4 " >
                                <div className=" mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF]  " id="SingleNft">
                                    <img
                                        src="/images/SparklesOutline.png"
                                        alt="Vector"
                                        className="pt-5 px-5 py-5"
                                    ></img>
                                    <div className="text-base font-semibold pl-5">
                                        Generate From Preview
                                    </div>
                                    <p className="font-normal text-base px-5 py-5 titleFont ">
                                        This will generate a tokenset based on the preview you have seen in the gallery. What you’ve seen is what you get. Voomio adds randomization to the token number.
                                    </p>
                                    <div className="pb-10">
                                        <button
                                            // onClick={() => { handleSelect() }}
                                            type="button"
                                            id="Generate"
                                            //hover:text-[#6549F6] hover:border-2 hover:border-[#6549F6]
                                            className="cursor-pointer text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6]    font-medium text-base tracking-wide ml-4 py-2 px-12 rounded-full text-center"
                                        >
                                            <div className="titleFont "> <i className="fa-solid fa-arrow-up-from-bracket pr-2"></i>Generate Preview Set</div>
                                        </button>
                                        <button
                                            // onClick={() => { handleSelect() }}
                                            type="button"
                                            id="View"
                                            className="cursor-pointer titleFont text-[#8551E6] bg-[#f3eefe]  font-medium text-base  mx-5 py-2 px-5 rounded-full text-center"
                                        >
                                            View Preview
                                        </button>
                                    </div>
                                </div>
                                <div className=" mb-2 mr-5 md:mr-2  rounded-xl border-2 shadow-md  border-[#7B61FF]  " id="SingleNft">
                                    <img
                                        src="/images/Vector.png"
                                        alt="Vector"
                                        className="pt-5 px-5 py-5"
                                    ></img>
                                    <div className="text-base font-semibold pl-5">
                                        Generate  New

                                    </div>
                                    <p className="font-normal text-base px-5 py-5 titleFont ">
                                        This will create a set based on your rules and rarity settings, but isn’t what you saw in the gallery. This will guarantee higher randomization and less bias.
                                        Generate Preview Set
                                        View Preview
                                    </p>
                                    <div className="pb-10">
                                        <button
                                            // onClick={() => { handleSelect() }}
                                            type="button"
                                            id="Generate"
                                            className="cursor-pointer text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6]  font-medium text-base tracking-wide ml-4 py-2 px-12 rounded-full text-center"
                                        >
                                            <div className="titleFont "> <i className="fa-solid fa-arrow-up-from-bracket pr-2"></i>Generate Preview Set</div>
                                            {/* <i className="fa-solid fa-arrow-up-from-bracket"></i>   */}
                                        </button>
                                        <button
                                            // onClick={() => { handleSelect() }}
                                            type="button"
                                            id="View"
                                            className="cursor-pointer titleFont text-[#8551E6] bg-[#f3eefe]  font-medium text-base  mx-5 py-2 px-5 rounded-full text-center"
                                        >
                                            View Preview
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* <button onClick={octopussPopup}>Token</button> */}
                    {model && (
                        <div
                            className={`${model ? "" : "hidden"
                                }fixed animated fadeInDown backdrop-filter backdrop-blur-sm bg-backdrop flex items-center justify-center overflow-auto z-50 inset-0`}
                        >
                            <div className="relative bg-white dark:bg-blue-darkest rounded-xl shadow-xl px-7 sm:px-10 md:px-20 py-10 max-w-2xl w-11/12 md:w-full">
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10  mr-4"
                                        src="/images/SparklesOutline.png"
                                        alt="Avatar"
                                    />{" "}
                                    <div>
                                        <h1 className=" leading-none text-3xl font-semibold ">Generate Tokens</h1>
                                        {/* <p className="text-base titleFont text-[#999999]">
                                            Connect or create a wallet
                                        </p> */}
                                    </div>
                                </div>
                                {/* wallet details */}



                                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-[white]   bg-white  font-medium rounded-t-lg text-lg px-4 py-2.5 text-center inline-flex items-center  place-content-between  w-48 bg-gradient-to-r from-[#7B61FF] to-[#00DAD9]" type="button" onClick={() => { handleDrop(); }}>Select network
                                    <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>

                                <div id="dropdown" className={`{${show ? " hidden" : "block btn-gradient-1 rounded-lg"} w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" >
                                    <ul className="py-1 text-sm " aria-labelledby="dropdownDefault">
                                        <li>
                                            <a href="#" className="block py-2 px-4 border-b">Ethereum</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 border-b">Solana</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 border-b">Polygon</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 ">Cardana</a>
                                        </li>
                                    </ul>
                                </div>
                                <div htmlFor="first_name" className="block mb-2 relative pt-2 text-sm font-medium text-gray-900 dark:text-gray-300">Generating wallet</div>
                                <div className="flex">
                                    <input type="text" id="first_name" className="bg-gray-50  border border-[#6549F6] p-2 w-full text-sm rounded-lg " placeholder="7XsmeBSm3xpNaXE5bTZddskgvPAwYbV7kTmDpt9JagA6" required >
                                    </input>
                                    <img className="w-5 h-6 mt-2 absolute right-24" src="./images/True.png"></img>
                                </div>
                                <div className="flex justify-end">ERC20 </ div>
                                <div className="text-xl pt-5">Are you sure you want to generate ________ Tokens?</div>
                                <div className="pt-5 justify-end flex">

                                    <button
                                        onClick={() => { octopussPopup() }}
                                        type="button"
                                        id="View"
                                        className="cursor-pointer text-[#8551E6] bg-[#f3eefe]  font-medium text-base  mx-5 py-2 px-5 rounded-full text-center"
                                    >
                                        <div className=" text-base"> Cancel</div>
                                    </button>
                                    <button
                                        // onClick={() => { handleSelect() }}
                                        type="button"
                                        id="Generate"
                                        className="cursor-pointer text-[white] flex bg-gradient-to-r from-[#7B61FF] to-[#00DAD9]  font-medium text-base tracking-wide ml-4 py-2 px-12 rounded-full text-center"
                                    >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.22222 1V5.44444M1 3.22222H5.44444M4.33333 16.5556V21M2.11111 18.7778H6.55556M12.1111 1L14.6511 8.61889L21 11L14.6511 13.3811L12.1111 21L9.57111 13.3811L3.22222 11L9.57111 8.61889L12.1111 1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="pl-2 text-base"> Generate Token</div>
                                    </button>
                                </div>
                                {/* close button */}
                                {/* <button
                                        type="button"
                                        onClick={octopussPopup}
                                        className="absolute text-2xl px-2.5 text-gray-dark dark:text-gray-lightest top-3 right-3 hover:opacity-100 opacity-70"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="w-10 h-10"
                                            fill="#6549F6"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button> */}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
};

export default GenerateToken;
