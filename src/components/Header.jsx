import React from "react"
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import logo from "../images/logo.png"

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    align-items: center;
	@media (max-width: 768px) {
	  width: 767px;
	}
`

const LogoHeader = styled.img`
    height: 68px;
`

const LinkNav = styled.a`
    font-size: 24px;
	color: #FF6060;   
    margin-left: 50px;
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