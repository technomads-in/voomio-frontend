import './Generate.css'
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Generate = () => {
   // upload image
   const [selectedImage, setSelectedImage] = useState();
   //   new upload
   function handleFile(files) {
      console.log("Number of files: " + files.length);
   }
   const [dragActive, setDragActive] = useState(false);
   // ref
   const inputRef = useRef(null);

   // handle drag events
   const handleDrag = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
         setDragActive(true);
      } else if (e.type === "dragleave") {
         setDragActive(false);
      }
   };

   // triggers when file is dropped
   const handleDrop = function (e) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
         handleFile(e.dataTransfer.files);
         setSelectedImage(e.target.files[0]);
      }
   };

   // triggers when file is selected with click
   const handleChange = function (e) {
      e.preventDefault();
      if (e.target.files && e.target.files.length > 0) {
         handleFile(e.target.files);
         setSelectedImage(e.target.files[0]);
      }
   };

   // triggers the input when the button is clicked
   const onButtonClick = () => {
      inputRef.current.click();
   };

   const order = [
      {
         id: 1,
         name: 'Body - Lorem'
      },
      {
         id: 2,
         name: 'Clothes - Lorem'
      },
      {
         id: 3,
         name: 'Color Background'
      },
      {
         id: 4,
         name: 'Eyes'
      },
      {
         id: 5,
         name: 'Hair'
      },
      {
         id: 6,
         name: 'Mouth'
      },
      {
         id: 7,
         name: 'Texture'
      },
   ]

   const openLayers = () => {

      document.getElementById("general-section").classList.toggle("hidden")
      document.getElementById("layers-section").classList.toggle('hidden')
      document.getElementById("heading").textContent = 'Layers'
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }

   const [ruleValues, setRuleValues] = useState([
      {
         component: '',
         rule: '',
         component2: '',
      }
   ])


   const handleNewRules = () => {
      setRuleValues([...ruleValues,
      {
         price: '',
         reference_id: '',
         validity: '',
      }
      ]);
   };

   const handleRuleChange = (e, index) => {
      let clone = [...ruleValues];
      let obj = clone[index];
      clone[index] = obj;
      setRuleValues([...ruleValues]);
   };

   const rules = [
      {
         id: 1,
         name: 'Select a component',
      },
      {
         id: 2,
         name: 'Select a Rule',
      },
      {
         id: 3,
         name: 'Select a component',
      },
   ]

   const addBtn = (e) => {
      e.preventDefault()
      const ele = document.getElementById('rule')
      console.log(ele.value)
   }


   return (

      <>

         <div className=''>
            <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 min-h-screen">
               <div className=" text-5xl font-bold text-[#222222]">NFT Generator</div>
               <div className="flex items-center justify-between">
                  <div>
                     <div className="text-[#250C50] pt-6 text-lg titleFont">
                        Current NFT
                     </div>
                     <div className="text-[#6549F6]  text-lg pb-16 titleFont">
                        Single-item
                     </div>
                  </div>
                  <div className="flex items-center gap-10">
                     <div className="opacity-50 flex flex-col justify-center items-center">
                        <img src="/images/upload.svg" alt="" />
                        <p className="text-[#6549F6]  text-lg  titleFont ">Upload</p>
                     </div>
                     <div className='flex flex-col justify-center items-center opacity-50'>
                        <img src="/images/EyeOutline.svg" alt="" />
                        <p className="text-[#6549F6]  text-lg  titleFont ">Preview</p>
                     </div>

                     <div className="flex flex-col items-center opacity-50">
                        <img src="/images/CogOutline.svg" alt="" />
                        <p className="text-[#6549F6]  text-lg titleFont ">Manage</p>
                     </div>
                     <div className="flex flex-col items-center opacity-50">
                        <img src="/images/star.png" alt="" className="" />
                        <p className="text-[#6549F6]  text-lg  titleFont ">Generate</p>
                        {/* <img src="/images/path.svg" alt="" /> */}
                     </div>


                  </div>
               </div>

               <div className='flex gap-8 ml-[132px]'>
                  <div></div>
                  <div className='flex gap-10 font-semibold text-2xl'>
                     <div className="text-[#6549F6]">
                        <div id='heading'>General</div>
                     </div>
                  </div>
               </div>

               <div className='flex mt-20 gap-8'>
                  <div className='flex gap-24'>
                     <div className="flex justify-between  flex-wrap">
                        <div>
                           <div className="text-[#250C50] font-medium text-lg pb-5  cursor-pointer titleFont">
                              Settings
                           </div>
                           <div className=" pb-5">
                              <Link
                                 to="/general"
                                 className="text-[#6549F6] font-medium text-base titleFont cursor-pointer"
                              >
                                 General
                              </Link>
                           </div>
                           <div className=" pb-5">
                              <Link
                                 to="/general"
                                 className="text-[#6549F6] font-medium text-base titleFont cursor-pointer"
                              >
                                 Layers
                              </Link>
                           </div>
                           <div className=" pb-5">
                              <Link
                                 to="/general"
                                 className="text-[#6549F6] font-medium text-base titleFont cursor-pointer"
                              >
                                 Rules
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* General */}

                  <div className="ml-14" >
                     <div id='general-section'>
                        <div className="flex gap-4">
                           <div>
                              {/* <img src="/images/gallery.png" alt="" className="w-24 h-24" /> */}
                              <svg width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <circle cx="60.5" cy="60.5" r="60.5" fill="#F4EEFF" />
                                 <circle cx="60.5007" cy="60.5" r="50.8571" stroke="#7B61FF" stroke-width="2" stroke-dasharray="6 6" />
                                 <path d="M47 68L55.0255 59.9745C55.6818 59.3184 56.5719 58.9497 57.5 58.9497C58.4281 58.9497 59.3182 59.3184 59.9745 59.9745L68 68H47ZM64.5 64.5L67.2755 61.7245C67.9318 61.0684 68.8219 60.6997 69.75 60.6997C70.6781 60.6997 71.5682 61.0684 72.2245 61.7245L75 64.5H64.5ZM64.5 54H64.5175H64.5ZM50.5 75H71.5C72.4283 75 73.3185 74.6313 73.9749 73.9749C74.6313 73.3185 75 72.4283 75 71.5V50.5C75 49.5717 74.6313 48.6815 73.9749 48.0251C73.3185 47.3687 72.4283 47 71.5 47H50.5C49.5717 47 48.6815 47.3687 48.0251 48.0251C47.3687 48.6815 47 49.5717 47 50.5V71.5C47 72.4283 47.3687 73.3185 48.0251 73.9749C48.6815 74.6313 49.5717 75 50.5 75Z" stroke="#7B61FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>

                           </div>

                           <div className='flex justify-center flex-col gap-3'>
                              <div className='font-normal'>Collection Logo</div>
                              <div className="flex justify-center">
                                 <form
                                    id="form-file-upload"
                                    onDragEnter={handleDrag}
                                    onSubmit={(e) => e.preventDefault()}
                                 >
                                    <input
                                       accept="image/*"
                                       ref={inputRef}
                                       type="file"
                                       id="input-file-upload"
                                       multiple={true}
                                       onChange={handleChange}
                                    />
                                    {selectedImage ? (
                                       <label id="label-file-upload" htmlFor="input-file-upload">
                                          <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                                       </label>
                                    ) : (
                                       <label

                                          className={dragActive ? "drag-active" : ""}
                                       >
                                          <div className='uploadBackground w-40 flex justify-center items-center rounded-2xl gap-1 py-1'>
                                             {/* <img src="/images/UploadOutline.png" alt="" className='h-5 w-5' />
                                              */}
                                             <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.9995 7.00031V19.0003M6.99945 15.0003C5.75241 15.0011 4.55007 14.5359 3.62834 13.696C2.7066 12.8561 2.13201 11.702 2.0173 10.4602C1.90259 9.21848 2.25605 7.97868 3.00832 6.98409C3.76059 5.98951 4.85736 5.31193 6.08345 5.08431C6.29881 3.93798 6.908 2.90295 7.80568 2.15821C8.70335 1.41347 9.83307 1.00586 10.9995 1.00586C12.1658 1.00586 13.2956 1.41347 14.1932 2.15821C15.0909 2.90295 15.7001 3.93798 15.9155 5.08431C17.1374 5.31656 18.2291 5.99578 18.9773 6.98942C19.7255 7.98307 20.0767 9.21986 19.9623 10.4584C19.8479 11.697 19.2761 12.8486 18.3585 13.6883C17.4409 14.5281 16.2433 14.9958 14.9995 15.0003H6.99945ZM7.99945 10.0003L10.9995 7.00031L7.99945 10.0003ZM10.9995 7.00031L13.9995 10.0003L10.9995 7.00031Z" stroke="#8551E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                             </svg>

                                             <button className="upload-button text-[#8551E6] decoration-0 font-medium" onClick={onButtonClick} >
                                                Upload
                                             </button>
                                          </div>
                                       </label>
                                    )}
                                    {dragActive && (
                                       <div
                                          id="drag-file-element"
                                          onDragEnter={handleDrag}
                                          onDragLeave={handleDrag}
                                          onDragOver={handleDrag}
                                          onDrop={handleDrop}
                                       ></div>
                                    )}
                                 </form>
                              </div>
                           </div>
                        </div>
                        {/* Form Details */}
                        <div className='mt-8'>
                           <div className='mt-8'>
                              <div className='font-normal text-base text-[#333333]'>Collection Name</div>
                              <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl'>
                                 <input type="text" placeholder='My new collection' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                              </div>
                           </div>

                           <div className='mt-8'>
                              <div className='font-normal text-base text-[#333333]'>Token Count</div>
                              <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl'>
                                 <input type="text" placeholder='Number' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                              </div>
                           </div>

                           <div className='mt-8'>
                              <div className='font-normal text-base text-[#333333]'>Description</div>
                              <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl'>
                                 <textarea type="text" rows="6" cols="47" placeholder='A short description' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4 outline-none overflow-hidden'></textarea>
                              </div>
                           </div>

                           <div className='mt-8'>
                              <div className='font-normal text-base text-[#333333]'>Website</div>
                              <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl'>
                                 <input type="text" placeholder='https://' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                              </div>
                           </div>

                           <div className='mt-8'>
                              <div className='font-normal text-base text-[#333333]'>Token Name</div>
                              <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl '>
                                 <input type="text" placeholder='Token {{id}}' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                              </div>
                           </div>

                           <div className='mt-8 flex gap-2'>
                              <div>
                                 <div className='font-normal text-base text-[#333333]'>Payout wallet</div>
                                 <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl '>
                                    <input type="text" placeholder='0x000..' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                                 </div>
                              </div>

                              <div>
                                 <div className='font-normal text-base text-[#333333]'>Royalty Percentage</div>
                                 <div className='border-[#6549F6] border-2 mt-2 py-3 rounded-xl '>
                                    <input type="text" placeholder='%' className='placeholder:text-[#B5B5B5] placeholder:text-lg pl-4' />
                                 </div>
                              </div>

                           </div>

                           <div className='mt-4 flex gap-1 justify-center items-center text-[#8551E6] uploadBackground rounded-3xl w-28 py-2 px-2 cursor-pointer' onClick={openLayers}>
                              <i className="fa-solid fa-plus"></i>
                              <div>Add</div>
                           </div>

                        </div>
                     </div>


                     {/* Layers */}


                     <div id='layers-section' className='hidden'>
                        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start gap-20">
                           {/* col-1 */}
                           <div className="flex flex-col gap-3">
                              <div className="text-2xl font-bold">Preview</div>
                              <div>
                                 <img src="/monkeysimages/mrmonkey.png" alt="" className="h-64 w-64" />
                              </div>
                              <div className="bg-[#6549F6] rounded-lg text-white flex items-center justify-center font-medium text-lg py-3">
                                 <div >Shuffle Order
                                    <i className="fa-solid fa-shuffle pl-3 " ></i>
                                 </div>
                              </div>
                           </div>

                           {/* col-2 */}
                           <div>
                              <div className="flex flex-col gap-3">
                                 <div className="text-2xl font-bold">Attributes Order</div>
                                 {order.map((i) =>
                                    <div className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-4 px-4 w-64 border-box" key={i.id}>
                                       <div >{i.name} </div>
                                       <div>
                                          <img src="/images/sort.png" alt="" className="h-2 w-4" />
                                       </div>
                                    </div>
                                 )}
                              </div>

                           </div>


                        </div>
                     </div>


                     {/* Rules */}

                     {/* <div>
                        <div className='text-2xl font-bold'>Create a rule</div>

                        <div className="flex gap-3 mt-4 items-center">
                           {rules.map((rule, i) =>

                              <div id='rule' >
                                 <div className='addClass'>
                                    <div className="flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-4 px-4 w-64 border-box" onClick={addBtn} key={i.id}>
                                       <div>Select a component</div>
                                       <div>
                                          <i class="fa-solid fa-chevron-down"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                           )}
                           <div className='flex gap-1 justify-center items-center text-[#8551E6] uploadBackground rounded-3xl w-28 py-2 px-2 cursor-pointer'>
                              <i className="fa-solid fa-plus"></i>
                              <div>Add</div>
                           </div>
                        </div>
                     </div> */}
                  </div>

               </div>


            </div>
         </div >
      </>
   )
}

export default Generate
