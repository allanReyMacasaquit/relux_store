import { Link } from 'react-router-dom';
import reluxLogo from '../assets/relux.svg';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/common';
import Cart from './Cart';
import Login from './Login';
import { useProductsContext } from '../provider/context/products_context.jsx';

export default function Sidebar() {
	const { isSidebarOpen, closeSidebar } = useProductsContext();

	return (
		<aside
			className={`fixed top-0 left-0 h-full z-50 w-full bg-slate-100 flex flex-col transform transition-all duration-300 ${
				isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			<div className='mt-[-55px] flex items-center justify-between p-4'>
				<div className='ml-5'>
					<Link to='/'>
						<img className='w-44' src={reluxLogo} alt='logo' />
					</Link>
				</div>
				<button
					type='button'
					className='text-red-700 text-3xl mx-5'
					onClick={closeSidebar}
				>
					<FaTimes />
				</button>
			</div>
			<ul className='mt-[-40px] ml-8 capitalize'>
				{links.map(({ id, text, url }) => (
					<li className='p-2' key={id} onClick={closeSidebar}>
						<Link to={url}>{text}</Link>
					</li>
				))}
			</ul>
			<span className='mt-2'>
				<Link
					className='mx-10 capitalize'
					to='/checkout'
					onClick={closeSidebar}
				>
					checkout
				</Link>
			</span>
			<div className='flex justify-center mt-20'>
				<Cart />
				<Login />
			</div>
		</aside>
	);
}
