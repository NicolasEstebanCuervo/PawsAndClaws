import styled from "@emotion/styled";
import * as color from "../../../theme/colors"
import { MM } from "../../../theme/fonts";

function Footer () {
    return (
        <FooterContainer>
                <ImageLogo src={require("../../../assets/images/LogoLarge.webp")}>
                </ImageLogo>
                <MM colorText={color.White}>
                    &copy; {new Date().getFullYear()} Paws and Claws. All Rights Reserved.
                </MM>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${color.Green};
    padding: 5% 0;
    gap: 1rem;
    width: 100%;
`;

const ImageLogo = styled.img`
    width: 20rem;
`;
