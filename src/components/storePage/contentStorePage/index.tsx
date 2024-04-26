import styled from "@emotion/styled";
import { LM, SM, XLLM } from "../../../theme/fonts";
import * as color from "../../../theme/colors"

export const ContenStore= () => {
    return (
        <SectionCategory>
        <XLLM>Confía en Nosotros para el Cuidado de tu Mascota</XLLM>
        <SubContainerCategory>
            <CardCategory>
                <IconCategory className="bi bi-truck"></IconCategory>
                <div>
                    <LM>Entrega Rápida</LM>
                    <SM>
                        ¡Tu tiempo es valioso! En Paws and Claws, entendemos la importancia de recibir los productos y servicios para tu mascota sin demoras. Nuestro servicio de entrega rápida garantiza que recibas tus pedidos en el menor tiempo posible, para que puedas disfrutar de la comodidad de cuidar a tu mascota sin complicaciones.
                    </SM>
                </div>
            </CardCategory>
    
            <CardCategory>
                <IconCategory className="bi bi-check2-circle"></IconCategory>
                <div>
                    <LM>Productos de Calidad</LM>
                    <SM>
                        Tu mascota merece lo mejor, y en Paws and Claws nos aseguramos de ofrecerte solo productos de la más alta calidad. Trabajamos con marcas reconocidas y probadas en el mercado, seleccionando cuidadosamente cada artículo para garantizar la salud, seguridad y felicidad de tu compañero peludo.
                    </SM>
                </div>
            </CardCategory>
    
            <CardCategory>
                <IconCategory className="bi bi-shield-check"></IconCategory>
                <div>
                    <LM>Confianza y Seguridad</LM>
                    <SM>
                        En Paws and Claws, nos tomamos muy en serio la confianza que depositas en nosotros para el cuidado de tu mascota. Nuestro compromiso es brindarte un servicio confiable y transparente, donde cada producto y consulta veterinaria estén respaldados por nuestra dedicación a la excelencia y al bienestar animal.
                    </SM>
                </div>
            </CardCategory>
        </SubContainerCategory>
    </SectionCategory>
    );
};

const SectionCategory = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 3rem;  
    padding: 10rem 0;
    background: ${color.Cream};
`;

const SubContainerCategory = styled.div`
    display: flex;
`;

const CardCategory = styled.div`
    display: flex;
    gap: 1rem;
    padding: 0 1rem;
    width: 28rem;
`;

const IconCategory = styled.i`
    font-size: 2.2rem;
`;
