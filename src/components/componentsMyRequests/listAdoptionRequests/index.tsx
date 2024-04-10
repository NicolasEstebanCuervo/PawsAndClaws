import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { IFormAdoption } from "../../../redux/reducers/animalSlice";
import { CardAdoptionRequests } from "../cardAdoptionRequests";
import { LM, SM, XLLM, XLM } from "../../../theme/fonts";
import ImageBackgroundWithoutAdoption from "../../../assets/images/BackgroundWithoutAdoption.png";
import ImageBackgroundWithAdoption from "../../../assets/images/BackgroundWithListAdoption.png";
import { ListItem, OrderedList } from "@chakra-ui/react";

export const ListAdoptionRequests = () => {
    const adoptionsRequests = useSelector(
        (state: any) => state.AnimalSlice.adoptionsRequests
    );

    return (
        <SectionAdoptionRequests>
            {!adoptionsRequests || adoptionsRequests.length === 0 ? (
                <SectionTutorial>
                    <TextsTutorial>
                        <TitleSections>
                            Parece que actualmente no hay solicitudes de
                            adopción pendientes. ¿Te gustaría presentar una?
                            Sigue estos pasos:
                        </TitleSections>
                        <OrderedListComponent>
                            <ListItem fontSize="2xl">
                                <LM>Visita la pestaña de "Adoptar"</LM>
                                <SM>
                                    Dirígete a la sección designada como
                                    "Adoptar" en nuestra página web. Es como
                                    abrir la puerta a un mundo lleno de peludos
                                    amigos que están esperando ansiosamente
                                    encontrar un hogar donde puedan compartir
                                    amor y alegría.
                                </SM>
                            </ListItem>
                            <ListItem fontSize="2xl">
                                <LM>Explora la lista de animales</LM>
                                <SM>
                                    Una vez dentro de la pestaña de "Adoptar",
                                    te encontrarás con una lista extensa y
                                    variada de preciosos compañeros peludos.
                                    Desde encantadores gatitos hasta adorables
                                    perritos, cada uno tiene su propia historia
                                    y personalidad única, ¡así que tómate tu
                                    tiempo para conocerlos a todos!
                                </SM>
                            </ListItem>

                            <ListItem fontSize="2xl">
                                <LM>Escoge a tu futura mascota</LM>
                                <SM>
                                    Este es el momento emocionante en el que
                                    decides quién será tu compañero leal.
                                    Desliza, haz clic o simplemente enamórate a
                                    primera vista de esa carita tierna que te
                                    mira desde la pantalla. Una vez que hayas
                                    elegido, ¡prepárate para dar el siguiente
                                    paso hacia la adopción!
                                </SM>
                            </ListItem>

                            <ListItem fontSize="2xl">
                                <LM>Completa el formulario de adopción</LM>
                                <SM>
                                    Llenar el formulario es como el primer
                                    abrazo virtual que le das a tu futura
                                    mascota. Proporciona la información
                                    solicitada con amor y cuidado, asegurándote
                                    de que esté todo correctamente rellenado.
                                    Este paso es crucial para asegurarnos de que
                                    estás listo para asumir la responsabilidad
                                    de cuidar a tu nueva mascota.
                                </SM>
                            </ListItem>
                            <ListItem fontSize="2xl">
                                <LM>
                                    Espera el contacto del equipo de adopción
                                </LM>
                                <SM>
                                    Una vez que hayas enviado tu formulario,
                                    nuestro dedicado equipo de adopción revisará
                                    cuidadosamente tu solicitud. Mientras tanto,
                                    mantén la emoción y la anticipación a tope,
                                    porque muy pronto recibirás noticias sobre
                                    el siguiente paso en el proceso de adopción.
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
                        Lista de tus solicitudes de adopcion
                    </TitleSections>

                    {adoptionsRequests.map((request: IFormAdoption) => (
                        <CardAdoptionRequests
                            requestInfo={request}
                            key={request.id}
                        />
                    ))}
                </SectionListRequest>
            )}
        </SectionAdoptionRequests>
    );
};

const SectionAdoptionRequests = styled.section`
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
    padding-top: 2rem;
    width: 100%;
    height: 65rem;
    background: url(${ImageBackgroundWithoutAdoption});
    background-size: cover;
    background-position: center bottom;
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
    padding: 2rem 0 5rem;
    width: 100%;
    height: auto;
    min-height: 30rem;
    background: url(${ImageBackgroundWithAdoption});
    background-size: cover;
    background-position: center bottom;
`;
