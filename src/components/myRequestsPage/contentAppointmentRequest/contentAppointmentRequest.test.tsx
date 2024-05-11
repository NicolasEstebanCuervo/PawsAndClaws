import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";
import { ContentAppointmentRequests } from ".";

test("The content container are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <ContentAppointmentRequests />
            </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument;
});

test("The schedule an appointment button works.", () => {

    render(
        <BrowserRouter>
            <Provider store={store}>
                <ContentAppointmentRequests />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});
