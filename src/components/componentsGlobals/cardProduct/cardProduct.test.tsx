import { IProduct } from "@reducers/productsSlice";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProductCard } from ".";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";

const IProductTest: IProduct = {
    name: "Juguete para gatos",
    usItemId: "123AB456CD789",
    imageInfo: {
        thumbnailUrl:
            "https://http2.mlstatic.com/D_NQ_NP_786164-MCO76009359696_052024-O.webp",
    },
    priceInfo: {
        currentPrice: {
            priceString: "7.99",
        },
    },
    quantity: 15,
    brand: "PurrPlay",
    numberOfReviews: "25",
};

test("The card product are in the document.", () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
            <ProductCard product={IProductTest} />
        </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument;
});

test("The preview button works.", () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
            <ProductCard product={IProductTest} />
        </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("preview-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});

test("The add the cart button works.", () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
            <ProductCard product={IProductTest} />
        </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("add-cart-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});