import styled from "@emotion/styled";
import * as color from "../colors";
import { Nav } from "react-bootstrap";

export const SM = styled.p`
    font-size: 1rem;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};
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
    margin:0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.White}`};
`;
export const XLM = styled.h2`
    font-size: 2rem;
    margin:0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};
`;
export const XLLM = styled.h1`
    font-size: 3rem;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};
`;
export const XLLLM = styled.h1`
    font-size: 5rem;
    margin: 0;
    color: ${({ colorText }: { colorText?: string }) =>
        colorText ? `${colorText}` : `${color.Black}`};
`;
