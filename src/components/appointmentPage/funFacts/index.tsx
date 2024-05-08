import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as color from "@theme/colors";
import { MM, XLLM } from "@theme/fonts";
import ImageBackground from "@assets/images/BgFunFactsAppointment.webp";
import { useEffect, useState } from "react";

export const FunFacts = () => {

    const [xViewport, setXViewport] = useState(500);
    const [yViewport, setYViewport] = useState(350);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
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
        "Paws and Claws ofrece programas de terapia asistida con animales en colaboración con centros de atención médica locales, donde los perros del refugio visitan a pacientes en hospitales y centros de rehabilitación.",
        "El perro más grande que Paws and Claws ha tenido en su refugio fue un Gran Danés llamado Titan, que pesaba más de 90 kilogramos y fue adoptado por una familia que vivía en una granja.",
        "Paws and Claws ha sido reconocida por su compromiso con el bienestar animal y recibió el premio 'Community Paw-sitivity Award' en 2019 por su impacto positivo en la comunidad.",
        "El logo de Paws and Claws fue diseñado por un artista local y representa una huella de perro rodeada de corazones, simbolizando el amor y el compromiso de la organización con sus mascotas.",
        "Paws and Claws ofrece servicios de adopción responsables, que incluyen chequeos médicos, vacunas y esterilización de todas las mascotas antes de ser entregadas a sus nuevos hogares, garantizando así la salud y el bienestar de los animales."
    ];

    useEffect(() => {
        const calculateWidth = () => {
            if (window.screen.availWidth > 1600) {
                setXViewport(500);
                setYViewport(350);
            } else if (
                window.screen.availWidth <= 1600 &&
                window.screen.availWidth > 1250
            ) {
                setXViewport(350);
                setYViewport(400);
            } else {
                setXViewport(0);
                setYViewport(0);
            }
        };

        calculateWidth();
    }, []);

    return (
        <Container ref={ref}>
            <XLLM>¿Sabías esto de los gatos?</XLLM>
            <SubContainer
                variants={variants}
                initial="hide"
                animate={inView ? "show" : "hide"}
            >
                {facts.map((fact, index) => (
                    <ContainerFact
                        key={index}
                        variants={{
                            hide: { x: 0, y: 0, opacity: 0 },
                            show: {
                                x:
                                    Math.cos(
                                        (index / facts.length) * 2 * Math.PI
                                    ) * xViewport,
                                y:
                                    Math.sin(
                                        (index / facts.length) * 2 * Math.PI
                                    ) * yViewport,
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
                    src={require("@assets/images/FunFact5.webp")}
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
    gap: 3rem;
    background: ${color.Cream};
    background: url(${ImageBackground});
    background-size: cover;
    background-position: center bottom;
    padding: 5% 0;
    text-align: center;

    @media (max-width: 1250px) {
        background: ${color.LightBeige};
        height: auto;
    }
`;

const SubContainer = styled(motion.ul)`
    position: relative;

    @media (max-width: 1250px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        width: 100%;
    }
`;

const Image = styled.img`
    position: relative !important;
    top: 5rem;
    left: 7rem;
    transform: translate(-60%, -50%);
    width: 15rem;
    margin-top: 20rem;
    filter: drop-shadow(1px 1px 20px ${color.Brown});

    @media (max-width: 1250px) {
        display: none;
    }
`;

const ContainerFact = styled(motion.li)`
    text-align: center;
    position: absolute;
    width: 25rem;
    top: 25rem;
    right: -5rem;
    list-style: none;

    @media (max-width: 1250px) {
        position: static;
        text-align: left;
        list-style: disc outside none;
    }

    @media (max-width: 1000px) {
        width: 90%;
    }
`;
