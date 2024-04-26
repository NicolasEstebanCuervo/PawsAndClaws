import styled from "@emotion/styled";
import { XLLM } from "../../../theme/fonts";
import { useSelector } from "react-redux";
import { IAnimal } from "../../../redux/reducers/animalSlice";
import { AnimalCard } from "../../componentsGlobals/animalCard";
import * as color from "../../../theme/colors";

export const AnimalsInAdoption = () => {
    const animals = useSelector((state: any) => state.AnimalSlice);
    const numRandomA = Math.floor(Math.random() * 27);
    const animalsMap = animals.animals;

    return (
        <Container>
            <XLLM>Adopta un nuevo amigo</XLLM>
            <SubContainer>
                {animalsMap &&
                    animalsMap
                        .slice(numRandomA, numRandomA + 4)
                        .map((animal: IAnimal, index: number) => (
                            <AnimalCard animal={animal} key={index} />
                        ))}
            </SubContainer>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    gap: 3rem;
    margin-top: 10rem;
    padding: 5rem 0;
    background: ${color.Cream};
`;
const SubContainer = styled.div`
    display: flex;
    gap: 3rem;
`;