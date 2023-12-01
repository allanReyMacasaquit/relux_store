import { Link } from 'react-router-dom';
import herobcg from '../assets/hero-bcg.jpeg';
import herobcg2 from '../assets/hero-bcg-2.jpeg';

export default function Hero() {
	return (
		<main className='grid grid-cols-1 h-[100vh] lg:grid-cols-2 text-center p-10'>
			<article className='sm:p-0 md:p-5 lg:p-32 xl:p-40 '>
				<h1 className='mb-8 '>
					design your
					<br />
					comfort zone
				</h1>
				<p className='mb-8 p-1 text-gray-500 leading-8 text-base md:text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minus
					dicta ratione saepe blanditiis,
				</p>
				<Link
					to='/products'
					className='px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-600 uppercase transition duration-300'
				>
					shop now
				</Link>
			</article>
			<article className=' relative mt-[-200px] lg:mt-[80px] z-[-10]'>
				<div className=''>
					<img
						className='absolute top-0 left-0 w-[800px] h-[500px] object-cover rounded-lg'
						src={herobcg}
						alt='herobcg'
					/>
					<img
						className='absolute top-[400px] border shadow-2xl left-24 md:left-30 lg:left-20 z-10 w-60 transform -translate-x-1/2 rounded-lg'
						src={herobcg2}
						alt='herobcg2'
					/>
					<div className='absolute w-10 h-80 bg-amber-100 top-[150px] left-[-20px] rounded-lg'></div>
				</div>
			</article>
		</main>
	);
}
