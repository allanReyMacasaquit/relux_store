import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const [formError, setFormError] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
		visitDate: null,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setFormError(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, message, visitDate } = formData;
		if (name && email && message && visitDate) {
			const mailtoLink = `mailto:allanrey.macasaquit@yahoo.com?subject=Message from ${name}&body=${message}%0A%0ASender's Email: ${email}%0A%0AVisit Date: ${visitDate.toLocaleDateString()}`;
			window.location.href = mailtoLink;

			setFormError(false);
			setLoading(true);
			setFormData({});
		} else {
			setFormError(true);
		}
	};
	const handleDateChange = (date) => {
		setFormData({ ...formData, visitDate: date });
	};

	return (
		<section className='p-10 '>
			<div className='container mx-auto mt-20'>
				<h3 className='text-4xl mb-4'>Schedule your visit!</h3>
				<p className='leading-8 max-w-72 text-gray-500'>
					No judgement, We will embrace you as you are.
				</p>
				<form onSubmit={handleSubmit} className='mt-8'>
					{formError && (
						<p style={{ color: 'red' }}>Please fill in all fields.</p>
					)}

					<div className='grid grid-cols-1 w-full lg:grid-cols-2 gap-8'>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							placeholder='Name'
							required
							className='border-2 border-black p-2 rounded-lg'
						/>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleInputChange}
							placeholder='Email'
							required
							className='border-2 py2 border-black p-2 rounded-lg'
						/>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleInputChange}
							placeholder='Message'
							required
							className='border-2 border-black p-2 rounded-lg'
						/>
						<DatePicker
							id='visitDate'
							name='visitDate'
							selected={formData.visitDate}
							onChange={handleDateChange}
							dateFormat='MM/dd/yyyy'
							placeholderText='Date of Visit'
							minDate={new Date()} // Set minimum date to today
							required
							className='border-2 w-full border-black p-2 rounded-lg'
						/>
					</div>
					<div className='mt-10 text-center'>
						<button
							disabled={loading}
							className='bg-amber-700 w-[50%] text-2xl text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors'
						>
							{loading ? 'Submit' : 'Submit'}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
