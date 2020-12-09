const { GET_DEPARTMENT_PRODUCTS } = require('../types')

const initialState = {
    products: []
};

const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DEPARTMENT_PRODUCTS:
            return { ...state, products: action.payload}
        default:
            return { ...state }
    }
};

export default ProductReducer;
