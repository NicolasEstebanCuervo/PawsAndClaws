import styled from "@emotion/styled";
import { IAnimal } from "../../../redux/reducers/animalSlice";
import { useSelector } from "react-redux";
import { AnimalCard } from "../../componentsGlobals/animalCard";

export const ListAnimalInAdoption = ({indexArray1,indexArray2}:{indexArray1:number,indexArray2:number}) => {
    const animalSlice = useSelector((state: any) => state.AnimalSlice);
    return (
        <Container>
            <SubContainer>
                {animalSlice.animalsFiltered &&
                    animalSlice.animalsFiltered
                        .slice(indexArray1,indexArray2).map((animal: IAnimal, index: number) => (
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
    padding: 5rem 0;
`;
const SubContainer = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4,1fr);
`;