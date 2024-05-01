import styled from "@emotion/styled";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    List,
    ListItem,
    ListIcon,
    Button,
} from "@chakra-ui/react";
import { MM, SM } from "@theme/fonts";
import * as color from "@theme/colors";
import { useEffect, useState } from "react";
import { IoPawSharp } from "react-icons/io5";
import {
    IFormAppointment,
    deleteAppointmentsRequests,
} from "@reducers/animalSlice";
import { useDispatch } from "react-redux";
import { PopConfirmation } from "../../componentsGlobals/pop-up/popConfirmation";

export const CardAppointmentRequests = ({
    requestInfo,
}: {
    requestInfo: IFormAppointment;
}) => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();

    const changeTrueClicked = () => {
        setClicked(true);
    };

    const changeFalseClicked = () => {
        setClicked(false);
    };

    const deleteAdoptionRequest = () => {
        dispatch(deleteAppointmentsRequests(requestInfo));
    };

    const [statusRequest, setStatusRequest] = useState<string>("");

    useEffect(() => {
        const startDate = new Date();
        const currentDate = new Date();
        const difference = currentDate.getTime() - startDate.getTime();
        const daysPassed = Math.ceil(difference / (1000 * 3600 * 24));

        if (daysPassed < 3) {
            setStatusRequest("Pendiente");
        } else if (daysPassed < 6) {
            const random = Math.random();
            if (random < 0.1) {
                setStatusRequest("Rechazada");
            } else {
                setStatusRequest("En progreso");
            }
        } else if (daysPassed < 9) {
            if (statusRequest !== "Rechazada") {
                setStatusRequest("Aprobada");
            }
        } else {
            if (statusRequest !== "Rechazada") {
                setStatusRequest("Finalizada");
            }
        }
    }, [statusRequest]);

    return (
        <Popover
            placement="top-start"
            onOpen={changeTrueClicked}
            onClose={changeFalseClicked}
        >
            <PopoverTrigger>
                <ContentTrigger status={statusRequest} clicked={clicked}>
                    <MM>
                        Cita agendada en nombre de:{" "}
                        {requestInfo.fullNameAppointment}
                    </MM>
                    <SM>Estado de la solicitud: {statusRequest}</SM>
                </ContentTrigger>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <ContentPopover>
                        <TitleContentPopover>
                            Informacion del solicitante:
                        </TitleContentPopover>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={IoPawSharp} color={color.Green} />

                                <b>Nombre completo: </b>

                                {requestInfo.fullNameAppointment}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={IoPawSharp} color={color.Green} />
                                <b>Email: </b>
                                {requestInfo.emailAppointment}
                            </ListItem>

                            <ListItem>
                                <ListIcon as={IoPawSharp} color={color.Green} />
                                <b>Numero de telefono: </b>
                                {requestInfo.phoneNumberAppointment}
                            </ListItem>

                            <ListItem>
                                <ListIcon as={IoPawSharp} color={color.Green} />
                                <b> Nombre de la mascota: </b>
                                {requestInfo.petNameAppointment}
                            </ListItem>

                            <ListItem>
                                <ListIcon as={IoPawSharp} color={color.Green} />
                                <b> Edad de la mascota: </b>
                                {requestInfo.petAgeAppointment}
                            </ListItem>

                            <ListItem>
                                <ListIcon as={IoPawSharp} color={color.Green} />
                                <b> Motivo de la consulta: </b>
                                {requestInfo.reasonAppointment}
                            </ListItem>
                        </List>
                    </ContentPopover>



                    <PopConfirmation
                        functionActive={deleteAdoptionRequest}
                        actionComponent={
                            <Button
                            margin="0 0 1rem 1rem"
                            colorScheme="teal"
                            >
                                Borrar peticion
                            </Button>
                        }
                        titleAlert="¿Estas seguro que quieres eliminar esta cita agendada?"
                        descriptionAlert="Si eliminas esta cita, tendras que llenar el formulario de tu mascota nuevamente."
                    />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

const ContentTrigger = styled.div`
    width: 50rem;
    position: relative;
    padding: 1rem;
    border-radius: 0.3rem;

    background: ${({ clicked, status }: { clicked: boolean; status: string }) =>
        status === "Rechazada"
            ? clicked
                ? `${color.LightRed2}`
                : `${color.LightRed}`
            : clicked
            ? `${color.Beige}`
            : `${color.LightBrown}`};
`;

const ContentPopover = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const TitleContentPopover = styled(MM)`
    font-weight: 500;
`;
