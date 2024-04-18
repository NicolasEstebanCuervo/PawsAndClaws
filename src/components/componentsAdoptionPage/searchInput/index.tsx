import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    IAnimal,
    setFilteredAnimals,
    setInputValueChanged,
} from "../../../redux/reducers/animalSlice";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors";

export const SearchInput = () => {
    const stateAnimal = useSelector((state: any) => state.AnimalSlice);
    const dispatch = useDispatch();

    const animalsMap = stateAnimal.animals;


    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target ;


        dispatch(setInputValueChanged({ fieldName: "inputFilterAnimals", value }));

        const animalsFiltered = animalsMap.filter((animal: IAnimal) => {

            return animal.name.toLowerCase().includes(value.toLowerCase());
        });


        dispatch(setFilteredAnimals(animalsFiltered))


    };



    return (
        <SectionSearchInput>
            <InputGroup>
                <Input
                    pr="4.5rem"
                    focusBorderColor={color.LightGray}
                    placeholder="Buscar"
                    value={stateAnimal.inputFilterAnimals}
                    onChange={handleInputChange}
                />
                <InputRightElement width="4.5rem">
                    <i className="bi bi-search"></i>
                </InputRightElement>
            </InputGroup>
        </SectionSearchInput>
    );
};

const SectionSearchInput = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-top: 5rem;
`;
