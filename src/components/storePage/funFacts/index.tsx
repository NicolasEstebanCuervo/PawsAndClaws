import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as color from "@theme/colors";
import { MM, XLLM } from "@theme/fonts";
import ImageBackground from "@assets/images//BgFunFactsStore.webp";

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
        "Algunos juguetes están diseñados para dispensar golosinas cuando el perro resuelve un rompecabezas.",
        "La comida deshidratada para perros conserva los nutrientes naturales de los ingredientes.",
        "Los accesorios de moda para perros, como collares, pueden tener beneficios prácticos, como aumentar la visibilidad durante paseos nocturnos.",
        "Las camas ortopédicas para perros proporcionan un soporte óptimo para las articulaciones y la columna vertebral de tu mascota.",
        "Existen juguetes especialmente diseñados con materiales duraderos y resistentes, como caucho natural o nylon, para perros más vigorosos.",
        "Hay una amplia gama de opciones de alimentos especializados para perros, desde alimentos hipoalergénicos hasta dietas específicas para perros mayores.",
        "Los juguetes interactivos para perros no solo mantienen a tu mascota entretenida, sino que también pueden ayudar a estimular su mente y reducir el aburrimiento.",
        "La ropa para perros puede ayudar a mantener caliente a tu mascota en climas fríos o protegerlo de la lluvia.",
        "Los collares equipados con luces LED aumentan la visibilidad durante paseos nocturnos, mejorando la seguridad de tu perro.",
        "Algunos perros mayores o con problemas de salud, como la artritis, se benefician de las camas ortopédicas que alivian la presión en sus articulaciones.",
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
                                        ) * 650,
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
                    src={require("@assets/images//FunFact3.webp")}
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
    left: 17rem;
    transform: translate(-60%, -50%);
    width: 30rem;
    margin-top: 20rem;
    filter: drop-shadow(1px 1px 20px ${color.Brown});
`;

const ContainerFact = styled(motion.div)`
    text-align: center;
    position: absolute;
    width: 25rem;
    top: 25rem;
    left: 5rem;
`;
