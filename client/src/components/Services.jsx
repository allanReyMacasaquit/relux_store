import {
	GiCompass,
	GiDiamondHard,
	GiBridge,
	GiAllForOne,
} from 'react-icons/gi';
import { services } from '../utils/common';

export default function Services() {
	return (
		<main className='py-10 bg-slate-100 shadow-lg'>
			<div className='container mx-auto mt-20'>
				<div className='grid grid-cols-1 items-center text-center md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10'>
					<h3>
						custom furniture <br />
						built only for you
					</h3>
					<p className='w-auto mx-12 tracking-widest'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
						rem pariatur praesentium dolorum animi impedit voluptate
						perferendis. Perferendis, laboriosam cupiditate! Modi consequatur,
					</p>
				</div>

				<ul className=' mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{services.map(({ id, title, text }) => (
						<li
							key={id}
							className='bg-slate-300 text-primary-2 rounded-lg p-10 text-center'
						>
							<div className='w-8 mx-auto bg-slate-100 border border-slate-700 text-primary-1 p-1 rounded-full'>
								{id === 1 && <GiCompass className='text-2xl' />}
								{id === 2 && <GiDiamondHard className='text-2xl' />}
								{id === 3 && <GiBridge className='text-2xl' />}
								{id === 4 && <GiAllForOne className='text-2xl' />}
							</div>
							<h3 className='text-2xl font-bold mb-2'>{title}</h3>
							<p>{text}</p>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
