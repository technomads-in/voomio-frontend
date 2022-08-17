import React, { useState } from 'react'
import "./Manage.css"
import "swiper/css";
import "swiper/css/scrollbar";

const Manage = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    const [isCard, setIsCard] = useState(true);
    const [CardActive, setCardActive] = useState(1)
    const [show, setshow] = useState(-1)
    const [Popup, setPopup] = useState(-1)
    const [tabActive, settabActive] = useState(1)
    const [tabActiveTwo, settabActiveTwo] = useState(0)
    const [popupOpen, setpopupOpen] = useState(false);



    const cardClickClose = () => {
        console.log(tabActive);

        setIsCard(true);
        setCardActive(1)
        settabActive(1)
        settabActiveTwo(0)
    };
    const cardClickOpen = () => {
        console.log(tabActive);
        setCardActive(0)
        setIsCard(false);
        settabActive(0)
        settabActiveTwo(1)

    }
    const openDropdown = () => {
        setIsDropdown(!isDropdown);
        setPopup(!Popup)

    };
    const OpenPop = () => {
        console.log(":::::");
        setpopupOpen(!popupOpen);
    };
    const handleDrop = (i) => {
        console.log("1", i);
        if (i === show) {
            setshow(-1)
        }
        else {
            setshow(i)
        }


    }
    const modelOpen = () => {

        setpopupOpen(!popupOpen);
    }
    const dropData = [{
        id: 1,
        name: "Body - Lorem"

    }, {
        id: 2,
        name: "Clothes - Lorem"

    }, {
        id: 3,
        name: "Select network"

    }, {
        id: 4,
        name: "Eyes"

    }, {
        id: 5,
        name: "Hair"

    },
    {
        id: 6,
        name: "Mouth"

    }, {
        id: 7,
        name: "Texture"

    },
    ]
    const Price = [
        {
            id: "0",

        },
        {
            id: "1",

        },
        {
            id: "2",

        },
        {
            id: "3",

        },
        {
            id: "4",

        }, {
            id: "5",

        },
        {
            id: "6",

        }, {
            id: "7",

        },
        {
            id: "8",

        },

    ];
    const backcolor = [
        {
            id: 0,
            backcolor: `FF0000`,
        },
        {
            id: 1,
            backcolor: "8551E6",

        },
        {
            id: 2,
            backcolor: "010101",

        },
        {
            id: 3,
            backcolor: "010101",

        },
        {
            id: 4,
            backcolor: "010101",

        },

    ];
    const DropColor = [
        {
            id: 0,
            Title: `color`,
            colorName: `FF0000`
        },
        {
            id: 1,
            Title: `color`,
            colorName: `FFD966`

        },
        {
            id: 2,
            Title: `color`,
            colorName: `FF0000`

        },
    ]
    return (
        <>

            <div className=''>
                <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 min-h-screen">
                    <div className=" text-5xl font-bold text-[#222222]">NFT Generator</div>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[#250C50] pt-6 text-lg ">
                                Current NFT
                            </div>
                            <div className="text-[#6549F6]  text-lg pb-16 ">
                                Single-item
                            </div>
                        </div>
                        <div className="flex items-center gap-10  ">
                            <div className='flex flex-col justify-center items-center opacity-20'>
                                <img src="/images/upload.svg" alt="" className='h-10 w-10' />
                                <div>Upload</div>
                            </div>
                            <div className='flex flex-col justify-center items-center opacity-20'>
                                <img src="/images/EyeOutline.svg" alt="" className='h-10 w-10' />
                                <div>Preview</div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>

                                <img src="/images/CogOutline.svg" alt="" className='h-10 w-10' />Manage
                                <img src="/images/path.svg" alt="" className='h-5 ' />
                            </div>
                            <div className='flex flex-col justify-center items-center opacity-20'>

                                <img src="/images/star.png" alt="" className='h-10 w-10' />Generate
                            </div>
                        </div>
                    </div>
                    <div className=' gap-12 md:pl-[132px]'>
                        <div></div>
                        <div className='flex md:gap-10 gap-12 font-medium text-xl'>
                            {/* <div className="px-5"> */}
                            <button className={`${tabActive ? "active" : "deActive"} `} onClick={cardClickClose} >Components</button>
                            {/* </div> */}
                            <button className={`${tabActiveTwo ? "active" : "deActive"} `} onClick={cardClickOpen}>One-of-Ones</button>

                        </div>
                        <div className="border-[1px] "></div>
                    </div>
                    {isCard ? <>
                        <div className='flex justify-between container md:pl-32 '>
                            <div className="pt-10  text-[#7B61FF] font-semibold text-3xl">Manage</div>
                            <div className="pt-10">
                                {/* bg-gradient-to-r from-[#7B61FF] to-[#00DAD9] */}
                                {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" className={` ${Popup ? "bg-white text-[#6549F6]  border-2 border-[#6549F6]" : "  bg-gradient-to-r from-[#7B61FF] to-[#00DAD9] text-white"}   font-medium rounded-t-lg text-lg px-4 py-2.5 text-center inline-flex items-center  place-content-between ${Popup ? "  rounded-t-lg " : ""} `} type="button" onClick={() => { openDropdown(); }}>By design
                                    <svg className="ml-2 w-4 h-4" aria-hidden="true"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                        </path>
                                    </svg>
                                </button>




                                <div id="dropdown" className={` ${Popup ? " hidden" : "block dropdown-gradient-1 "}   bg-white rounded  z-0`} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" >
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                        <li>
                                            <a href="#" className="block py-2 px-4 ">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 ">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 ">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 ">Sign out</a>
                                        </li>
                                    </ul>
                                </div> */}

                                <div className="text-left mb-10">

                                    <button

                                        type="button"
                                        className={` ${Popup ? "bg-white text-[#250C50]  border-2 border-[#6549F6] " : "  bg-gradient-to-r from-[#7B61FF] to-[#00DAD9] text-white "}   font-medium rounded-t-lg text-lg px-4 py-2.5 text-center inline-flex items-center  place-content-between w-36 `}
                                        id="menu-button"
                                        aria-expanded="true"
                                        aria-haspopup="true"
                                        onClick={openDropdown}
                                    >
                                        By design

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


                                    {/* {isDropdown ? ( */}
                                    <div

                                        className={` ${Popup ? " hidden" : "block dropdown-gradient-1  border-2   rounded-b-lg"}   origin-top-right z-50 absolute   w-36 rounded-b-lg shadow-lg bg-white  `}
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="menu-button"
                                        tabIndex={-1}
                                    >
                                        <div >
                                            <div className="py-1 text-[#6549F6] " role="none" >
                                                <a
                                                    href="/"
                                                    className=" block px-4 py-2 border-b-2 text-sm text-[#250C50] hover:text-[#6549F6]"
                                                    role="menuitem"
                                                    tabIndex={-1}
                                                    id="menu-item-0"
                                                >
                                                    Item 1
                                                </a>
                                                <a
                                                    href="/"
                                                    className=" block px-4 py-2 border-b-2 text-sm text-[#250C50] hover:text-[#6549F6]"
                                                    role="menuitem"
                                                    tabIndex={-1}
                                                    id="menu-item-1"
                                                >
                                                    Item 2
                                                </a>
                                                <a
                                                    href="/"
                                                    className=" block px-4 py-2  text-sm text-[#250C50] hover:text-[#6549F6]"
                                                    role="menuitem"
                                                    tabIndex={-1}
                                                    id="menu-item-2"
                                                >
                                                    Item  3
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                    {/* ) : null} */}
                                </div>

                            </div>
                        </div>
                    </> : ""}

                    {isCard ?
                        <>
                            <div className="grid grid-cols-12 " >
                                <div className="pb-5 pt-10 ">
                                    <div className="text-[#250C50] font-medium text-lg pb-5">Settings</div>
                                    <div className="text-[#6549F6] font-medium text-base pb-5">General</div>
                                    <div className="text-[#6549F6] font-medium text-base pb-5">Layers</div>
                                    <div className="text-[#6549F6] font-medium text-base pb-5">Rules</div>
                                </div>

                                <div className="col-span-10 pt-5">
                                    <div className='pb-10 text-lg pl-3 flex font-semibold text-[#222222]'>Clothes
                                        <div className="pl-2 ">
                                            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_2_8071)">
                                                    <rect x="4" width="23.92" height="23" rx="11.5" fill="#F4EEFF" />
                                                    <path d="M16.2692 8.75C15.9326 8.75 15.6098 8.60513 15.3717 8.34727C15.1337 8.08941 15 7.73967 15 7.375C15 7.01033 15.1337 6.66059 15.3717 6.40273C15.6098 6.14487 15.9326 6 16.2692 6C16.6059 6 16.9287 6.14487 17.1667 6.40273C17.4047 6.66059 17.5385 7.01033 17.5385 7.375C17.5385 7.73967 17.4047 8.08941 17.1667 8.34727C16.9287 8.60513 16.6059 8.75 16.2692 8.75ZM16.2692 12.875C15.9326 12.875 15.6098 12.7301 15.3717 12.4723C15.1337 12.2144 15 11.8647 15 11.5C15 11.1353 15.1337 10.7856 15.3717 10.5277C15.6098 10.2699 15.9326 10.125 16.2692 10.125C16.6059 10.125 16.9287 10.2699 17.1667 10.5277C17.4047 10.7856 17.5385 11.1353 17.5385 11.5C17.5385 11.8647 17.4047 12.2144 17.1667 12.4723C16.9287 12.7301 16.6059 12.875 16.2692 12.875ZM16.2692 17C15.9326 17 15.6098 16.8551 15.3717 16.5973C15.1337 16.3394 15 15.9897 15 15.625C15 15.2603 15.1337 14.9106 15.3717 14.6527C15.6098 14.3949 15.9326 14.25 16.2692 14.25C16.6059 14.25 16.9287 14.3949 17.1667 14.6527C17.4047 14.9106 17.5385 15.2603 17.5385 15.625C17.5385 15.9897 17.4047 16.3394 17.1667 16.5973C16.9287 16.8551 16.6059 17 16.2692 17Z" fill="#6549F6" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_2_8071" x="0" y="0" width="31.9199" height="31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="4" />
                                                        <feGaussianBlur stdDeviation="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_8071" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_8071" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex outer-wrapper ">

                                        {Price.map((i, d) => (


                                            <div className=" pl-4  " key={i.id} >

                                                <div className='border-2 rounded-xl  border-[#6549F6] flex flex-col items-center
                                                 justify-end w-[325px] h-[394px]'>
{/* 
                                                    <div className=' justify-center block '>
                                                        <div className=" shadow w-72 rounded w-full justify-center ">
                                                            <div className='p-2 flex w-72 hover:bg-[#F4EEFF] hover:rounded '>
                                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="9.5" cy="9.5" r="9.5" fill="black" />
                                                                </svg>
                                                                <div className='pl-5'>

                                                                    Set Rarity
                                                                </div>

                                                            </div>
                                                            <div className='p-2 flex  hover:bg-[#F4EEFF] hover:rounded '>
                                                                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M1.314 5.26H3.15L2.772 7.708H0.972L0.666 9.526H2.502L1.98 13H3.564L4.086 9.526H6.336L5.814 13H7.398L7.92 9.526H9.72L10.026 7.708H8.19L8.568 5.26H10.386L10.692 3.46H8.838L9.342 0.165999H7.776L7.272 3.46H5.004L5.508 0.165999H3.924L3.42 3.46H1.62L1.314 5.26ZM4.734 5.26H7.002L6.624 7.708H4.356L4.734 5.26Z" fill="black" />
                                                                </svg>

                                                                <div className='pl-5'>

                                                                    Set Quantity
                                                                </div>

                                                            </div>
                                                            <div className='p-2 flex  hover:bg-[#F4EEFF] hover:rounded '>
                                                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M3.834 8.348C5.724 8.348 7.038 6.89 7.038 4.622C7.038 2.318 5.706 0.895999 3.834 0.895999C1.98 0.895999 0.612 2.354 0.612 4.622C0.612 6.89 1.962 8.348 3.834 8.348ZM3.906 14H5.418L12.564 1.184H11.034L3.906 14ZM12.618 14.306C14.526 14.306 15.858 12.83 15.858 10.562C15.858 8.276 14.508 6.836 12.618 6.836C10.782 6.836 9.396 8.294 9.396 10.562C9.396 12.83 10.746 14.306 12.618 14.306ZM3.834 6.962C2.916 6.962 2.484 5.972 2.484 4.622C2.484 3.236 2.916 2.246 3.834 2.246C4.752 2.246 5.22 3.272 5.22 4.622C5.22 5.99 4.77 6.962 3.834 6.962ZM12.636 12.902C11.718 12.902 11.268 11.912 11.268 10.562C11.268 9.194 11.718 8.186 12.636 8.186C13.518 8.186 14.004 9.212 14.004 10.562C14.004 11.93 13.572 12.902 12.636 12.902Z" fill="black" />
                                                                </svg>

                                                                <div className='pl-5'>

                                                                    Set Percentage
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <img className="w-70 h-50 justify-end max-w-none " src="/images/ClothesLayer-6.png" alt="img" />
                                                </div>
                                                <div className="">

                                                    Lorem Ipsum{i.id}

                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="flex">
                                                        <img className=' ml-1' src="/images/dot.png"></img>
                                                        <img className=' ml-1' src="/images/dot.png"></img>
                                                        <img className=' ml-1' src="/images/dot.png"></img>
                                                        <img className='w-4 h-4 ml-2' src="/images/whitedot.png"></img>
                                                        <img className='w-4 h-4 ml-2' src="/images/whitedot.png"></img>
                                                    </div>
                                                    <div>
                                                        <button className="justify-between" >

                                                            <img className='w-5 h-5 ml-2' src="/images/Group3.svg"></img>
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>


                                        ))}

                                        <div className="pseduo-track"></div>
                                    </div>
                                    <div className='pb-10 pt-10 pl-3 text-lg flex font-semibold test-[#222222]'>Backgrounds
                                        <div className="pl-2 ">
                                            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_2_8071)">
                                                    <rect x="4" width="23.92" height="23" rx="11.5" fill="#F4EEFF" />
                                                    <path d="M16.2692 8.75C15.9326 8.75 15.6098 8.60513 15.3717 8.34727C15.1337 8.08941 15 7.73967 15 7.375C15 7.01033 15.1337 6.66059 15.3717 6.40273C15.6098 6.14487 15.9326 6 16.2692 6C16.6059 6 16.9287 6.14487 17.1667 6.40273C17.4047 6.66059 17.5385 7.01033 17.5385 7.375C17.5385 7.73967 17.4047 8.08941 17.1667 8.34727C16.9287 8.60513 16.6059 8.75 16.2692 8.75ZM16.2692 12.875C15.9326 12.875 15.6098 12.7301 15.3717 12.4723C15.1337 12.2144 15 11.8647 15 11.5C15 11.1353 15.1337 10.7856 15.3717 10.5277C15.6098 10.2699 15.9326 10.125 16.2692 10.125C16.6059 10.125 16.9287 10.2699 17.1667 10.5277C17.4047 10.7856 17.5385 11.1353 17.5385 11.5C17.5385 11.8647 17.4047 12.2144 17.1667 12.4723C16.9287 12.7301 16.6059 12.875 16.2692 12.875ZM16.2692 17C15.9326 17 15.6098 16.8551 15.3717 16.5973C15.1337 16.3394 15 15.9897 15 15.625C15 15.2603 15.1337 14.9106 15.3717 14.6527C15.6098 14.3949 15.9326 14.25 16.2692 14.25C16.6059 14.25 16.9287 14.3949 17.1667 14.6527C17.4047 14.9106 17.5385 15.2603 17.5385 15.625C17.5385 15.9897 17.4047 16.3394 17.1667 16.5973C16.9287 16.8551 16.6059 17 16.2692 17Z" fill="#6549F6" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_2_8071" x="0" y="0" width="31.9199" height="31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="4" />
                                                        <feGaussianBlur stdDeviation="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_8071" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_8071" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex outer-wrapper">
                                        {
                                            backcolor.map((i) => {
                                                return <div className=" pl-3 pr-1 " key={i.id}>
                                                    <div className='border-2 rounded-xl border-[#6549F6]  '>
                                                        <div className={`w-80 h-80 max-w-none  bg-[#${i.backcolor}] rounded-xl`}></div>

                                                    </div>
                                                    <div className="">

                                                        Lorem Ipsum{i.id}

                                                    </div>
                                                    <div className="flex justify-between">
                                                        <div className="flex">
                                                            <img className=' ml-1' src="/images/dot.png"></img>
                                                            <img className=' ml-1' src="/images/dot.png"></img>
                                                            <img className=' ml-1' src="/images/dot.png"></img>
                                                            <img className='w-4 h-4 ml-2' src="/images/whitedot.png"></img>
                                                            <img className='w-4 h-4 ml-2' src="/images/whitedot.png"></img>
                                                        </div>
                                                        {/* <div>
                                                            <button className="justify-between" >

                                                                <img className='w-5 h-5 ml-2' src="/images/Group3.svg"></img>
                                                            </button>
                                                        </div> */}


                                                    </div>
                                                </div>
                                            })
                                        }

                                        <div className="pseduo-track"></div>

                                    </div>

                                </div>
                            </div>
                        </>
                        :
                        <div className="flex gap-8" >
                            <div className="pb-5 pt-32 ">
                                <div className="text-[#250C50] font-medium text-lg pb-5">Settings</div>
                                <div className="text-[#6549F6] font-medium text-base pb-5">General</div>
                                <div className="text-[#6549F6] font-medium text-base pb-5">Layers</div>
                                <div className="text-[#6549F6] font-medium text-base pb-5">Rules</div>
                            </div>
                            <div className='grid grid-cols-1 w-full pt-10'>

                                {dropData.map((i, d) => (

                                    <div className="  pt-5 " key={i.id}>
                                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" className={`text-[#6549F6] w-full border-2 border-[#6549F6]${show === d ? " dropdown-gradient-1 rounded bg-gradient-to-r from-[#7B61FF] to-[#00DAD9] " : ""} bg-white  font-medium rounded-lg text-lg px-4 py-2.5 text-center inline-flex items-center  place-content-between  `} type="button" onClick={() => { handleDrop(d); }}>
                                            {/* */}
                                            <div className={` ${show === d ? "text-white" : ""}`}>{i.name}</div>

                                            <svg className=" w-4 h-4 " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>



                                        {/* //  */}
                                        <div id={d} className={` ${show === d ? "block dropdown-gradient-1" : "hidden"} z-10 w-full bg-white rounded `} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" >
                                            <div className="flex justify-between pt-2">
                                                <div className="pl-5 flex text-[#000000] text-sm font-medium"> Name
                                                    <img src="/images/down-arrow.png" className='w-5 h-5 pt-1 pl-1'></img>

                                                </div>
                                                <div className=" flex text-[#000000] text-sm font-medium pl-8" > Quanity
                                                    <img src="/images/down-arrow.png" className='w-5 h-5 pt-1 pl-1'></img>

                                                </div>
                                                <div className=" flex text-[#000000] text-sm font-medium pr-5"> Percentage
                                                    <img src="/images/down-arrow.png" className='w-5 h-5 pt-1 pl-1'></img>

                                                </div>

                                            </div>

                                            <ul className={`py-1 font-normal text-base text-black }`} aria-labelledby="dropdownDefault" >

                                                {DropColor.map((i, d) => (

                                                    <li className="flex justify-between pt-2 " key={i.id} >
                                                        <a href="#" className="block pl-5 flex ">
                                                            <div className={`w-5 h-5 bg-[#${i.colorName}]  border-2`}></div><div className="pl-5 hover:text-[#6549F6]">{i.Title}</div>
                                                        </a>
                                                        <a href="#" className="block hover:text-[#6549F6] ">863</a>
                                                        <a href="#" className="block pr-16 hover:text-[#6549F6]">8.7%</a>
                                                    </li>
                                                ))}

                                            </ul>

                                        </div>

                                    </div>
                                ))}



                            </div>
                        </div>}



                    {/* </div> */}

                </div>

            </div>

        </>
    )
}

export default Manage