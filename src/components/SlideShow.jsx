import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import rightArrow from '../images/arrows/right-arrow-slide-show.png'
import leftArrow from '../images/arrows/left-arrow-slide-show.png'
import { device } from '../device'

const SlideShowContainer = styled.div`
position: relative;
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

const Image = styled.img`
width: 100%;
object-fit: cover;
border-radius: 25px;
@media ${device.mobileS} { 
    height: 255px;
}
@media ${device.mobileM} { 
    height: 255px;
}
@media ${device.mobileL} { 
    height: 255px;
}
@media ${device.laptop} { 
    height: 415px;
}
@media ${device.laptopL} { 
    height: 415px;
}
`

const RightArrowContainer = styled.div`
display: flex;
position: absolute;
right: 10px;
cursor: pointer;
background-color: transparent;
@media ${device.mobileS} { 
    top: 87px;
}
@media ${device.mobileM} { 
    top: 87px;
}
@media ${device.mobileL} { 
    top: 87px;
}
@media ${device.laptop} { 
    top: 167px;
}
@media ${device.laptopL} { 
    top: 167px;
}
`

const LeftArrowContainer = styled.div`
display: flex;
position: absolute;
left: 10px;
cursor: pointer;
background-color: transparent;
@media ${device.mobileS} { 
    top: 87px;
}
@media ${device.mobileM} { 
    top: 87px;
}
@media ${device.mobileL} { 
    top: 87px;
}
@media ${device.laptop} { 
    top: 167px;
}
@media ${device.laptopL} { 
    top: 167px;
}
`

function SlideShow({pics}) {

    const [picture, setPicture] = useState(0);
    const numberOfPictures = pics.length;

    const nextPicture = () => {
        setPicture(picture === numberOfPictures - 1 ? 0 : picture + 1);
    };

    const previousPicture = () => {
        setPicture(picture === 0 ? numberOfPictures - 1 : picture - 1);
    };  

    return (
        <div>
            <SlideShowContainer>
                <RightArrowContainer>                
                    {numberOfPictures > 1 && (  // Affichage des flèches uniquement si numberOfPictures > 1
                        <img src={rightArrow} alt="Suivante" onClick={nextPicture} />
                    )}     
                </RightArrowContainer> 
                <LeftArrowContainer>       
                    {numberOfPictures > 1 && (
                        <img src={leftArrow} alt="Précédente" onClick={previousPicture} />
                    )}
                </LeftArrowContainer>
                {pics.map((image, index) => {
                    return (
                    <div key={index}>
                        {index === picture && (
                        <Image img src={image} alt="#" />    
                        )}
                    </div>
                    );
                })}   
            </SlideShowContainer>
        </div>
    )
}

export default SlideShow;