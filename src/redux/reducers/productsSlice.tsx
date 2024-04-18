import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

export interface IComment {
    id: string;
    name: string;
    date: string;
    comment: string;
    productId:number
}

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


interface GlobalInterface {
    products: IProduct[];
    productSelected: IProduct | any;
    productsInTheCart: IProduct[];
    comments: IComment[];
    newComments: IComment[];
    totalPrice: number;
}

const initialStates: GlobalInterface = {
    products: [],
    productsInTheCart: [],
    comments: [],
    newComments: [],
    totalPrice: 0,
    productSelected: [] 
};

export const ProductSlice = createSlice({
    name: "products",
    initialState: initialStates,
    reducers: {
        setProducts: (state, action) => {
            state.products = [...state.products, action.payload];
        },
        setProductSelected: (state, action) => {
            state.productSelected = [action.payload];
        },
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
        },

        deleteProductInTheCart: (state, action) => {
            state.productsInTheCart = state.productsInTheCart.filter(
                (product: IProduct) => {
                    return product.usItemId !== action.payload;
                }
            );
        },

        setIncrementProduct: (state, action) => {
            state.productsInTheCart = state.productsInTheCart.map(
                (product: IProduct) => {
                    if (product.usItemId === action.payload) {
                        product.quantity = product.quantity + 1;
                    }
                    return product;
                }
            );
        },
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
        },
        setComments: (state, action) => {
            state.comments = [...state.comments, action.payload];
        },
        setComment: (state, action: PayloadAction<IComment>) => {
            state.newComments = [action.payload, ...state.newComments];
        },

        deleteComment: (state, action) => {
            state.newComments = state.newComments.filter(
                (comment: IComment) => {
                    return comment.id !== action.payload.id;
                }
            );
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
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
    setComments,
    setComment,
    deleteComment,
    setTotalPrice,
    setInputValueChanged
} = ProductSlice.actions;

export default ProductSlice.reducer;
