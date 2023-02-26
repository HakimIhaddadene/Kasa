import React from "react"
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import logo from "../images/logo.png"
import { device } from '../device'

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
    align-items: center;	
    margin-top: 30px;
    @media ${device.mobileS} { 
        width: 90%;
    }
    @media ${device.mobileM} { 
        width: 80%;
    }
    @media ${device.mobileL} { 
        width: 70%;
    }
    @media ${device.laptop} { 
        width: 100%;
    }
    @media ${device.laptopL} { 
        width: 100%;
    }
`

const LogoHeader = styled.img`
    height: 68px;
    @media ${device.mobileS} { 
        height: 35px;
    }
    @media ${device.mobileM} { 
        height: 35px;
    }
    @media ${device.mobileL} { 
        height: 35px;
    }
    @media ${device.laptop} { 
        height: 55px;
    }
    @media ${device.laptopL} { 
        height: 68px;
    }
`

const LinkNav = styled.div`
    display: flex;
	color: #FF6060;   
    @media ${device.mobileS} { 
        font-size: 15px;
        margin-left: 20px;
    }
    @media ${device.mobileM} { 
        font-size: 15px;
        margin-left: 20px;
    }
    @media ${device.mobileL} { 
        font-size: 15px;
        margin-left: 20px;
    }
    @media ${device.laptop} { 
        font-size: 24px;
        margin-left: 50px;
    }
    @media ${device.laptopL} { 
        font-size: 24px;
        margin-left: 50px;
    }
`

function Header() {
    return (
        <header>
            <HeaderContainer>
            <NavLink to="/"><LogoHeader src={logo} alt="Logo de Kasa" /></NavLink>
                <nav>
                    <NavLink to="/"><LinkNav>Accueil</LinkNav></NavLink>
                    <NavLink to="/aboutus"><LinkNav>À propos</LinkNav></NavLink>
                </nav>
            </HeaderContainer>
        </header>
    )
}

export default Header;