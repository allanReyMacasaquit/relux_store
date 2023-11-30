import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div className='flex flex-col h-[81vh] p-5 bg-slate-300 items-center justify-center text-center'>
			<h1 className='font-extrabold text-8xl text-red-700 animate-pulse'>
				404!
			</h1>
			<h3 className='text-4xl'>Sorry! The page you tried cannot be found</h3>
			<Link to='/' className='mt-10  text-2xl'>
				Go Back to
				<span className='mx-2 text-blue-600 hover:underline underline-offset-8'>
					Real Lux
				</span>
				HomePage
			</Link>
		</div>
	);
}
