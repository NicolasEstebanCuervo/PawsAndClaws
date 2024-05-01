import { Input, Select } from "@chakra-ui/react";
import styled from "@emotion/styled";
import * as color from "@theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent, useState } from "react";
import {
    createAdoptionRequest,
    setInputValueChanged,
} from "@reducers/animalSlice";
import { v4 as uuidv4 } from "uuid";
import { PopNotification } from "../../componentsGlobals/pop-up/popNotification";
import { XLLM } from "@theme/fonts";

export const FormAnimalInAdoption = () => {
    const animalSlice = useSelector((state: any) => state.AnimalSlice);
    const dispatch = useDispatch();
    const [activePop, setActivePop] = useState(false);

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
                id: uuidv4(),
                fullNameAdoption: animalSlice.fullNameAdoption,
                addressAdoption: animalSlice.addressAdoption,
                phoneNumberAdoption: animalSlice.phoneNumberAdoption,
                emailAdoption: animalSlice.emailAdoption,
                housingAdoption: animalSlice.housingAdoption,
                landlorTenantAdoption: animalSlice.landlorTenantAdoption,
                fencedYardAdoption: animalSlice.fencedYardAdoption,
                previousPetsAdoption: animalSlice.previousPetsAdoption,
                currentPetsAdoption: animalSlice.currentPetsAdoption,
                adoptedPetsAdoption: animalSlice.adoptedPetsAdoption,
                theAnimalAdoption: animalSlice.animalSelected,
            })
        );

        setActivePop(true);

        setInterval(() => {
            setActivePop(false);
        }, 100);

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
        <Container>
            <Title>Formulario de contacto</Title>
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
                        maxLength={30}
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Nombre completo"
                        value={animalSlice.fullNameAdoption || ""}
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
                        maxLength={50}
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Dirección"
                        value={animalSlice.addressAdoption || ""}
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
                        maxLength={15}
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Número de teléfono"
                        value={animalSlice.phoneNumberAdoption || ""}
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
                        maxLength={50}
                        type="email"
                        id="email"
                        name="emailAdoption"
                        placeholder="Correo electrónico"
                        value={animalSlice.emailAdoption || ""}
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
                        value={animalSlice.housingAdoption || ""}
                        onChange={handleSelectChange("housingAdoption")}
                    >
                        <option value="">Selecciona una opción</option>
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
                        value={animalSlice.landlorTenantAdoption}
                        onChange={handleSelectChange("landlorTenantAdoption")}
                    >
                        <option value="">Selecciona una opción</option>
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
                        value={animalSlice.fencedYardAdoption}
                        onChange={handleSelectChange("fencedYardAdoption")}
                    >
                        <option value="">Selecciona una opción</option>
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
                        value={animalSlice.previousPetsAdoption}
                        onChange={handleSelectChange("previousPetsAdoption")}
                    >
                        <option value="">Selecciona una opción</option>
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
                        value={animalSlice.currentPetsAdoption}
                        onChange={handleSelectChange("currentPetsAdoption")}
                    >
                        <option value="">Selecciona una opción</option>
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
                        value={animalSlice.adoptedPetsAdoption}
                        onChange={handleSelectChange("adoptedPetsAdoption")}
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                    </Select>
                </div>
                <PopNotification
                    actionComponent={<Button type="submit" />}
                    active={activePop}
                    titleAlert="¡Solicitud de adopcion agendad con exito!"
                    descriptionAlert='Tu solicitud de adopcion ha sido agendada exitosamente, puedes ver tus solicitudes de adopciones, en el apartado de "Mis solicitudes"'
                />
            </Form>
        </Container>
    );
};

const Container = styled.section`
    width: 40%;

    @media (max-width: 1250px) {
        width: 100%;
    }
`;

const Title = styled(XLLM)`
    display: none;

    @media (max-width: 1250px) {
        display: block;
        text-align: center;
        margin-bottom: 2rem;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    border-radius: 0.3rem;
    border: 1px solid ${color.LightGray};

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
