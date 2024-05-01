import styled from "@emotion/styled";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from "@chakra-ui/react";
import * as color from "@theme/colors";
import { XLLLM } from "@theme/fonts";

export const FrequentQuestions = () => {
    return (
        <Container>
            <Title>Preguntas frecuentes</Title>
            <SubContainer>
                <Accordion allowMultiple borderBottom="transparent">
                    <AccordionItem borderTop="none">
                        <h2>
                            <AccordionButton
                                bg={color.LightBeige}
                                _hover={{
                                    background: `${color.Beige}`,
                                }}
                            >
                                <Box
                                    as="h6"
                                    flex="1"
                                    margin="0"
                                    padding="0.5rem 0"
                                    textAlign="left"
                                >
                                    ¿Cómo puedo adoptar un gato o un perro a
                                    través de su página?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Puedes adoptar un gato o un perro navegando por
                            nuestra sección de "Adoptar" y completando el
                            formulario de solicitud. Uno de nuestros asesores se
                            pondrá en contacto contigo para continuar con el
                            proceso de adopción.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton
                                bg={color.LightBeige}
                                _hover={{
                                    background: `${color.Beige}`,
                                }}
                            >
                                <Box
                                    as="h6"
                                    flex="1"
                                    margin="0"
                                    padding="0.5rem 0"
                                    textAlign="left"
                                >
                                    ¿Qué pasos debo seguir después de enviar mi
                                    solicitud de adopción?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Después de enviar tu solicitud de adopción, uno de
                            nuestros asesores revisará la información
                            proporcionada y se comunicará contigo para obtener
                            más detalles y seguir adelante con el proceso de
                            adopción.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton
                                bg={color.LightBeige}
                                _hover={{
                                    background: `${color.Beige}`,
                                }}
                            >
                                <Box
                                    as="h6"
                                    flex="1"
                                    margin="0"
                                    padding="0.5rem 0"
                                    textAlign="left"
                                >
                                    ¿Cuánto tiempo suele tomar el proceso de
                                    adopción desde que envío mi solicitud?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            El tiempo necesario para el proceso de adopción
                            puede variar, pero nuestro objetivo es completarlo
                            lo más rápido posible. Dependerá de la
                            disponibilidad de la mascota deseada y de la
                            evaluación de tu solicitud.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton
                                bg={color.LightBeige}
                                _hover={{
                                    background: `${color.Beige}`,
                                }}
                            >
                                <Box
                                    as="h6"
                                    flex="1"
                                    margin="0"
                                    padding="0.5rem 0"
                                    textAlign="left"
                                >
                                    ¿Qué tipo de mascotas están disponibles para
                                    adopción en su página?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            En nuestra página, tenemos gatos y perros que están
                            en busca de un hogar amoroso. Puedes explorar
                            nuestra sección de adopciones para conocer a los
                            animales disponibles.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton
                                bg={color.LightBeige}
                                _hover={{
                                    background: `${color.Beige}`,
                                }}
                            >
                                <Box
                                    as="h6"
                                    flex="1"
                                    margin="0"
                                    padding="0.5rem 0"
                                    textAlign="left"
                                >
                                    ¿Puedo conocer a la mascota antes de
                                    finalizar el proceso de adopción?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Por supuesto, entendemos la importancia de conocer a
                            la mascota antes de tomar la decisión final. Una vez
                            que tu solicitud sea aprobada, te ayudaremos a
                            programar una cita para que puedas conocer al animal
                            en persona.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton
                                bg={color.LightBeige}
                                _hover={{
                                    background: `${color.Beige}`,
                                }}
                            >
                                <Box
                                    as="h6"
                                    flex="1"
                                    margin="0"
                                    padding="0.5rem 0"
                                    textAlign="left"
                                >
                                    ¿Cómo puedo obtener más información sobre
                                    las mascotas disponibles para adopción?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Para obtener más información sobre las mascotas
                            disponibles para adopción, puedes navegar por
                            nuestra página y ver las descripciones detalladas de
                            cada animal. También puedes ponerte en contacto con
                            nuestro equipo para hacer preguntas específicas.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton
                                bg={color.LightBeige}
                                _hover={{
                                    background: `${color.Beige}`,
                                }}
                            >
                                <Box
                                    as="h6"
                                    flex="1"
                                    margin="0"
                                    padding="0.5rem 0"
                                    textAlign="left"
                                >
                                    ¿Ofrecen servicios de entrega para las
                                    mascotas adoptadas?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Sí, ofrecemos servicios de entrega para las mascotas
                            adoptadas. Una vez que se haya completado el proceso
                            de adopción, podemos coordinar la entrega del animal
                            a tu domicilio, sujeto a disponibilidad y
                            condiciones.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </SubContainer>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3rem;
    margin-top: 5rem;
`;

const Title = styled(XLLLM)`
    font-weight: bold;
`;

const SubContainer = styled.div`
    width: 70%;
`;
