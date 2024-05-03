import { Input, Select } from "@chakra-ui/react";
import styled from "@emotion/styled";
import * as color from "@theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, FormEvent, useState } from "react";
import {
    createAppointmentRequest,
    setInputValueChanged,
} from "@reducers/animalSlice";
import { v4 as uuidv4 } from "uuid";
import { PopNotification } from "../../componentsGlobals/pop-up/popNotification";
import { XLLM } from "@theme/fonts";

export const FormAppointment = () => {
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
            createAppointmentRequest({
                id: uuidv4(),
                fullNameAppointment: animalSlice.fullNameAppointment,
                phoneNumberAppointment: animalSlice.phoneNumberAppointment,
                emailAppointment: animalSlice.emailAppointment,
                petNameAppointment: animalSlice.petNameAppointment,
                petSpeciesAppointment: animalSlice.petSpeciesAppointment,
                petBreedAppointment: animalSlice.petBreedAppointment,
                petAgeAppointment: animalSlice.petAgeAppointment,
                petSexAppointment: animalSlice.petSexAppointment,
                petWeightAppointment: animalSlice.petWeightAppointment,
                reasonAppointment: animalSlice.reasonAppointment,
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
        <Container>
            <Title>Formulario de adopción</Title>
            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="ownerName">Nombre del Propietario:</label>
                    <Input
                        type="text"
                        id="ownerName"
                        name="ownerName"
                        placeholder="Nombre completo"
                        maxLength={30}
                        required
                        value={animalSlice.fullNameAppointment || ""}
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
                        value={animalSlice.phoneNumberAppointment || ""}
                        onChange={handleInputChange("phoneNumberAppointment")}
                        maxLength={15}
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
                        value={animalSlice.emailAppointment || ""}
                        onChange={handleInputChange("emailAppointment")}
                        maxLength={50}
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
                        value={animalSlice.petNameAppointment || ""}
                        onChange={handleInputChange("petNameAppointment")}
                        maxLength={30}
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
                        value={animalSlice.petSpeciesAppointment || ""}
                        onChange={handleInputChange("petSpeciesAppointment")}
                        maxLength={15}
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
                        value={animalSlice.petBreedAppointment || ""}
                        onChange={handleInputChange("petBreedAppointment")}
                        maxLength={15}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="petAge">Edad de la Mascota:</label>
                    <Input
                        type="text"
                        id="petAge"
                        name="petAge"
                        placeholder="Edad de la mascota (en años)"
                        value={animalSlice.petAgeAppointment || ""}
                        onChange={handleInputChange("petAgeAppointment")}
                        maxLength={2}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="petSex">Sexo de la Mascota:</label>
                    <Select
                        id="petSex"
                        name="petSex"
                        required
                        value={animalSlice.petSexAppointment || ""}
                        onChange={handleSelectChange("petSexAppointment")}
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="macho">Macho</option>
                        <option value="hembra">Hembra</option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="petWeight">Peso de la Mascota:</label>
                    <Input
                        type="text"
                        id="petWeight"
                        name="petWeight"
                        placeholder="Peso de la mascota (en kg)"
                        value={animalSlice.petWeightAppointment || ""}
                        onChange={handleInputChange("petWeightAppointment")}
                        maxLength={2}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="appointmentReason">
                        Motivo de la Cita:
                    </label>
                    <Input
                        type="text"
                        id="appointmentReason"
                        name="appointmentReason"
                        placeholder="Motivo de la cita"
                        value={animalSlice.reasonAppointment || ""}
                        onChange={handleInputChange("reasonAppointment")}
                        maxLength={200}
                        required
                    />
                </div>

                <PopNotification
                    actionComponent={<Button type="submit" />}
                    active={activePop}
                    titleAlert="¡Cita agendada con exito!"
                    descriptionAlert='Tu cita ha sido agendada exitosamente, puedes ver tus solicitudes de citas, en el apartado de "Mis solicitudes"'
                />
            </Form>
        </Container>
    );
};

const Container = styled.section`
    width: 50%;

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

    @media (max-width: 750px) {
        font-size: 1rem;
    }
`;
