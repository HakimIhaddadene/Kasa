import React from "react"
import styled from 'styled-components'
import logoFooter from "../images/logo-footer.png"

const FooterContainer = styled.div`
    width: 100%;
    background-color: #000000;
    color: #FFFFFF;
    margin-top: 50px;
    text-align: center;
    padding: 50px 0 30px 0;
`

const LogoFooter = styled.img`
    height: 40px;
    margin-bottom: 30px;
`

function Footer() {
    return (
        <footer>
            <FooterContainer>
                <LogoFooter src={logoFooter} alt="Logo de Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </FooterContainer>
        </footer>
    )
}

export default Footer;