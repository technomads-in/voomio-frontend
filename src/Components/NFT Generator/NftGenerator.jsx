import React from "react";
import Header from "../Header/Header";
import "./NftGenerator.jsx"
const NftGenerator = () => {
    const  handleSelect=()=>{
        
    }
    return (
        <>
            {/* <Header></Header> */}
            <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 ">
                <div className=" text-5xl font-bold text-[#222222]">NFT Generator</div>
                <div className="text-[#7B61FF] pt-6 font-semibold text-3xl">
                    Pricing
                </div>
                <div className="text-[#000000]  font-semibold text-2xl pb-16">
                    Select a subscription for the PFP & Collection Generator.
                </div>
                <div className="grid md:grid-cols-3 gap-2.5 box-border">

                    <div className=" hover:bg-[#F4EEFF] hover:-translate-y-12 mr-5 md:mr-0 rounded-xl border-2 shadow-md  border-[#7B61FF]">

                        <p className=" m-4 font-medium text-xl tracking-wide bg-[#E0E7FF]  text-[#4F46E5]  w-max  px-4 py-2 rounded-full uppercase" >
                            A great deal
                        </p>

                        <div className="flex m-4 items-baseline">

                            <span className="text-5xl font-extrabold tracking-tight text-7xl text-[#111827]">$49</span>
                            <span className="ml-1 text-2xl font-medium text-[#6B7280]">/mo</span>
                        </div>
                        <div className="pt-2 m-4">
                            <span className="ml-1  font-normal text-base text-[#333333]">Billed biannualy ($300)</span>
                        </div>
                        <div className="bg-[#F4EEFF]/60 hover:bg-[white]/60 rounded-xl">
                            <ul role="list" className="my-7 space-y-5 m-4 pt-5 ">
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Pariatur quod similique
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Sapiente libero doloribus modi nostrum
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Vel ipsa esse repudiandae excepturi
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Itaque cupiditate adipisci quibusdam
                                    </span>
                                </li>
                            </ul>
                            <div className="flex justify-center">

                                <button
                                onClick={handleSelect}
                                    type="button"
                                    className="text-[#7B61FF] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide bg-[#ffffff]  md:px-32 py-2 px-16 rounded-full">
                                    Select
                                </button>

                            </div>
                        </div>
                    </div>



                    <div className=" max-w-sm hover:bg-[#F4EEFF]   hover:-translate-y-6  rounded-xl border-2 shadow-md  border-[#7B61FF]">
                        <p className=" m-4 font-medium text-xl tracking-wide bg-[#E0E7FF]  text-[#4F46E5]  w-max  px-4 py-2 rounded-full uppercase" >
                            Popular

                        </p>

                        <div className="flex m-4 items-baseline text-gray-900 dark:text-white">

                            <span className="text-5xl font-extrabold tracking-tight text-7xl text-[#111827]">$75</span>
                            <span className="ml-1 text-2xl font-medium text-[#6B7280]">/mo</span>
                        </div>
                        <div className="pt-2 m-4">
                            <span className="ml-1  font-normal text-base text-[#333333]">This is the best plan.</span>
                        </div>
                        <div className="bg-[white]/60 rounded-xl">
                            <ul role="list" className="my-7 space-y-5 m-4 pt-5 ">
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Pariatur quod similique
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Sapiente libero doloribus modi nostrum
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Vel ipsa esse repudiandae excepturi
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Itaque cupiditate adipisci quibusdam
                                    </span>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="text-[#7B61FF] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide bg-[#ffffff]  px-32 py-2 rounded-full">
                                Select
                            </button>

                        </div>
                    </div>




                    <div className=" max-w-sm hover:bg-[#F4EEFF] hover:-translate-y-6 rounded-xl border-2 shadow-md  border-[#7B61FF]">
                        <p className=" m-4 font-medium text-xl tracking-wide bg-[#E0E7FF]  text-[#4F46E5]  w-max  px-4 py-2 rounded-full uppercase" >
                            A great deal
                        </p>

                        <div className="flex m-4 items-baseline text-gray-900 dark:text-white">

                            <span className="text-5xl font-extrabold tracking-tight text-7xl text-[#111827]">$500</span>
                            <span className="ml-1 text-2xl font-medium text-[#6B7280]">/yr</span>
                        </div>
                        <div className="pt-2 m-4">
                            <span className="ml-1  font-normal text-base text-[#333333]">Annual payments of $500.</span>
                        </div>
                        <div className="bg-[white]/60 bg-white rounded-xl">
                            <ul role="list" className="my-7 space-y-5 m-4 pt-5 ">
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Pariatur quod similique
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Sapiente libero doloribus modi nostrum
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Vel ipsa esse repudiandae excepturi
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img src="./images/true.png" alt="true" className="pt-1" ></img>
                                    <span className="text-base font-medium leading-tight text-gray-500 dark:text-gray-400">
                                        Itaque cupiditate adipisci quibusdam
                                    </span>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="text-[#7B61FF] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide bg-[#ffffff]  px-32 py-2 rounded-full">
                                Select
                            </button>

                        </div>
                    </div>



                </div>
            </div>
        </>
    );
};

export default NftGenerator;
