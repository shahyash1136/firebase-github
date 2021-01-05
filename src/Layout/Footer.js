import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Container fluid tag="footer" className="text-center bg-info text-white text-uppercase fixed-bottom p-3">
            {year} &copy; github search app with firebase
        </Container>
    )
}

export default Footer;