import styled from "@emotion/styled";
import { XLLM } from "../../../theme/fonts";
import { CardProduct } from "../../componentsGlobals/cardProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IProduct, setProducts } from "../../../redux/reducers/productsSlice";
import { FetchProducts } from "../../../redux/Api";
import * as color from "../../../theme/colors";

export const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.ProductSlice);

    let numRandomA = 0;

    useEffect(() => {
        const fetchData = async () => {
            const data = await FetchProducts("food%20dogs%20cats");
            dispatch(setProducts(data));
        };
        fetchData();

        numRandomA = Math.floor(Math.random() * 27);
    }, []);

    const productsMap = products.products[0];

    return (
        <SectionProducts>
            <XLLM>Explora nuestra tienda en línea</XLLM>
            <SubContainerProducts>
                {productsMap &&
                    productsMap
                        .slice(numRandomA, numRandomA + 4)
                        .map((product: IProduct, index: number) => (
                            <CardProduct product={product} key={index} />
                        ))}
            </SubContainerProducts>
        </SectionProducts>
    );
};

const SectionProducts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    gap: 3rem;
    margin-top: 10rem;
    padding: 5rem 0;
    background: ${color.Cream};
`;
const SubContainerProducts = styled.div`
    display: flex;
    gap: 2rem;
`;
