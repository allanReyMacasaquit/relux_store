import { useProductsContext } from '../provider/context/products_context';
import Error from './Error';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

export default function FeaturedProducts() {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const { products_loading, products_error, products_featured } =
		useProductsContext();

	if (products_loading) return <Loading />;
	if (products_error) return <Error />;

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<main className=''>
			<div className='title mb-10 pt-10'>
				<h2 className=''>best seller</h2>
				<div className='underline text-amber-700'></div>
			</div>
			<div className='shadow-2xl my-10'>
				<Slider {...sliderSettings}>
					{products_featured.map((product, index) => (
						<div
							key={product.id}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							className='relative opacity-80 hover:opacity-100 '
						>
							<img
								className='object-fit h-96 w-full p-1 rounded-2xl'
								src={product.image}
								alt={product.name}
							/>
							{hoveredIndex === index && (
								<Link
									className='absolute left-[45%] top-[45%] bg-white opacity-80 hover:opacity-100 p-4 rounded-full'
									to={`/products/${product.id}`}
								>
									<FaSearch className='text-3xl text-amber-500 ' />
								</Link>
							)}
							<div className='absolute left-2 bottom-2 p-2 rounded-lg m-2 text-2xl bg-slate-200 capitalize'>
								{product.name}
							</div>
						</div>
					))}
				</Slider>
			</div>
		</main>
	);
}
