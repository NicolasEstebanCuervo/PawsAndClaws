import styled from "@emotion/styled";
import { LM, SM, XLLM } from "../../../theme/fonts";

export const AboutUs = () => {
    return (
        <SectionAboutUs>
            <SubContainerAboutUs>
                <TitleAboutUs>Sobre nuestros principios</TitleAboutUs>

                <TextsAboutUs>
                    <CardTextsAboutUs>
                        <LM>Nuestra mision</LM>
                        <SM>
                            En nuestra veterinaria, nos dedicamos
                            apasionadamente a proporcionar atención médica
                            excepcional a todas las mascotas que llegan a
                            nuestras puertas. Nuestra misión es garantizar el
                            bienestar y la salud de cada animal que atendemos,
                            brindando servicios médicos de alta calidad con
                            compasión y dedicación. Creemos en la importancia de
                            fortalecer el vínculo entre las mascotas y sus
                            familias, promoviendo una vida feliz y saludable
                            para todos.{" "}
                        </SM>
                    </CardTextsAboutUs>

                    <CardTextsAboutUs>
                        <LM>Nuestra visión</LM>
                        <SM>
                            En un mundo en constante evolución, aspiramos a ser
                            líderes en la promoción del bienestar animal y la
                            construcción de una sociedad más compasiva y
                            consciente. Nuestra visión es crear un entorno donde
                            todas las formas de vida sean valoradas y
                            respetadas, y donde cada mascota reciba el amor y la
                            atención que merece. Deseamos ser un faro de
                            esperanza y compasión, inspirando a otros a unirse a
                            nosotros en nuestra misión de hacer del mundo un
                            lugar mejor para todos los seres vivos.{" "}
                        </SM>
                    </CardTextsAboutUs>

                    <CardTextsAboutUs>
                        <LM>Responsabilidad Social</LM>
                        <SM>
                            En nuestra veterinaria, entendemos la importancia de
                            retribuir a la comunidad y ayudar a aquellos que más
                            lo necesitan. Es por eso que nos comprometemos a
                            ofrecer nuestros servicios a animales callejeros y
                            refugios locales de forma regular. Además,
                            colaboramos estrechamente con organizaciones
                            benéficas dedicadas a la protección y el bienestar
                            animal. Creemos que al cuidar de los más vulnerables
                            entre nosotros, podemos crear un impacto positivo y
                            duradero en nuestra sociedad.{" "}
                        </SM>
                    </CardTextsAboutUs>

                    <CardTextsAboutUs>
                        <LM>Educación y Concientización</LM>
                        <SM>
                            Creemos firmemente en la importancia de la educación
                            y la concientización para promover el bienestar
                            animal y la tenencia responsable de mascotas. Por
                            eso, ofrecemos charlas educativas gratuitas para la
                            comunidad, donde compartimos información sobre la
                            salud y el cuidado adecuado de las mascotas. Además,
                            participamos activamente en campañas de
                            concientización sobre temas como la esterilización,
                            la adopción responsable y la prevención de
                            enfermedades.{" "}
                        </SM>
                    </CardTextsAboutUs>
                </TextsAboutUs>
            </SubContainerAboutUs>
        </SectionAboutUs>
    );
};

const SectionAboutUs = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 100%;
    gap: 3rem;
    margin-top: 10rem;
`;

const TitleAboutUs = styled(XLLM)`
    align-self: start;
`;

const SubContainerAboutUs = styled.div`
    width: 80%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextsAboutUs = styled.div`
    width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
`;

const CardTextsAboutUs = styled.div`
    width: 90%;
`;
