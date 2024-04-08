import styled from "@emotion/styled";
import {
    IAnimal,
    setAnimalSelected,
} from "../../../redux/reducers/animalSlice";
import { LM, MM, SM } from "../../../theme/fonts";
import { ImageAnimal } from "../imageAnimal";
import * as color from "../../../theme/colors";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { memo } from "react";

export const CardAdoption = ({ animal }: { animal: IAnimal }) => {
    const dispatch = useDispatch();

    const setAnimal = () => {
        return dispatch(setAnimalSelected(animal));
    };

    return (
        <SectionCardAdoption>
            <ImageAnimal breed={animal.breed} />
            <TextsAdoption>
                <LM>{animal.name}</LM>
                <DescriptionAnimal>
                    {animal.information.description}
                </DescriptionAnimal>

                <SubTextsAdoption>
                    <MM>{animal.pet}</MM>
                    <MM>{animal.age}</MM>
                </SubTextsAdoption>

                <SecondTextsAdoption>
                    {animal.pet === "Perro" ? (
                        <IconAdoption
                            src={require("../../../assets/icons/Dog.png")}
                            alt="Icono de un perro"
                        />
                    ) : (
                        <IconAdoption
                            src={require("../../../assets/icons/Cat.png")}
                            alt="Icono de un gato"
                        />
                    )}

                    <MM>{animal.breed}</MM>
                </SecondTextsAdoption>
            </TextsAdoption>
            <LinkAnimal to={`/animals/adoption/${animal.id}`}>
                <Button onClick={setAnimal}>Mas información</Button>
            </LinkAnimal>
        </SectionCardAdoption>
    );
};

const SectionCardAdoption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    width: 20rem;
    background: ${color.LightBeige};
    border-radius: 0.3rem;

    -webkit-box-shadow: 2px -2px 116px -52px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px -2px 116px -52px rgba(0, 0, 0, 0.75);
    box-shadow: 2px -2px 116px -52px rgba(0, 0, 0, 0.75);
`;

const TextsAdoption = styled.div`
    padding-bottom: 0.5rem;
`;

const DescriptionAnimal = styled(SM)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`;

const SubTextsAdoption = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${color.Gray};
`;

const SecondTextsAdoption = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
`;

const IconAdoption = styled.img`
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
`;
