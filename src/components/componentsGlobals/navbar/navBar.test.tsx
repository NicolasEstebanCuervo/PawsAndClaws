import { IProduct } from "@reducers/productsSlice";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from ".";

test("The card product are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <NavBar />
            </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("nav-bar");
    expect(container).toBeInTheDocument;
});

test("The home button works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <NavBar />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("home-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});

test("The adoption button works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <NavBar />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("adoption-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});

test("The products button works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <NavBar />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("products-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});

test("The appointment button works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <NavBar />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("appointment-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});

test("The requests button works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <NavBar />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("requests-button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});