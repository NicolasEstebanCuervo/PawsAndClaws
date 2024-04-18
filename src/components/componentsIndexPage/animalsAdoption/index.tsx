import styled from "@emotion/styled";
import { XLLM } from "../../../theme/fonts";
import { useSelector } from "react-redux";
import { IAnimal } from "../../../redux/reducers/animalSlice";
import { CardAdoption } from "../../componentsGlobals/cardAdoption";
import * as color from "../../../theme/colors"

export const AnimalsAdoption = () => {
    const animals = useSelector((state: any) => state.AnimalSlice);
    const numRandomA = Math.floor(Math.random() * 27);
    const animalsMap = animals.animals;

    return (
        <SectionCardsAdoption>
            <XLLM>Adopta un nuevo amigo</XLLM>
            <SubContainerCardsAdoption>
                {animalsMap &&
                    animalsMap
                        .slice(numRandomA, numRandomA + 4)
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
    margin-top: 10rem;
    padding: 5rem 0;
    background: ${color.Cream};
`;
const SubContainerCardsAdoption = styled.div`
    display: flex;
    gap: 3rem;
`;
