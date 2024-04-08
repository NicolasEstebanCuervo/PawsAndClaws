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
    shortDescription: string;
    quantity: number;
}

interface GlobalInterface {
    products: IProduct[];
    productSelected: IProduct | any;
    productsInTheCart: IProduct[];
}

const initialStates: GlobalInterface = {
    products: [],
    productSelected: [],
    productsInTheCart: [],
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
                    return product.usItemId !== action.payload.usItemId;
                }
            );
        },

        setIncrementProduct: (state, action) => {
            state.productsInTheCart = state.productsInTheCart.map(
                (product: IProduct) => {
                    if (product.usItemId === action.payload.usItemId) {
                        product.quantity = product.quantity + 1;
                    }
                    return product;
                }
            );
        },
        setDecreaseProduct: (state, action) => {
            state.productsInTheCart = state.productsInTheCart.map(
                (product: IProduct) => {
                    if (product.usItemId === action.payload.usItemId) {
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
    },
});

export const {
    setProducts,
    setProductSelected,
    setProductsInTheCart,
    deleteProductInTheCart,
    setIncrementProduct,
    setDecreaseProduct
} = ProductSlice.actions;

export default ProductSlice.reducer;
