import styled from "@emotion/styled";
import * as color from "@theme/colors"
import { MM } from "@theme/fonts";

export const Footer = () => {
    return (
        <FooterContainer>
                <Image src={require("@assets/images/LogoLarge.webp")}>
                </Image>
                <MM colorText={color.White}>
                    &copy; {new Date().getFullYear()} Paws and Claws. All Rights Reserved.
                </MM>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${color.Green};
    padding: 5% 0;
    gap: 1rem;
    width: 100%;
    text-align: center;
`;

const Image = styled.img`
    width: 20rem;

    @media (max-width: 450px) {
        width: 60%;
    }
`;
