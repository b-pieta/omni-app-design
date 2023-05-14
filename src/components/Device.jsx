import styles, { layout } from '../style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faRobot, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Device = () => {
	return (
		<section id="features" className='flex flex-col md:flex-row justify-between max-w-[1000px] mx-auto px-4 py-8'>
			<div className='flex-1 mx-4 my-2 md:my-0 bg-lightBlue p-10 rounded-lg shadow-md text-center font-poppins transition-all duration-300 hover:bg-opacity-50 hover:bg-blue-500'>
				<FontAwesomeIcon className='text-strongerBlue text-4xl text- mb-4' icon={faPen} />
				<h3 className='text-2xl font-bold mb-4 text-white'>
					Content Generation
				</h3>
				<p className={`${styles.paragraph} max-w-[750px] mt-5`}>
					Say goodbye to writer's block with OmniAI's powerful content
					generation, perfect for blogging, marketing materials, and social
					media.
				</p>
			</div>
			<div className='flex-1 mx-4 my-2 md:my-0 bg-lightBlue p-10 rounded-lg shadow-md text-center font-poppins transition-all duration-300 hover:bg-opacity-50 hover:bg-blue-500'>
				<FontAwesomeIcon className='text-4xl text-strongerBlue mb-4' icon={faRobot} />
				<h3 className='text-2xl font-bold mb-4 text-white'>AI chatbot</h3>
				<p className={`${styles.paragraph} max-w-[750px] mt-5`}>
					Enhance your customer experience with our advanced AI chatbot,
					providing personalized, instant support 24/7.
				</p>
			</div>
			<div className='flex-1 mx-4 my-2 md:my-0 bg-lightBlue p-10 rounded-lg shadow-md text-center font-poppins transition-all duration-300 hover:bg-opacity-50 hover:bg-blue-500'>
				<FontAwesomeIcon
					className='text-4xl text-strongerBlue mb-4'
					icon={faChartLine}
				/>
				<h3 className='text-2xl font-bold mb-4 text-white'> Smart business</h3>
				<p className={`${styles.paragraph} max-w-[750px] mt-5`}>
					Unlock valuable insights from complex data sets, empowering
					data-driven decision making with OmniAI.
				</p>
			</div>
		</section>
	);
};

export default Device;
