import React from "react"
import styled from 'styled-components'
import { device } from '../device'

const CardElement = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 30px;
    padding-bottom: 15px;
    background: linear-gradient(180deg, #FF6060 0%, #A74141 100%); 
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
        width: 300px;
    }
    @media ${device.laptopL} { 
        width: 350px;
    }
`

const CardImage = styled.div`
    width: 100%;
    height: 200px;
`

const Pic = styled.img`
    width: 94%;
    height: 100%;
    padding: 3%;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
`

const CardTitle = styled.div`
    width: 94%;
    margin: auto;
    margin-top: 20px;
`

const LinkTo = styled.div`
    font-size: 18px;
	color: #FFFFFF;   
`

function Card({ cover, title }) {
    return (
        
            <CardElement>
                <CardImage>
                    <Pic src={cover} alt="location" />
                </CardImage>
                <CardTitle>
                    <LinkTo>{title}</LinkTo>
                </CardTitle>
            </CardElement>
    )
}

export default Card;