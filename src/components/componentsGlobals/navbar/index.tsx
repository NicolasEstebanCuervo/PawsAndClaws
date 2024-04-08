import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useRef, useState } from "react";
import * as color from "../../../theme/colors";
import { MLM } from "../../../theme/fonts";
import { useDisclosure } from "@chakra-ui/react";
import { Cart } from "./Cart";
import { isOmittedExpression } from "typescript";

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <NavSection>
            <NavBarContainer
                data-testid="nav-bar"
                expand="lg"
                data-bs-theme="dark"
            >
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav show "
                    onClick={handleClick}
                />

                <div className="container_nav">
                    <ImageLogo
                        className="imagen_logo"
                        onClick={() => {
                            window.location.href = `/`;
                        }}
                        src={require("../../../assets/images/Logo.webp")}
                    />
                </div>

                <Cart isOpen={isOpen} onClose={onClose} />

                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={`${isOpen ? "show" : ""}`}
                >
                    <LinksContainer className="mr-auto">
                        <MLM as={Link} to="/">
                            Inicio
                        </MLM>
                        <MLM as={Link} to="/adoption">
                            Adoptar
                        </MLM>
                        <CustomNavDropdown
                            title="Tienda"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdownItem  as={Link} to="/store" >
                                Tienda
                            </NavDropdownItem>
                            <NavDropdownItem onClick={onOpen}>
                                Mi carrito
                            </NavDropdownItem>
                        </CustomNavDropdown>

                        <MLM as={Link} to="/appointment">
                            Citas
                        </MLM>
                        <MLM as={Link} to="/requests">
                            Mis solicitudes
                        </MLM>
                    </LinksContainer>
                </Navbar.Collapse>
            </NavBarContainer>
        </NavSection>
    );
};

const NavSection = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
    align-items: center;
    background: ${color.Green};

    .dropdown-menu[data-bs-popper] {
        background: ${color.Green} !important;
    }

    .nav-link {
        color: ${color.White} !important;
    }
`;

const NavBarContainer = styled(Navbar)`
    width: 90%;
`;

const LinksContainer = styled(Nav)`
    display: flex;
    justify-content: end;
    width: 100%;
`;

const ImageLogo = styled.img`
    width: 4.5rem;
`;

const CustomNavDropdown = styled(NavDropdown)`
    font-size: 1.2rem;
    color: aqua !important;
`;

const NavDropdownItem = styled(NavDropdown.Item)`
    font-size: 1.2rem !important;
    padding: 0.5rem;
    color: ${color.White};
    transition: opacity 0.2s ease-in-out;

    :hover {
        background: transparent !important;
        opacity: 0.9;
    }
`;
