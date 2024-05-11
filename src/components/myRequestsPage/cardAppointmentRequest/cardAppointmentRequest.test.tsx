import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";
import { IFormAppointment } from "@reducers/animalSlice";
import { CardAppointmentRequests } from ".";

const IInfoTest: IFormAppointment = {
    id: "1JJAL10S89",
    fullNameAppointment: "Jhon Doe",
    phoneNumberAppointment: "327182281",
    emailAppointment: "thebest@gmail.com",
    petNameAppointment: "Burro",
    petSpeciesAppointment: "Gato",
    petBreedAppointment: "Calico",
    petAgeAppointment: "2",
    petSexAppointment: "Macho",
    petWeightAppointment: "10",
    reasonAppointment: "General",
};

test("The card adoption request are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <CardAppointmentRequests  requestInfo={IInfoTest}/>
            </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument;
});

test("The trigger content in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <CardAppointmentRequests  requestInfo={IInfoTest}/>
            </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("trigger-container");
    expect(container).toBeInTheDocument;
});

test("The delete request button works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <CardAppointmentRequests  requestInfo={IInfoTest}/>
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});
