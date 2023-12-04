import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_ERROR,
	GET_PRODUCTS_SUCCESS,
	SIDEBAR_CLOSE,
	SIDEBAR_OPEN,
} from '../actions';
import products_reducer from '../reducers/products_reducer.js';

const ProductsContext = React.createContext();

const initialState = {
	isSidebarOpen: false,

	products_loading: false,
	products_error: false,
	products: [],
	products_featured: false,
};

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(products_reducer, initialState);

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	useEffect(() => {
		const fetchProducts = async () => {
			dispatch({ type: GET_PRODUCTS_BEGIN });
			try {
				const response = await axios.get(
					'https://course-api.com/react-store-products'
				);
				const products = response.data;
				dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
			} catch (error) {
				dispatch({ type: GET_PRODUCTS_ERROR });
			}
		};

		fetchProducts();
	}, []);

	return (
		<ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
			{children}
		</ProductsContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductsContext = () => {
	return useContext(ProductsContext);
};

ProductsProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
