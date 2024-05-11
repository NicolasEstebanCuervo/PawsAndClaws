import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";
import { CardPay } from ".";

test("The product content container are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <CardPay />
            </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument;
});
