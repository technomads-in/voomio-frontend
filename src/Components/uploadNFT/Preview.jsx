import { useState } from "react";
import { Link } from "react-router-dom";
import NftDetails from "./NftDetails";

const Preview = () => {
  const [show, setshow] = useState(-1);
  const [tabActiveTwo, settabActiveTwo] = useState(0)
  const [openModal, setOpenModal] = useState(false);
  const [tabActive, settabActive] = useState(1)
  const backcolor = [
    {
      id: 0,
      backcolor: "bg-[#FF0000]",
    },
    {
      id: 1,
      backcolor: "bg-[#FFA629]",
    },
    {
      id: 2,
      backcolor: "bg-[#4CFFBF]",
    },
    {
      id: 3,
      backcolor: "bg-[#4CFFBF]",
    },
    {
      id: 4,
      backcolor: "bg-[#4CFFBF]",
    },
  ];
  const dropData = [
    {
      id: 1,
      name: "Body - Lorem",
    },
    {
      id: 2,
      name: "Clothes - Lorem",
    },
    {
      id: 3,
      name: "Select network",
    },
    {
      id: 4,
      name: "Eyes",
    },
    {
      id: 5,
      name: "Hair",
    },
    {
      id: 6,
      name: "Mouth",
    },
    {
      id: 7,
      name: "Texture",
    },
  ];
  const nft = [
    {
      id: 1,
      image: "/images/monkey.png",
      number: "#1",
    },
    {
      id: 2,
      image: "",
      number: "#1",
    },
    {
      id: 3,
      image: "",
      number: "#1",
    },
    {
      id: 4,
      image: "",
      number: "#1",
    },
    {
      id: 5,
      image: "",
      number: "#1",
    },
    {
      id: 6,
      image: "",
      number: "#1",
    },
    {
      id: 7,
      image: "",
      number: "#1",
    },
    {
      id: 8,
      image: "",
      number: "#1",
    },
    {
      id: 9,
      image: "",
      number: "#1",
    },
    {
      id: 10,
      image: "",
      number: "#1",
    },
    {
      id: 11,
      image: "",
      number: "#1",
    },
    {
      id: 12,
      image: "",
      number: "#1",
    },
    {
      id: 13,
      image: "",
      number: "#1",
    },
    {
      id: 14,
      image: "",
      number: "#1",
    },
    {
      id: 15,
      image: "",
      number: "#1",
    },
    {
      id: 16,
      image: "",
      number: "#1",
    },
    {
      id: 17,
      image: "",
      number: "#1",
    },
    {
      id: 18,
      image: "",
      number: "#1",
    },
    {
      id: 19,
      image: "",
      number: "#1",
    },
    {
      id: 20,
      image: "",
      number: "#1",
    },
  ];
  const handleDrop = (i) => {
    console.log("1", i);
    if (i === show) {
      setshow(-1);
    } else {
      setshow(i);
    }
  };

  const cardClickClose = () => {




    settabActive(1)
    settabActiveTwo(0)
  };
  const cardClickOpen = () => {


    settabActive(0)
    settabActiveTwo(1)

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
              <div className="text-[#250C50] pt-6 text-lg itemcount">
                Current NFT
              </div>
              <div className="text-[#6549F6]  text-lg pb-16 itemcount">
                Single-item
              </div>
            </div>
            <div className="flex items-center gap-10  ">
              <div className='flex flex-col justify-center items-center opacity-20'>
                <img src="/images/upload.svg" alt="" className='h-10 w-10' />
                <div className="itemcount text-[#7B61FF]">Upload</div>
              </div>
              <div className='flex flex-col justify-center items-center '>
                <img src="/images/EyeOutline.svg" alt="" className='h-10 w-10' />
                <div className="itemcount text-[#7B61FF]">Preview</div>
                <img src="/images/path.svg" alt="" className='h-5 ' />
              </div>
              <div className='flex flex-col justify-center items-center opacity-20'>

                <img src="/images/CogOutline.svg" alt="" className='h-10 w-10' />
                <div className="itemcount text-[#7B61FF]">Manage</div>
              </div>
              <div className='flex flex-col justify-center items-center opacity-20'>

                <img src="/images/star.png" alt="" className='h-10 w-10' />
                <div className="itemcount text-[#7B61FF]">Generate</div>

              </div>
            </div>
          </div>

          <div className=' gap-12 md:pl-[132px]'>
            <div></div>
            <div className='flex md:gap-10 gap-12 font-medium text-xl'>
              {/* <div className="px-5"> */}
              <button className={`${tabActive ? "active" : "deActive"} itemcount `} onClick={cardClickClose} >Token Gallery</button>
              {/* </div> */}
              <button className={`${tabActiveTwo ? "active" : "deActive"} itemcount`} onClick={cardClickOpen}>Metadata</button>

            </div>
            <div className="border-[1px] "></div>
          </div>

          <div className="flex mt-20 gap-8">
            <div className="flex gap-24">
              <div className="pb-5 pt-10 ">
                <div className="text-[#250C50] font-medium text-lg pb-5  cursor-pointer itemcount">Settings</div>
                <div className=" pb-5">
                  <Link to="/general" className="text-[#6549F6] font-medium text-base itemcount cursor-pointer">General</Link>
                </div>
                <div className=" pb-5">
                  <Link to="/general" className="text-[#6549F6] font-medium text-base itemcount cursor-pointer">Layers</Link>

                </div>
                <div className=" pb-5">

                  <Link to="/general" className="text-[#6549F6] font-medium text-base itemcount cursor-pointer">Rules</Link>
                </div>
              </div>

              <div>
                <div className="">
                  <div className="font-semibold text-lg">
                    <div className="mb-3">Tokens</div>
                    <div>
                      <button
                        // onClick={() => { handleSelect() }}
                        type="button"
                        id="Generate"
                        className="cursor-pointer text-[white] bg-gradient-to-r from-[#7B61FF] to-[#00DAD9]  font-medium text-base tracking-wide   px-4 rounded-full text-center"
                      >
                        <div className="itemcount flex  px-2 py-3"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.22222 1V5.44444M1 3.22222H5.44444M4.33333 16.5556V21M2.11111 18.7778H6.55556M12.1111 1L14.6511 8.61889L21 11L14.6511 13.3811L12.1111 21L9.57111 13.3811L3.22222 11L9.57111 8.61889L12.1111 1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                          <div className="pl-2">Regenerate Tokens</div></div>
                        {/* <i className="fa-solid fa-arrow-up-from-bracket"></i>   */}
                      </button>
                    </div>
                    {/* <svg
                      width="256"
                      height="54"
                      viewBox="0 0 256 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="256"
                        height="54"
                        rx="27"
                        fill="url(#paint0_linear_2_5773)"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M55.0641 15.5933C55.6059 15.4866 55.9587 14.9608 55.852 14.4189C55.7567 13.9347 55.5436 13.4812 55.2313 13.099C54.919 12.7167 54.5172 12.4175 54.0613 12.2282C53.6053 12.0389 53.1097 11.9656 52.6185 12.0149C52.1273 12.0643 51.6562 12.2346 51.2469 12.5106C50.8376 12.7866 50.5031 13.1596 50.2725 13.596C50.0424 14.0318 49.923 14.5176 49.9247 15.0103V15.0084H50.9247L49.9247 15.0126L49.9247 15.0103V17.0084C49.9247 17.5607 50.3724 18.0084 50.9247 18.0084C51.477 18.0084 51.9247 17.5607 51.9247 17.0084V15.0084V15.0042C51.924 14.8387 51.964 14.6759 52.041 14.5301C52.118 14.3843 52.2295 14.2603 52.3651 14.1688C52.5007 14.0774 52.6564 14.0212 52.8183 14.0049C52.9803 13.9887 53.1438 14.0128 53.2944 14.0753C53.4451 14.1379 53.5785 14.237 53.6824 14.3643C53.7864 14.4916 53.8577 14.6431 53.8897 14.8053C53.9964 15.3472 54.5222 15.7 55.0641 15.5933ZM39.0253 24.4062C38.9186 24.9481 39.2714 25.4739 39.8133 25.5806C40.3552 25.6873 40.8809 25.3345 40.9876 24.7926C41.0196 24.6304 41.0909 24.4789 41.1949 24.3516C41.2989 24.2243 41.4322 24.1252 41.5829 24.0626C41.7335 24.0001 41.897 23.976 42.059 23.9922C42.2209 24.0085 42.3766 24.0647 42.5122 24.1561C42.6479 24.2476 42.7593 24.3716 42.8363 24.5174C42.9133 24.6632 42.9533 24.826 42.9526 24.9915L42.9526 24.9957V40.9957C42.9526 41.548 43.4003 41.9957 43.9526 41.9957C44.5049 41.9957 44.9526 41.548 44.9526 40.9957V24.9975V24.9957H43.9526L44.9526 24.9999L44.9526 24.9975C44.9543 24.5048 44.8349 24.019 44.6048 23.5833C44.3743 23.1469 44.0397 22.7739 43.6304 22.498C43.2212 22.222 42.75 22.0516 42.2588 22.0022C41.7676 21.9529 41.272 22.0262 40.8161 22.2155C40.3602 22.4048 39.9583 22.704 39.646 23.0863C39.3338 23.4685 39.1207 23.922 39.0253 24.4062ZM44.0207 16.9354C43.9495 16.6989 43.9374 16.4484 43.9856 16.206C44.0337 15.9637 44.1405 15.7374 44.2962 15.5469C44.4519 15.3565 44.6516 15.2079 44.8774 15.114C45.1032 15.02 45.3484 14.9834 45.5913 15.0073C45.8343 15.0311 46.068 15.1148 46.2716 15.2511C46.4753 15.3874 46.6428 15.5723 46.7589 15.7897C46.875 16.007 46.9361 16.2498 46.9366 16.4968V40.9957C46.9366 41.548 47.3844 41.9957 47.9366 41.9957C48.4889 41.9957 48.9366 41.548 48.9366 40.9957L48.9366 16.4957L48.9366 16.4939C48.9356 15.9195 48.7936 15.354 48.523 14.8474C48.2524 14.3408 47.8614 13.9085 47.3841 13.5891C46.9069 13.2696 46.3583 13.073 45.7869 13.0168C45.2154 12.9607 44.6391 13.0468 44.1089 13.2675C43.5788 13.4881 43.1114 13.8364 42.7479 14.281C42.3843 14.7256 42.1358 15.253 42.0239 15.8164C41.912 16.3798 41.9401 16.9622 42.1057 17.5121C42.2713 18.0621 42.5695 18.5631 42.9743 18.9705C43.3635 19.3623 43.9967 19.3644 44.3885 18.9751C44.7803 18.5859 44.7824 17.9527 44.3931 17.5609C44.22 17.3866 44.0919 17.1718 44.0207 16.9354ZM51.2685 20.5833C51.0384 21.0191 50.919 21.5049 50.9207 21.9976L50.9207 40.9957C50.9207 41.548 51.3684 41.9957 51.9207 41.9957C52.4729 41.9957 52.9207 41.548 52.9207 40.9957L52.9207 21.9957L52.9206 21.9915C52.92 21.826 52.96 21.6632 53.037 21.5174C53.114 21.3716 53.2254 21.2476 53.3611 21.1561C53.4967 21.0647 53.6524 21.0085 53.8143 20.9922C53.9762 20.976 54.1397 21.0001 54.2904 21.0626C54.4411 21.1252 54.5744 21.2243 54.6784 21.3516C54.7824 21.4789 54.8537 21.6304 54.8857 21.7926C54.9176 21.9549 54.9091 22.1226 54.861 22.2806C54.7002 22.809 54.9981 23.3677 55.5265 23.5285C56.0548 23.6893 56.6135 23.3914 56.7743 22.863C56.918 22.3909 56.9433 21.8905 56.848 21.4062C56.7526 20.922 56.5395 20.4685 56.2273 20.0863C55.915 19.704 55.5131 19.4048 55.0572 19.2155C54.6013 19.0262 54.1057 18.9529 53.6145 19.0022C53.1233 19.0516 52.6521 19.222 52.2428 19.498C51.8336 19.7739 51.499 20.1469 51.2685 20.5833ZM35.003 30.4189C34.8963 30.9608 35.2491 31.4866 35.791 31.5933C36.3329 31.7 36.8586 31.3472 36.9653 30.8053C36.9973 30.6431 37.0686 30.4916 37.1726 30.3643C37.2766 30.237 37.4099 30.1379 37.5606 30.0753C37.7112 30.0128 37.8748 29.9887 38.0367 30.0049C38.1986 30.0212 38.3543 30.0774 38.4899 30.1688C38.6256 30.2603 38.737 30.3843 38.814 30.5301C38.891 30.6759 38.931 30.8387 38.9303 31.0042V31.0084V41.0084C38.9303 41.5607 39.378 42.0084 39.9303 42.0084C40.4826 42.0084 40.9303 41.5607 40.9303 41.0084V31.0103V31.0084H39.9303L40.9303 31.0126L40.9303 31.0103C40.932 30.5176 40.8126 30.0318 40.5825 29.596C40.352 29.1596 40.0174 28.7866 39.6081 28.5106C39.1989 28.2346 38.7277 28.0643 38.2365 28.0149C37.7453 27.9656 37.2497 28.0389 36.7938 28.2282C36.3379 28.4175 35.936 28.7167 35.6237 29.099C35.3115 29.4812 35.0984 29.9347 35.003 30.4189ZM60.0436 29.5933C60.5855 29.4866 60.9383 28.9608 60.8316 28.4189C60.7363 27.9347 60.5232 27.4812 60.2109 27.099C59.8986 26.7167 59.4968 26.4175 59.0409 26.2282C58.5849 26.0389 58.0893 25.9656 57.5981 26.0149C57.1069 26.0643 56.6357 26.2346 56.2265 26.5106C55.8172 26.7866 55.4826 27.1596 55.2521 27.596C55.022 28.0318 54.9026 28.5176 54.9043 29.0103V29.0084H55.9043L54.9043 29.0126L54.9043 29.0103V41.0084C54.9043 41.5607 55.352 42.0084 55.9043 42.0084C56.4566 42.0084 56.9043 41.5607 56.9043 41.0084V29.0084V29.0042C56.9036 28.8387 56.9436 28.6759 57.0206 28.5301C57.0976 28.3843 57.2091 28.2603 57.3447 28.1688C57.4803 28.0774 57.636 28.0212 57.7979 28.0049C57.9599 27.9887 58.1234 28.0128 58.274 28.0753C58.4247 28.1379 58.5581 28.237 58.662 28.3643C58.766 28.4916 58.8373 28.6431 58.8693 28.8053C58.976 29.3472 59.5018 29.7 60.0436 29.5933ZM64.8156 34.4189C64.9223 34.9608 64.5695 35.4866 64.0276 35.5933C63.4857 35.7 62.96 35.3472 62.8533 34.8053C62.8213 34.6431 62.75 34.4916 62.646 34.3643C62.542 34.237 62.4087 34.1379 62.258 34.0753C62.1074 34.0128 61.9438 33.9887 61.7819 34.0049C61.62 34.0212 61.4643 34.0774 61.3287 34.1688C61.193 34.2603 61.0816 34.3843 61.0046 34.5301C60.9276 34.6759 60.8876 34.8387 60.8883 35.0042V35.0084V41.0084C60.8883 41.5607 60.4405 42.0084 59.8883 42.0084C59.336 42.0084 58.8883 41.5607 58.8883 41.0084V35.0103L58.8883 35.0126L59.8883 35.0084H58.8883V35.0103C58.8866 34.5176 59.006 34.0318 59.2361 33.596C59.4666 33.1596 59.8012 32.7866 60.2105 32.5106C60.6197 32.2346 61.0909 32.0643 61.5821 32.0149C62.0733 31.9656 62.5689 32.0389 63.0248 32.2282C63.4807 32.4175 63.8826 32.7167 64.1949 33.099C64.5071 33.4812 64.7202 33.9347 64.8156 34.4189ZM31.019 36.4189C30.9123 36.9608 31.2651 37.4866 31.807 37.5933C32.3489 37.7 32.8747 37.3472 32.9814 36.8053C33.0133 36.6431 33.0846 36.4916 33.1886 36.3643C33.2926 36.237 33.426 36.1379 33.5766 36.0753C33.7273 36.0128 33.8908 35.9887 34.0527 36.0049C34.2146 36.0212 34.3703 36.0774 34.5059 36.1688C34.6416 36.2603 34.753 36.3843 34.83 36.5301C34.907 36.6759 34.9471 36.8387 34.9464 37.0042V37.0084V41.0084C34.9464 41.5607 35.3941 42.0084 35.9464 42.0084C36.4986 42.0084 36.9464 41.5607 36.9464 41.0084L36.9464 37.0103V37.0084H35.9464L36.9464 37.0126L36.9464 37.0103C36.9481 36.5176 36.8287 36.0318 36.5985 35.596C36.368 35.1596 36.0334 34.7866 35.6242 34.5106C35.2149 34.2346 34.7437 34.0643 34.2525 34.0149C33.7613 33.9656 33.2657 34.0389 32.8098 34.2282C32.3539 34.4175 31.952 34.7167 31.6398 35.099C31.3275 35.4812 31.1144 35.9347 31.019 36.4189Z"
                        fill="white"
                      />
                      <path
                        d="M84.0565 35.34C88.5565 35.34 91.3765 32.04 91.3765 27.6C91.3765 23.14 88.5565 19.84 84.0565 19.84C79.5565 19.84 76.7365 23.14 76.7365 27.6C76.7365 32.04 79.5565 35.34 84.0565 35.34ZM84.0765 33C81.1165 33 79.5565 30.68 79.5565 27.6C79.5565 24.5 81.1165 22.12 84.0765 22.12C87.0165 22.12 88.5365 24.5 88.5365 27.6C88.5365 30.68 87.0165 33 84.0765 33ZM98.207 35.32C101.067 35.32 102.887 33.6 103.047 31.12H100.567C100.427 32.52 99.587 33.34 98.187 33.34C96.327 33.34 95.367 31.78 95.367 29.68C95.367 27.52 96.327 25.98 98.187 25.98C99.467 25.98 100.267 26.72 100.507 27.88H102.987C102.607 25.58 100.887 24.04 98.167 24.04C94.887 24.04 92.787 26.5 92.787 29.68C92.787 32.84 94.907 35.32 98.207 35.32ZM104.074 26.06H105.714V32.6C105.714 34.48 106.894 35.1 108.614 35.1C109.294 35.1 109.874 35.02 110.294 34.94V32.96H110.174C109.974 33 109.614 33.04 109.354 33.04C108.634 33.04 108.214 32.82 108.214 32.04V26.06H110.354V24.32H108.214V20.92H105.714V24.32H104.074V26.06ZM117.056 35.32C120.376 35.32 122.476 32.84 122.476 29.68C122.476 26.5 120.376 24.04 117.056 24.04C113.736 24.04 111.596 26.5 111.596 29.68C111.596 32.84 113.736 35.32 117.056 35.32ZM117.036 33.4C115.156 33.4 114.176 31.82 114.176 29.68C114.176 27.52 115.156 25.92 117.036 25.92C118.896 25.92 119.896 27.52 119.896 29.68C119.896 31.82 118.896 33.4 117.036 33.4ZM128.544 35.34C131.184 35.34 133.104 34.16 133.104 31.92C133.104 29.32 131.104 28.84 129.084 28.46C127.464 28.16 126.364 27.98 126.364 27.04C126.364 26.3 126.984 25.76 128.164 25.76C129.424 25.76 130.104 26.26 130.284 27.18H132.704C132.444 25.32 131.024 24.04 128.184 24.04C125.684 24.04 123.964 25.2 123.964 27.22C123.964 29.64 125.864 30.1 127.864 30.5C129.544 30.82 130.624 31.02 130.624 32.08C130.624 32.94 129.964 33.54 128.564 33.54C127.204 33.54 126.224 33 126.024 31.72H123.584C123.744 33.88 125.504 35.34 128.544 35.34ZM137.034 35H139.474L140.854 29.92C141.134 28.8 141.534 26.78 141.534 26.78H141.574C141.574 26.78 141.954 28.8 142.234 29.92L143.574 35H146.014L149.414 24.32H146.854L145.434 29.3C145.054 30.6 144.754 32.54 144.754 32.54H144.714C144.714 32.54 144.354 30.52 144.034 29.3L142.674 24.32H140.434L139.114 29.3C138.754 30.58 138.414 32.52 138.414 32.52H138.374C138.374 32.52 138.054 30.54 137.714 29.3L136.334 24.32H133.694L137.034 35ZM155.356 35.32C157.976 35.32 159.696 33.9 160.216 31.98H157.736C157.396 32.86 156.596 33.38 155.376 33.38C153.596 33.38 152.616 32.14 152.436 30.3H160.416C160.436 28.32 159.936 26.64 158.896 25.54C157.996 24.58 156.776 24.04 155.216 24.04C152.056 24.04 149.916 26.5 149.916 29.68C149.916 32.84 151.956 35.32 155.356 35.32ZM155.216 25.88C156.756 25.88 157.696 26.94 157.796 28.7H152.476C152.696 27.02 153.556 25.88 155.216 25.88ZM167.094 35.32C169.714 35.32 171.434 33.9 171.954 31.98H169.474C169.134 32.86 168.334 33.38 167.114 33.38C165.334 33.38 164.354 32.14 164.174 30.3H172.154C172.174 28.32 171.674 26.64 170.634 25.54C169.734 24.58 168.514 24.04 166.954 24.04C163.794 24.04 161.654 26.5 161.654 29.68C161.654 32.84 163.694 35.32 167.094 35.32ZM166.954 25.88C168.494 25.88 169.434 26.94 169.534 28.7H164.214C164.434 27.02 165.294 25.88 166.954 25.88ZM173.932 38.58H176.472V35.72C176.472 34.72 176.432 34.04 176.392 33.64H176.452C177.112 34.72 178.272 35.34 179.692 35.34C182.572 35.34 184.372 33.12 184.372 29.68C184.372 26.28 182.552 24.04 179.772 24.04C178.272 24.04 177.212 24.68 176.452 25.9H176.392V24.32H173.932V38.58ZM179.212 33.32C177.252 33.32 176.372 31.76 176.372 29.74C176.372 27.72 177.272 26.1 179.192 26.1C180.932 26.1 181.792 27.62 181.792 29.74C181.792 31.84 180.892 33.32 179.212 33.32Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2_5773"
                          x1="-17.4498"
                          y1="1.3548e-06"
                          x2="190.126"
                          y2="130.418"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#7B61FF" />
                          <stop offset="1" stop-color="#00DAD9" />
                        </linearGradient>
                      </defs>
                    </svg> */}
                  </div>
                  <div className="font-semibold text-lg mt-4">Filters</div>
                  {dropData.map((i, d) => (
                    <div className="  pt-5 " key={i.id}>
                      <button
                        id="dropdownDefault"
                        data-dropdown-toggle="dropdown"
                        className={`text-[#6549F6] w-full border-2 border-[#6549F6]${show === d
                          ? " dropdown-gradient-1  bg-gradient-to-r from-[#7B61FF] to-[#00DAD9] "
                          : ""
                          } bg-white  font-medium  rounded-t-lg text-lg px-4 py-2.5 text-center inline-flex items-center  place-content-between  `}
                        type="button"
                        onClick={() => {
                          handleDrop(d);
                        }}
                      // className={` ${show === d ? "bg-white text-[#6549F6]  border-2 border-[#6549F6] " : "  bg-gradient-to-r from-[#7B61FF] to-[#00DAD9] text-white "} itemcount  font-medium rounded-t-lg text-lg px-4 py-2.5 text-center inline-flex items-center  place-content-between `}
                      >
                        {/* */}
                        <div
                          className={` ${show === d ? "text-white" : ""
                            } itemcount `}
                        >
                          {i.name}
                        </div>

                        <svg
                          className=" w-4 h-4 "
                          aria-hidden="true"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      {/* //  */}
                      <div
                        id={d}
                        className={` ${show === d ? "block dropdown-gradient-1" : "hidden"
                          } z-10 w-full bg-white text-[#6549F6]  border-2 border-[#6549F6] `}
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="bottom"
                      >
                        {/* <div className="flex justify-between pt-2">
                          <div className="pl-5 flex text-[#000000] text-sm font-medium">

                            Name
                            <img
                              src="/images/down-arrow.png"
                              className="w-5 h-5 pt-1 pl-1"
                            ></img>
                          </div>
                          <div className=" flex text-[#000000] text-sm font-medium pl-8">
                            {" "}
                            Quanity
                            <img
                              src="/images/down-arrow.png"
                              className="w-5 h-5 pt-1 pl-1"
                            ></img>
                          </div>
                          <div className=" flex text-[#000000] text-sm font-medium pr-5">
                            {" "}
                            Percentage
                            <img
                              src="/images/down-arrow.png"
                              className="w-5 h-5 pt-1 pl-1"
                            ></img>
                          </div>
                        </div> */}

                        <ul
                          className={`py-1 font-normal text-base text-black }`}
                          aria-labelledby="dropdownDefault"
                        >
                          {backcolor.map((i, d) => (
                            <li className="flex justify-between pt-2 " key={i.id}>
                              <a href="#" className="block pl-5 flex ">
                                <div
                                  className={`w-5 h-5 ${i.backcolor}  border-2`}
                                ></div>
                                <div className="pl-5 hover:text-[#6549F6]">
                                  {i.Title}
                                </div>
                              </a>
                              <a href="#" className="block hover:text-[#6549F6] ">
                                863
                              </a>
                              <a
                                href="#"
                                className="block pr-16 hover:text-[#6549F6]"
                              >
                                8.7%
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 ">
              {nft.map((i) => {
                return (
                  <div
                    className="border-[1px] rounded-md border-black h-44 w-40"
                    key={i.id}
                  >
                    <img
                      src={i.image}
                      alt=""
                      className="h-36 w-40"
                      onClick={() => setOpenModal(true)}
                    />
                    <div className="">{i.number}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div >

      {openModal && <NftDetails closeModal={setOpenModal} />}
    </>
  );
};

export default Preview;
