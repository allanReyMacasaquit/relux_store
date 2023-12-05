import { Link } from 'react-router-dom';
import herobcg from '../assets/herobcg.jpg';

export default function Hero() {
	return (
		<main className='grid grid-cols-1 h-[90vh] lg:grid-cols-2 text-center p-10'>
			<article className='sm:pt-0 md:pt-5 lg:pt-32 xl:pt-40 '>
				<h1 className='mb-8 '>
					Create your
					<br />
					perfect dreams
				</h1>
				<p className='mb-12 px-10 text-gray-500 leading-8 text-base md:text-lg'>
					Unleash your musical talent with our Boxing Day deals on guitars.
					Whether you are a beginner or a pro.
				</p>
				<Link
					to='/products'
					className='px-4 py-4 bg-amber-700 text-white rounded hover:bg-amber-600 uppercase transition duration-300'
				>
					shop now
				</Link>
			</article>
			<article className='mt-[-100px] relative lg:mt-[80px] z-[-10]'>
				<div className=''>
					<img
						className='absolute top-0 left-0  object-cover rounded-lg'
						src={herobcg}
						alt='herobcg'
					/>
				</div>
			</article>
		</main>
	);
}
