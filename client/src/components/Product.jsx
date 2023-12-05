import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Product({ id, name, price, image }) {
	return (
		<main>
			<div className='relative bg-slate-500'>
				<img className='w-[100%] block object-cover' src={image} alt='name' />
			</div>
		</main>
	);
}
