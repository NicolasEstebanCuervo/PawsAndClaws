import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { IFormAppointment } from "../../../redux/reducers/animalSlice";
import { LM, SM, XLLM } from "../../../theme/fonts";
import { CardAppointmentRequests } from "../cardAppointmentRequest";
import { ListItem, OrderedList } from "@chakra-ui/react";
import * as color from "../../../theme/colors";

export const ListAppointmentRequests = () => {
    const appointmentRequests = useSelector(
        (state: any) => state.AnimalSlice.appointmentRequests
    );

    return (
        <SectionAppointmentRequests>
            {!appointmentRequests || appointmentRequests.length === 0 ? (
                <SectionTutorial>
                    <TextsTutorial>
                        <TitleSections>
                            ¡No tienes citas agendadas! Aquí te explicamos cómo
                            agendar una cita con nuestro veterinario:
                        </TitleSections>
                        <OrderedListComponent>
                            <ListItem fontSize="2xl">
                                <LM>Visita la página de "Mis Citas"</LM>
                                <SM>
                                    Una vez en la página de "Mis Citas",
                                    encontrarás un formulario simple pero
                                    importante. Llénalo con los detalles
                                    necesarios, como el nombre de tu mascota, la
                                    razón de la cita y tus datos de contacto.
                                    Este paso es vital para asegurarnos de que
                                    podamos atender las necesidades de tu peludo
                                    amigo de la mejor manera posible.
                                </SM>
                            </ListItem>
                            <ListItem fontSize="2xl">
                                <LM>Espera el contacto del veterinario</LM>
                                <SM>
                                    Después de enviar el formulario, nuestro
                                    dedicado equipo de veterinarios revisará tu
                                    solicitud. Pacientemente, aguarda a que te
                                    contactemos para confirmar la cita. Nuestro
                                    objetivo es brindar el mejor cuidado posible
                                    a tu mascota, así que asegúrate de estar
                                    atento a cualquier llamada o mensaje de
                                    nuestro equipo.
                                </SM>
                            </ListItem>

                            <ListItem fontSize="2xl">
                                <LM>Prepara a tu mascota para la visita</LM>
                                <SM>
                                    Antes de la cita, asegúrate de preparar a tu
                                    mascota para la visita al veterinario. Esto
                                    incluye llevar consigo cualquier registro
                                    médico relevante y, por supuesto, asegurarte
                                    de que esté cómodo y tranquilo. ¡Estamos
                                    aquí para hacer que la experiencia sea lo
                                    más positiva posible tanto para ti como para
                                    tu mascota!
                                </SM>
                            </ListItem>

                            <ListItem fontSize="2xl">
                                <LM>
                                    Disfruta de la consulta con el veterinario
                                </LM>
                                <SM>
                                    Finalmente, llega el momento de la consulta.
                                    Nuestro amable equipo de veterinarios estará
                                    encantado de atender a tu mascota y
                                    responder cualquier pregunta que puedas
                                    tener. Confía en nosotros para proporcionar
                                    el mejor cuidado y asesoramiento para
                                    mantener a tu peludo amigo feliz y
                                    saludable.
                                </SM>
                            </ListItem>

                            <ListItem fontSize="2xl">
                                <LM>
                                    Prepárate para conocer a tu nuevo amigo
                                    peludo
                                </LM>
                                <SM>
                                    ¡Felicidades! Si tu solicitud de adopción es
                                    aprobada, pronto te pondrás en contacto con
                                    el adorable ser que pronto compartirá tu
                                    vida. Prepara tu corazón y tu hogar para
                                    darle la bienvenida con los brazos abiertos,
                                    porque la aventura de la adopción está a
                                    punto de comenzar.
                                </SM>
                            </ListItem>
                        </OrderedListComponent>
                    </TextsTutorial>
                </SectionTutorial>
            ) : (
                <SectionListRequest>
                    <TitleSections>
                        Lista de tus citas agendadas
                    </TitleSections>

                    {appointmentRequests.map((request: IFormAppointment) => (
                        <CardAppointmentRequests
                            requestInfo={request}
                            key={request.id}
                        />
                    ))}
                </SectionListRequest>
            )}
        </SectionAppointmentRequests>
    );
};

const SectionAppointmentRequests = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;

    ul {
        padding-left: 0.5rem;
    }
    ol {
        padding-left: 0;
    }
`;

const SectionTutorial = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
    width: 100%;
    background: ${color.LightGray};
`;

const TitleSections = styled(XLLM)`
    font-weight: bold;
`;

const TextsTutorial = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    width: 50%;
`;

const OrderedListComponent = styled(OrderedList)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SectionListRequest = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0 5rem;
    width: 100%;
    height: auto;
    min-height: 30rem;
    background: ${color.LightBeige};
`;
