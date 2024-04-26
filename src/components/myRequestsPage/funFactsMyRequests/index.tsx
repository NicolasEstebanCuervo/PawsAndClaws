import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as color from "../../../theme/colors";
import { MM, XLLM } from "../../../theme/fonts";
import ImageBackground from "../../../assets/images/BgFunFactsMyRequests.webp";

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
        "Tanto los perros como los gatos son domesticados desde hace miles de años, convirtiéndolos en compañeros leales del ser humano.",
        "Los perros y los gatos tienen diferentes tipos de huellas digitales en sus almohadillas, lo que los hace únicos y fácilmente identificables.",
        "A pesar de ser depredadores naturales, algunos perros y gatos pueden llevarse sorprendentemente bien y formar vínculos de amistad duraderos.",
        "Tanto los perros como los gatos tienen una variedad de vocalizaciones para comunicarse, incluyendo maullidos, ladridos, ronroneos y gruñidos.",
        "Los perros y los gatos tienen sentidos agudos, como la vista y el oído, que les permiten percibir el mundo de manera única y especializada.",
        "Perros y gatos pueden proporcionar apoyo emocional a las personas y ayudar en terapias para mejorar la salud mental.",
        "Algunos perros y gatos son famosos en internet y en las redes sociales, ganando seguidores por su encanto y travesuras.",
        "Tanto los perros como los gatos disfrutan de la interacción social con humanos y otros animales, lo que los hace compañeros sociales ideales.",
        "Los perros y los gatos tienen habilidades de caza innatas, aunque la mayoría de las veces prefieren ser mimados por sus dueños.",
        "Los perros y los gatos pueden ser entrenados para realizar trucos y obedecer comandos, lo que demuestra su inteligencia y capacidad de aprendizaje."
    ];

    return (
        <Container ref={ref}>
            <XLLM>¿Sabías esto de los perros y gatos?</XLLM>
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
                    src={require("../../../assets/images/FunFact2.webp")}
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
