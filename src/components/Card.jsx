import React from "react"
import styled from 'styled-components'

const CardElement = styled.div`
    width: 350px;
    background: linear-gradient(180deg, #FF6060 0%, #A74141 100%);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 30px;
    padding-bottom: 15px;
    
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

const LinkTo = styled.a`
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