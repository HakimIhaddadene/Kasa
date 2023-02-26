import React from "react"
import styled from 'styled-components'
import banner from '../images/home/banner.png'
import { device } from '../device'

const BannerContainer = styled.div`
    width: 100%;
    height: 223px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
        ),url(${banner});
    border-radius: 25px;
    margin-top: 50px;	
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

const CardTitle = styled.h1`
    font-size: 48px;
    color: #FFFFFF;
`

function Banner() {
    return (
        <BannerContainer>
            <h1><CardTitle>Chez vous, partout et ailleurs</CardTitle></h1>
        </BannerContainer>
    )
}

export default Banner;