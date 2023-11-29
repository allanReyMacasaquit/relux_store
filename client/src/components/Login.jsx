import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login() {
	return (
		<div className='mx-10'>
			<Link className=' flex items-center' to='/login'>
				Login
				<span className='mx-2 '>
					<FaUserPlus />
				</span>
			</Link>
		</div>
	);
}
