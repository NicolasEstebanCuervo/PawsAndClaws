import store from "@store/";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {  FormPayProduct } from ".";

test("The form are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormPayProduct />
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
                <FormPayProduct />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Nombre completo");
    fireEvent.change(input, { target: { value: "Jhon Doe" } });

    const newInput = screen.getByDisplayValue("Jhon Doe");

    expect(newInput).toBeInTheDocument;
});

test("The address input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormPayProduct />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Dirección");
    fireEvent.change(input, { target: { value: "Cr 30 S" } });

    const newInput = screen.getByDisplayValue("Cr 30 S");

    expect(newInput).toBeInTheDocument;
});

test("The phone number input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormPayProduct />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Número de teléfono");
    fireEvent.change(input, { target: { value: "3228092022" } });

    const newInput = screen.getByDisplayValue("3228092022");

    expect(newInput).toBeInTheDocument;
});

test("The email input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormPayProduct />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Correo electrónico");
    fireEvent.change(input, { target: { value: "developer@gmail.com" } });

    const newInput = screen.getByDisplayValue("developer@gmail.com");

    expect(newInput).toBeInTheDocument;
});

test("The card number input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormPayProduct />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Número de tarjeta");
    fireEvent.change(input, { target: { value: "123456789" } });

    const newInput = screen.getByDisplayValue("123456789");

    expect(newInput).toBeInTheDocument;
});

test("The card name input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormPayProduct />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Nombre en la tarjeta");
    fireEvent.change(input, { target: { value: "Pichicha" } });

    const newInput = screen.getByDisplayValue("Pichicha");

    expect(newInput).toBeInTheDocument;
});

test("The date of issue input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormPayProduct />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("MM/YY");
    fireEvent.change(input, { target: { value: "20/10/2000" } });

    const newInput = screen.getByDisplayValue("20/10/2000");

    expect(newInput).toBeInTheDocument;
});

test("The CVV number input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormPayProduct />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("CVV");
    fireEvent.change(input, { target: { value: "1234" } });

    const newInput = screen.getByDisplayValue("1234");

    expect(newInput).toBeInTheDocument;
});


test("The send button works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <FormPayProduct />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});
