import styled from "@emotion/styled";
import { IAnimal, setAnimalSelected } from "@reducers/animalSlice";
import { LM, MM, SM } from "@theme/fonts";
import { ImageAnimal } from "../imageAnimal";
import * as color from "@theme/colors";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export const AnimalCard = ({ animal }: { animal: IAnimal }) => {
    const dispatch = useDispatch();

    const setAnimal = () => {
        return dispatch(setAnimalSelected(animal));
    };

    return (
        <Container data-testid="container">
            <ImageAnimal breed={animal.breed} />
            <Texts>
                <div>
                    <LM>{animal.name}</LM>
                    <Description>{animal.information.description}</Description>
                </div>
                <TextsPetAndAge>
                    <MM>{animal.pet}</MM>
                    <MM>{animal.age}</MM>
                </TextsPetAndAge>

                <SubTexts>
                    {animal.pet === "Perro" ? (
                        <Icon
                            src={require("@assets/icons/DogIcon.png")}
                            alt="Icono de un perro"
                        />
                    ) : (
                        <Icon
                            src={require("@assets/icons/CatIcon.png")}
                            alt="Icono de un gato"
                        />
                    )}

                    <MM>{animal.breed}</MM>
                </SubTexts>
            </Texts>
            <LinkAnimal to={`/adoption/animal/${animal.id}`}>
                <Button onClick={setAnimal} data-testid="button">Mas información</Button>
            </LinkAnimal>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    width: 20rem;
    background: ${color.LightBeige};
    border-radius: 0.3rem;

    @media (max-width: 1250px) {
        width: 95%;
    }

    @media (max-width: 1000px) {
        margin: 0.5rem;
    }

    @media (max-width: 750px) {
        width: 95%;
    }
`;

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 0.5rem;
    gap: 0.5rem;
`;

const Description = styled(SM)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const TextsPetAndAge = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${color.Gray};
`;

const SubTexts = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 0.3rem;
`;

const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`;

const LinkAnimal = styled(Link)`
    width: 90%;
`;

const Button = styled.button`
    border: none;
    border-radius: 0.3rem;
    width: 100%;
    height: 3rem;
    background: ${color.Brown};
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 750px) {
        font-size: 1rem;
    }
`;
