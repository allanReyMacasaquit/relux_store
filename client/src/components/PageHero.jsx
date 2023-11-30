import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PageHero({ title }) {
	return (
		<div className='bg-slate-700 text-white flex items-center p-12 w-[100%] h-[10vh]'>
			<h3>
				<Link className='text-slate-400' to='/'>
					Home
				</Link>
				<span className='text-amber-700'> / </span>
				{title}
			</h3>
		</div>
	);
}

PageHero.propTypes = {
	title: PropTypes.string.isRequired,
};
