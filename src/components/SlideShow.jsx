import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import rightArrow from '../images/arrows/right-arrow-slide-show.png'
import leftArrow from '../images/arrows/left-arrow-slide-show.png'

const SlideShowContainer = styled.div`
width: 100%;
position: relative;
`

const Image = styled.img`
width: 100%;
height: 415px;
object-fit: cover;
border-radius: 25px;
`

const RightArrowContainer = styled.div`
display: flex;
position: absolute;
right: 10px;
top: 167px;
cursor: pointer;
background-color: transparent;
`

const LeftArrowContainer = styled.div`
display: flex;
position: absolute;
left: 10px;
top: 167px;
cursor: pointer;
background-color: transparent;
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
                    {numberOfPictures > 1 && (
                        <img src={rightArrow} alt="Image suivante" onClick={nextPicture} />
                    )}     
                </RightArrowContainer> 
                <LeftArrowContainer>       
                    {numberOfPictures > 1 && (
                        <img src={leftArrow} alt="Image précédente" onClick={previousPicture} />
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