import Contact from '../components/Contact';
import FeaturedProducts from '../components/FeaturedProducts';
import Hero from '../components/Hero';
import Services from '../components/Services';

export default function Home() {
	return (
		<main className='overflow-x-hidden'>
			<Hero />
			<FeaturedProducts />
			<Services />
			<Contact />
		</main>
	);
}
