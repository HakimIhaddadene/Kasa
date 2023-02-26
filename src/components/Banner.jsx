import React from "react"
import styled from 'styled-components'
import { device } from '../device'

const BannerContainer = styled.div`
    width: 100%;
    height: 223px;
    position: relative;	
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.mobileS} { 
        width: 90%;
        margin-top: 30px;
    }
    @media ${device.mobileM} { 
        width: 80%;
        margin-top: 30px;
    }
    @media ${device.mobileL} { 
        width: 70%;
        margin-top: 30px;
    }
    @media ${device.laptop} { 
        width: 100%;
        margin-top: 50px;
    }
    @media ${device.laptopL} { 
        width: 100%;
        margin-top: 50px;
    }
`

const Pic = styled.img`
    width: 100%;
    height: 223px;
    position: absolute;
    object-fit: cover;
    border-radius: 25px;
`

const CardTitle = styled.h1`
    font-size: 48px;
    color: #FFFFFF;
    
    position: absolute;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Banner({picture, title}) {
    return (
        <BannerContainer>
            <Pic src={picture} alt="" />
            <CardTitle>{title}</CardTitle>
        </BannerContainer>
    )
}

export default Banner;