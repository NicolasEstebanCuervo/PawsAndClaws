import styled from "@emotion/styled";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as color from "../../../theme/colors";
import { MM, XLLM } from "../../../theme/fonts";
import ImageBackground from "../../../assets/images/BackgroundFactsAdoption.png";

export const FunFactsAdoption = () => {
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
        "Los perros tienen un sentido del olfato muy agudo, siendo capaces de detectar olores hasta 100,000 veces mejor que los humanos.",
        "Los perros pueden ser entrenados para realizar una variedad de tareas, desde ayudar a personas con discapacidades hasta detectar drogas y explosivos.",
        "Los perros tienen una gran variedad de ladridos, gruñidos y otros sonidos que utilizan para comunicarse con otros perros y con los humanos.",
        "Los perros son excelentes compañeros de ejercicio y pueden motivar a las personas a mantenerse activas y saludables.",
        "Los perros pueden reconocer las emociones humanas y responder de manera empática, lo que los convierte en maravillosos animales de compañía.",
        "Los perros son conocidos por su lealtad hacia sus dueños y pueden formar vínculos muy fuertes con las personas que los cuidan.",
        "Los perros vienen en una gran variedad de razas, cada una con sus propias características físicas y comportamientos.",
        "Los perros pueden aprender rápidamente nuevos trucos y comandos, lo que los convierte en mascotas muy inteligentes y adaptables.",
    ];

    return (
        <SectionFunFacts ref={ref}>
            <XLLM>¿Sabías esto de los perros?</XLLM>
            <SubContainerFunFacts
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
                                        ) * 500,
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
                <ImagePet
                    src={require("../../../assets/images/FunFact4.webp")}
                    alt="Imagen de una mascota"
                />
            </SubContainerFunFacts>
        </SectionFunFacts>
    );
};

const SectionFunFacts = styled.section`
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

const SubContainerFunFacts = styled(motion.div)`
    position: relative;
`;

const ImagePet = styled.img`
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
