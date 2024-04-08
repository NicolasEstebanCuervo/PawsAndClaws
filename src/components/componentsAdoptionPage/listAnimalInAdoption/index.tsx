import styled from "@emotion/styled";
import { IAnimal } from "../../../redux/reducers/animalSlice";
import { CardAdoption } from "../../componentsGlobals/cardAdoption";
import { useSelector } from "react-redux";

export const ListAnimalInAdoption = ({indexArray1,indexArray2}:{indexArray1:number,indexArray2:number}) => {
    const animals = useSelector((state: any) => state.AnimalSlice);
    const animalsMap = animals.animalsFiltered[0];

    return (
        <SectionCardsAdoption>
            <SubContainerCardsAdoption>
                {animalsMap &&
                    animalsMap
                    .slice(indexArray1,indexArray2)
                        .map((animal: IAnimal, index: number) => (
                            <CardAdoption animal={animal} key={index} />
                        ))}
            </SubContainerCardsAdoption>
        </SectionCardsAdoption>
    );
};

const SectionCardsAdoption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    gap: 3rem;
    padding: 5rem 0;
`;
const SubContainerCardsAdoption = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4,1fr);
`;
