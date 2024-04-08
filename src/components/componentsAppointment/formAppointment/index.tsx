import { Input, Select } from "@chakra-ui/react";
import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent } from "react";
import {
    createAppointmentRequest,
    setInputValueChanged,
} from "../../../redux/reducers/animalSlice";
import { v4 as uuidv4 } from "uuid";

export const FormAppointment = () => {
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
            createAppointmentRequest({
                id: uuidv4(),
                fullNameAppointment: inputsForm.fullNameAppointment,
                phoneNumberAppointment: inputsForm.phoneNumberAppointment,
                emailAppointment: inputsForm.emailAppointment,
                petNameAppointment: inputsForm.petNameAppointment,
                petSpeciesAppointment: inputsForm.petSpeciesAppointment,
                petBreedAppointment: inputsForm.petBreedAppointment,
                petAgeAppointment: inputsForm.petAgeAppointment,
                petSexAppointment: inputsForm.petSexAppointment,
                petWeightAppointment: inputsForm.petWeightAppointment,
                reasonAppointment: inputsForm.reasonAppointment,
            })
        );

        dispatch(
            setInputValueChanged({ fieldName: "fullNameAdoption", value: "" })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "fullNameAppointment",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "phoneNumberAppointment",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({ fieldName: "emailAppointment", value: "" })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "petNameAppointment",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "petSpeciesAppointment",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "petBreedAppointment",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "petAgeAppointment",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "petSexAppointment",
                value: "Selecciona una opción",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "petWeightAppointment",
                value: "",
            })
        );
        dispatch(
            setInputValueChanged({
                fieldName: "reasonAppointment",
                value: "",
            })
        );
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="ownerName">Nombre del Propietario:</label>
                <Input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    placeholder="Nombre completo"
                    required
                    value={inputsForm.fullNameAppointment}
                    onChange={handleInputChange("fullNameAppointment")}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Número de Teléfono:</label>
                <Input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Número de teléfono"
                    value={inputsForm.phoneNumberAppointment}
                    onChange={handleInputChange("phoneNumberAppointment")}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Correo Electrónico:</label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={inputsForm.emailAppointment}
                    onChange={handleInputChange("emailAppointment")}
                    required
                />
            </div>
            <div>
                <label htmlFor="petName">Nombre de la Mascota:</label>
                <Input
                    type="text"
                    id="petName"
                    name="petName"
                    placeholder="Nombre de la mascota"
                    value={inputsForm.petNameAppointment}
                    onChange={handleInputChange("petNameAppointment")}
                    required
                />
            </div>
            <div>
                <label htmlFor="petSpecies">Especie de la Mascota:</label>
                <Input
                    type="text"
                    id="petSpecies"
                    name="petSpecies"
                    placeholder="Especie de la mascota"
                    value={inputsForm.petSpeciesAppointment}
                    onChange={handleInputChange("petSpeciesAppointment")}
                    required
                />
            </div>
            <div>
                <label htmlFor="petBreed">Raza de la Mascota:</label>
                <Input
                    type="text"
                    id="petBreed"
                    name="petBreed"
                    placeholder="Raza de la mascota"
                    value={inputsForm.petBreedAppointment}
                    onChange={handleInputChange("petBreedAppointment")}
                    required
                />
            </div>
            <div>
                <label htmlFor="petAge">Edad de la Mascota:</label>
                <Input
                    type="number"
                    id="petAge"
                    name="petAge"
                    placeholder="Edad de la mascota (en años)"
                    value={inputsForm.petAgeAppointment}
                    onChange={handleInputChange("petAgeAppointment")}
                    required
                />
            </div>
            <div>
                <label htmlFor="petSex">Sexo de la Mascota:</label>
                <Select
                    id="petSex"
                    name="petSex"
                    required
                    value={inputsForm.petSexAppointment}
                    onChange={handleSelectChange("petSexAppointment")}
                >
                    <option disabled selected>
                        Selecciona una opción
                    </option>
                    <option value="macho">Macho</option>
                    <option value="hembra">Hembra</option>
                </Select>
            </div>
            <div>
                <label htmlFor="petWeight">Peso de la Mascota:</label>
                <Input
                    type="number"
                    id="petWeight"
                    name="petWeight"
                    placeholder="Peso de la mascota (en kg)"
                    value={inputsForm.petWeightAppointment}
                    onChange={handleInputChange("petWeightAppointment")}
                    required
                />
            </div>
            <div>
                <label htmlFor="appointmentReason">Motivo de la Cita:</label>
                <Input
                    type="text"
                    id="appointmentReason"
                    name="appointmentReason"
                    placeholder="Motivo de la cita"
                    value={inputsForm.reasonAppointment}
                    onChange={handleInputChange("reasonAppointment")}
                    required
                />
            </div>
            <Button type="submit" />
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    border-radius: 0.3rem;
    border: 1px solid ${color.LightGray};
    width: 50%;

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
