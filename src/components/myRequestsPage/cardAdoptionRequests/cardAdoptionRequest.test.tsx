import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";
import { CardAdoptionRequests } from ".";
import { IFormAdoption } from "@reducers/animalSlice";

const IInfoTest: IFormAdoption = {
    id: "1JJAL10S89",
    fullNameAdoption: "Jhon Doe",
    addressAdoption: "CR 21 G",
    phoneNumberAdoption: "327182281",
    emailAdoption: "thebest@gmail.com",
    housingAdoption: "apartamento",
    landlorTenantAdoption: "inquilino",
    fencedYardAdoption: "si",
    previousPetsAdoption: "no",
    currentPetsAdoption: "si",
    adoptedPetsAdoption: "si",
    theAnimalAdoption: [
        {
            id: 2,
            name: "Burro",
            age: "3 años",
            pet: "Gato",
            sex: "hembra",
            breed: "Siamesa",
            information: {
                description:
                    "Burro es un gato vocal y cariñoso que disfruta siendo el centro de atención.",
                description_large:
                    "Burro es una gata Siamesa elegante y vocal que siempre busca la compañía de su familia. Con su pelaje suave y su mirada expresiva, es difícil resistirse a su encanto. Le encanta ser el centro de atención y recibir mimos suaves.",
                owner: "Paws and Claws",
                history:
                    "Burro fue rescatada por el refugio Paws and Claws después de ser encontrada sola en la calle. Desde entonces, ha demostrado ser una gata amorosa y sociable que está lista para encontrar un hogar lleno de amor y atención. Su historia de superación demuestra el increíble poder del cuidado y la compasión.",
            },
        },
    ],
};

test("The card adoption request are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <CardAdoptionRequests requestInfo={IInfoTest} />
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
                <CardAdoptionRequests requestInfo={IInfoTest} />
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
                <CardAdoptionRequests requestInfo={IInfoTest} />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});
