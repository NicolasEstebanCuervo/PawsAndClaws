import styled from "@emotion/styled";
import * as color from "../colors";
import { Nav } from "react-bootstrap";

export const SM = styled.p`
    font-size: 1rem;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};

    @media (max-width: 1600px) {
    }

    @media (max-width: 1150px) {
    }

    @media (max-width: 1000px) {
    }

    @media (max-width: 700px) {
    }

    @media (max-width: 450px) {
    }

    @media (max-width: 250px) {
    }
`;
export const SMM = styled.p`
    font-size: 1.1rem;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};
`;
export const MM = styled.h4`
    font-size: 1.2rem;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};
`;
export const LM = styled.h5`
    font-size: 1.5rem;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};
`;
export const MLM = styled(Nav.Link)`
    font-size: 1.2rem;
    text-decoration: none;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.White}`};
`;
export const XLM = styled.h2`
    font-size: 2rem;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};

    @media (max-width: 1600px) {
        font-size: 1.5rem;
    }

    @media (max-width: 1000px) {
        font-size: 1.3rem;
    }

    @media (max-width: 700px) {
        font-size: 1.1rem;
    }
`;
export const XLLM = styled.h1`
    font-size: 3rem;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};

    @media (max-width: 700px) {
        font-size: 2rem;
    }
`;
export const XLLLM = styled.h1`
    font-size: 5rem;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};

    @media (max-width: 1600px) {
        font-size: 3rem;
    }

    @media (max-width: 1000px) {
        font-size: 2.2rem;
    }

    @media (max-width: 700px) {
        font-size: 2rem;
    }

    @media (max-width: 450px) {
        font-size: 1.7rem;
    }
`;
