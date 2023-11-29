import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context.jsx';

export default function Cart() {
	const { closeSidebar } = useProductsContext();
	return (
		<div className='mx-5 lex'>
			<Link className='flex items-center' to='/cart' onClick={closeSidebar}>
				Cart
				<span className='relative mx-2'>
					<FaShoppingCart className='text-slate-700' />
					<span className='absolute top-[-10px] left-4'>12</span>
				</span>
			</Link>
		</div>
	);
}
