import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { CardProductPay } from "../../componentsFormPayPage/cardProductPay";
import { IProduct } from "../../../redux/reducers/productsSlice";
import { SM, XLLM } from "../../../theme/fonts";
import { Link } from "react-router-dom";
import * as color from "../../../theme/colors";

export default function ListProductsPay() {
    const productsInTheCart = useSelector(
        (state: any) => state.ProductSlice.productsInTheCart
    );

    return (
        <SectionListProductsPay>
            {productsInTheCart >= 0 ? (
                <SectionVetContent>
                    <TextsVetContent>
                        <div>
                            <XLLM>¡Tu carrito está vacío!</XLLM>
                            <SM>
                                ¿Aún no has agregado productos? ¡No te
                                preocupes! Explora nuestra tienda y encuentra
                                todo lo que necesitas para consentir a tus
                                mascotas. Desde juguetes hasta alimentos y
                                accesorios, tenemos lo mejor para ellos. ¡Haz
                                que se sientan especiales ahora!
                            </SM>
                        </div>
                        <Link to="/store">
                            <Button>Explorar la Tienda</Button>
                        </Link>
                    </TextsVetContent>
                </SectionVetContent>
            ) : (
                <XLLM>Tus productos</XLLM>
            )}
            {productsInTheCart &&
                productsInTheCart.map((product: IProduct) => (
                    <CardProductPay
                        quantity={product.quantity}
                        product={product}
                        key={product.usItemId}
                    />
                ))}
        </SectionListProductsPay>
    );
}

const SectionListProductsPay = styled.section`
    display: flex;
    flex-direction: column;
    padding: 2% 0;
    gap: 2rem;
    width: 50%;
`;

const SectionVetContent = styled.section`
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 5rem;
    width: 100%;
    background: ${color.Cream};
    padding: 2rem 0;
    border-radius: 0.3rem;
`;

const TextsVetContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 70%;
    gap: 2rem;
`;

const Button = styled.button`
    background-color: ${color.Brown};
    border: none;
    border-radius: 0.3rem;
    width: 100%;
    font-size: 1rem;
    height: 3rem;
    padding: 0 2rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 0.9;
    }
`;
