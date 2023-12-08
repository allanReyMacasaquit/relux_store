import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PageHero({ title, product }) {
	return (
		<div className='bg-slate-700 text-white flex items-center p-12 w-[100%] h-[10vh]'>
			<h3>
				<Link to='/'>Home </Link>
				{product && <Link to='/products'>/ Products</Link>} / {title}
			</h3>
		</div>
	);
}

PageHero.propTypes = {
	title: PropTypes.string,
	product: PropTypes.bool,
};
