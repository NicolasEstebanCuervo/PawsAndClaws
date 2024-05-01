import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as color from "@theme/colors";
import { MM, XLLM } from "@theme/fonts";
import ImageBackground from "@assets/images//BgFunFactsIndex.webp";

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
        "Los gatos tienen un sentido del olfato muy agudo, siendo capaces de detectar olores hasta 14 veces mejor que los humanos.",
        "Los gatos tienen la habilidad de enderezar su cuerpo durante una caída desde una gran altura, lo que les permite aterrizar en sus patas. Esto se conoce como el 'reflejo de enderezamiento'.",
        "Los gatos pueden dormir hasta 16 horas al día, pero esta cantidad varía según la edad y el nivel de actividad del gato.",
        "La pupila vertical de los gatos les permite una mejor visión nocturna y la capacidad de percibir movimientos rápidos con mayor claridad.",
        "Los gatos tienen un tercer párpado llamado 'membrana nictitante' que les protege los ojos y ayuda a mantenerlos lubricados.",
        "Algunos gatos tienen la capacidad de caminar en una superficie muy estrecha, como una barandilla o un alféizar, gracias a su extraordinario equilibrio.",
        "Los gatos tienen glándulas odoríferas en varias partes de su cuerpo, incluyendo la barbilla, la frente y las patas, que utilizan para marcar su territorio.",
        "Los gatos son conocidos por su agilidad y capacidad de saltar. Pueden saltar hasta seis veces la longitud de su cuerpo en un solo salto.",
    ];

    return (
        <Container ref={ref}>
            <XLLM>¿Sabías esto de los gatos?</XLLM>
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
                <Image
                    src={require("@assets/images//FunFact1.webp")}
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
    left: 7rem;
    transform: translate(-60%, -50%);
    width: 15rem;
    margin-top: 20rem;
    filter: drop-shadow(1px 1px 20px ${color.Brown});
`;

const ContainerFact = styled(motion.div)`
    text-align: center;
    position: absolute;
    width: 25rem;
    top: 25rem;
    right: -5rem;
`;