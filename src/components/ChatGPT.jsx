import React, { useState } from 'react';
import axios from 'axios';
import styles from '../style';

const ChatGPT = () => {
	const [prompt, setPrompt] = useState('');
	const [response, setResponse] = useState('');
	const HTTP = 'http://localhost:8080/chat';

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(`${HTTP}`, { prompt })
			.then((res) => {
				setResponse(res.data);
				console.log(prompt);
			})
			.catch((error) => {
				console.log(error);
			});

		setPrompt('');
	};

	const handlePrompt = (e) => {
		setPrompt(e.target.value);
	};

	return (
		<section id="product" className='flex md:flex-row flex-col items-center py-8'>
			<div className='w-full md:w-1/2 text-white px-6'>
				<h2 className='font-poppins font-semibold ss:text-[50px] text-[52px] text-white ss:leading-[70.8px] leading-[90px]'>
					What can you achieve with {}
					<span className='text-gradient'>OmniAI</span> ?
				</h2>
				<p className={`${styles.paragraph} max-w-[750px] mt-5`}>
					OmniAI is a revolutionary virtual assistant that helps you stay
					organized and productive. It is powered by artificial intelligence and
					natural language processing, allowing it to understand and respond to
					your requests quickly and accurately.
				</p>
			</div>
			<div className='w-full md:w-1/2 px-8'>
				<form className='form' onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label htmlFor='' className='block font-bold mb-2'>
							Ask questions
						</label>
						<input
							className='shadow-sm rounded w-full p-2 border border-gray-300 h-16'
							type='text'
							placeholder='Enter text'
							value={prompt}
							onChange={handlePrompt}
						/>
					</div>
				</form>
				<div className='bg-lightBlue mt-8 p-4 rounded h-64 border-gradient'>
					<p className={`${styles.paragraph} max-w-[750px] mt-5`}>
						{response ? response.replace(/^\?/, '') : 'Ask me anything!'}
					</p>
				</div>
			</div>
		</section>
	);
};

export default ChatGPT;
