import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";
import { SearchInput } from ".";

test("The search input are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <SearchInput />
            </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument;
});

test("The title input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <SearchInput />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Buscar");
    fireEvent.change(input, { target: { value: "Burro" } });
    const newInput = screen.getByDisplayValue("Burro");

    expect(newInput).toBeInTheDocument;
});
