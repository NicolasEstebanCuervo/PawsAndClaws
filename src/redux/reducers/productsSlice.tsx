import { createSlice } from "@reduxjs/toolkit";
import {
    getNewCommentsLC,
    getProductSelectedLC,
    getProductsInCartRQLC,
    getProductsLC,
    setNewCommentsLC,
    setProductSelectedLC,
    setProductsInCartsLC,
    setProductsLC,
} from "./localStorageFunctions";

// Interface for product data structure
export interface IProduct {
    name: string;
    usItemId: number;
    imageInfo: {
        thumbnailUrl: string;
    };
    priceInfo: {
        currentPrice: {
            priceString: string;
        };
    };
    quantity: number;
    brand: string;
    numberOfReviews: string;
}

// Interface for comment data structure
export interface IComment {
    id: string;
    name: string;
    date: string;
    comment: string;
    productId: number;
}

// Interface for payment form data structure
export interface IFormPay {
    fullNamePay: string;
    addressPay: string;
    phoneNumberPay: string;
    emailPay: string;
    cardNumberPay: string;
    cardNamePay: string;
    expiryDatePay: string;
    cvvPay: string;
}

// Interface for the global state structure
interface GlobalInterface {
    products: IProduct[];
    productSelected: IProduct | any;
    productsInTheCart: IProduct[];
    comments: IComment[];
    newComments: IComment[];
    totalPrice: number;
}

// Initial state setup
const initialStates: GlobalInterface = {
    products: getProductsLC() || [],
    productsInTheCart: getProductsInCartRQLC() || [],
    productSelected: getProductSelectedLC() || [],
    comments: [],
    newComments: getNewCommentsLC() || [],
    totalPrice: 0,
};

// Redux slice creation for managing product-related state
export const ProductSlice = createSlice({
    name: "products",
    initialState: initialStates,
    reducers: {
        // Function to set products
        setProducts: (state, action) => {
            const existingProduct = state.products.find(
                (product: IProduct) =>
                    product.usItemId === action.payload.usItemId
            );
            if (!existingProduct) {
                state.products.push(...action.payload);
                const products = { products: state.products };
                setProductsLC(products);
            }
        },
        // Function to set the selected product
        setProductSelected: (state, action) => {
            state.productSelected = action.payload;
            const products = { products: state.productSelected };
            setProductSelectedLC(products);
        },
        // Function to add a product to the cart
        setProductsInTheCart: (state, action) => {
            const isItemInCart = state.productsInTheCart.some(
                (product: IProduct) =>
                    product.usItemId == action.payload.usItemId
            );

            if (!isItemInCart) {
                const productWithQuantityOne = {
                    ...action.payload,
                    quantity: 1,
                };

                state.productsInTheCart = [
                    ...state.productsInTheCart,
                    productWithQuantityOne,
                ];
            }

            const products = { products: state.productsInTheCart };

            setProductsInCartsLC(products);
        },
        // Function to delete a product from the cart
        deleteProductInTheCart: (state, action) => {
            state.productsInTheCart = state.productsInTheCart.filter(
                (product: IProduct) => {
                    return product.usItemId !== action.payload;
                }
            );

            const products = { products: state.productsInTheCart };
            setProductsInCartsLC(products);
        },
        // Function to increment the quantity of a product in the cart
        setIncrementProduct: (state, action) => {
            state.productsInTheCart = state.productsInTheCart.map(
                (product: IProduct) => {
                    if (product.usItemId === action.payload) {
                        product.quantity = product.quantity + 1;
                    }
                    return product;
                }
            );

            const products = { products: state.productsInTheCart };
            setProductsInCartsLC(products);
        },
        // Function to decrease the quantity of a product in the cart
        setDecreaseProduct: (state, action) => {
            state.productsInTheCart = state.productsInTheCart.map(
                (product: IProduct) => {
                    if (product.usItemId === action.payload) {
                        if (product.quantity === 1) {
                            product.quantity = product.quantity;
                        } else {
                            product.quantity = product.quantity - 1;
                        }
                    }
                    return product;
                }
            );

            const products = { products: state.productsInTheCart };
            setProductsInCartsLC(products);
        },
        // Function to set comments
        createANewComments: (state, action) => {
            state.comments = [...state.comments, ...action.payload];
        },
        // Function to add a new comment
        createANewComment: (state, action) => {
            state.newComments = [action.payload, ...state.newComments];
            const newComments = { comments: state.newComments };
            setNewCommentsLC(newComments);
        },
        // Function to delete a comment
        deleteComment: (state, action) => {
            state.newComments = state.newComments.filter(
                (comment: IComment) => {
                    return comment.id !== action.payload.id;
                }
            );

            const newComments = { comments: state.newComments };
            setNewCommentsLC(newComments);
        },
        // Function to set the total price
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        // Function to set the value of an input field
        setInputValueChanged: (state, action) => {
            const { fieldName, value } = action.payload;
            (state as any)[fieldName] = value;
        },
    },
});

export const {
    setProducts,
    setProductSelected,
    setProductsInTheCart,
    deleteProductInTheCart,
    setIncrementProduct,
    setDecreaseProduct,
    createANewComments,
    createANewComment,
    deleteComment,
    setTotalPrice,
    setInputValueChanged,
} = ProductSlice.actions;

export default ProductSlice.reducer;