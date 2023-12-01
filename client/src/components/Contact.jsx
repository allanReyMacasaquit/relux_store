import { useState } from 'react';

const Contact = () => {
	const [selectedDate, setSelectedDate] = useState('');
	const [error, setError] = useState('');

	const handleDateChange = (event) => {
		const inputDate = new Date(event.target.value);
		const currentDate = new Date();

		if (inputDate <= currentDate) {
			setError('Please select a future date for the visit.');
			setSelectedDate('');
		} else {
			setError('');
			setSelectedDate(event.target.value);
		}
	};
	return (
		<section className='p-10'>
			<div className='container mx-auto'>
				<h3 className='text-4xl mb-4'>Schedule your visit!</h3>
				<p className='leading-8 max-w-72 text-gray-500'>
					No judgement, We will embrace you as you are.
				</p>
				<form className='mt-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<input
							type='text'
							placeholder='Your Name'
							className='border-2 border-black p-2 rounded-lg'
						/>
						<input
							type='date'
							value={selectedDate}
							onChange={handleDateChange}
							placeholder='Date of Visit'
							className='border-2 border-black p-2 rounded-lg'
						/>
						{error && <p className='text-red-500'>{error}</p>}
					</div>
					<div className='mt-10 text-center'>
						<button
							type='submit'
							className='bg-amber-700 w-[50%] text-2xl text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors'
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
