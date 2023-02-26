import React from "react"
import styled from 'styled-components'
import FullStar from '../images/stars/full-star.png'
import EmptyStar from '../images/stars/empty-star.png'
import { device } from '../device'

const RatingSystemContainer = styled.div`
    width: 100%;
    display: flex;
    @media ${device.mobileS} { 
        height: 15px;
        justify-content: start;
    }
    @media ${device.mobileM} { 
        height: 15px;
        justify-content: start;
    }
    @media ${device.mobileL} { 
        height: 15px;
        justify-content: start;
    }
    @media ${device.laptop} { 
        height: 30px;
        justify-content: end;
    }
    @media ${device.laptopL} { 
        height: 30px;
        justify-content: end;
    }
`

function RatingSystem({accommodationRating}) {
    const numberOfStars = [1, 2, 3, 4, 5];
    return (
        <RatingSystemContainer>
            {numberOfStars.map((stars) =>
				accommodationRating >= stars ? (
					<img key={stars} src={FullStar} alt={`${accommodationRating}/5`} />
				) : ( 
					<img key={stars} src={EmptyStar} alt={`${accommodationRating}/5`} />
				)
			)}
        </RatingSystemContainer>
    )
}

export default RatingSystem;