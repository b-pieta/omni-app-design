import React, { useState } from 'react';
import axios from 'axios';
import styles from '../style';
import { robot } from '../assets';

const Hero = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState(null);

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8080/subscribe', { email });
			setMessage(response.data.message);
			setEmail('');
		} catch (error) {
			console.error('Error submitting email:', error);
			setMessage('An error occurred while submitting your email.');
		}
	};
	return (
		<section
			id='home'
			className={`flex md:flex-row flex-col ${styles.paddingY}`}
		>
			<div className={` flex flex-col justify-center xl:px-0 sm:px-16 px-6`}>
				<div className='flex flex-row'>
					<h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[90px]'>
						Innovative <br className='sm:block hidden' />{' '}
						<span className='text-gradient'>OmniAI</span>{' '}
					</h1>
					<div className='ss:flex hidden md:mr-4 mr-0'>
					</div>
				</div>

				<h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
					<span className='text-gradient'>Virtual Assistant</span>{' '}
				</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Groundbreaking artificial intelligence-powered tool designed to
					enhance productivity, streamline tasks, and revolutionize the way we
					interact with technology.
				</p>
				<form className='mt-8 flex' onSubmit={handleSubmit}>
					<input
						type='email'
						value={email}
						onChange={handleChange}
						placeholder='Enter your email'
						className='rounded-lg px-8 py-2 mr-2 w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-300'
					/>
					<button
						type='submit'
						className='bg-blue-500 text-white py-4 w-40 rounded-lg'
					>
						Subscribe
					</button>
				</form>
			</div>

			<div
				className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
			>
				<img
					src={robot}
					alt='billing'
					className='w-[100%] h-[100%] relative z-[5]'
				/>

				{/* gradient start */}
				<div className='absolute z-[0] w-[40%] h-[35%] top-0 blueViolet__gradient1' />
				<div className='absolute z-[1] w-[80%] h-[80%] rounded-full blueViolet__gradient2' />
				<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blueViolet__gradient3' />
				{/* gradient end */}
			</div>

			<div className={`ss:hidden ${styles.flexCenter}`}>
			</div>
		</section>
	);
};

export default Hero;
