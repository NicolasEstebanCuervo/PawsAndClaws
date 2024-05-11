import store from "@store/";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CommentsSection } from ".";

test("The form are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <CommentsSection />
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
                <CommentsSection />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Nombre");
    fireEvent.change(input, { target: { value: "Jhon Doe" } });

    const newInput = screen.getByDisplayValue("Jhon Doe");

    expect(newInput).toBeInTheDocument;
});

test("The comment input works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <CommentsSection />
            </Provider>
        </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("Comentario");
    fireEvent.change(input, { target: { value: "¡Excelente producto!" } });

    const newInput = screen.getByDisplayValue("¡Excelente producto!");

    expect(newInput).toBeInTheDocument;
});


test("The send button works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <CommentsSection />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});
