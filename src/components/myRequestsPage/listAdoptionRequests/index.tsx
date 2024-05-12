import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { IFormAdoption } from "@reducers/animalSlice";
import { LM, SM, XLLM } from "@theme/fonts";
import ImageBackgroundWithoutAdoption from "@assets/images/BgWithoutAnimalInAdoption.webp";
import ImageBackgroundWithAdoption from "@assets/images/BgWithAnimalsInAdoption.webp";
import { ListItem, OrderedList } from "@chakra-ui/react";
import { CardAdoptionRequests } from "../cardAdoptionRequests";
import * as color from "@theme/colors";

export const ListAdoptionRequests = () => {
    const animalSlice = useSelector((state: any) => state.AnimalSlice);

    return (
        <Container>
            {!animalSlice.adoptionsRequests ||
            animalSlice.adoptionsRequests.length === 0 ? (
                <ContainerTutorial>
                    <Texts>
                        <Title>
                            Parece que actualmente no hay solicitudes de
                            adopción pendientes. ¿Te gustaría presentar una?
                            Sigue estos pasos:
                        </Title>
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
                    </Texts>
                </ContainerTutorial>
            ) : (
                <ContainerListRequest>
                    <Title>Lista de tus solicitudes de adopcion</Title>

                    {animalSlice.adoptionsRequests.map(
                        (request: IFormAdoption) => (
                            <CardAdoptionRequests
                                requestInfo={request}
                                key={request.id}
                            />
                        )
                    )}
                </ContainerListRequest>
            )}
        </Container>
    );
};

const Container = styled.section`
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

const ContainerTutorial = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    width: 100%;
    height: 90%;
    background: url(${ImageBackgroundWithoutAdoption});
    background-size: cover;
    background-position: center;
    padding: 3rem 1rem;

    @media (max-width: 1150px) {
        background: ${color.LightBeige};
        height: 80%;
    }
`;

const Title = styled(XLLM)`
    font-weight: bold;
    width: 90%;
    text-align: center;
`;

const Texts = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    width: 55%;

    @media (max-width: 1150px) {
        width: 95%;
        height: 100%;
        justify-content: center;
    }
`;

const OrderedListComponent = styled(OrderedList)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ContainerListRequest = styled.div`
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

    @media (min-width: 1250px) and (max-width: 1599px) {
        height: 40rem;
    }

    @media (max-width: 750px) {
        background: ${color.LightBeige};
    }
`;
