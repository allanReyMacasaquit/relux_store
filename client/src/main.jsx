import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductsProvider } from './provider/context/products_context.jsx';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ProductsProvider>
			<App />
		</ProductsProvider>
	</StrictMode>
);
