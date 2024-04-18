import styled from "@emotion/styled";
import { LM, MM, SMM, XLM } from "../../../theme/fonts";
import NequiIcon from "../../../assets/icons/Nequi.svg";
import MasterCardIcon from "../../../assets/icons/MasterCard.svg";
import VisaIcon from "../../../assets/icons/Visa.svg";
import FireIcon from "../../../assets/icons/Fire.svg";
import ThunderIcon from "../../../assets/icons/Thunder.svg";
import * as color from "../../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { IProduct, setTotalPrice } from "../../../redux/reducers/productsSlice";
import { Link } from "react-router-dom";

export const CardPay = () => {
    const productsInTheCart = useSelector((state: any) => state.ProductSlice);

    const dispatch = useDispatch();

    let totalPrice = 0;

    productsInTheCart.productsInTheCart.forEach((product: IProduct) => {
        const price =
            parseFloat(
                (product.priceInfo?.currentPrice?.priceString).slice(1, 7)
            ) - 2;
        totalPrice += price * product.quantity;
    });

    dispatch(setTotalPrice(totalPrice));

    return (
        <SectionCardPay>
            {productsInTheCart.productsInTheCart >= 0 ? (
                <></>
            ) : (
                <SubContainerCardPay>
                    <FirstContainer>
                        <div>
                            <TitleCardPay>Paga tus productos</TitleCardPay>
                            <TextsPrices>
                                <MM>El total de tu compra es</MM>
                                <DolarSigno>
                                    $ {productsInTheCart.totalPrice.toFixed(2)}
                                </DolarSigno>
                            </TextsPrices>
                        </div>
                        <ContainerIcons>
                            <NequiIconImg src={NequiIcon} alt="" />
                            <MasterCardIconImg
                                src={MasterCardIcon}
                                alt="Icono de Mastercard"
                            />
                            <VisaIconImg src={VisaIcon} alt="" />
                        </ContainerIcons>
                    </FirstContainer>
                    <ContainerExtras>
                        <ContainerIndividualExtra>
                            <FireIconImg
                                src={FireIcon}
                                alt="Icono de una llama"
                            />
                            <ContainerTextsIndividualExtra>
                                <LM>Alimentación premium</LM>
                                <SMM>
                                    Productos de alta calidad para una nutrición
                                    óptima
                                </SMM>
                            </ContainerTextsIndividualExtra>
                        </ContainerIndividualExtra>

                        <ContainerIndividualExtra>
                            <ThunderIconImg
                                src={ThunderIcon}
                                alt="Icono de un trueno"
                            />
                            <ContainerTextsIndividualExtra>
                                <LM>Entrega rápida</LM>
                                <SMM>
                                    Recibe tus productos en tiempo récord para
                                    tu comodidad
                                </SMM>
                            </ContainerTextsIndividualExtra>
                        </ContainerIndividualExtra>
                    </ContainerExtras>

                    <LinkPay to="/FormPay">
                        <Button>Pagar</Button>
                    </LinkPay>
                </SubContainerCardPay>
            )}
        </SectionCardPay>
    );
};

const SectionCardPay = styled.section`
    display: flex;
    flex-direction: column;
`;

const SubContainerCardPay = styled.div`
    background: ${color.Cream};
    padding: 3rem;
    width: 100%;
    border-radius: 0.3rem;
`;

const FirstContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
`;

const TitleCardPay = styled(XLM)`
    font-weight: bold;
`;

const TextsPrices = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
`;

const DolarSigno = styled(MM)`
    font-weight: bold;
`;

const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
`;

const NequiIconImg = styled.img`
    width: 120px;
`;

const MasterCardIconImg = styled.img`
    width: 60px;
`;

const VisaIconImg = styled.img`
    width: 100px;
`;

const ContainerExtras = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
`;

const ContainerIndividualExtra = styled.div`
    display: flex;
    gap: 5%;
    width: 100%;
`;

const ThunderIconImg = styled.img`
    width: 50px;
`;

const FireIconImg = styled.img`
    width: 50px;
    padding: 5px;
`;

const ContainerTextsIndividualExtra = styled.div`
    display: flex;
    flex-direction: column;
`;

const LinkPay = styled(Link)`
    width: 100%;
`;

const Button = styled.button`
    border: none;
    border-radius: 0.3rem;
    width: 100%;
    height: 3.5rem;
    font-size: 1.1rem;
    background: ${color.Brown};
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }
`;
