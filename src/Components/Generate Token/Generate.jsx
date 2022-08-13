import React from "react";

const Generate = () => {
    return (
        <>
            <div className="">
                <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 min-h-screen">
                    <div className=" text-5xl font-bold text-[#222222]">
                        NFT Generator
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[#250C50] pt-6 text-lg ">Current NFT</div>
                            <div className="text-[#6549F6]  text-lg pb-16 ">Single-item</div>
                        </div>
                        <div className="flex items-center gap-10  ">
                            <div className="flex flex-col justify-center items-center opacity-20">
                                <img src="/images/upload.svg" alt="" className="h-10 w-10" />
                                <div>Upload</div>
                            </div>
                            <div className="flex flex-col justify-center items-center opacity-20">
                                <img
                                    src="/images/EyeOutline.svg"
                                    alt=""
                                    className="h-10 w-10"
                                />
                                <div>Preview</div>
                            </div>
                            <div className="flex flex-col justify-center items-center opacity-20">
                                <img
                                    src="/images/CogOutline.svg"
                                    alt=""
                                    className="h-10 w-10"
                                />
                                Manage
                            </div>
                            <div className="flex flex-col justify-center items-center ">
                                <img src="/images/star.png" alt="" className="h-10 w-10" />
                                Generate
                                <img src="/images/path.svg" alt="" className="h-5 " />
                            </div>
                        </div>
                    </div>

                    <div className="  flex gap-10">
                        <div className="pb-5 pt-36">
                            <div className="text-[#250C50] font-medium text-lg pb-5">
                                Settings
                            </div>
                            <div className="text-[#6549F6] font-medium text-base pb-5">
                                General
                            </div>
                            <div className="text-[#6549F6] font-medium text-base pb-5">
                                Layers
                            </div>
                            <div className="text-[#6549F6] font-medium text-base pb-5">
                                Rules
                            </div>
                        </div>

                        <div className=" pt-5 flex flex-col">
                            <div className="pb-5 text-3xl pl-3  font-semibold text-[#7B61FF]">
                                Generate Tokens
                            </div>
                            <div className="pl-2 ">
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
                                    <p className="font-normal text-base px-5 py-5 ">
                                        This will generate a tokenset based on the preview you have seen in the gallery. What you’ve seen is what you get. Voomio adds randomization to the token number.
                                    </p>
                                    <div className="pb-10">
                                        <button
                                            // onClick={() => { handleSelect() }}
                                            type="button"
                                            id="Generate"
                                            className="cursor-pointer text-[white] bg-gradient-to-r from-[#9B53E0] to-[#8551E6]  font-medium text-base tracking-wide ml-4 py-2 px-12 rounded-full text-center"
                                        >
                                            <i class="fa-solid fa-arrow-up-from-bracket"></i>  Generate Preview Set
                                        </button>
                                        <button
                                            // onClick={() => { handleSelect() }}
                                            type="button"
                                            id="View"
                                            className="cursor-pointer text-[#8551E6] bg-[#f3eefe]  font-medium text-base  mx-5 py-2 px-5 rounded-full text-center"
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
                                    <p className="font-normal text-base px-5 py-5 ">
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
                                            <i class="fa-solid fa-arrow-up-from-bracket"></i>  Generate Preview Set
                                        </button>
                                        <button
                                            // onClick={() => { handleSelect() }}
                                            type="button"
                                            id="View"
                                            className="cursor-pointer text-[#8551E6] bg-[#f3eefe]  font-medium text-base  mx-5 py-2 px-5 rounded-full text-center"
                                        >
                                            View Preview
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Generate;
