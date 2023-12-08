import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProductsContext } from '../provider/context/products_context';
import { useEffect, useState } from 'react';
import { singleProduct as url } from '../utils/common';
import Loading from '../components/Loading';
import Error from '../components/Error';
import PageHero from '../components/PageHero';
import { formatPrice } from '../utils/helpers';
import Stars from '../components/Stars';
import AddToCart from '../components/AddToCart';
import Slider from 'react-slick';

export default function SingleProduct() {
	const [zoom, setZoom] = useState(false);

	const handleMouseEnter = () => {
		setZoom(true);
	};

	const handleMouseLeave = (e) => {
		const image = e.target;
		image.style.transform = 'scale(1) translate(0, 0)';
		setZoom(false);
	};

	const [main, setMain] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	const {
		single_product_loading: loading,
		single_product_error: error,
		single_product: product,
		fetchSingleProduct,
	} = useProductsContext();

	useEffect(() => {
		fetchSingleProduct(`${url}${id}`);
		// eslint-disable-next-line
	}, [id]);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				navigate('/');
			}, 3000);
		}
		// eslint-disable-next-line
	}, [error]);

	const handleMouseMove = (e) => {
		// Get the image element from the event
		const image = e.target;

		// Retrieve the position and size of the image
		const rect = image.getBoundingClientRect();

		// Calculate the x and y coordinates of the mouse pointer relative to the top-left corner of the image
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		// Calculate the center coordinates of the image
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		// Calculate the offsets from the center based on the mouse position
		const offsetX = (centerX - x) / centerX;
		const offsetY = (centerY - y) / centerY;

		// Assuming a boolean variable 'zoom' for enabling zoom functionality
		const zoom = true;

		// Define the scale factor for the image (zooming)
		const scale = zoom ? 2 : 1;

		// Define a multiplier to control the speed of cursor movement
		const translateMultiplier = 80;

		// Calculate the translation values for X and Y axes
		// Apply the multiplier to make the cursor movement faster
		const translateX = zoom ? offsetX * translateMultiplier : 0;
		const translateY = zoom ? offsetY * translateMultiplier : 0;

		// Apply the transformation to the image using CSS
		image.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
	};

	const {
		name,
		price,
		description,
		stock,
		stars,
		reviews,
		id: sku,
		company,
		images,
	} = product;

	useEffect(() => {
		if (images && images.length > 0) {
			setMain(images[0]?.url); // Safely accesses the first image's URL if 'images' is not empty
		}
	}, [images]);

	const handleImageClick = (index) => {
		setMain(images[index].url);
	};
	const sliderSettings = {
		dots: true,
		infinite: true, // Change infinite to true for autoplay to work seamlessly
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true, // Autoplay option
		autoplaySpeed: 3000, // Autoplay speed in milliseconds
		arrows: true, // Show arrows

		responsive: [
			{
				breakpoint: 768, // Adjust this breakpoint to match your desired screen size for slider activation
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	// State to manage window width
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Event listener for window resize
		window.addEventListener('resize', handleResize);

		// Clean up the event listener
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	if (loading) return <Loading />;
	if (error) return <Error />;

	return (
		<main className='page overflow-x-hidden'>
			<PageHero title={name} product />
			<Link to='/products' className='btn m-5'>
				back to products
			</Link>

			<div className='md:grid gap-8 mt-4 md:h-[100%] md:grid-cols-2 items-center'>
				<div className='mb-10 '>
					{windowWidth <= 768 ? (
						<div className=' items-center'>
							<Slider {...sliderSettings}>
								{images &&
									images.length > 0 &&
									images.map((image, index) => {
										return (
											<img
												className=' h-[450px] p-1 object-cover'
												key={index}
												src={image.url}
												alt={image.filename}
												onClick={() => handleImageClick(index)}
											/>
										);
									})}
							</Slider>
						</div>
					) : (
						<>
							<div className='w-full object-cover mx-2 h-[500px] lg:m-5 relative overflow-hidden '>
								<img
									className={`w-full h-[500px] transition-transform duration-300 transform-gpu ${
										zoom ? 'scale-100' : ''
									}`}
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
									onMouseMove={handleMouseMove}
									src={main}
									alt='main image'
								/>
							</div>
							<div className='md:mr-[-10px] lg:mr-[-22px] lg:ml-4 md:ml-1'>
								<Slider {...sliderSettings}>
									{images &&
										images.length > 0 &&
										images.map((image, index) => {
											return (
												<img
													className=' h-[150px] p-1 object-cover'
													key={index}
													src={image.url}
													alt={image.filename}
													onClick={() => handleImageClick(index)}
												/>
											);
										})}
								</Slider>
							</div>
						</>
					)}
				</div>
				<section className='p-4 lg:mt-[-150px] '>
					<h2>{name}</h2>
					<Stars stars={stars} reviews={reviews} />
					<h5 className='price'>{formatPrice(price)}</h5>
					<p className='desc leading-8 max-w-80'>{description}</p>
					<p className='info text-uppercase w-72 grid grid-cols-1fr'>
						<span className='font-bold'>Available :</span>
						{stock > 0 ? 'In stock' : 'out of stock'}
					</p>
					<p className='info text-uppercase w-72 grid grid-cols-1fr'>
						<span className='font-bold'>SKU :</span>
						{sku}
					</p>
					<p className='info text-uppercase w-72 grid grid-cols-1fr'>
						<span className='font-bold'>Brand :</span>
						{company}
					</p>
					<hr />
					{stock > 0 && <AddToCart product={product} />}
				</section>
			</div>
		</main>
	);
}
