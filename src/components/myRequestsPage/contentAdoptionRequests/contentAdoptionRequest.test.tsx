import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";
import { ContentAdoptionRequests } from ".";

test("The content container are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <ContentAdoptionRequests />
            </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument;
});

test("The explore more adoption button works.", () => {

    render(
        <BrowserRouter>
            <Provider store={store}>
                <ContentAdoptionRequests />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});
