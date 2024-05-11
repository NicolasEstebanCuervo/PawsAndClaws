import { fireEvent, render, screen } from "@testing-library/react";
import { AnimalCard } from ".";
import { Provider } from "react-redux";
import store from "@store/";
import { BrowserRouter } from "react-router-dom";
import { IAnimal } from "@reducers/animalSlice";

const IAnimalTest: IAnimal = {
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
};

test("The card animal are in the document.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <AnimalCard animal={IAnimalTest} />
            </Provider>
        </BrowserRouter>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument;
});

test("The more information button works.", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <AnimalCard animal={IAnimalTest} />
            </Provider>
        </BrowserRouter>
    );
    const button = screen.getByTestId("button");
    fireEvent.click(button);
    expect(button).toBeInTheDocument;
    expect(button).toHaveBeenCalled;
});
