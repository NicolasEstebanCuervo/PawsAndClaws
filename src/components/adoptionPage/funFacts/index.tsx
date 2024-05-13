import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as color from "@theme/colors";
import { MM, XLLM } from "@theme/fonts";
import ImageBackground from "@assets/images/BgFunFactsAdoption.webp";
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
        "Los perros tienen un sentido del olfato muy agudo, siendo capaces de detectar olores hasta 100,000 veces mejor que los humanos.",
        "Los perros pueden ser entrenados para realizar una variedad de tareas, desde ayudar a personas con discapacidades hasta detectar drogas y explosivos.",
        "Los perros tienen una gran variedad de ladridos, gruñidos y otros sonidos que utilizan para comunicarse con otros perros y con los humanos.",
        "Los perros son excelentes compañeros de ejercicio y pueden motivar a las personas a mantenerse activas y saludables.",
        "Los perros pueden reconocer las emociones humanas y responder de manera empática, lo que los convierte en maravillosos animales de compañía.",
        "Los perros son conocidos por su lealtad hacia sus dueños y pueden formar vínculos muy fuertes con las personas que los cuidan.",
        "Los perros vienen en una gran variedad de razas, cada una con sus propias características físicas y comportamientos.",
        "Los perros pueden aprender rápidamente nuevos trucos y comandos, lo que los convierte en mascotas muy inteligentes y adaptables.",
    ];

    useEffect(() => {
        const calculateWidth = () => {
            if (document.documentElement.clientWidth > 1600) {
                setXViewport(500);
                setYViewport(350);
            } else if (
                document.documentElement.clientWidth <= 1600 &&
                document.documentElement.clientWidth > 1250
            ) {
                setXViewport(420);
                setYViewport(400);
            } else {
                setXViewport(0);
                setYViewport(0);
            }
        };

        calculateWidth();
    }, []);

    return (
        <Container ref={ref} data-testid="fun-facts-container">
            <XLLM>¿Sabías esto de los perros?</XLLM>
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
                    src={require("@assets/images/FunFact4.webp")}
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
    left: 11rem;
    transform: translate(-60%, -50%);
    width: 20rem;
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
    left: 0rem;
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
