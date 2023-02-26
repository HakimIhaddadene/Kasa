import React from "react"
import styled from 'styled-components'
import banner from '../images/about/banner.jpg'
import { device } from '../device'

const BannerContainer = styled.div`
    width: 100%;
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

const Pic = styled.img`
    width: 100%;
    border-radius: 25px;
`

function BannerAboutUs() {
    return (
        <BannerContainer>
            <Pic src={banner} alt="Montagnes" />
        </BannerContainer>
    )
}

export default BannerAboutUs;