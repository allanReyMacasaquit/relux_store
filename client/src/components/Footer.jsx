import { useEffect, useState } from 'react';

export default function Footer() {
	const [currentYear, setCurrentYear] = useState('');

	useEffect(() => {
		const year = new Date().getFullYear();
		setCurrentYear(year.toString());
	}, []);

	return (
		<footer className='bg-slate-700 py-4 text-center '>
			<p className='text-slate-200'>
				&copy; <span className='font-bold'>{currentYear}</span>
				<span className='text-slate-400 font-medium tracking-widest ml-2 '>
					RELUX STORE.
				</span>
			</p>

			<span className='text-slate-200'>All Rights Reserved.</span>
		</footer>
	);
}
