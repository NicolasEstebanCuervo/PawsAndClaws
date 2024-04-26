import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as color from "../../../theme/colors";
import { MM, XLLM } from "../../../theme/fonts";
import ImageBackground from "../../../assets/images/BgFunFactsAppointment.webp";

export const FunFacts = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
                duration: 2,
            },
        },
    };
    const facts = [
        "Paws and Claws fue fundada en 2005 por Nicolás Rojas, un apasionado amante de los animales que se dedicó a crear un refugio seguro y amoroso para mascotas sin hogar en las afueras de la ciudad.",
        "La mascota más inusual que Paws and Claws ha ayudado a encontrar un hogar fue un hurón albino llamado Snowball, que fue adoptado por una familia de entusiastas de los animales exóticos.",
        "Cada año, Paws and Claws organiza un evento llamado 'Paws in the Park', donde los dueños de mascotas pueden participar en concursos de disfraces, juegos y actividades para recaudar fondos para el refugio.",
        "El gato más longevo que ha sido atendido por Paws and Claws fue un gato siamés llamado Whiskers, que vivió hasta los 23 años y fue adoptado por una pareja de jubilados.",
        "El equipo de Paws and Claws está compuesto por un grupo diverso de voluntarios, que van desde estudiantes universitarios hasta profesionales jubilados, todos unidos por su amor por los animales.",
        "Paws and Claws ofrece programas de terapia asistida con animales en colaboración con centros de atención médica locales, donde los perros del refugio visitan a pacientes en hospitales y centros de rehabilitación.",
        "El perro más grande que Paws and Claws ha tenido en su refugio fue un Gran Danés llamado Titan, que pesaba más de 90 kilogramos y fue adoptado por una familia que vivía en una granja.",
        "Paws and Claws ha sido reconocida por su compromiso con el bienestar animal y recibió el premio 'Community Paw-sitivity Award' en 2019 por su impacto positivo en la comunidad.",
        "El logo de Paws and Claws fue diseñado por un artista local y representa una huella de perro rodeada de corazones, simbolizando el amor y el compromiso de la organización con sus mascotas.",
        "Paws and Claws ofrece servicios de adopción responsables, que incluyen chequeos médicos, vacunas y esterilización de todas las mascotas antes de ser entregadas a sus nuevos hogares, garantizando así la salud y el bienestar de los animales."
    ];

    return (
        <Container ref={ref}>
            <XLLM>¿Sabías esto de los perros?</XLLM>
            <SubContainer
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                    {facts.map((fact, index) => (
                        <ContainerFact
                            key={index}
                            variants={{
                                hidden: { x: 0, y: 0, opacity: 0 },
                                visible: {
                                    x:
                                        Math.cos(
                                            (index / facts.length) * 2 * Math.PI
                                        ) * 700,
                                    y:
                                        Math.sin(
                                            (index / facts.length) * 2 * Math.PI
                                        ) * 350,
                                    opacity: 1,
                                    transition: {
                                        delay: 1 * index,
                                        duration: 0.5,
                                    },
                                },
                            }}
                        >
                            <MM>{fact}</MM>
                        </ContainerFact>
                    ))}
                <Image
                    src={require("../../../assets/images/FunFact5.webp")}
                    alt="Imagen de una mascota"
                />
            </SubContainer>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    max-width: 2000px;
    height: 75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 10rem;
    padding: 5rem 0 50rem;
    background: ${color.Cream};
    background: url(${ImageBackground});
    background-size: cover;
    background-position: center bottom;
`;

const SubContainer = styled(motion.div)`
    position: relative;
`;

const Image = styled.img`
    position: relative !important;
    top: 5rem;
    left: 15rem;
    transform: translate(-60%, -50%);
    width: 25rem;
    margin-top: 20rem;
    filter: drop-shadow(1px 1px 20px ${color.Brown});
`;

const ContainerFact = styled(motion.div)`
    text-align: center;
    position: absolute;
    width: 25rem;
    top: 25rem;
`;
