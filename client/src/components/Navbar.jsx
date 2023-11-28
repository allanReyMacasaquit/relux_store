import { links } from '../utils/common';
import { Link } from 'react-router-dom';
import reluxLogo from '../assets/relux.svg'; // Import the image
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
	return (
		<nav className='bg-slate-100 h-20 flex items-center justify-center'>
			<div className='mx-10 flex items-center justify-between w-[95%] max-w-6xl'>
				<div className=''>
					<Link to='/'>
						<img className='w-44' src={reluxLogo} alt='logo' />
					</Link>
				</div>
				<ul className=' hidden sm:flex items-center w-[30%] lg:w-[20%]  capitalize justify-between'>
					{links.map((link) => (
						<li key={link.id} className='hover:underline underline-offset-4  '>
							<Link className='block w-9' to={link.url}>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
				<div className='cursor-pointer'>
					<FaBars className='block sm:hidden h-6 w-6' />
				</div>
			</div>
		</nav>
	);
}
