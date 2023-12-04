import aboutLogo from '../assets/herobcg.jpg';
import PageHero from '../components/PageHero';
export default function About() {
	return (
		<main>
			<PageHero title='about' />
			<div className=' grid gap-16 page section section-center'>
				<img
					className='w-full border rounded-lg h-[500px] object-cover'
					src={aboutLogo}
					alt='about-logo'
				/>
				<article>
					<div className='title'>
						<h2>our story</h2>
						<div className='underline'></div>
						<p className='mt-10'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Repellendus a repellat delectus aliquid tempora totam saepe
							dignissimos reprehenderit quidem similique earum eos iste, nulla
							corporis laboriosam odio ipsam, in sapiente.
						</p>
					</div>
				</article>
			</div>
		</main>
	);
}
