import React from "react"
import styled from 'styled-components'
import logoFooter from "../images/logo-footer.png"
import { device } from '../device'

const FooterContainer = styled.div`
    background-color: #000000;
    color: #FFFFFF;
    margin: 50px 0 20px 0;
    text-align: center;
    padding: 50px 0 30px 0;	
    @media ${device.mobileS} { 
        width: 100%;
    }
    @media ${device.mobileM} { 
        width: 100%;
    }
    @media ${device.mobileL} { 
        width: 100%;
    }
    @media ${device.laptop} { 
        width: 100%;
    }
    @media ${device.laptopL} { 
        width: 100%;
    }
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