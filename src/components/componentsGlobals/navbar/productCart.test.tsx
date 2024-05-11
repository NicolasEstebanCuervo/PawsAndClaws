import { IProduct } from "@reducers/productsSlice";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";
import { ProductCart } from "./ProductCart";

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

test("The product in the cart are in the document.", () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
            <ProductCart quantity={12} product={IProductTest} />
        </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument;
});

test("The increment button works.", () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
            <ProductCart quantity={12} product={IProductTest} />
        </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("increment-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});

test("The decrement button works.", () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
            <ProductCart quantity={12} product={IProductTest} />
        </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("decrease-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});

test("The delete button works.", () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
            <ProductCart quantity={12} product={IProductTest} />
        </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("delete-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});