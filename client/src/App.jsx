import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/products' element={<Products />} />
					<Route path='/products/:id' element={<SingleProduct />} />
					<Route path='/*' element={<Error />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}