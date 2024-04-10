import { Input, Select } from "@chakra-ui/react";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent } from "react";
import {
    createAdoptionRequest,
    setInputValueChanged,
} from "../../../redux/reducers/animalSlice";
import { v4 as uuidv4 } from "uuid";


export const FormAnimalInAdoption = () => {
    const inputsForm = useSelector((state: any) => state.AnimalSlice);
    const dispatch = useDispatch();

    const handleInputChange =
        (inputName: string) => (e: ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            dispatch(
                setInputValueChanged({ fieldName: `${inputName}`, value })
            );
        };

    const handleSelectChange =
        (inputName: string) => (e: ChangeEvent<HTMLSelectElement>) => {
            const { value } = e.target;
            dispatch(
                setInputValueChanged({ fieldName: `${inputName}`, value })
            );
        };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(
            createAdoptionRequest({
                id:uuidv4(),
                fullNameAdoption: inputsForm.fullNameAdoption,
                addressAdoption: inputsForm.addressAdoption,
                phoneNumberAdoption: inputsForm.phoneNumberAdoption,
                emailAdoption: inputsForm.emailAdoption,
                housingAdoption: inputsForm.housingAdoption,
                landlorTenantAdoption:
                    inputsForm.landlorTenantAdoption,
                fencedYardAdoption: inputsForm.fencedYardAdoption,
                previousPetsAdoption: inputsForm.previousPetsAdoption,
                currentPetsAdoption: inputsForm.currentPetsAdoption,
                adoptedPetsAdoption: inputsForm.adoptedPetsAdoption,

                theAnimalAdoption: inputsForm.animalSelected,
            })
        );

        dispatch(
            setInputValueChanged({ fieldName: "fullNameAdoption", value: "" })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "addressAdoption",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "phoneNumberAdoption",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({ fieldName: "emailAdoption", value: "" })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "housingAdoption",
                value: "Selecciona una opción",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "landlorTenantAdoption",
                value: "Selecciona una opción",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "fencedYardAdoption",
                value: "Selecciona una opción",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "previousPetsAdoption",
                value: "Selecciona una opción",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "currentPetsAdoption",
                value: "Selecciona una opción",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "adoptedPetsAdoption",
                value: "Selecciona una opción",
            })
        );
    };

    return (
        <SectionFormAnimalInAdoption>
            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Nombre completo:</label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Nombre completo"
                        value={inputsForm.fullNameAdoption}
                        onChange={handleInputChange("fullNameAdoption")}
                    />
                </div>
                <div>
                    <label htmlFor="address">Dirección:</label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Dirección"
                        value={inputsForm.addressAdoption}
                        onChange={handleInputChange("addressAdoption")}
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Número de teléfono:</label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Número de teléfono"
                        value={inputsForm.phoneNumberAdoption}
                        onChange={handleInputChange("phoneNumberAdoption")}
                    />
                </div>
                <div>
                    <label htmlFor="email">
                        Dirección de correo electrónico:
                    </label>
                    <Input
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        type="email"
                        id="email"
                        name="emailAdoption"
                        placeholder="Correo electrónico"
                        value={inputsForm.emailAdoption}
                        onChange={handleInputChange("emailAdoption")}
                    />
                </div>
                <div>
                    <label htmlFor="housingType">Tipo de vivienda:</label>
                    <Select
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        id="housingType"
                        name="housingType"
                        value={inputsForm.housingAdoption}
                        onChange={handleSelectChange("housingAdoption")}
                    >
                        <option disabled selected>Selecciona una opción</option>
                        <option value="casa">Casa</option>
                        <option value="apartamento">Apartamento</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="homeOwner">Propietario o inquilino:</label>
                    <Select
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        id="homeOwner"
                        name="homeOwner"
                        value={inputsForm.landlorTenantAdoption}
                        onChange={handleSelectChange(
                            "landlorTenantAdoption"
                        )}
                    >
                        <option disabled selected>Selecciona una opción</option>
                        <option value="propietario">Propietario</option>
                        <option value="inquilino">Inquilino</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="fencedYard">¿Tiene un patio vallado?</label>
                    <Select
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        id="fencedYard"
                        name="fencedYard"
                        value={inputsForm.fencedYardAdoption}
                        onChange={handleSelectChange("fencedYardAdoption")}
                    >
                        <option disabled selected>Selecciona una opción</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="previousPets">
                        ¿Ha tenido mascotas anteriormente?
                    </label>
                    <Select
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        id="previousPets"
                        name="previousPets"
                        value={inputsForm.previousPetsAdoption}
                        onChange={handleSelectChange(
                            "previousPetsAdoption"
                        )}
                    >
                        <option disabled selected>Selecciona una opción</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="currentPets">
                        ¿Actualmente tiene mascotas?
                    </label>
                    <Select
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        id="currentPets"
                        name="currentPets"
                        value={inputsForm.currentPetsAdoption}
                        onChange={handleSelectChange(
                            "currentPetsAdoption"
                        )}
                    >
                        <option disabled selected>Selecciona una opción</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="adoptedPets">
                        ¿Ha tenido alguna mascota que haya sido adoptada,
                        comprada o rescatada?
                    </label>
                    <Select
                        borderColor={color.LightGray2}
                        _hover={{
                            color: `${color.Gray}`,
                            borderColor: `${color.Gray}`,
                        }}
                        focusBorderColor={color.Gray}
                        required
                        id="adoptedPets"
                        name="adoptedPets"
                        value={inputsForm.adoptedPetsAdoption}
                        onChange={handleSelectChange(
                            "adoptedPetsAdoption"
                        )}
                    >
                        <option disabled selected>Selecciona una opción</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </Select>
                </div>
                <Button type="submit" />
            </Form>
        </SectionFormAnimalInAdoption>
    );
};

const SectionFormAnimalInAdoption = styled.section`
    width: 40%;
    padding: 2rem;
    border-radius: 0.3rem;
    border: 1px solid ${color.LightGray};
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
        display: flex;
        flex-direction: column;
    }
`;

const Button = styled.input`
    background-color: ${color.Brown};
    border: none;
    border-radius: 0.3rem;
    width: 100%;
    font-size: 1.3rem;
    height: 3.5rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }
`;
