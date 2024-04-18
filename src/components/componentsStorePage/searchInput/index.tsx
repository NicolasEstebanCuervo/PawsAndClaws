import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setInputValueChanged,
} from "../../../redux/reducers/animalSlice";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors";

export const SearchInput = () => {
    const inputFilterAnimals = useSelector((state: any) => state.AnimalSlice.inputFilterAnimals);
    const dispatch = useDispatch();

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target ;
        dispatch(setInputValueChanged({ fieldName: "inputFilterAnimals", value }));
    };

    return (
        <SectionSearchInput>
            <InputGroup>
                <Input
                    pr="4.5rem"
                    focusBorderColor={color.LightGray}
                    placeholder="Buscar"
                    value={inputFilterAnimals}
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
    padding: 5rem 0 3rem;
`;
