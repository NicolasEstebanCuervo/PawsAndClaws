import store from "@store/";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { FormContact } from ".";

test("The form are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormContact />
            </Provider>
        </BrowserRouter>
    );
    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument;
});

test("The name input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormContact />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Nombre completo");
    fireEvent.change(input, { target: { value: "Jhon Doe" } });

    const newInput = screen.getByDisplayValue("Jhon Doe");

    expect(newInput).toBeInTheDocument;
});

test("The email input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormContact />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Correo electrónico");
    fireEvent.change(input, { target: { value: "developer@gmail.com" } });

    const newInput = screen.getByDisplayValue("developer@gmail.com");

    expect(newInput).toBeInTheDocument;
});

test("The message input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormContact />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Mensaje");
    fireEvent.change(input, { target: { value: "The best vet!!" } });

    const newInput = screen.getByDisplayValue("The best vet!!");

    expect(newInput).toBeInTheDocument;
});

test("The send button works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormContact />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});
