import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    onChangeInputFilter,
    setFilteredAnimals,
} from "../../../redux/reducers/animalSlice";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors"

export const SearchInput = () => {
    const inputFilterAnimals = useSelector((state: any) => state.AnimalSlice);
    const dispatch = useDispatch();

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeInputFilter(e.target.value));
        dispatch(setFilteredAnimals(e.target.value));
    };

    return (
        <SectionSearchInput>
        <InputGroup>
            <Input
                pr="4.5rem"
                focusBorderColor={color.LightGray}
                placeholder="Buscar"
                value={inputFilterAnimals.inputFilterAnimals}
                onChange={handleChangeInput}
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
`