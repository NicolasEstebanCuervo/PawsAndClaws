import styled from "@emotion/styled";
import { IAnimal } from "@reducers/animalSlice";
import { useSelector } from "react-redux";
import { AnimalCard } from "../../componentsGlobals/cardAnimal";

export const ListAnimalInAdoption = ({
    indexArray1,
    indexArray2,
}: {
    indexArray1: number;
    indexArray2: number;
}) => {
    const animalSlice = useSelector((state: any) => state.AnimalSlice);

    return (
        <Container>
            <SubContainer>
                {animalSlice.animalsFiltered &&
                    animalSlice.animalsFiltered
                        .slice(indexArray1, indexArray2)
                        .map((animal: IAnimal, index: number) => (
                            <AnimalCard animal={animal} key={index} />
                        ))}
            </SubContainer>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    padding: 5rem 0;
    flex-wrap: wrap;
`;

const SubContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(4, auto);
    width: 100%;
    max-width: 1600px;
    gap: 1rem;

    @media (max-width: 1600px) {
        grid-template-columns: repeat(3, auto);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, auto);
        width: 80%;
    }

    @media (max-width: 750px) {
        width: 100%;
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(1, auto);
        width: 85%;
    }
`;
