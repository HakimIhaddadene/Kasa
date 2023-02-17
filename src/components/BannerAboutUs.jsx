import React from "react"
import styled from 'styled-components'
import banner from '../images/about/banner.jpg'

const BannerContainer = styled.div`
    width: 100%;
    margin-top: 30px;
	@media (max-width: 768px) {
	  width: 767px;
	}
`

const Pic = styled.img`
    width: 100%;
    border-radius: 25px;
	@media (max-width: 768px) {
	  height: 400px;
      object-fit: cover;
	}
`

function BannerAboutUs() {
    return (
        <BannerContainer>
            <Pic src={banner} alt="Montagnes" />
        </BannerContainer>
    )
}

export default BannerAboutUs;