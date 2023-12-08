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

const products_reducer = (state, action) => {
	switch (action.type) {
		case SIDEBAR_OPEN:
			return { ...state, isSidebarOpen: true };
		case SIDEBAR_CLOSE:
			return { ...state, isSidebarOpen: false };

		case GET_PRODUCTS_BEGIN:
			return { ...state, products_loading: true };
		case GET_PRODUCTS_SUCCESS: {
			const featuredProducts = action.payload.filter(
				(product) => product.featured === true
			);
			return {
				...state,
				products_loading: false,
				products: action.payload,
				products_featured: featuredProducts,
			};
		}
		case GET_PRODUCTS_ERROR:
			return { ...state, products_loading: false, products_error: true };

		case GET_SINGLE_PRODUCT_BEGIN:
			return {
				...state,
				single_product_loading: true,
				single_product_error: false,
			};
		case GET_SINGLE_PRODUCT_SUCCESS:
			return {
				...state,
				single_product_loading: false,
				single_product: action.payload,
			};
		case GET_SINGLE_PRODUCT_ERROR:
			return {
				...state,
				single_product_loading: false,
				single_product_error: true,
			};
		default:
			return state;
	}
};

export default products_reducer;
