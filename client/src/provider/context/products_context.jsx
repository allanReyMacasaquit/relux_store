import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { products as url } from '../../utils/common.js';
import {
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_ERROR,
	GET_PRODUCTS_SUCCESS,
	GET_SINGLE_PRODUCT_BEGIN,
	GET_SINGLE_PRODUCT_ERROR,
	GET_SINGLE_PRODUCT_SUCCESS,
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
	products_featured: [],
	single_product_loading: false,
	single_product_error: false,
	single_product: [],
};

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(products_reducer, initialState);

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};
	const fetchProducts = async (url) => {
		dispatch({ type: GET_PRODUCTS_BEGIN });
		try {
			const response = await axios.get(url);
			const products = response.data;
			dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
		} catch (error) {
			dispatch({ type: GET_PRODUCTS_ERROR });
		}
	};

	const fetchSingleProduct = async (url) => {
		dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
		try {
			const response = await axios.get(url);
			const singleProduct = response.data;
			dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
		} catch (error) {
			dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
		}
	};
	useEffect(() => {
		fetchProducts(url);
	}, []);

	const values = {
		...state,
		openSidebar,
		closeSidebar,
		fetchSingleProduct,
	};

	return (
		<ProductsContext.Provider value={values}>
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
