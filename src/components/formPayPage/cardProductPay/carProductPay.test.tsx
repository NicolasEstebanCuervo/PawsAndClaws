import { IProduct } from "@reducers/productsSlice";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";
import { CardProductPay } from ".";

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

test("The product pay are in the document.", () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
            <CardProductPay quantity={2} product={IProductTest} />
        </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument;
});

test("The delete button works.", () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
            <CardProductPay quantity={2} product={IProductTest} />
        </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});
