import React, { useRef, useState, useEffect } from 'react';
import Wave from 'react-wavify';
import './UploadNft.css';
import { Link, useNavigate } from 'react-router-dom';

const UploadNft = () => {
	// upload image
	const [selectedImage, setSelectedImage] = useState();
	//   new upload
	function handleFile(files) {
		console.log('Number of files: ' + files.length);
	}
	const [dragActive, setDragActive] = useState(false);
	// ref
	const inputRef = useRef(null);

	// handle drag events
	const handleDrag = function (e) {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
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

	const handleSort = (e) => {
		const element = document.getElementById('sort-layers');
		element.classList.remove('text-[#6549F6]');
		element.classList.add(`bg-[#6549F6]`);
		element.classList.add(`text-white`);
		document.getElementById('sort-img').src = '/images/sort(1).png';
		let showHide = document.getElementById('showHidden');
		showHide.style.display = 'block';

		const elem = document.getElementById('showOnClick');
		elem.classList.toggle('hide');
	};

	const order = [
		{
			id: 1,
			name: 'Body - Lorem',
		},
		{
			id: 2,
			name: 'Clothes - Lorem',
		},
		{
			id: 3,
			name: 'Color Background',
		},
		{
			id: 4,
			name: 'Eyes',
		},
		{
			id: 5,
			name: 'Hair',
		},
		{
			id: 6,
			name: 'Mouth',
		},
		{
			id: 7,
			name: 'Texture',
		},
	];

	const navigate = useNavigate();

	const goToPreview = () => {
		navigate('/preview');
	};

	return (
		<>
			<div className='container max-w-7xl mx-auto px-8 md:px-20 pt-20 min-h-screen'>
				<div className=' text-5xl font-bold text-[#222222]'>NFT Generator</div>
				<div className='flex items-center justify-between'>
					<div>
						<div className='text-[#250C50] pt-6 text-lg '>Current NFT</div>
						<div className='text-[#6549F6]  text-lg pb-16 titleFont'>Single-item</div>
					</div>
					<div className="flex items-center gap-10  ">
						<div className="flex flex-col justify-center items-center ">
							<img src="/images/upload.svg" alt="" className="h-10 w-10" />
							<div className="titleFont text-[#7B61FF] titleFont">Upload</div>
							<img src="/images/path.svg" alt="" className="h-5 " />
						</div>
						<div className="flex flex-col justify-center items-center opacity-20">
							<img
								src="/images/EyeOutline.svg"
								alt=""
								className="h-10 w-10"
							/>
							<div className="titleFont text-[#7B61FF]">Preview</div>
						</div>
						<div className="flex flex-col justify-center items-center opacity-20">
							<img
								src="/images/CogOutline.svg"
								alt=""
								className="h-10 w-10"
							/>
							<div className="titleFont text-[#7B61FF] ">Manage</div>
						</div>
						<div className="flex flex-col justify-center items-center opacity-20">
							<img src="/images/star.png" alt="" className="h-10 w-10" />
							<div className="titleFont text-[#7B61FF]">Generate</div>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-between mt-40 flex-wrap'>
					<div className="pb-5 pt-10 ">
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

					<div className=''>
						{/* new */}
						<div className='flex justify-center'>
							<form
								id='form-file-upload'
								onDragEnter={handleDrag}
								onSubmit={(e) => e.preventDefault()}
							>
								<input
									accept='image/*'
									ref={inputRef}
									type='file'
									id='input-file-upload'
									multiple={true}
									onChange={handleChange}
								/>
								{selectedImage ? (
									<label id='label-file-upload' htmlFor='input-file-upload'>
										<img src={URL.createObjectURL(selectedImage)} alt='Thumb' />
									</label>
								) : (
									<label
										id='label-file-upload'
										htmlFor='input-file-upload'
										className={dragActive ? 'drag-active' : ''}
									>
										<div>
											<p>Drag and drop or browse to choose your</p>
											<p>collection folder</p>
											<div className='mt-4 font-medium'>
												<button
													className='rounded-3xl bg-[#7B61FF] text-white w-36 py-2'
													onClick={onButtonClick}
												>
													Choose Files...
												</button>
											</div>
										</div>
									</label>
								)}
								{dragActive && (
									<div
										id='drag-file-element'
										onDragEnter={handleDrag}
										onDragLeave={handleDrag}
										onDragOver={handleDrag}
										onDrop={handleDrop}
									></div>
								)}
							</form>
						</div>

						<div id='wave' className='flex flex-col items-center'>
							<div className='font-extrabold text-3xl text-[#D6C3FA]'>Uploading...</div>
							<Wave mask='url(#mask)' fill='#D6C3FA' speed={0.4}>
								<defs>
									<linearGradient id='gradient' gradientTransform='rotate(90)'>
										<stop offset='0' stopColor='#7B61FF' />
										<stop offset='0.7' stopColor='#00DAD9' />
									</linearGradient>
									<mask id='mask'>
										<rect x='0' y='0' width='2000' height='200' fill='url(#gradient)' />
									</mask>
								</defs>
							</Wave>
						</div>

						<div className='flex justify-center'>
							<div className='border-[#6549F6] border-4 rounded-2xl xl:w-[1000px] flex flex-col items-center justify-center py-10'>
								<form
									id='form-file-upload'
									onDragEnter={handleDrag}
									onSubmit={(e) => e.preventDefault()}
								>
									<div>
										<div className='flex justify-center items-center mt-3'>
											<i className='fa-solid fa-circle-check fa-4x text-[#87FDDD] zoom-in-zoom-out'></i>
										</div>
										<div className='font-semibold text-2xl'>Success!</div>
										<div className='text-[#999999] font-normal text-base'>
											Your upload has completed.
										</div>
									</div>

									<div>
										<div className='flex justify-center gap-3 mt-3 px-3'>
											<div className='flex items-center justify-center border-[#6549F6] text-[#6549F6] border-2 w-24 rounded-md xl:w-36 font-medium text-base h-12 box-border px-4'>
												<div className=''>Upload More</div>
											</div>

											<div
												className='flex items-center justify-center border-[#6549F6] text-[#6549F6] border-2 rounded-md xl:w-36 font-medium text-base h-12 gap-2 cursor-pointer'
												id='sort-layers'
											>
												<div onClick={handleSort}>Sort Layers</div>
												<div>
													<img src='/images/sort.png' id='sort-img' alt='' className='h-2 w-3' />
												</div>
											</div>
										</div>
									</div>

									{/* preview and Attributes-order */}
								</form>
								<div id='showOnClick' className='show'>
									<div id='showHidden' className='hidden'>
										<div className='grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start gap-20 mt-20 neueHaasGrotesk'>
											{/* col-1 */}
											<div className='flex flex-col gap-3'>
												<div className='text-2xl font-bold'>Preview</div>
												<div>
													<img src='/monkeysimages/mrmonkey.png' alt='' className='h-64 w-64' />
												</div>
												<div className='bg-[#6549F6] rounded-lg text-white flex items-center justify-center font-medium text-lg py-3'>
													<div>
														Shuffle Order
														<i className='fa-solid fa-shuffle pl-3 '></i>
													</div>
												</div>
											</div>

											{/* col-2 */}
											<div>
												<div className='flex flex-col gap-3'>
													<div className='text-2xl font-bold'>Attributes Order</div>
													{order.map((i) => (
														<div
															className='flex items-center justify-between border-[#6549F6] text-[#6549F6] border-2 rounded-md font-medium text-base h-12 gap-4 px-4 w-64 border-box'
															key={i.id}
														>
															<div>{i.name} </div>
															<div>
																<svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path fill-rule="evenodd" clip-rule="evenodd" d="M0.599609 1.4002C0.599609 1.08194 0.726038 0.776711 0.951081 0.551667C1.17612 0.326624 1.48135 0.200195 1.79961 0.200195H16.1996C16.5179 0.200195 16.8231 0.326624 17.0481 0.551667C17.2732 0.776711 17.3996 1.08194 17.3996 1.4002C17.3996 1.71846 17.2732 2.02368 17.0481 2.24872C16.8231 2.47377 16.5179 2.6002 16.1996 2.6002H1.79961C1.48135 2.6002 1.17612 2.47377 0.951081 2.24872C0.726038 2.02368 0.599609 1.71846 0.599609 1.4002ZM0.599609 8.6002C0.599609 8.28194 0.726038 7.97671 0.951081 7.75167C1.17612 7.52662 1.48135 7.4002 1.79961 7.4002H16.1996C16.5179 7.4002 16.8231 7.52662 17.0481 7.75167C17.2732 7.97671 17.3996 8.28194 17.3996 8.6002C17.3996 8.91846 17.2732 9.22368 17.0481 9.44872C16.8231 9.67377 16.5179 9.8002 16.1996 9.8002H1.79961C1.48135 9.8002 1.17612 9.67377 0.951081 9.44872C0.726038 9.22368 0.599609 8.91846 0.599609 8.6002Z" fill="#6549F6" />
																</svg>

															</div>
														</div>
													))}
												</div>
											</div>
										</div>
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

export default UploadNft;
