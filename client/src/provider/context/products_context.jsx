import React, { useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions';
import products_reducer from '../reducers/products_reducer.js';

const ProductsContext = React.createContext();

const initialState = {
	isSidebarOpen: false,
};

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(products_reducer, initialState);

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

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
