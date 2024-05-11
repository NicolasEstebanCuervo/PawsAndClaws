import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import * as color from "@theme/colors";
import { MLM } from "@theme/fonts";
import { useDisclosure } from "@chakra-ui/react";
import { Cart } from "./Cart";

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <SectionNav data-testid="nav-bar">
            <SubContainerNav
                expand="lg"
                data-bs-theme="dark"
            >
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav show "
                    onClick={handleClick}
                />

                <div className="SubContainerNav_nav">
                    <Image
                        className="imagen_logo"
                        onClick={() => {
                            window.location.href = `/`;
                        }}
                        src={require("@assets/images/Logo.webp")}
                    />
                </div>

                <Cart isOpen={isOpen} onClose={onClose} />

                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={`${isOpen ? "show" : ""}`}
                >
                    <ContainerLinksNav className="mr-auto">
                        <MLM as={Link} to="/" data-testid="home-button">
                            Inicio
                        </MLM>
                        <MLM as={Link} to="/adoption" data-testid="adoption-button"> 
                            Adoptar
                        </MLM>
                        <CustomNavDropdown
                            title="Tienda"
                            id="basic-nav-dropdown"
                            data-testid="products-button"
                        >
                            <NavDropdownItem  as={Link} to="/products">
                                Tienda
                            </NavDropdownItem>
                            <NavDropdownItem onClick={onOpen}>
                                Mi carrito
                            </NavDropdownItem>
                        </CustomNavDropdown>

                        <MLM as={Link} to="/appointment" data-testid="appointment-button">
                            Citas
                        </MLM>
                        <MLM as={Link} to="/requests" data-testid="requests-button">
                            Mis solicitudes
                        </MLM>
                    </ContainerLinksNav>
                </Navbar.Collapse>
            </SubContainerNav>
        </SectionNav>
    );
};

const SectionNav = styled.nav`
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

const SubContainerNav = styled(Navbar)`
    width: 90%;
`;

const ContainerLinksNav = styled(Nav)`
    display: flex;
    justify-content: end;
    width: 100%;
`;

const Image = styled.img`
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