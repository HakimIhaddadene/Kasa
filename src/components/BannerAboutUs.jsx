import React from "react"
import styled from 'styled-components'
import banner from '../images/about/banner.jpg'

const BannerContainer = styled.div`
    width: 100%;
    margin-top: 30px;
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