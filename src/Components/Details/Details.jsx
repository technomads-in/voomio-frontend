import React from 'react'

const Details = () => {
   return (
      <div className='mt-2'>
         {/* first line */}
         <div className='flex gap-6'>
            <div className='flex gap-2'>
               <img src="images/refresh.png" alt="" className='h-5 w-4' />
               <div className='font-normal leading-5'>19,424 Items</div>
            </div>

            <div className='font-medium text-xl text-[#6549F6]'>Filters</div>
            <div className='flex bg-[#6549F6] text-white gap-3 px-4 py-1 items-center rounded-2xl'>
               <div>Selection</div>
               <div><i class="fa-solid fa-xmark"></i></div>
            </div>
            <div className='flex bg-[#6549F6] text-white gap-3 px-4 py-1 items-center rounded-2xl'>
               <div>Selection</div>
               <div><i class="fa-solid fa-xmark"></i></div>
            </div>
            <div className='flex bg-[#6549F6] text-white gap-3 px-4 py-1 items-center rounded-2xl'>
               <div>Selection</div>
               <div><i class="fa-solid fa-xmark"></i></div>
            </div>
         </div>

         {/* second line */}
         <div className='flex gap-2 items-center mt-8'>

            <div>
               <div className='flex items-center justify-between text-[#6549F6] border-2 border-[#6549F6] rounded-md pl-1 py-1 w-36'>
                  <div className=''>Marketplace</div>
                  <div><i className="fa-solid fa-chevron-down pr-2"></i></div>
               </div>
            </div>

            <div className='flex gap-2 h-10 items-center'>
               <div className='text-[#6549F6] font-medium'>Price</div>
               <div className='flex'>
                  <input type="number" name="" id="" placeholder='Min' className='border-2 border-[#6549F6] w-16 h-9 rounded-md text-sm text-center' />
               </div>
               <div className='text-[#6549F6] font-medium'>To</div>
               <div className='flex'>
                  <input type="number" name="" id="" placeholder='Max' className='border-2 border-[#6549F6] w-16 h-9 rounded-md text-sm text-center' />
               </div>
            </div>

            <div className='flex items-center justify-between text-[#6549F6] border-2 border-[#6549F6] rounded-md pl-1 py-1 w-36'>
               <div className=''>Rarity</div>
               <div><i className="fa-solid fa-chevron-down pr-2"></i></div>
            </div>

         </div>

         {/* third line */}

         <div className='flex gap-5 mt-5'>
            <div className='font-medium text-xl text-[#6549F6]'>Traits</div>
            <div className='flex text-[#6549F6] bg-[#F4EEFF] gap-3 px-4 py-1 items-center rounded-lg'>
               <div>Trait</div>
               <div><i class="fa-solid fa-xmark"></i></div>
            </div>
            <div className='flex text-[#6549F6] bg-[#F4EEFF] gap-3 px-4 py-1 items-center rounded-lg'>
               <div>Trait</div>
               <div><i class="fa-solid fa-xmark"></i></div>
            </div>
            <div className='flex text-[#6549F6] bg-[#F4EEFF] gap-3 px-4 py-1 items-center rounded-lg'>
               <div>Trait</div>
               <div><i class="fa-solid fa-xmark"></i></div>
            </div>
         </div>

         {/* boxes */}

         <div className='flex justify-center gap-5 overflow-x-autogit '>
            <div className='border-2 box-border border-[#6549F6] rounded-md mt-3 max-w-[200px]'>
               <div className='ml-1'>
                  <div className='mt-3'>
                     <input type="text" className='caret-[#6549F6]' placeholder='Search Fur' name="" id="" />
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3 mb-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='border-2 box-border border-[#6549F6] rounded-md mt-3 max-w-[200px]'>
               <div className='ml-1'>
                  <div className='mt-3'>
                     <input type="text" className='caret-[#6549F6]' placeholder='Search Fur' name="" id="" />
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3 mb-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='border-2 box-border border-[#6549F6] rounded-md mt-3 max-w-[200px]'>
               <div className='ml-1'>
                  <div className='mt-3'>
                     <input type="text" className='caret-[#6549F6]' placeholder='Search Fur' name="" id="" />
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3 mb-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='border-2 box-border border-[#6549F6] rounded-md mt-3 max-w-[200px]'>
               <div className='ml-1'>
                  <div className='mt-3'>
                     <input type="text" className='caret-[#6549F6]' placeholder='Search Fur' name="" id="" />
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3 mb-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='border-2 box-border border-[#6549F6] rounded-md mt-3 max-w-[200px]'>
               <div className='ml-1'>
                  <div className='mt-3'>
                     <input type="text" className='caret-[#6549F6]' placeholder='Search Fur' name="" id="" />
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3 mb-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='border-2 box-border border-[#6549F6] rounded-md mt-3 max-w-[200px]'>
               <div className='ml-1'>
                  <div className='mt-3'>
                     <input type="text" className='caret-[#6549F6]' placeholder='Search Fur' name="" id="" />
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
                  <div className='flex gap-1 items-center mt-3 mb-3'>
                     <input type="checkbox" className='accent-[#6549F6] ' name="" id="" />
                     <div className='flex '>
                        <div className='font-medium pr-1 text-sm'>M1 dark br..</div>
                     </div>
                     <div className='flex '>
                        <div className='text-xs text-[#909090]'>1981 (10.20%)</div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Details