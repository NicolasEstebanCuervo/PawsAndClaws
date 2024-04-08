import styled from "@emotion/styled";
import * as color from "../../../theme/colors";
import { LM, SM, XLLLM } from "../../../theme/fonts";

export const ReviewsPawsAndClaws = () => {
    return (
        <SectionReviews>

            <TitleReviews>Que dicen nuestros clientes</TitleReviews>

            <SubContainerReviews>
                <IndividualReview>
                    <SM>
                        Como amante de los animales, siempre busco lo mejor para
                        mis mascotas. Paws and Claws ha sido mi elección desde
                        hace años, y cada visita confirma por qué. El equipo
                        siempre muestra un cuidado excepcional hacia mis peludos
                        amigos, brindando atención médica de alta calidad y un
                        trato amable que me hace sentir en familia. Recomiendo
                        encarecidamente esta veterinaria a todos los dueños de
                        mascotas que deseen lo mejor para sus compañeros de
                        cuatro patas.
                    </SM>
                    <ContainerInformationPerson>
                        <PersonImage
                            src="https://api.dicebear.com/8.x/adventurer/svg?seed=Casper"
                            alt=""
                        />
                        <div>
                            <LM>Laura Gómez</LM>
                            <SM colorText={color.LightGray2}>
                                Cliente satisfecho
                            </SM>
                        </div>
                    </ContainerInformationPerson>
                </IndividualReview>

                <IndividualReview>
                    <SM>
                        Recientemente me mudé a la ciudad y estaba buscando una
                        veterinaria de confianza para mi perro. Paws and Claws
                        fue la elección perfecta. Desde el primer momento, me
                        recibieron con calidez y profesionalismo, y mi perro se
                        sintió cómodo de inmediato. El equipo médico demostró un
                        profundo conocimiento y cuidado por los animales, y me
                        brindaron asesoramiento personalizado para el cuidado de
                        mi mascota. Estoy muy contento con el servicio y
                        definitivamente seguiré trayendo a mi perro aquí.
                    </SM>
                    <ContainerInformationPerson>
                        <PersonImage
                            src="https://api.dicebear.com/8.x/adventurer/svg?seed=Coco"
                            alt=""
                        />
                        <div>
                            <LM>Juan Pérez</LM>
                            <SM colorText={color.LightGray2}>Nuevo cliente</SM>
                        </div>
                    </ContainerInformationPerson>
                </IndividualReview>

                <IndividualReview>
                    <SM>
                        Como defensor de los derechos de los animales, siempre
                        busco apoyar negocios que demuestran un compromiso
                        genuino con el bienestar de las mascotas. Paws and Claws
                        es una de esas veterinarias. Además de ofrecer servicios
                        médicos excelentes, esta clínica también participa
                        activamente en programas de rescate y adopción, lo que
                        demuestra su verdadera pasión por los animales. Estoy
                        orgulloso de confiar en ellos para el cuidado de mis
                        mascotas y recomendaría esta veterinaria a cualquier
                        amante de los animales.
                    </SM>
                    <ContainerInformationPerson>
                        <PersonImage
                            src="https://api.dicebear.com/8.x/adventurer/svg?seed=Angel"
                            alt=""
                        />
                        <div>
                            <LM>Carlos Gómez</LM>
                            <SM colorText={color.LightGray2}>
                                Amante de los animales
                            </SM>
                        </div>
                    </ContainerInformationPerson>
                </IndividualReview>

                <IndividualReview>
                    <SM>
                        Llevo años confiando en Paws and Claws para el cuidado
                        de mis mascotas, y nunca me han decepcionado. Además de
                        ofrecer servicios médicos de primera calidad, el equipo
                        siempre está dispuesto a escuchar mis preocupaciones y
                        responder a mis preguntas con paciencia y claridad. Me
                        encanta la atención personalizada que reciben mis
                        mascotas y el ambiente acogedor de la clínica.
                        Definitivamente, esta es la mejor veterinaria de la
                        ciudad.
                    </SM>
                    <ContainerInformationPerson>
                        <PersonImage
                            src="https://api.dicebear.com/8.x/adventurer/svg?seed=Boots"
                            alt=""
                        />
                        <div>
                            <LM>Ana Martínez</LM>
                            <SM colorText={color.LightGray2}>
                                Cliente habitual
                            </SM>
                        </div>
                    </ContainerInformationPerson>
                </IndividualReview>


            </SubContainerReviews>
        </SectionReviews>
    );
};

const SectionReviews = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${color.LightBeige};
    padding: 5rem;
    gap: 2rem;
    margin-top: 5rem;
`;

const TitleReviews = styled(XLLLM)`
    font-weight: bold;
`

const SubContainerReviews = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 3rem;
`;

const IndividualReview = styled.section`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 20%;
    gap: 2rem;
    border-radius: 0.3rem;
    background: ${color.White};
`;

const ContainerInformationPerson = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PersonImage = styled.img`
    width: 7rem;
    background: ${color.LightGray};
    border-radius: 100%;
`;
